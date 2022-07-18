import { v4 as uuidv4 } from 'uuid';
import {Block} from "../../../core/Block";
import {TInput} from "../../../types/components";
import {chat_search_input_template} from "./chatSearchInput.template";

export class ChatSearchInput extends Block {
    constructor(context: TInput, events = {}) {
        super('div', {
            context: {
                ...context,
                id: uuidv4(),
            },
            template: chat_search_input_template,
            events,
        });
    }
}