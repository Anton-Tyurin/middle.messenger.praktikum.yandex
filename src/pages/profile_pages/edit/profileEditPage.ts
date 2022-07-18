import * as Handlebars from 'handlebars';
import {TProfilePage} from "../../../types/pages";
import {AsideBacklink} from "../../../components/asideBacklink/asideBacklink";
import backlink from "../../../../static/img/backLink/backLink.svg"
import {profile_edit_page_template} from "./profileEditPage.template";
import {Avatar} from "../../../components/avatar/avatar";
import avatarImg from "../../../../static/img/avatar/avatar.svg";
import {ProfileInput} from "../../../components/profileInput/profileInput";
import {SubmitButton} from "../../../components/submitButton/submitButton";
export function profileEditPage() {
    const template = Handlebars.compile(profile_edit_page_template);

    const asideBackLink = new AsideBacklink({linkHref: "/", backlink: backlink});
    const avatar = new Avatar({avatar: avatarImg});

    const emailField = new ProfileInput({
        "label": "Почта",
        "name": "email",
        "value": "pochta@yandex.ru",
        "type": "text"
    });
    const login = new ProfileInput({
        "label": "Логин",
        "type": "text",
        "name": "login",
        "value": "ivanivanov"
    });
    const name = new ProfileInput({
        "label": "Имя",
        "type": "text",
        "name": "name",
        "value": "Иван"
    });
    const surname = new ProfileInput({
        "label": "Фамилия",
        "type": "text",
        "name": "surname",
        "value": "Иванов"
    });
    const phone = new ProfileInput({
        "label": "Телефон",
        "type": "text",
        "name": "phone",
        "value": "+7(909)9673030"
    });
    const saveChangesButton = new SubmitButton({
        "text": "Сохранить"
    })

    const context: TProfilePage = {
        asideBacklink: asideBackLink.transformToString(),
        avatar: avatar.transformToString(),
        inputs: [emailField.transformToString(), login.transformToString(), name.transformToString(),
            surname.transformToString(), phone.transformToString()],
        submitBtn: saveChangesButton.transformToString()
    };
    return template(context);
}