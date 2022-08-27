import { v4 as uuidv4 } from 'uuid';
import { Block } from '../../../core/Block';
import { CreateChatButtonTemplate } from './createChatButton.template';

export class CreateChatButton extends Block {
  constructor(context: {buttonText: string}, events: {click?: () => void} = {}) {
    super('div', {
      context: {
        ...context,
        id: uuidv4()
      },
      template: CreateChatButtonTemplate,
      events
    });
  }
}
