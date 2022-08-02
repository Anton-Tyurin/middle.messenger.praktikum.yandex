import { v4 as uuidv4 } from 'uuid';
import { Block } from '../../../core/Block';
import { TLink } from '../../../types/components';
import { auth_link_template } from './authLink.template';

export class AuthLink extends Block {
  constructor(context: TLink, events = {}) {
    super('div', {
      context: {
        ...context,
        id: uuidv4()
      },
      template: auth_link_template,
      events
    });
  }
}
