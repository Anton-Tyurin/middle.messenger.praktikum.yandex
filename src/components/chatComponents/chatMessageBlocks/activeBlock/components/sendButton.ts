import { v4 as uuidv4 } from 'uuid';
import { SendButtonTemplate } from './sendButton.template';
import { Block } from '../../../../../core/Block';

export class SendButton extends Block {
  constructor(context: {forwardLink: string}, events: {click?: () => void} = {}) {
    super('div', {
      context: {
        ...context,
        id: uuidv4()
      },
      template: SendButtonTemplate,
      events
    });
  }
}
