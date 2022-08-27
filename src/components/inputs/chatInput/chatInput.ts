import { v4 as uuidv4 } from 'uuid';
import { Block } from '../../../core/Block';
import { TInputChats } from '../../../types/components';
import { ChatInputTemplate } from './chatInput.template';

export class ChatInput extends Block {
  constructor(context: TInputChats, events = {}) {
    super('div', {
      context: {
        ...context,
        id: context.id || uuidv4()
      },
      template: ChatInputTemplate,
      events
    });
  }
}
