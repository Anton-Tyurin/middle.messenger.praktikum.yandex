import * as Handlebars from 'handlebars';
import { TErrorScheme } from '../../../types/pages';
import { error_template } from '../base_template/error_page.template';

export function error404Page() {
  const template = Handlebars.compile(error_template);

  const context: TErrorScheme = {
    code: '404',
    title: '404_page',
    linkText: 'Назад к чатам',
    errorMessage: 'Не туда попали',
    linkPath: '/'
  };
  return template(context);
}
