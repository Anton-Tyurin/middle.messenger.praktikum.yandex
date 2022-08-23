import { ChatAsideTemplate } from './chatAside.template';
import { Block } from '../../../core/Block';
import { ChatProfileLink } from '../../links';
import { ChatInput } from '../../inputs';
import { router } from '../../../router';
import { Routes } from '../../../constants/routes';

export class ChatAside extends Block {
  constructor(context: any, events = {}) {
    super('div', {
      context: {
        ...context,
        chatProfileLink: new ChatProfileLink(
          { linkText: 'Профиль' },
          {
            click: () => {
              router.go(Routes.PROFILE);
            }
          }
        ).transformToString(),
        searchInput: new ChatInput({
          label: 'Поиск',
          chatInputClass: 'chatSearchInput',
          chatInputWrapperClass: 'chatSearchInputWrapper'
        }).transformToString()
      },
      template: ChatAsideTemplate,
      events
    });
  }
}
