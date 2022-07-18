import * as Handlebars from 'handlebars';
import {TProfilePage} from "../../../types/pages";
import {profile_page_template} from "./profilePage.template";
import {AsideBacklink} from "../../../components/asideBacklink";
import {Avatar} from "../../../components/avatar";
import {ProfileInput} from "../../../components/inputs";
import {ProfileLink} from "../../../components/links";
import {ProfileLinkWarning} from "../../../components/links";

import avatarImg from "../../../../static/img/avatar/avatar.svg";
import backlink from "../../../../static/img/backLink/backLink.svg"

export function profilePage() {
    const template = Handlebars.compile(profile_page_template);

    const asideBackLink = new AsideBacklink({linkHref: "/", backlink: backlink});
    const avatar = new Avatar({profileName: "Иван", avatar: avatarImg});

    const emailField = new ProfileInput({
        "label": "Почта",
        "name": "email",
        "value": "pochta@yandex.ru",
        "type": "text",
        "fieldDisabled": true
    });
    const login = new ProfileInput({
        "label": "Логин",
        "type": "text",
        "name": "login",
        "value": "ivanivanov",
        "fieldDisabled": true
    });
    const name = new ProfileInput({
        "label": "Имя",
        "type": "text",
        "name": "name",
        "value": "Иван",
        "fieldDisabled": true
    });
    const surname = new ProfileInput({
        "label": "Фамилия",
        "type": "text",
        "name": "surname",
        "value": "Иванов",
        "fieldDisabled": true
    });
    const phone = new ProfileInput({
        "label": "Телефон",
        "type": "text",
        "name": "phone",
        "value": "+7(909)9673030",
        "fieldDisabled": true
    });
    const editLink = new ProfileLink({
        "linkHref": "./profileEdit",
        "linkText": "Изменить данные"
    })
    const changePasswordLink = new ProfileLink({
        "linkHref": "./profileChangePassword",
        "linkText": "Изменить пароль"
    })
    const exitLink = new ProfileLinkWarning({
            "linkHref": "./",
            "linkText": "Выйти"
        })
    const context: TProfilePage = {
        asideBacklink: asideBackLink.transformToString(),
        avatar: avatar.transformToString(),
        inputs: [emailField.transformToString(), login.transformToString(), name.transformToString(),
         surname.transformToString(), phone.transformToString()],
        links: [editLink.transformToString(), changePasswordLink.transformToString(), exitLink.transformToString()]
    };

    return template(context);
}