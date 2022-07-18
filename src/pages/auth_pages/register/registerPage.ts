import * as Handlebars from 'handlebars';
import {Input} from "../../../components/inputs/loginInput/input";
import {SubmitButton} from "../../../components/submitButton/submitButton";
import {AuthLink} from "../../../components/links/authLink/authLink";
import {register_page_template} from "./registerPage.template";

export function registerPage() {
    const template = Handlebars.compile(register_page_template);
    const email = new Input({
        "label": "Почта",
        "id": "email",
        "name": "email"
    });
    const login = new Input({
        "label": "Логин",
        "id": "login",
        "type": "text",
        "name": "login"
    });
    const name = new Input({
        "label": "Имя",
        "id": "name",
        "type": "text",
        "name": "name"
    });
    const surname = new Input({
        "label": "Фамилия",
        "id": "surname",
        "type": "text",
        "name": "surname"
    });
    const phone = new Input({
        "label": "Телефон",
        "id": "phone",
        "type": "text",
        "name": "phone"
    });
    const password = new Input({
        "label": "Пароль",
        "id": "password",
        "type": "password",
        "name": "password"
    });
    const passwordRepeat = new Input({
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