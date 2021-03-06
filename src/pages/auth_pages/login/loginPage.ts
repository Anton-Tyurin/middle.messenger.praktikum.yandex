import * as Handlebars from 'handlebars';
import { login_page_template } from './loginPage.template';
import { LoginInput } from '../../../components/inputs';
import { SubmitButton } from '../../../components/submitButton';
import { AuthLink } from '../../../components/links';
import { TLoginScheme } from '../../../types/pages';
import { checkValidation, getFormData } from '../../../core/validate';

export function loginPage() {
  const template = Handlebars.compile(login_page_template);
  const loginInput = new LoginInput({
    name: 'login',
    label: 'Логин',
    type: 'text',
    required: true,
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
  const passwordInput = new LoginInput({
    name: 'password',
    label: 'Пароль',
    type: 'password',
    required: true,
    errorMessage: 'Пароль не безопасен',
    validationType: 'password'
  }, {
    focus: (event: Event) => {
      checkValidation({ event });
    },
    blur: (event: Event) => {
      checkValidation({ event });
    }
  });
  const submitButton = new SubmitButton({
    text: 'Авторизироваться'
  }, {
    click: (event: Event) => {
      getFormData(event);
    }
  });
  const link = new AuthLink({
    linkText: 'Нет аккаунта?',
    linkHref: '/register'
  });
  const context: TLoginScheme = {
    inputs: [loginInput.transformToString(), passwordInput.transformToString()],
    formHeading: 'Вход',
    submitButton: submitButton.transformToString(),
    link: link.transformToString()
  };
  return template(context);
}
