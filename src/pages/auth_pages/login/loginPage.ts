import * as Handlebars from 'handlebars';
import { LoginPageTemplate } from './loginPage.template';
import { LoginInput } from '../../../components/inputs';
import { SubmitButton } from '../../../components/submitButton';
import { AuthLink } from '../../../components/links';
import { TLoginScheme } from '../../../types/pages';
import { checkValidation, getFormData } from '../../../core/validate';
import { Block } from '../../../core/Block';
import { router } from '../../../router';
import { Routes } from '../../../constants/routes';

import { AuthController } from '../../../controllers/authController';

const controller = new AuthController();

function loginPage() {
  const template = Handlebars.compile(LoginPageTemplate);
  const loginInput = new LoginInput(
    {
      name: 'login',
      label: 'Логин',
      type: 'text',
      required: true,
      errorMessage: 'Логин не соответствует требованиям',
      validationType: 'login'
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
  const passwordInput = new LoginInput(
    {
      name: 'password',
      label: 'Пароль',
      type: 'password',
      required: true,
      errorMessage: 'Пароль не соответствует требованиям',
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
      text: 'Авторизироваться'
    },
    {
      click: (event: Event) => {
        getFormData(event)
          .then((data: any) => controller.login(data).then((result) => {
            if (result?.success) {
              router.go(Routes.MAIN_CHAT);
            } else {
                console.log(result)
                if (result === "User already in system") {
                    router.go(Routes.MAIN_CHAT);
                } else {
                    router.go(Routes.PAGE_404)
                }
            }
          }))
          .catch((e) => console.log(e));
      }
    }
  );
  const link = new AuthLink(
    {
      linkText: 'Нет аккаунта?'
    },
    {
      click: () => {
        router.go(Routes.REGISTER);
      }
    }
  );
  const context: TLoginScheme = {
    inputs: [loginInput.transformToString(), passwordInput.transformToString()],
    formHeading: 'Вход',
    submitButton: submitButton.transformToString(),
    link: link.transformToString()
  };
  return template(context);
}

export class LoginPage extends Block {
  constructor(context: any, events = {}) {
    super('div', {
      context: {
        ...context
      },
      template: loginPage(),
      events
    });
  }
}
