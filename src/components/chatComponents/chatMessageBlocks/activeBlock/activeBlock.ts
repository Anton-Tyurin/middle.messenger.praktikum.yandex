import * as Handlebars from 'handlebars';
import avatarEmpty from '../../../../../static/img/avatar/avatarEmpty.svg';
import addFile from '../../../../../static/img/addFile/addFile.svg';
import chatParameters from '../../../../../static/img/chatParameters/chatParameters.svg';
import forwardLink from '../../../../../static/img/forwardLink/forwardLink.svg';
import { ChatInput } from '../../../inputs';
import { active_block_template } from './activeBlock.template';

export function chatSelected() {
  const template = Handlebars.compile(active_block_template);

  const message = new ChatInput({
    label: 'Сообщение',
    chatInputWrapperClass: 'chatMessageInputWrapper',
    chatInputClass: 'chatMessageInput'
  });

  const context = {
    avatarEmpty,
    addFile,
    chatParameters,
    forwardLink,
    chatTitle: 'Выбранный чат',
    message: message.transformToString()
  };

  return template(context);
}
