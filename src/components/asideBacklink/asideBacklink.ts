import { v4 as uuidv4 } from 'uuid';
import { Block } from '../../core/Block';
import { TAsideBacklink } from '../../types/components';
import { aside_backlink_template } from './asideBacklink.template';

export class AsideBacklink extends Block {
  constructor(context: TAsideBacklink, events = {}) {
    super('div', {
      context: {
        ...context,
        id: uuidv4()
      },
      template: aside_backlink_template,
      events
    });
  }
}
