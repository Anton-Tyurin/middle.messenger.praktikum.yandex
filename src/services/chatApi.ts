import { HTTPTransport } from '../core/HTTPTraspport';
import {
  CHAT_API, chatApiUrl, TChatUser, TCreateChat
} from '../constants/api/chatApi';

const chatAPIInstance = new HTTPTransport(chatApiUrl);
export default class ChatApi {
  get() {
    return chatAPIInstance.get(CHAT_API.MAIN);
  }

  createChat(data: TCreateChat) {
    return chatAPIInstance.post(CHAT_API.MAIN, data);
  }

  addUser(data: TChatUser) {
    return chatAPIInstance.put(CHAT_API.ADD_USER, data);
  }

  removeUser(data: TChatUser) {
    return chatAPIInstance.delete(CHAT_API.ADD_USER, data);
  }

  getChatUsers(chatId: number = 0) {
    return chatAPIInstance.post(`${CHAT_API.GET_USER}${chatId}`);
  }
}
