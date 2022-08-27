import * as Handlebars from 'handlebars';
import { TErrorScheme } from '../../../types/pages';
import { ErrorPageTemplate } from '../base_template/error_page.template';
import { Block } from '../../../core/Block';
import { AuthLink } from '../../../components/links';
import { router } from '../../../router';
import { Routes } from '../../../constants/routes';

function error400Template() {
  const template = Handlebars.compile(ErrorPageTemplate);

  const context: TErrorScheme = {
    code: '400',
    title: '400_page',
    errorMessage: 'Пользователь уже зарегистрирован',
    link: new AuthLink(
      { linkText: 'К форме авторизации' },
      {
        click: () => {
          router.go(Routes.LOGIN);
        }
      }
    ).transformToString()
  };
  return template(context);
}

export class Error400Page extends Block {
  constructor(context: any, events = {}) {
    super('div', {
      context: {
        ...context
      },
      template: error400Template(),
      events
    });
  }
}
