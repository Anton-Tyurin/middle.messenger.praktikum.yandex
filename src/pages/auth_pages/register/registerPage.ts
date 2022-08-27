import * as Handlebars from 'handlebars';
import { LoginInput } from '../../../components/inputs';
import { SubmitButton } from '../../../components/submitButton';
import { AuthLink } from '../../../components/links';
import { RegisterPageTemplate } from './registerPage.template';
import { checkValidation, getFormData } from '../../../core/validate';
import { Block } from '../../../core/Block';
import { router } from '../../../router';
import { Routes } from '../../../constants/routes';
import { AuthController } from '../../../controllers/authController';

const controller = new AuthController();

function registerPage() {
  const template = Handlebars.compile(RegisterPageTemplate);
  const email = new LoginInput(
    {
      label: 'Почта',
      name: 'email',
      validationType: 'email',
      errorMessage: 'Неверный email',
      type: 'email'
    },
    {
      focus: (event: Event) => {
        checkValidation({ event });
      },
      blur: (event: Event) => {
        checkValidation({ event });
      }
    }
  );
  const login = new LoginInput(
    {
      label: 'Логин',
      type: 'text',
      name: 'login',
      validationType: 'login',
      errorMessage: 'Неверный логин'
    },
    {
      focus: (event: Event) => {
        checkValidation({ event });
      },
      blur: (event: Event) => {
        checkValidation({ event });
      }
    }
  );
  const name = new LoginInput(
    {
      label: 'Имя',
      type: 'text',
      name: 'first_name',
      validationType: 'name',
      errorMessage: 'Недопустимый символ'
    },
    {
      focus: (event: Event) => {
        checkValidation({ event });
      },
      blur: (event: Event) => {
        checkValidation({ event });
      }
    }
  );
  const surname = new LoginInput(
    {
      label: 'Фамилия',
      type: 'text',
      name: 'second_name',
      validationType: 'name',
      errorMessage: 'Недопустимый символ'
    },
    {
      focus: (event: Event) => {
        checkValidation({ event });
      },
      blur: (event: Event) => {
        checkValidation({ event });
      }
    }
  );
  const phone = new LoginInput(
    {
      label: 'Телефон',
      type: 'text',
      name: 'phone',
      validationType: 'phone',
      errorMessage: 'Неверный телефон'
    },
    {
      focus: (event: Event) => {
        checkValidation({ event });
      },
      blur: (event: Event) => {
        checkValidation({ event });
      }
    }
  );
  const password = new LoginInput(
    {
      label: 'Пароль',
      type: 'password',
      name: 'password',
      validationType: 'password',
      errorMessage: 'Неверный пароль'
    },
    {
      focus: (event: Event) => {
        checkValidation({ event });
      },
      blur: (event: Event) => {
        checkValidation({ event });
      }
    }
  );
  const passwordRepeat = new LoginInput(
    {
      label: 'Пароль (еще раз)',
      type: 'password',
      name: 'passwordConfirm',
      errorMessage: 'Неверный пароль',
      validationType: 'password'
    },
    {
      focus: (event: Event) => {
        checkValidation({ event });
      },
      blur: (event: Event) => {
        checkValidation({ event });
      }
    }
  );
  const submitButton = new SubmitButton(
    {
      text: 'Зарегистрироваться'
    },
    {
      click: async (event: Event) => {
        await getFormData(event)
          .then((data: any) => controller.signUp(data))
          .then((result) => {
            if (result?.success) {
              router.go(Routes.MAIN_CHAT);
            } else {
              router.go(Routes.PAGE_400);
            }
          })
          .catch((e) => console.log(e));
      }
    }
  );
  const link = new AuthLink(
    {
      linkText: 'Войти'
    },
    {
      click: () => {
        router.go(Routes.LOGIN);
      }
    }
  );
  const context = {
    inputs: [
      email.transformToString(),
      login.transformToString(),
      name.transformToString(),
      surname.transformToString(),
      phone.transformToString(),
      password.transformToString(),
      passwordRepeat.transformToString()
    ],
    formHeading: 'Регистрация',
    submitButton: submitButton.transformToString(),
    link: link.transformToString()
  };
  return template(context);
}

export class RegisterPage extends Block {
  constructor(context: any, events = {}) {
    super('div', {
      context: {
        ...context
      },
      template: registerPage(),
      events
    });
  }
}
