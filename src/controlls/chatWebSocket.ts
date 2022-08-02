import { Dictionary } from '../types/core';
import { defaultChatWSUrl, TWebSocketParams } from '../constants/api/chatApi';

export function createChatWebSocket(params: TWebSocketParams, onMessageFunc?: (data: Dictionary) => void) {
  const { userId, chatId, token } = params;
  const socket = new WebSocket(`${defaultChatWSUrl}chats/${userId}/${chatId}/${token}`);

  socket.addEventListener('open', () => {
    console.log('Соединение установлено');
  });

  socket.addEventListener('close', (event) => {
    const { wasClean, code } = event;
    let { reason } = event;

    console.log(wasClean ? 'Соединение закрыто чисто' : 'Обрыв соединения');

    if (code === 1006) {
      reason = 'Соединение закрыто из-за отсутствия активности в сокете';
    }

    console.log(`Код: ${code} | Причина: ${reason}`);
  });

  socket.addEventListener('message', (event) => {
    const { data } = event;

    if (onMessageFunc && data) {
      console.log(data);
      onMessageFunc(JSON.parse(data));
    }
  });

  socket.addEventListener('error', (event: any) => {
    console.log('Ошибка', event.message);
  });

  return socket;
}
