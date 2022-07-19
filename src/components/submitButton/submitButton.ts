import { v4 as uuidv4 } from 'uuid';
import { Block } from '../../core/Block';
import { submit_button_template } from './submitButton.template';
import { TButton } from '../../types/components';

export class SubmitButton extends Block {
  constructor(context: TButton, events = {}) {
    super('div', {
      context: {
        ...context,
        id: uuidv4()
      },
      template: submit_button_template,
      events
    });
  }
}
