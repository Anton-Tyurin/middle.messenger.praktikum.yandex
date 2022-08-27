import { router } from '../../../router';
import { Routes } from '../../../constants/routes';
import { ChatController } from '../../../controllers/chatController';
import { TChatData } from '../../../constants/api/chatApi';
import { ChatListItem } from '../../../components/chatComponents';
import store from '../../../store';
import { CreateChatButton } from '../../../components/chatComponents/chatCreateButton';

const avatarImg = require('../../../../static/img/avatar/avatar.svg') as string;

const chatController = new ChatController();

export const showModal = () => {
  const modal = document.getElementsByClassName('createChatModal')[0];
  if (modal?.classList.contains('chatModalHidden')) {
    modal?.classList.remove('chatModalHidden');
  }
};

export const closeModal = () => {
  const input = document.getElementById('createChatInput') as HTMLInputElement;
  const modal = document.getElementsByClassName('createChatModal')[0];
  if (input?.value) {
    input.value = '';
  }
  modal?.classList.add('chatModalHidden');
};

export const createNewChat = async () => {
  const input = document.getElementById('createChatInput') as HTMLInputElement;
  const title = input.value;
  await chatController.createChat({ title });
  closeModal();
  router.go(Routes.MAIN_CHAT);
};

const openSelectedChat = async (elemData: TChatData) => {
  const { id } = elemData;
  store.setStateAndPersist({ currentChat: id });

  const userData = localStorage.getItem('user');
  let user;
  if (userData) {
    user = JSON.parse(userData);
  }

  if (user) {
    await chatController.connectToChat(user.id, id);
  }
  router.go(Routes.MAIN_CHAT_ACTIVE_DIALOG);
};

export const getListItems = (): string[] => {
  const item = localStorage.getItem('chats');
  if (item) {
    return JSON.parse(item).map((el: TChatData) => {
      const { content } = el.last_message || {};
      const elemData = {
        ...el,
        avatar: el.avatar || avatarImg,
        last_message: content
      };
      const chatItem = new ChatListItem(
        {
          ...elemData
        },
        {
          click: async () => {
            console.log(elemData);
            await openSelectedChat(elemData);
          }
        }
      );
      return chatItem.transformToString();
    });
  }
  return [];
};

export const createChatButton = () => new CreateChatButton(
  { buttonText: 'Создать новый чат' },
  {
    click: () => showModal()
  }
);
