import { v4 as uuidv4 } from 'uuid';
import {Block} from "../../core/Block";
import {login_input_template} from "./input.template";
import {TInput} from "../../types/components";

export class Input extends Block {
    constructor(context: TInput, events = {}) {
        super('div', {
            context: {
                ...context,
                id: uuidv4(),
            },
            template: login_input_template,
            events,
        });
    }
}