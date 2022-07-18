import { v4 as uuidv4 } from 'uuid';
import { Block } from '../../../core/Block';
import { chat_list_item_template } from './chatListItem.template';
import { TChatListItem } from '../../../types/components';

export class ChatListItem extends Block {
  constructor(context: TChatListItem, events = {}) {
    super('div', {
      context: {
        ...context,
        id: uuidv4()
      },
      template: chat_list_item_template,
      events
    });
  }
}
