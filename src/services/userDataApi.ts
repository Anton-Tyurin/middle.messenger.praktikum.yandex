import {
  defaultUserUrl,
  TPasswordData,
  UserApiRoutes
} from '../constants/api/userApi';
import { TSignUpData } from '../types/auth';
import { HTTPTransport } from '../core/HTTPTraspport';

const userAPIInstance = new HTTPTransport(defaultUserUrl);
export default class UserApi {
  changeUserProfile(data: TSignUpData) {
    return userAPIInstance.put(UserApiRoutes.PROFILE, data);
  }

  changeUserAvatar(avatar: FormData) {
    return userAPIInstance.put(UserApiRoutes.PROFILE_AVATAR, avatar);
  }

  changeUserPassword(data: TPasswordData) {
    return userAPIInstance.put(UserApiRoutes.PASSWORD, data);
  }
}
