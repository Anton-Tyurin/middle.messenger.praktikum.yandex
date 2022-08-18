import { TChatData } from '../../../../constants/api/chatApi';
import { Dictionary } from '../../../../types/core';
import { ChatController } from '../../../../controllers/chatController';

const chatController = new ChatController();

export const getDataFromChat = (
  currentChatId: string,
  localStorageKey: string,
  valueKey: string
) => {
  let value: string | string[] = valueKey === 'users' ? [] : '';
  const item = localStorage.getItem(localStorageKey);
  let chats;
  if (item) {
    chats = JSON.parse(item);
  }

  if (currentChatId && chats) {
    const currentChat = chats.filter(
      (chat: TChatData) => chat.id.toString() === currentChatId
    );
    if (currentChat.length > 0) {
      const firstElem = 0;
      value = currentChat[firstElem][valueKey];
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
  return { usersInChats: [{ id: chatId, users }] };
};

export const removeUsersFromChat = async (chatId: string) => {
  const input = document.getElementById('deleteUserInput') as HTMLInputElement;
  const users = input.value.split(',');

  await chatController.removeUser({ users, chatId: parseInt(chatId, 10) });
  return { usersInChats: [{ id: chatId, users }] };
};

export const sendMessage = (socket: WebSocket) => {
  const messageInput = document.getElementById(
    'messageInput'
  ) as HTMLInputElement;
  const message = {
    content: messageInput.value,
    type: 'message'
  };
  socket.send(JSON.stringify(message));
  messageInput.value = '';
};

export const openMessagesSocket = (socket: WebSocket) => {
  socket.addEventListener('open', () => {
    socket.send(
      JSON.stringify({
        content: '0',
        type: 'get old'
      })
    );
  });
};

export const handleMessages = (messages: Dictionary | Dictionary[]) => {
  const isMessagesArray = messages instanceof Array;

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
    messages.forEach((el: Dictionary) => addMessage(el));
  } else {
    addMessage(messages);
  }
};

export const showUserModal = (className: string) => {
  const modal = document.getElementsByClassName(className)[0];
  modal?.classList.remove('chatModalHidden');
};
