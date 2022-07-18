import Handlebars from "handlebars";
import {error_template} from "../base_template/error_page.template";
import {TErrorScheme} from "../../../types/pages";

export function error500Page() {
    const template = Handlebars.compile(error_template);
    const context: TErrorScheme = {
        code: "500",
        title: "500_page",
        linkText: "Назад к чатам",
        errorMessage: "Мы уже фиксим",
        linkPath: "/",
    };
    return template(context);
}