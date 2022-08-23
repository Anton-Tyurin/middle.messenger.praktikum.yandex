import * as Handlebars from 'handlebars';
import { EmptyBlockTemplate } from './emptyBlock.template';
import { TEmptyChat } from '../../../../types/components';

export function emptyChatBlock() {
  const template = Handlebars.compile(EmptyBlockTemplate);

  const context: TEmptyChat = {
    title: 'Выберите чат чтобы отправить сообщение'
  };

  return template(context);
}
