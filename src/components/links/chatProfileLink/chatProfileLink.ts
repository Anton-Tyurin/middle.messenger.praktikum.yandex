import { v4 as uuidv4 } from 'uuid';
import { Block } from '../../../core/Block';
import { TLink } from '../../../types/components';
import { ChatProfileLinkTemplate } from './chatProfileLink.template';

export class ChatProfileLink extends Block {
  constructor(context: TLink, events = {}) {
    super('div', {
      context: {
        ...context,
        id: uuidv4()
      },
      template: ChatProfileLinkTemplate,
      events
    });
  }
}
