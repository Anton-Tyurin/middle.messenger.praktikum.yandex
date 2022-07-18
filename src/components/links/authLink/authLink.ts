import {Block} from "../../../core/Block";
import {TLink} from "../../../types/components";
import {auth_link_template} from "./authLink.template";

export class AuthLink extends Block {
    constructor(context: TLink, events = {}) {
        super('div', {
            context: {
                ...context
            },
            template: auth_link_template,
            events,
        });
    }
}