import { v4 as uuidv4 } from 'uuid';
import { Block } from '../../../../../core/Block';
import { ModalInputTemplate } from './modalInput.template';

export class ModalInput extends Block {
  constructor(context: {inputId?: string, placeholder: string}, events = {}) {
    super('div', {
      context: {
        ...context,
        id: uuidv4()
      },
      template: ModalInputTemplate,
      events
    });
  }
}
