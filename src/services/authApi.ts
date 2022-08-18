import { HTTPTransport } from '../core/HTTPTraspport';
import { AuthRoutes, defaultAuthUrl } from '../constants/api/authApi';
import { TLoginData, TSignUpData } from '../types/auth';

const authAPIInstance = new HTTPTransport(defaultAuthUrl);

export class AuthApi {
  signUp(data: TSignUpData) {
    return authAPIInstance.post(AuthRoutes.SIGN_UP, data);
  }

  signIn(data: TLoginData) {
    return authAPIInstance.post(AuthRoutes.SIGN_IN, data);
  }

  getUser() {
    return authAPIInstance.get(AuthRoutes.USER);
  }

  logOut() {
    return authAPIInstance.post(AuthRoutes.LOGOUT);
  }
}
