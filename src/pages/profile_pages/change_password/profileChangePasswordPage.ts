import * as Handlebars from 'handlebars';
import { TProfilePage } from '../../../types/pages';
import { AsideBacklink } from '../../../components/asideBacklink';
import backlink from '../../../../static/img/backLink/backLink.svg';
import { profile_change_password_page_template } from './profileChangePassword.template';
import { ProfileInput } from '../../../components/inputs';
import { Avatar } from '../../../components/avatar';
import avatarImg from '../../../../static/img/avatar/avatar.svg';
import { SubmitButton } from '../../../components/submitButton';
import { Block } from '../../../core/Block';
import { router } from '../../../router';
import { ROUTES } from '../../../constants/routes';
import { getFormData } from '../../../core/validate';
import { UserController } from '../../../controllers/userController';
import { getAvatar } from '../utils';

const userController = new UserController();

function profileChangePassword() {
  const template = Handlebars.compile(profile_change_password_page_template);
  const avatarIcon = getAvatar();

  const asideBackLink = new AsideBacklink(
    { backlink },
    {
      click: () => {
        router.go(ROUTES.PROFILE);
      }
    }
  );
  const avatar = new Avatar({ avatar: avatarIcon || avatarImg });
  const oldPassword = new ProfileInput({
    label: 'Старый пароль',
    type: 'password',
    name: 'oldPassword',
    value: ''
  });
  const newPassword = new ProfileInput({
    label: 'Новый пароль',
    id: 'newPassword',
    type: 'password',
    name: 'newPassword',
    value: ''
  });
  const newPasswordRepeat = new ProfileInput({
    label: 'Новый пароль (ещё раз)',
    id: 'passwordConfirm',
    type: 'password',
    name: 'passwordConfirm',
    value: ''
  });
  const saveChangesButton = new SubmitButton(
    {
      text: 'Сохранить'
    },
    {
      click: (event: Event) => {
        getFormData(event)
          .then((data: any) => {
            /*eslint-disable */
            // @ts-ignore
            const { passwordConfirm } = data;
            /* eslint-enable */
            return userController.changeUserPassword(data);
          })
          .then((result) => {
            if (result.success) {
              router.go(ROUTES.PROFILE);
            }
          })
          .catch((e) => console.log(e));
      }
    }
  );

  const context: TProfilePage = {
    asideBacklink: asideBackLink.transformToString(),
    avatar: avatar.transformToString(),
    submitBtn: saveChangesButton.transformToString(),
    inputs: [
      oldPassword.transformToString(),
      newPassword.transformToString(),
      newPasswordRepeat.transformToString()
    ]
  };

  return template(context);
}

export class ProfileChangePasswordPage extends Block {
  constructor(context: any, events = {}) {
    super('div', {
      context: {
        ...context
      },
      template: profileChangePassword(),
      events
    });
  }
}
