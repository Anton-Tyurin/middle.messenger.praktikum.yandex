import { TRoute } from '../types/router';
import { Dictionary } from '../types/core';
import { ROUTES } from '../constants/routes';
import { Route } from './route';

export class Router {
  routes: TRoute[];

  history: History;

  _currentRoute: TRoute | undefined;

  _rootQuery: string;

  // eslint-disable-next-line no-use-before-define
  static __instance: Router | null;

  constructor(rootQuery: string) {
    if (Router.__instance) {
      /*eslint-disable */
      return Router.__instance;
      /* eslint-enable */
    }

    this.routes = [];
    this.history = window.history;
    this._currentRoute = undefined;

    this._rootQuery = rootQuery;

    Router.__instance = this;
  }

  use(pathname: string, block: Dictionary, context: Dictionary = {}) {
    const route: TRoute = new Route(pathname, block, {
      rootQuery: this._rootQuery,
      context
    });
    this.routes.push(route);
    return this;
  }

  start() {
    window.onpopstate = (event: PopStateEvent & { currentTarget: any }) => {
      this._onRoute(event.currentTarget.location.pathname);
    };

    this._onRoute(window.location.pathname);
  }

  _onRoute(pathname: string) {
    const route = this.getRoute(pathname);

    if (this._currentRoute && this._currentRoute !== route) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;

    try {
      route?.navigate(pathname);
    } catch (e) {
      const errorPage = this.getRoute(`/${ROUTES.PAGE_401}`);
      this._currentRoute = errorPage;
      errorPage?.navigate(`/${ROUTES.PAGE_401}`);
    }
  }

  go(pathname?: string) {
    if (pathname) {
      this.history.pushState({}, '', pathname);
      this._onRoute(pathname);
    } else {
      this.history.go();
    }
  }

  getRoute(pathname: string) {
    return this.routes.find((route) => route.match(pathname));
  }

  back() {
    this.history.back();
  }

  forward() {
    this.history.forward();
  }
}
