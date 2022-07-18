import * as Handlebars from 'handlebars';
import { TProfilePage } from '../../../types/pages';
import { AsideBacklink } from '../../../components/asideBacklink';
import backlink from '../../../../static/img/backLink/backLink.svg';
import { profile_change_password_page_template } from './profileChangePassword.template';
import { ProfileInput } from '../../../components/inputs';
import { Avatar } from '../../../components/avatar';
import avatarImg from '../../../../static/img/avatar/avatar.svg';
import { SubmitButton } from '../../../components/submitButton';

export function profileChangePasswordPage() {
  const template = Handlebars.compile(profile_change_password_page_template);

  const asideBackLink = new AsideBacklink({ linkHref: '/', backlink });
  const avatar = new Avatar({ avatar: avatarImg });
  const oldPassword = new ProfileInput({
    label: 'Пароль',
    type: 'password',
    name: 'oldPassword',
    value: '123123'
  });
  const newPassword = new ProfileInput({
    label: 'Пароль',
    id: 'newPassword',
    type: 'password',
    name: 'newPassword',
    value: '123123123'
  });
  const newPasswordRepeat = new ProfileInput({
    label: 'Пароль (ещё раз)',
    id: 'passwordConfirm',
    type: 'password',
    name: 'passwordConfirm',
    value: '123123123'
  });
  const saveChangesButton = new SubmitButton({
    text: 'Сохранить'
  });

  const context: TProfilePage = {
    asideBacklink: asideBackLink.transformToString(),
    avatar: avatar.transformToString(),
    submitBtn: saveChangesButton.transformToString(),
    inputs: [oldPassword.transformToString(), newPassword.transformToString(), newPasswordRepeat.transformToString()]
  };

  return template(context);
}
