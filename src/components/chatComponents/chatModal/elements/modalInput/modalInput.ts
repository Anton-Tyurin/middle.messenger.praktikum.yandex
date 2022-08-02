import { v4 as uuidv4 } from 'uuid';
import { Block } from '../../../../../core/Block';
import { modal_input_template } from './modalInput.template';

export class ModalInput extends Block {
  constructor(context: {}, events = {}) {
    super('div', {
      context: {
        ...context,
        id: uuidv4()
      },
      template: modal_input_template,
      events
    });
  }
}
