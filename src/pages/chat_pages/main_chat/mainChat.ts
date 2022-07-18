import * as Handlebars from 'handlebars';
import { main_chat_template } from './mainChat.template';
import { ChatAside, chatSelected, emptyChatBlock } from '../../../components/chatComponents';
import { TMainChat } from '../../../types/pages';
import { ROUTES } from '../../../constants/routes';

export function mainChat() {
  const { pathname } = window.location;
  const chatMessageBlock = pathname === ROUTES.MAIN_CHAT_ACTIVE_DIALOG ? chatSelected : emptyChatBlock;

  const template = Handlebars.compile(main_chat_template);
  const chatAside = new ChatAside({});
  const context: TMainChat = {
    chatAside: chatAside.transformToString(),
    chatMessageBlock
  };
  return template(context);
}
