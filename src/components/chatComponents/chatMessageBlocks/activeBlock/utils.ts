import { TChatData } from '../../../../constants/api/chatApi';
import { router } from '../../../../router';
import store from '../../../../store';
import { Dictionary } from '../../../../types/core';
import { ChatController } from '../../../../controlls/chatControll';
import { ROUTES } from '../../../../constants/routes';

const chatController = new ChatController();

export const getDataFromChat = (currentChatId: string, localStorageKey: string, valueKey: string) => {
  let value: string | string[] = valueKey === 'users' ? [] : '';
  const item = localStorage.getItem(localStorageKey);
  let chats;
  if (item) {
    chats = JSON.parse(item);
  }

  if (currentChatId && chats) {
    const chat = chats.filter((el: TChatData) => (el.id).toString() === currentChatId);
    if (chat.length > 0) {
      value = chat[0][valueKey];
    }
  }

  return value;
};

export const closeUserModal = (className: string, inputId: string) => {
  const input = document.getElementById(inputId) as HTMLInputElement;
  const modal = document.getElementsByClassName(className)[0];
  if (input?.value) {
    input.value = '';
  }
  modal?.classList.add('chatModalHidden');
};

export const addUsersToChat = async (chatId: string) => {
  const input = document.getElementById('addUserInput') as HTMLInputElement;
  const users = input.value.split(',');

  await chatController.addUser({ users, chatId: parseInt(chatId, 10) });
  store.setStateAndPersist({ usersInChats: [{ id: chatId, users }] });
  closeUserModal('addUsersModal', 'addUserInput');
  router.go(ROUTES.MAIN_CHAT_ACTIVE_DIALOG);
};

export const removeUsersFromChat = async (chatId: string) => {
  const input = document.getElementById('deleteUserInput') as HTMLInputElement;
  const users = input.value.split(',');

  await chatController.removeUser({ users, chatId: parseInt(chatId, 10) });
  store.setStateAndPersist({ usersInChats: [{ id: chatId, users }] });
  closeUserModal('deleteUsersModal', 'deleteUsersInput');
  router.go(ROUTES.MAIN_CHAT_ACTIVE_DIALOG);
};

export const sendMessage = (socket: WebSocket) => {
  const messageInput = document.getElementById('messageInput') as HTMLInputElement;
  const message = {
    content: messageInput.value,
    type: 'message'
  };
  socket.send(JSON.stringify(message));
  messageInput.value = '';
};

export const getMessages = (socket: WebSocket) => {
  socket.addEventListener('open', () => {
    socket.send(JSON.stringify({
      content: '0',
      type: 'get old'
    }));
  });
};

export const handleMessages = (message: Dictionary | Dictionary []) => {
  const isMessagesArray = message instanceof Array;

  const addMessage = (elem: Dictionary) => {
    if (elem?.content) {
      const container = document.getElementById('messagesContainer');
      const node = document.createElement('div');
      node.className = 'message';
      node.textContent = elem.content;
      container.appendChild(node);
    }
  };

  if (isMessagesArray) {
    message.map((el: Dictionary) => addMessage(el));
  } else {
    addMessage(message);
  }
};

export const showUserModal = (className: string) => {
  const modal = document.getElementsByClassName(className)[0];
  modal?.classList.remove('chatModalHidden');
};
