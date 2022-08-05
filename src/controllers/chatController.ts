import ChatApi from '../services/chatApi';
import { TChatUser, TCreateChat } from '../constants/api/chatApi';
import store from '../store';

const chatAPIInstance = new ChatApi();

export class ChatController {
  public async getChats() {
    try {
      await chatAPIInstance.get();
      return { success: true };
    } catch (e: any) {
      return e.reason;
    }
  }

  public async createChat(data: TCreateChat) {
    try {
      await chatAPIInstance.createChat(data);
      await this.getAllChats();
      return { success: true };
    } catch (e: any) {
      return e.reason;
    }
  }

  public async getAllChats() {
    let res;
    try {
      res = await chatAPIInstance.get();
    } catch (e: any) {
      res = e.reason;
    }
    if (res !== 'Not found') {
      localStorage.setItem('chats', JSON.stringify(res));
    }
    return res;
  }

  public async addUser(data: TChatUser) {
    try {
      await chatAPIInstance.addUser(data);
      return { success: true };
    } catch (e: any) {
      return e.reason;
    }
  }

  public async removeUser(data: TChatUser) {
    try {
      await chatAPIInstance.removeUser(data);
      return { success: true };
    } catch (e: any) {
      return e.reason;
    }
  }

  public async getChatUsers(id: number) {
    try {
      const users: any = await chatAPIInstance.getChatUsers(id);
      const { token } = users || {};
      return token;
    } catch (e: any) {
      return e.reason;
    }
  }

  public async connectToChat(userId: number, chatId: number) {
    try {
      const tokenData = await this.getChatUsers(chatId);
      const token = tokenData || {};
      const params = { userId, chatId, token };
      store.setStateAndPersist({ wsParams: params });
    } catch (e) {
      console.log(e);
    }
  }
}
