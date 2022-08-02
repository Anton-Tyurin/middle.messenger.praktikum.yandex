import { chat_aside_template } from './chatAside.template';
import { Block } from '../../../core/Block';
import { ChatProfileLink } from '../../links';
import { ChatInput } from '../../inputs';
import { router } from '../../../router';
import { ROUTES } from '../../../constants/routes';

export class ChatAside extends Block {
  constructor(context: any, events = {}) {
    super('div', {
      context: {
        ...context,
        chatProfileLink: new ChatProfileLink({ linkText: 'Профиль' }, {
          click: () => {
            router.go(ROUTES.PROFILE);
          }
        }).transformToString(),
        searchInput: new ChatInput({ label: 'Поиск', chatInputClass: 'chatSearchInput', chatInputWrapperClass: 'chatSearchInputWrapper' }).transformToString()
      },
      template: chat_aside_template,
      events
    });
  }
}
