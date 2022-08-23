import { Block } from '../../../../core/Block';
import { ChatModalTemplate } from './сhatModal.template';
import { TChatModalTemplate } from '../../../../types/components';

export class ChatModal extends Block {
  constructor(context: TChatModalTemplate, events = {}) {
    super(
      'div',
      {
        context: {
          ...context
        },
        template: ChatModalTemplate,
        events
      },
      `${context.modalClassName} chatModalHidden`
    );
  }
}
