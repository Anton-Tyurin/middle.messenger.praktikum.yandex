import {IndexPageTemplate} from "./index.template";
import {ROUTES} from "./constants/routes";
import "./styles/styles.scss"
import {error404Page, error500Page, loginPage, registerPage} from "./pages";
import {profilePage} from "./pages/profile_pages/profile/profilePage";
import {profileEditPage} from "./pages/profile_pages/edit/profileEditPage";
import {profileChangePasswordPage} from "./pages/profile_pages/change_password/profileChangePasswordPage";

const root: HTMLElement | null = document.getElementById('root');
const pathname: string = window.location.pathname;
if (root) {
    switch (pathname) {
        case (ROUTES.PAGE_404): {
            root.innerHTML = error404Page();
            break;
        }
        case (ROUTES.PAGE_500): {
            root.innerHTML = error500Page();
            break;
        }
        case (ROUTES.LOGIN): {
            root.innerHTML = loginPage();
            break;
        }
        case (ROUTES.REGISTER): {
            root.innerHTML = registerPage();
            break;
        }
        case (ROUTES.PROFILE): {
            root.innerHTML = profilePage();
            break;
        }
        case (ROUTES.PROFILE_EDIT): {
            root.innerHTML = profileEditPage();
            break;
        }
        case (ROUTES.PROFILE_CHANGE_PASSWORD): {
            root.innerHTML = profileChangePasswordPage();
            break;
        }
        default: {
            root.innerHTML = IndexPageTemplate;
            break;
        }
    }
    console.log(window.location.pathname)
}
