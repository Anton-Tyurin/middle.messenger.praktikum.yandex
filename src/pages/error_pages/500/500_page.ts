import Handlebars from 'handlebars';
import { ErrorPageTemplate } from '../base_template/error_page.template';
import { TErrorScheme } from '../../../types/pages';
import { Block } from '../../../core/Block';
import { AuthLink } from '../../../components/links';
import { router } from '../../../router';
import { Routes } from '../../../constants/routes';

function error500Template() {
  const template = Handlebars.compile(ErrorPageTemplate);
  const context: TErrorScheme = {
    code: '500',
    title: '500_page',
    errorMessage: 'Мы уже фиксим',
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

export class Error500Page extends Block {
  constructor(context: any, events = {}) {
    super('div', {
      context: {
        ...context
      },
      template: error500Template(),
      events
    });
  }
}
