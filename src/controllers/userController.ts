import store from '../store';
import UserApi from '../services/userDataApi';
import { TSignUpData } from '../types/auth';
import { AuthController } from './authController';
import { TPasswordData } from '../constants/api/userApi';

const userInstance = new UserApi();
const loginController = new AuthController();

export class UserController {
  public async changeUserProfile(data: TSignUpData) {
    try {
      await userInstance.changeUserProfile(data);
      await loginController.getUser();
      return { success: true };
    } catch (e: any) {
      return e.reason;
    }
  }

  public async changeUserAvatar(file: File, image: HTMLImageElement) {
    try {
      const data = new FormData();
      data.append('avatar', file, `avatar.${file.type.split('/')[1]}`);
      await userInstance.changeUserAvatar(data);
      this.updateImage(file, image);
      await loginController.getUser();
    } catch (e: any) {
      return e.reason;
    }
  }

  public updateImage(file: File, image: HTMLImageElement) {
    const reader = new FileReader();

    reader.onload = async (ev) => {
      const base64 = ev.target.result;
      const newImage = { ...image };
      newImage.src = base64 as string;
      store.setStateAndPersist({ avatarIcon: base64 }, true);
    };

    reader.readAsDataURL(file);
  }

  public async changeUserPassword(data: TPasswordData) {
    try {
      await userInstance.changeUserPassword(data);
      await loginController.getUser();
      return { success: true };
    } catch (e: any) {
      return e.reason;
    }
  }
}
