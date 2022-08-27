import { v4 as uuidv4 } from 'uuid';
import { Block } from '../../../core/Block';
import { TInput } from '../../../types/components';
import { ProfileInputTemplate } from './profileInput.template';

export class ProfileInput extends Block {
  constructor(context: TInput, events = {}) {
    super('div', {
      context: {
        ...context,
        id: uuidv4()
      },
      template: ProfileInputTemplate,
      events
    });
  }
}
