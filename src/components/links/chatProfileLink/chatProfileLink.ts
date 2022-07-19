import { Block } from '../../../core/Block';
import { TLink } from '../../../types/components';
import { chat_profile_link_template } from './chatProfileLink.template';

export class ChatProfileLink extends Block {
  constructor(context: TLink, events = {}) {
    super('div', {
      context: {
        ...context
      },
      template: chat_profile_link_template,
      events
    });
  }
}
