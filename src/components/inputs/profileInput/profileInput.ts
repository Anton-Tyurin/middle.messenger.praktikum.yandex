import { v4 as uuidv4 } from 'uuid';
import {Block} from "../../../core/Block";
import {TProfileInput} from "../../../types/components";
import {profile_input_template} from "./profileInput.template";

export class ProfileInput extends Block {
    constructor(context: TProfileInput, events = {}) {
        super('div', {
            context: {
                ...context,
                id: uuidv4(),
            },
            template: profile_input_template,
            events,
        });
    }
}