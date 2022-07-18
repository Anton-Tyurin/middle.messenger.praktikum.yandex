import * as Handlebars from 'handlebars';
import {login_page_template} from "./loginPage.template";
import {Input} from "../../../components/inputs/loginInput/input";
import {SubmitButton} from "../../../components/submitButton/submitButton";
import {AuthLink} from "../../../components/links/authLink/authLink";
import {TLoginScheme} from "../../../types/pages";

export function loginPage() {
    const template = Handlebars.compile(login_page_template);
    const loginInput = new Input({
            name: 'login',
            label: 'Логин',
            type: 'text',
            required: true,
            errorMessage: 'Неверный логин',
        });
    const passwordInput = new Input({
            name: 'password',
            label: 'Пароль',
            type: 'password',
            required: true,
            errorMessage: 'Пароль не безопасен',
        });
    const submitButton = new SubmitButton({
            text: "Авторизироваться"
        });
    const link = new AuthLink({
            linkText: "Нет аккаунта?",
            linkHref: "/register"
    });
    const context: TLoginScheme = {
        inputs: [loginInput.transformToString(), passwordInput.transformToString()],
        formHeading: `Вход`,
        submitButton: submitButton.transformToString(),
        link: link.transformToString()
    };
    return template(context);
}