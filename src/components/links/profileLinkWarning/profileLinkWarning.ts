import { Block } from '../../../core/Block';
import { TLink } from '../../../types/components';
import { profile_link_warning_template } from './profileLinkWarning.template';

export class ProfileLinkWarning extends Block {
  constructor(context: TLink, events = {}) {
    super('div', {
      context: {
        ...context
      },
      template: profile_link_warning_template,
      events
    });
  }
}
