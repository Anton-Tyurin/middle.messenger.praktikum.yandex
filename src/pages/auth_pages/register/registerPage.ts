import * as Handlebars from 'handlebars';
import {LoginInput} from "../../../components/inputs";
import {SubmitButton} from "../../../components/submitButton";
import {AuthLink} from "../../../components/links";
import {register_page_template} from "./registerPage.template";

export function registerPage() {
    const template = Handlebars.compile(register_page_template);
    const email = new LoginInput({
        "label": "Почта",
        "id": "email",
        "name": "email"
    });
    const login = new LoginInput({
        "label": "Логин",
        "id": "login",
        "type": "text",
        "name": "login"
    });
    const name = new LoginInput({
        "label": "Имя",
        "id": "name",
        "type": "text",
        "name": "name"
    });
    const surname = new LoginInput({
        "label": "Фамилия",
        "id": "surname",
        "type": "text",
        "name": "surname"
    });
    const phone = new LoginInput({
        "label": "Телефон",
        "id": "phone",
        "type": "text",
        "name": "phone"
    });
    const password = new LoginInput({
        "label": "Пароль",
        "id": "password",
        "type": "password",
        "name": "password"
    });
    const passwordRepeat = new LoginInput({
        "label": "Пароль (еще раз)",
        "id": "passwordConfirm",
        "type": "password",
        "name": "passwordConfirm",
        "errorMessage": "Пароли не совпадают"
    });
    const submitButton = new SubmitButton({
        text: "Зарегистрироваться"
    });
    const link = new AuthLink({
        linkText: "Войти",
        linkHref: "/login"
    });
    const context = {
        inputs: [email.transformToString(),
            login.transformToString(),
            name.transformToString(),
            surname.transformToString(),
            phone.transformToString(),
            password.transformToString(),
            passwordRepeat.transformToString()],
        formHeading: `Вход`,
        submitButton: submitButton.transformToString(),
        link: link.transformToString()
    };
    return template(context);
}