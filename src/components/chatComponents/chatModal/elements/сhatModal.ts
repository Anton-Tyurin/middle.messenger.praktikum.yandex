import { Block } from '../../../../core/Block';
import { chat_modal_template } from './сhatModal.template';
import { TChatModalTemplate } from '../../../../types/components';

export class ChatModal extends Block {
  constructor(context: TChatModalTemplate, events = {}) {
    super('div', {
      context: {
        ...context
      },
      template: chat_modal_template,
      events
    }, `${context.modalClassName} chatModalHidden`);
  }
}
