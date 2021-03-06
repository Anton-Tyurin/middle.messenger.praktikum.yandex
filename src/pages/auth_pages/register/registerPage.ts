import * as Handlebars from 'handlebars';
import { LoginInput } from '../../../components/inputs';
import { SubmitButton } from '../../../components/submitButton';
import { AuthLink } from '../../../components/links';
import { register_page_template } from './registerPage.template';
import { checkValidation, getFormData } from '../../../core/validate';

export function registerPage() {
  const template = Handlebars.compile(register_page_template);
  const email = new LoginInput({
    label: 'Почта',
    name: 'email',
    validationType: 'email',
    errorMessage: 'Неверный email',
    type: 'email'
  }, {
    focus: (event: Event) => {
      checkValidation({ event });
    },
    blur: (event: Event) => {
      checkValidation({ event });
    }
  });
  const login = new LoginInput({
    label: 'Логин',
    type: 'text',
    name: 'login',
    validationType: 'login',
    errorMessage: 'Неверный логин'
  }, {
    focus: (event: Event) => {
      checkValidation({ event });
    },
    blur: (event: Event) => {
      checkValidation({ event });
    }
  });
  const name = new LoginInput({
    label: 'Имя',
    type: 'text',
    name: 'first_name',
    validationType: 'name',
    errorMessage: 'Недопустимый символ'
  }, {
    focus: (event: Event) => {
      checkValidation({ event });
    },
    blur: (event: Event) => {
      checkValidation({ event });
    }
  });
  const surname = new LoginInput({
    label: 'Фамилия',
    type: 'text',
    name: 'second_name',
    validationType: 'name',
    errorMessage: 'Недопустимый символ'
  }, {
    focus: (event: Event) => {
      checkValidation({ event });
    },
    blur: (event: Event) => {
      checkValidation({ event });
    }
  });
  const phone = new LoginInput({
    label: 'Телефон',
    type: 'text',
    name: 'phone',
    validationType: 'phone',
    errorMessage: 'Неверный телефон'
  }, {
    focus: (event: Event) => {
      checkValidation({ event });
    },
    blur: (event: Event) => {
      checkValidation({ event });
    }
  });
  const password = new LoginInput({
    label: 'Пароль',
    type: 'password',
    name: 'password',
    validationType: 'password',
    errorMessage: 'Неверный пароль'
  }, {
    focus: (event: Event) => {
      checkValidation({ event });
    },
    blur: (event: Event) => {
      checkValidation({ event });
    }
  });
  const passwordRepeat = new LoginInput({
    label: 'Пароль (еще раз)',
    type: 'password',
    name: 'passwordConfirm',
    errorMessage: 'Неверный пароль',
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
    text: 'Зарегистрироваться'
  }, {
    click: (event: Event) => {
      getFormData(event);
    }
  });
  const link = new AuthLink({
    linkText: 'Войти',
    linkHref: '/login'
  });
  const context = {
    inputs: [email.transformToString(),
      login.transformToString(),
      name.transformToString(),
      surname.transformToString(),
      phone.transformToString(),
      password.transformToString(),
      passwordRepeat.transformToString()],
    formHeading: 'Вход',
    submitButton: submitButton.transformToString(),
    link: link.transformToString()
  };
  return template(context);
}
