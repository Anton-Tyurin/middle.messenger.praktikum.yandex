import * as Handlebars from 'handlebars';
import { TErrorScheme } from '../../../types/pages';
import { ErrorPageTemplate } from '../base_template/error_page.template';
import { Block } from '../../../core/Block';
import { AuthLink } from '../../../components/links';
import { router } from '../../../router';
import { Routes } from '../../../constants/routes';

function error404Template() {
  const template = Handlebars.compile(ErrorPageTemplate);

  const context: TErrorScheme = {
    code: '404',
    title: '404_page',
    errorMessage: 'Не туда попали',
    link: new AuthLink(
      { linkText: 'Назад к чатам' },
      {
        click: () => {
          router.go(Routes.MAIN_CHAT);
        }
      }
    ).transformToString()
  };
  return template(context);
}

export class Error404Page extends Block {
  constructor(context: any, events = {}) {
    super('div', {
      context: {
        ...context
      },
      template: error404Template(),
      events
    });
  }
}
