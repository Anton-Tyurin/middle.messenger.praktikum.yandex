import * as Handlebars from 'handlebars';
import { ChatInput } from '../../../inputs';
import { ActiveBlockTemplate } from './activeBlock.template';
import { createChatWebSocket } from '../../../../controllers/chatWebSocket';
import {
  addUsersToChat,
  closeUserModal,
  getDataFromChat,
  openMessagesSocket,
  handleMessages,
  removeUsersFromChat,
  sendMessage,
  showUserModal
} from './utils';
import { checkValidation } from '../../../../core/validate';
import { ChatModal, ModalButton, ModalInput } from '../../chatModal/elements';
import { CreateChatButton } from '../../chatCreateButton';
import { SendButton } from './components';
import store from '../../../../store';
import { router } from '../../../../router';
import { Routes } from '../../../../constants/routes';

const avatarEmpty = require('../../../../../static/img/avatar/avatarEmpty.svg') as string;
const addFile = require('../../../../../static/img/addFile/addFile.svg') as string;
const chatParameters = require('../../../../../static/img/chatParameters/chatParameters.svg') as string;
const forwardLink = require('../../../../../static/img/forwardLink/forwardLink.svg') as string;

export function chatActiveBlock() {
  const template = Handlebars.compile(ActiveBlockTemplate);

  const wsParamsString = localStorage.getItem('wsParams');
  let wsParams;
  if (wsParamsString) {
    wsParams = JSON.parse(wsParamsString);
  }
  const socket = createChatWebSocket(wsParams, handleMessages);

  openMessagesSocket(socket);

  const currentChatId = localStorage.getItem('currentChat');

  const message = new ChatInput(
    {
      label: 'Сообщение',
      chatInputWrapperClass: 'chatMessageInputWrapper',
      chatInputClass: 'chatMessageInput',
      id: 'messageInput'
    },
    {
      focus: (event: Event) => {
        checkValidation({ event });
      },
      blur: (event: Event) => {
        checkValidation({ event });
      }
    }
  );

  const addUserModalButton = new CreateChatButton(
    {
      buttonText: 'Добавить пользователя'
    },
    {
      click: () => {
        showUserModal('addUsersModal');
      }
    }
  ).transformToString();

  const deleteUserModalButton = new CreateChatButton(
    {
      buttonText: 'Удалить пользователя'
    },
    {
      click: () => {
        showUserModal('deleteUsersModal');
      }
    }
  ).transformToString();

  const context = {
    avatarEmpty,
    addFile,
    addUserModalButton,
    deleteUserModalButton,
    chatParameters,
    sendButton: new SendButton(
      { forwardLink },
      {
        click: () => {
          sendMessage(socket);
        }
      }
    ).transformToString(),
    chatTitle: getDataFromChat(currentChatId || '', 'chats', 'title'),
    message: message.transformToString(),
    addUserModal: new ChatModal({
      chatModalInput: new ModalInput({
        placeholder: 'Введите имя пользователя',
        inputId: 'addUserInput'
      }).transformToString(),
      chatModalOkButton: new ModalButton(
        { buttonText: 'Добавить' },
        {
          click: () => addUsersToChat(currentChatId || '')
            .then((data) => {
              if (data) {
                store.setStateAndPersist({ ...data });
                router.go(Routes.MAIN_CHAT_ACTIVE_DIALOG);
              }
            })
            .catch((error: any) => {
              console.error(error);
            })
            .finally(() => {
              closeUserModal('addUsersModal', 'addUserInput');
            })
        }
      ).transformToString(),
      chatModalCancelButton: new ModalButton(
        { buttonText: 'Закрыть' },
        { click: () => closeUserModal('addUsersModal', 'addUserInput') }
      ).transformToString(),
      modalClassName: 'addUsersModal'
    }).transformToString(),
    deleteUserModal: new ChatModal(
      {
        chatModalInput: new ModalInput({
          placeholder: 'Введите имя пользователя',
          inputId: 'deleteUserInput'
        }).transformToString(),
        chatModalOkButton: new ModalButton(
          { buttonText: 'Удалить' },
          {
            click: () => removeUsersFromChat(currentChatId || '')
              .then((data) => {
                if (data) {
                  store.setStateAndPersist({ ...data });
                  router.go(Routes.MAIN_CHAT_ACTIVE_DIALOG);
                }
              })
              .catch((error: any) => {
                console.error(error);
              })
              .finally(() => {
                closeUserModal('deleteUsersModal', 'deleteUsersInput');
              })
          }
        ).transformToString(),
        chatModalCancelButton: new ModalButton(
          { buttonText: 'Закрыть' },
          { click: () => closeUserModal('deleteUsersModal', 'deleteUserInput') }
        ).transformToString(),
        modalClassName: 'deleteUsersModal'
      },
      {}
    ).transformToString()
  };

  return template(context);
}
