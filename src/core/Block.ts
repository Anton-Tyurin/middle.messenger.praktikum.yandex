import * as Handlebars from 'handlebars';
import EventBus from './EventBus';
import { Dictionary, TBlockProps, TMetaBlock } from '../types/core';
import { EVENTS, HAS_NO_RIGHTS } from '../constants/core';

export class Block {
  private _element: HTMLElement;

  private _elementId: string;

  private _meta: TMetaBlock;

  protected props: TBlockProps;

  private eventBus: EventBus;

  protected _template: Handlebars.TemplateDelegate<any>;

  /*eslint-disable */
  constructor(tagName: string = "div", props = {}, className?: string) {
    /* eslint-enable */
    this._meta = {
      tagName,
      props,
      className
    };

    this.props = this._makePropsProxy(props);

    const { template } = this.props;
    this._template = Handlebars.compile(template);

    this.eventBus = new EventBus();
    this._registerEvents(this.eventBus);
    this.eventBus.emit(EVENTS.INIT);
  }

  _registerEvents(eventBus: EventBus) {
    eventBus.on(EVENTS.INIT, this.init.bind(this));
    eventBus.on(EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  _createResources() {
    const { tagName, className } = this._meta;
    this._element = this._createDocumentElement(tagName, className);
  }

  init() {
    this._createResources();
    this.eventBus.emit(EVENTS.FLOW_RENDER);
  }

  _componentDidMount() {
    this.componentDidMount();
  }

  componentDidMount() {}

  _componentDidUpdate(oldProps: Dictionary, newProps: Dictionary) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (!response) {
      return;
    }
    this.eventBus.emit(EVENTS.FLOW_RENDER);
  }

  componentDidUpdate(oldProps: Dictionary, newProps: Dictionary) {
    return JSON.stringify(newProps) !== JSON.stringify(oldProps);
  }

  setProps = (nextProps: Dictionary) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element() {
    return this._element;
  }

  _render() {
    const { context } = this.props;
    this._elementId = context && context.id;
    const block = this.render();
    if (block) {
      const isElementExist = this._element?.firstElementChild !== null;
      if (isElementExist) {
        this._element.firstElementChild?.replaceWith(block);
      } else {
        this._element.appendChild(block);
      }
    }

    this.eventBus.emit(EVENTS.FLOW_CDM);
    this._addEventListeners();
  }

  render() {
    const container = document.createElement('div');
    const { context } = this.props;
    container.innerHTML = this._template(context);
    return container.firstElementChild;
  }

  _makePropsProxy(props: Record<string, any>) {
    return new Proxy(props, {
      get: (target, prop: string) => {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set: (target, prop: string, value: unknown) => {
        target[prop] = value;
        this.eventBus.emit(EVENTS.FLOW_CDU, { ...target }, target);
        return true;
      },
      deleteProperty: () => {
        throw new Error(HAS_NO_RIGHTS);
      }
    });
  }

  private _createDocumentElement(tagName: string, classNames?: string) {
    const node = document.createElement(tagName);
    if (classNames) {
      /*eslint-disable */
      for (const className of classNames.split(" ")) {
        node.classList.add(className);
      }
      /* eslint-enable */
    }
    return node;
  }

  _triggerEvent(event: Event, func: Function) {
    const target = event.target as HTMLElement;
    const id = target.getAttribute('data-id');
    if (target && this._elementId === id) {
      event.preventDefault();
      func.call(this, event);
    }
  }

  _addEventListeners() {
    const { events = {} } = this.props;
    Object.keys(events).forEach((event) => {
      const root = document.querySelector('#root') as HTMLElement;
      root.addEventListener(
        event,
        (e: Event) => {
          this._triggerEvent(e, events[event]);
        },
        true
      );
    });
  }

  _removeEventListeners() {
    const { events = {} } = this.props;
    Object.keys(events).forEach((event) => {
      const root = document.querySelector('#root') as HTMLElement;
      root.removeEventListener(event, (e: Event) => {
        this._triggerEvent(e, events[event]);
      });
    });
  }

  transformToString(): string {
    const container = document.createElement('div');
    container.appendChild(this.element);
    return container.innerHTML;
  }

  show() {
    this.element?.classList.remove('hidden');
  }

  hide() {
    this.element?.classList.add('hidden');
  }

  remove() {
    this._element.remove();
  }
}
