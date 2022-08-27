import * as Handlebars from 'handlebars';
import { MainChatTemplate } from './mainChat.template';
import {
  ChatAside,
  emptyChatBlock,
  chatActiveBlock
} from '../../../components/chatComponents';
import { TMainChat } from '../../../types/pages';
import { Routes } from '../../../constants/routes';
import { Block } from '../../../core/Block';
import {
  closeModal,
  createChatButton,
  createNewChat,
  getListItems
} from './utils';
import {
  ChatModal,
  ModalButton,
  ModalInput
} from '../../../components/chatComponents/chatModal/elements';

function mainChatTemplate() {
  const { pathname } = window.location;
  const chatMessageBlock = pathname === Routes.MAIN_CHAT_ACTIVE_DIALOG
    ? chatActiveBlock
    : emptyChatBlock;

  const template = Handlebars.compile(MainChatTemplate);
  const chatAside = new ChatAside({
    listItems: getListItems(),
    createChatButton: createChatButton().transformToString()
  });
  const context: TMainChat = {
    chatAside: chatAside.transformToString(),
    chatMessageBlock,
    createChatModal: new ChatModal(
      {
        chatModalInput: new ModalInput({
          placeholder: 'Введите название нового чата',
          inputId: 'createChatInput'
        }).transformToString(),
        chatModalOkButton: new ModalButton(
          { buttonText: 'Создать' },
          { click: () => createNewChat() }
        ).transformToString(),
        chatModalCancelButton: new ModalButton(
          { buttonText: 'Отмена' },
          { click: () => closeModal() }
        ).transformToString(),
        modalClassName: 'createChatModal'
      },
      {}
    ).transformToString()
  };
  return template(context);
}

export class MainChatPage extends Block {
  constructor(context: any, events = {}) {
    super('div', {
      context: {
        ...context
      },
      template: mainChatTemplate(),
      events
    });
  }
}
