import * as Handlebars from 'handlebars';
import { TProfilePage } from '../../../types/pages';
import { AsideBacklink } from '../../../components/asideBacklink';
import backlink from '../../../../static/img/backLink/backLink.svg';
import { profile_edit_page_template } from './profileEditPage.template';
import { Avatar } from '../../../components/avatar';
import avatarImg from '../../../../static/img/avatar/avatar.svg';
import { ProfileInput } from '../../../components/inputs';
import { SubmitButton } from '../../../components/submitButton';
import { checkValidation, getFormData } from '../../../core/validate';

export function profileEditPage() {
  const template = Handlebars.compile(profile_edit_page_template);

  const asideBackLink = new AsideBacklink({ linkHref: '/', backlink });
  const avatar = new Avatar({ avatar: avatarImg });

  const emailField = new ProfileInput({
    label: 'Почта',
    name: 'email',
    value: 'pochta@yandex.ru',
    type: 'text',
    errorMessage: 'Неверная почта',
    validationType: 'email'
  }, {
    focus: (event: Event) => {
      checkValidation({ event });
    },
    blur: (event: Event) => {
      checkValidation({ event });
    }
  });
  const login = new ProfileInput({
    label: 'Логин',
    type: 'text',
    name: 'login',
    value: 'ivanivanov',
    errorMessage: 'Неверный логин',
    validationType: 'login'
  }, {
    focus: (event: Event) => {
      checkValidation({ event });
    },
    blur: (event: Event) => {
      checkValidation({ event });
    }
  });
  const name = new ProfileInput({
    label: 'Имя',
    type: 'text',
    name: 'name',
    value: 'Иван',
    errorMessage: 'Неверное имя',
    validationType: 'name'
  }, {
    focus: (event: Event) => {
      checkValidation({ event });
    },
    blur: (event: Event) => {
      checkValidation({ event });
    }
  });
  const surname = new ProfileInput({
    label: 'Фамилия',
    type: 'text',
    name: 'surname',
    value: 'Иванов',
    errorMessage: 'Неверное имя',
    validationType: 'name'

  }, {
    focus: (event: Event) => {
      checkValidation({ event });
    },
    blur: (event: Event) => {
      checkValidation({ event });
    }
  });
  const phone = new ProfileInput({
    label: 'Телефон',
    type: 'text',
    name: 'phone',
    value: '+7(909)9673030',
    errorMessage: 'Неверный телефон',
    validationType: 'phone'
  }, {
    focus: (event: Event) => {
      checkValidation({ event });
    },
    blur: (event: Event) => {
      checkValidation({ event });
    }
  });
  const saveChangesButton = new SubmitButton({
    text: 'Сохранить'
  }, {
    click: (event: Event) => {
      getFormData(event);
    }
  });

  const context: TProfilePage = {
    asideBacklink: asideBackLink.transformToString(),
    avatar: avatar.transformToString(),
    inputs: [emailField.transformToString(), login.transformToString(), name.transformToString(),
      surname.transformToString(), phone.transformToString()],
    submitBtn: saveChangesButton.transformToString()
  };
  return template(context);
}
