import * as Handlebars from 'handlebars';
import { TProfilePage } from '../../../types/pages';
import { profile_page_template } from './profilePage.template';
import { AsideBacklink } from '../../../components/asideBacklink';
import { ProfileInput } from '../../../components/inputs';
import { ProfileLink, ProfileLinkWarning } from '../../../components/links';

import backlink from '../../../../static/img/backLink/backLink.svg';
import { Block } from '../../../core/Block';
import { router } from '../../../router';
import { ROUTES } from '../../../constants/routes';
import { Avatar } from '../../../components/avatar';
import { getAvatar, getUserData } from '../utils';
import { AuthController } from '../../../controllers/authController';
import avatarImg from '../../../../static/img/avatar/avatar.svg';

const authController = new AuthController();

function profilePage() {
  const template = Handlebars.compile(profile_page_template);
  const {
    first_name, second_name, login, email, phone
  } = getUserData() || {};
  const avatarIcon = getAvatar();

  const asideBackLink = new AsideBacklink(
    { backlink },
    {
      click: () => {
        router.go(ROUTES.MAIN_CHAT);
      }
    }
  );

  const userAvatar = new Avatar(
    {
      profileName: `${first_name} ${second_name}`,
      avatar: avatarIcon || avatarImg
    },
    {
      click: () => {
        router.go(ROUTES.PROFILE_EDIT);
      }
    }
  );

  const emailField = new ProfileInput({
    label: 'Почта',
    name: 'email',
    value: email || '',
    type: 'text',
    fieldDisabled: true
  });
  const loginField = new ProfileInput({
    label: 'Логин',
    type: 'text',
    name: 'login',
    value: login || '',
    fieldDisabled: true
  });
  const firstNameField = new ProfileInput({
    label: 'Имя',
    type: 'text',
    name: 'first_name',
    value: first_name || '',
    fieldDisabled: true
  });
  const secondNameField = new ProfileInput({
    label: 'Фамилия',
    type: 'text',
    name: 'second_name',
    value: second_name || '',
    fieldDisabled: true
  });
  const phoneField = new ProfileInput({
    label: 'Телефон',
    type: 'text',
    name: 'phone',
    value: phone || '',
    fieldDisabled: true
  });
  const editLink = new ProfileLink(
    {
      linkText: 'Изменить данные'
    },
    {
      click: () => {
        router.go(ROUTES.PROFILE_EDIT);
      }
    }
  );
  const changePasswordLink = new ProfileLink(
    {
      linkText: 'Изменить пароль'
    },
    {
      click: () => {
        router.go(ROUTES.PROFILE_CHANGE_PASSWORD);
      }
    }
  );
  const exitLink = new ProfileLinkWarning(
    {
      linkText: 'Выйти'
    },
    {
      click: async () => {
        await authController.logOut();
        router.go('/');
      }
    }
  );
  const context: TProfilePage = {
    asideBacklink: asideBackLink.transformToString(),
    avatar: userAvatar.transformToString(),
    inputs: [
      emailField.transformToString(),
      loginField.transformToString(),
      firstNameField.transformToString(),
      secondNameField.transformToString(),
      phoneField.transformToString()
    ],
    links: [
      editLink.transformToString(),
      changePasswordLink.transformToString(),
      exitLink.transformToString()
    ]
  };

  return template(context);
}

export class ProfilePage extends Block {
  constructor(context: any, events = {}) {
    super('div', {
      context: {
        ...context
      },
      template: profilePage(),
      events
    });
  }
}
