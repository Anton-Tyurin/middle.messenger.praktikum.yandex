import * as Handlebars from 'handlebars';
import {empty_block_template} from "./emptyBlock.template";
import {TEmptyChat} from "../../../../types/components";

export function emptyChatBlock() {
    const template = Handlebars.compile(empty_block_template);

    const context: TEmptyChat = {
        title: 'Выберите чат чтобы отправить сообщение',
    };

    return template(context);
}