import * as Handlebars from 'handlebars';
import {main_chat_template} from "./mainChat.template";
import {ChatAside} from "../../../components/chatComponents";
import {TMainChat} from "../../../types/pages";
import {chatSelected} from "../../../components/chatComponents";
import {ROUTES} from "../../../constants/routes";
import {emptyChatBlock} from "../../../components/chatComponents";

export function mainChat() {
    const pathname: string = window.location.pathname;
    const chatMessageBlock = pathname === ROUTES.MAIN_CHAT_ACTIVE_DIALOG ? chatSelected : emptyChatBlock;

    const template = Handlebars.compile(main_chat_template);
    const chatAside = new ChatAside({});
    const context: TMainChat = {
        chatAside: chatAside.transformToString(),
        chatMessageBlock: chatMessageBlock
    }
    return template(context);
}