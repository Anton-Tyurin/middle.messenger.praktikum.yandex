import { HTTPTransport } from '../core/HTTPTraspport';
import { AUTH_API, defaultAuthUrl } from '../constants/api/authApi';
import { TLoginData, TSignUpData } from '../types/auth';

const authAPIInstance = new HTTPTransport(defaultAuthUrl);

export class AuthApi {
  signUp(data: TSignUpData) {
    return authAPIInstance.post(AUTH_API.SIGN_UP, data);
  }

  signIn(data: TLoginData) {
    return authAPIInstance.post(AUTH_API.SIGN_IN, data);
  }

  getUser() {
    return authAPIInstance.get(AUTH_API.USER);
  }

  logOut() {
    return authAPIInstance.post(AUTH_API.LOGOUT);
  }
}
