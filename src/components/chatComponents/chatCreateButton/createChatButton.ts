import { v4 as uuidv4 } from 'uuid';
import { Block } from '../../../core/Block';
import { create_chat_button_template } from './createChatButton.template';

export class CreateChatButton extends Block {
  constructor(context: {}, events = {}) {
    super('div', {
      context: {
        ...context,
        id: uuidv4()
      },
      template: create_chat_button_template,
      events
    });
  }
}
