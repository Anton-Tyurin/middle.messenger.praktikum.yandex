import { v4 as uuidv4 } from 'uuid';
import { Block } from '../../../../../core/Block';
import { ModalButtonTemplate } from './modalButton.template';

export class ModalButton extends Block {
  constructor(
    context: { buttonText: string },
    events: { click?: () => void } = {}
  ) {
    super('div', {
      context: {
        ...context,
        id: uuidv4()
      },
      template: ModalButtonTemplate,
      events
    });
  }
}
