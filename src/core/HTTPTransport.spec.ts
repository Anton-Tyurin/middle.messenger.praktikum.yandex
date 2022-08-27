import { expect } from 'chai';
import { HTTPTransport } from './HTTPTraspport';

describe('Auth requests', () => {
  it('400 Error', () => {
    const client = new HTTPTransport('/auth');
    client.post('/signin', { data: {} }).then((data) => {
      expect((data as XMLHttpRequest).status).to.eq(400);
    });
  });
  it('401 empty data', () => {
    const client = new HTTPTransport('/auth');
    const user = {
      login: '',
      password: ''
    };
    client.post('/signin', { data: user }).then((data) => {
      expect((data as XMLHttpRequest).status).to.eq(401);
    });
  });
});
