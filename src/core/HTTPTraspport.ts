import { METHODS } from '../constants/core';
import { HTTPOptions, REJECT_TEXT } from '../types/core';
import { queryStringify } from '../utils/core';

export class HTTPTransport {
  get = (url: string, options: HTTPOptions = {}) => this.request(url, { ...options, method: METHODS.GET }, options.timeout);

  post = (url: string, options: HTTPOptions = {}) => this.request(url, { ...options, method: METHODS.POST }, options.timeout);

  put = (url: string, options: HTTPOptions = {}) => this.request(url, { ...options, method: METHODS.PUT }, options.timeout);

  delete = (url: string, options: HTTPOptions = {}) => this.request(url, { ...options, method: METHODS.DELETE }, options.timeout);

  request = (url: string, options: HTTPOptions = { headers: { 'Content-type': 'application/json' } }, timeout: number = 5000) => {
    const { headers = {}, method, data } = options;

    return new Promise((resolve, reject) => {
      if (!method) {
        reject(REJECT_TEXT);
        return;
      }

      const xhr = new XMLHttpRequest();
      const isGetRequest = method === METHODS.GET;

      xhr.open(
        method,
        isGetRequest && !!data
          ? `${url}${queryStringify(data)}`
          : url
      );

      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      });

      xhr.onload = () => {
        const { status, response } = xhr;
        if (status >= 200 && status <= 299) {
          resolve(response);
        } else {
          reject(response);
        }
      };

      xhr.onabort = reject;
      xhr.onerror = reject;

      xhr.timeout = timeout;
      xhr.ontimeout = reject;

      if (isGetRequest || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  };
}
