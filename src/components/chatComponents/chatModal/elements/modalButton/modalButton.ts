import { v4 as uuidv4 } from 'uuid';
import { Block } from '../../../../../core/Block';
import { modal_button_template } from './modalButton.template';

export class ModalButton extends Block {
  constructor(context: {}, events = {}) {
    super('div', {
      context: {
        ...context,
        id: uuidv4()
      },
      template: modal_button_template,
      events
    });
  }
}
