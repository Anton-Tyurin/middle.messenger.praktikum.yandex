import {Block} from "../../core/Block";
import {submit_button_template} from "./submitButton.template";
import {TButton} from "../../types/components";


export class SubmitButton extends Block {
    constructor(context: TButton, events = {}) {
        super('div', {
            context: {
                ...context,
            },
            template: submit_button_template,
            events,
        });
    }
}