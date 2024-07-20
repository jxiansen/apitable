import { deleteCookie, setCookie } from 'cookies-next';
import { NextPageContext } from 'next';

export const getRequestHeaders = (context: NextPageContext) => {
  const headers: Record<string, string> = {};
  const language = context.req?.headers['accept-language'];
  const cookie = context.req?.headers.cookie;

  if (language) {
    headers['Accept-Language'] = language;
  }

  if (cookie) {
    headers.cookie = cookie;
  }

  return headers;
};

/**
 * ！！！！Warning
 * The current method will only be called in getInitProps and will write the lang configuration in client/info to the cookie.
 * The lang value exists only as a request header parameter for the api and the front-end is not allowed to call
 */
export const setClientCookie = (cookies: string[], ctx: NextPageContext) => {
  cookies.map((item) => {
    let key: string = '';
    let value: string = '';
    const optional: Record<string, string | Date> = {};
    const _cookie = item.split('; ');

    _cookie.map((_item, _index) => {
      const result = _item.split('=');
      if (_index === 0) {
        key = result[0];
        value = result[1];
      } else {
        const _k = String(result[0]).toLowerCase();
        optional[_k] = _k === 'expires' ? new Date(result[1]) : result[1];
      }
    });

    /**
     * If sensorsdata2015jssdkcross is not cleared here, the following error will occur
     * Invalid character in header content ["cookie"]
     */
    deleteCookie('sensorsdata2015jssdkcross', { req: ctx.req, res: ctx.res });
    setCookie(key, value, { req: ctx.req, res: ctx.res, ...optional });
  });
};

export const isEmbedPage = () => {
  return window.location.href.indexOf('embed') > -1;
};
