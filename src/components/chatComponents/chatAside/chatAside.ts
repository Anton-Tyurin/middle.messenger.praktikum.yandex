import {chat_aside_template} from "./chatAside.template";
import {Block} from "../../../core/Block";
import {ChatProfileLink} from "../../links/chatProfileLink/chatProfileLink";
import {ChatSearchInput} from "../../inputs/chatSearchInput/chatSearchInput";
import avatarEmpty from "../../../../static/img/avatar/avatarEmpty.svg"
import {ChatListItem} from "../chatListItem/chatListItem";
import { v4 as uuidv4 } from 'uuid';

export class ChatAside extends Block {

    constructor(context: any, events = {}) {
        super('div', {
            context: {
                ...context,
                chatProfileLink: new ChatProfileLink({linkText: "Профиль"}).transformToString(),
                searchInput: new ChatSearchInput({label: "Поиск"}).transformToString(),
                listItems: [
                    new ChatListItem({name: 'Андрей', message: 'Изображение', id: uuidv4(), avatarEmpty}).transformToString(),
                    new ChatListItem({name: 'Киноклуб', message: 'Вы: стикер', id: uuidv4(), avatarEmpty}).transformToString(),
                    new ChatListItem({name: 'Илья', message: 'Друзья, у меня для вас особенный выпуск новостей!...', id: uuidv4(), avatarEmpty}).transformToString(),
                    new ChatListItem({name: 'Вадим', message: 'Вы: Круто!', id: uuidv4(), avatarEmpty}).transformToString(),
                    new ChatListItem({name: 'тет-а-теты', message: 'И Human Interface Guidelines и Material Design рекомендуют...', id: uuidv4(), avatarEmpty}).transformToString(),
                    new ChatListItem({name: '1, 2, 3', message: 'Миллионы россиян ежедневно проводят десятки часов свое...', id: uuidv4(), avatarEmpty}).transformToString(),
                    new ChatListItem({name: 'Design Destroyer', message: 'В 2008 году художник Jon Rafman  начал собирать...', id: uuidv4(), avatarEmpty}).transformToString(),
                    new ChatListItem({name: 'Day.', message: 'Так увлёкся работой по курсу, что совсем забыл его анонсир...', id: uuidv4(), avatarEmpty}).transformToString(),
                    new ChatListItem({name: 'Стас Рогозин', message: 'Можно или сегодня или завтра вечером.', id: uuidv4(), avatarEmpty}).transformToString(),
                ],
            },
            template: chat_aside_template,
            events,
        });
    }
}