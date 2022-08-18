import {
  defaultUserUrl,
  TPasswordData,
  USER_API
} from '../constants/api/userApi';
import { TSignUpData } from '../types/auth';
import { HTTPTransport } from '../core/HTTPTraspport';

const userAPIInstance = new HTTPTransport(defaultUserUrl);
export default class UserApi {
  changeUserProfile(data: TSignUpData) {
    return userAPIInstance.put(USER_API.PROFILE, data);
  }

  changeUserAvatar(avatar: FormData) {
    return userAPIInstance.put(USER_API.PROFILE_AVATAR, avatar);
  }

  changeUserPassword(data: TPasswordData) {
    return userAPIInstance.put(USER_API.PASSWORD, data);
  }
}
