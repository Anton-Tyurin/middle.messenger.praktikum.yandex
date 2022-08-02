import { Router } from './router';
import {
  Error400Page,
  Error404Page,
  Error500Page,
  LoginPage,
  ProfileChangePasswordPage,
  ProfileEditPage,
  ProfilePage,
  RegisterPage
} from '../pages';
import { ROUTES } from '../constants/routes';
import { MainChatPage } from '../pages';

export const router = new Router('.root');

router
  .use(ROUTES.MAIN, LoginPage)
  .use(ROUTES.LOGIN, LoginPage)
  .use(ROUTES.REGISTER, RegisterPage)
  .use(ROUTES.PAGE_400, Error400Page)
  .use(ROUTES.PAGE_404, Error404Page)
  .use(ROUTES.PAGE_500, Error500Page)
  .use(ROUTES.PROFILE, ProfilePage)
  .use(ROUTES.PROFILE_EDIT, ProfileEditPage)
  .use(ROUTES.PROFILE_CHANGE_PASSWORD, ProfileChangePasswordPage)
  .use(ROUTES.MAIN_CHAT, MainChatPage)
  .use(ROUTES.MAIN_CHAT_ACTIVE_DIALOG, MainChatPage);
