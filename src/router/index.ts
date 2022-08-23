import { Router } from './router';
import {
  Error400Page,
  Error404Page,
  Error500Page,
  LoginPage,
  ProfileChangePasswordPage,
  ProfileEditPage,
  ProfilePage,
  RegisterPage,
  MainChatPage
} from '../pages';
import { Routes } from '../constants/routes';

export const router = new Router('.root');

router
  .use(Routes.MAIN, LoginPage)
  .use(Routes.LOGIN, LoginPage)
  .use(Routes.REGISTER, RegisterPage)
  .use(Routes.PAGE_400, Error400Page)
  .use(Routes.PAGE_404, Error404Page)
  .use(Routes.PAGE_500, Error500Page)
  .use(Routes.PROFILE, ProfilePage)
  .use(Routes.PROFILE_EDIT, ProfileEditPage)
  .use(Routes.PROFILE_CHANGE_PASSWORD, ProfileChangePasswordPage)
  .use(Routes.MAIN_CHAT, MainChatPage)
  .use(Routes.MAIN_CHAT_ACTIVE_DIALOG, MainChatPage);
