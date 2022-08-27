import { v4 as uuidv4 } from 'uuid';
import { Block } from '../../../core/Block';
import { ChatListItemTemplate } from './chatListItem.template';
import { TChatData } from '../../../constants/api/chatApi';

export class ChatListItem extends Block {
  constructor(context: TChatData, events = {}) {
    super('div', {
      context: {
        ...context,
        id: uuidv4()
      },
      template: ChatListItemTemplate,
      events
    });
  }
}
