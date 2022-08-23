import { assert } from 'chai';
import { Router } from './router';
import { Routes } from '../constants/routes';
import { Error404Page, LoginPage } from '../pages';

describe('Router', () => {
  it('Must be defined', () => {
    const router = new Router('.root');
    assert.exists(router);
  });

  it('New Router has an empty arr of routes', () => {
    const router = new Router('.root');
    assert.isArray(router.routes, 'Routes is array');
  });

  it('Can add a new route', () => {
    const router = new Router('.root');
    router.use(Routes.MAIN, LoginPage);

    const { routes } = router;
    assert.equal(routes[0]._pathname, Routes.MAIN, 'Route path name is correct');
  });

  it('Can find a route if it is among used routes', () => {
    const router = new Router('.root');
    router
      .use(Routes.MAIN, LoginPage)
      .use(Routes.PAGE_404, Error404Page);

    assert.equal(router.getRoute(Routes.PAGE_404)._pathname, Routes.PAGE_404, 'Got a correct route');
    assert.isUndefined(router.getRoute('/some_route'), "Can't get an unexisting route");
  });
});
