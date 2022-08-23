import { HTTPTransport } from '../core/HTTPTraspport';
import {
  ChatApiRoutes,
  chatApiUrl,
  TChatUser,
  TCreateChat
} from '../constants/api/chatApi';

const chatAPIInstance = new HTTPTransport(chatApiUrl);
export default class ChatApi {
  get() {
    return chatAPIInstance.get(ChatApiRoutes.MAIN);
  }

  createChat(data: TCreateChat) {
    return chatAPIInstance.post(ChatApiRoutes.MAIN, data);
  }

  addUser(data: TChatUser) {
    return chatAPIInstance.put(ChatApiRoutes.ADD_USER, data);
  }

  removeUser(data: TChatUser) {
    return chatAPIInstance.delete(ChatApiRoutes.ADD_USER, data);
  }

  getChatUsers(chatId: number = 0) {
    return chatAPIInstance.post(`${ChatApiRoutes.GET_USER}${chatId}`);
  }
}
