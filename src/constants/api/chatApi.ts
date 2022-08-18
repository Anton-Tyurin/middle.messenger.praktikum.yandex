import { Dictionary } from '../../types/core';

export const chatApiUrl = '/chats';
export const defaultChatWSUrl = 'wss://ya-praktikum.tech/ws/';

export type TChatUser = {
  users: string[];
  chatId: number;
};

export type TChatData = {
  avatar: string;
  created_by: number;
  id: number;
  last_message: Dictionary;
  title: string;
  unread_count: number;
};

export type TCreateChat = {
  title: string;
};

export enum CHAT_API {
  MAIN = '/',
  ADD_USER = '/users',
  GET_USER = '/token/',
}

export type TWebSocketParams = {
  userId: number;
  chatId: number;
  token: string;
};
