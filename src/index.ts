import { IndexPageTemplate } from './index.template';
import { ROUTES } from './constants/routes';
import './styles/styles.scss';
import {
  error404Page,
  error500Page,
  loginPage, mainChat,
  profileChangePasswordPage,
  profileEditPage,
  profilePage,
  registerPage
} from './pages';

const root: HTMLElement | null = document.getElementById('root');
const { pathname } = window.location;
if (root) {
  switch (pathname) {
    case (ROUTES.MAIN): {
      root.innerHTML = IndexPageTemplate;
      break;
    }
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
    // TODO: сделать аккуратнее, чтобы мы не уходили со страницы
    case (ROUTES.MAIN_CHAT): {
      root.innerHTML = mainChat();
      break;
    }
    case (ROUTES.MAIN_CHAT_ACTIVE_DIALOG): {
      root.innerHTML = mainChat();
      break;
    }
    default: {
      break;
    }
  }
}
