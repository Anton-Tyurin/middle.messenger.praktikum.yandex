import { Block } from '../../core/Block';
import { TAsideBacklink } from '../../types/components';
import { aside_backlink_template } from './asideBacklink.template';

export class AsideBacklink extends Block {
  constructor(context: TAsideBacklink, events = {}) {
    super('div', {
      context: {
        ...context
      },
      template: aside_backlink_template,
      events
    });
  }
}
