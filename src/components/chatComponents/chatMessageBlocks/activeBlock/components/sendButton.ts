import { v4 as uuidv4 } from 'uuid';
import { send_button_template } from './sendButton.template';
import { Block } from '../../../../../core/Block';

export class SendButton extends Block {
  constructor(context: {}, events = {}) {
    super('div', {
      context: {
        ...context,
        id: uuidv4()
      },
      template: send_button_template,
      events
    });
  }
}
