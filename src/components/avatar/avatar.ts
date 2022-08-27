import { v4 as uuidv4 } from 'uuid';
import { Block } from '../../core/Block';
import { TProfileAvatar } from '../../types/components';
import { AvatarTemplate } from './avatar.template';

export class Avatar extends Block {
  constructor(context: TProfileAvatar, events = {}) {
    super('div', {
      context: {
        ...context,
        id: uuidv4()
      },
      template: AvatarTemplate,
      events
    });
  }
}
