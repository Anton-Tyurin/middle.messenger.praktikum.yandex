import * as Handlebars from 'handlebars';
import { TErrorScheme } from '../../../types/pages';
import { error_template } from '../base_template/error_page.template';
import { Block } from '../../../core/Block';
import { AuthLink } from '../../../components/links';
import { router } from '../../../router';
import { ROUTES } from '../../../constants/routes';

function error400Template() {
  const template = Handlebars.compile(error_template);

  const context: TErrorScheme = {
    code: '400',
    title: '400_page',
    errorMessage: 'Пользователь уже зарегистрирован',
    link: new AuthLink(
      { linkText: 'К форме авторизации' },
      {
        click: () => {
          router.go(ROUTES.LOGIN);
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
