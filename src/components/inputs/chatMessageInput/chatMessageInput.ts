import { v4 as uuidv4 } from 'uuid';
import {Block} from "../../../core/Block";
import {TInput} from "../../../types/components";
import {chat_message_input_template} from "./chatMessageInput.template";

export class ChatMessageInput extends Block {
    constructor(context: TInput, events = {}) {
        super('div', {
            context: {
                ...context,
                id: uuidv4(),
            },
            template: chat_message_input_template,
            events,
        });
    }
}