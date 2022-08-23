import { v4 as uuidv4 } from 'uuid';
import { Block } from '../../../core/Block';
import { LoginInputTemplate } from './loginInput.template';
import { TInput } from '../../../types/components';

export class LoginInput extends Block {
  constructor(context: TInput, events = {}) {
    super('div', {
      context: {
        ...context,
        id: uuidv4()
      },
      template: LoginInputTemplate,
      events
    });
  }
}
