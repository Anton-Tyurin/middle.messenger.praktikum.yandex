import store from '../store';
import { AuthApi } from '../services/authApi';
import { TSignUpData, TLoginData } from '../types/auth';

const authInstance = new AuthApi();

export class AuthController {
  public async login(data: TLoginData) {
    try {
      await authInstance.signIn(data);
      await this.getUser();
      return { success: true };
    } catch (e: any) {
      return e.reason;
    }
  }

  public async signUp(data: TSignUpData) {
    try {
      await authInstance.signUp(data);
      await this.getUser();
      return { success: true };
    } catch (e: any) {
      return e.reason;
    }
  }

  public async logOut() {
    try {
      await authInstance.logOut();
    } catch (e: any) {
      return e.reason;
    }
  }

  public async getUser() {
    let res;
    try {
      res = await authInstance.getUser();
    } catch (e: any) {
      res = e.reason;
    }
    if (res !== 'Not found') {
      store.setStateAndPersist({ user: res });
    }
    return res;
  }
}
