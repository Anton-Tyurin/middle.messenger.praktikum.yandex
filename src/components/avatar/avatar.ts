import { Block } from '../../core/Block';
import { TProfileAvatar } from '../../types/components';
import { avatar_template } from './avatar.template';

export class Avatar extends Block {
  constructor(context: TProfileAvatar, events = {}) {
    super('div', {
      context: {
        ...context
      },
      template: avatar_template,
      events
    });
  }
}
