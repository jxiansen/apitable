import { isEmpty } from '@nestjs/common/utils/shared.utils';
import { AxiosResponse } from 'axios';
import { Observable, lastValueFrom } from 'rxjs';
import { CommonException, ServerException } from 'shared/exception';
import { IHttpSuccessResponse } from 'shared/interfaces';
import { IAuthHeader } from 'shared/interfaces/axios.interfaces';

/**
 * set auth headers
 * @param cookie Cookie KEY
 * @param token Authorization Header
 */
export function createAuthHeaders({ cookie, token }: IAuthHeader): any {
  if (cookie) {
    return {
      Cookie: cookie,
    };
  }

  if (token) {
    return {
      Authorization: token,
    };
  }
}

export function withSpaceIdHeader(header: any, spaceId?: string) {
  return spaceId ? { ...header, 'X-Space-Id': spaceId } : header;
}

/**
 * get the specified value from the cookie string
 *
 * @param cookie
 * @param key
 */
export const getValueFromCookie = (cookie: string, key: string): string | null => {
  if (cookie.length > 0) {
    const ca = cookie.split(';');
    for (const i of ca) {
      const c = i.trim();
      if (c.includes(key)) {
        return c.slice(key.length + 1, c.length);
      }
    }
    return null;
  }
  return null;
};

export const getRequestLanguage = (headers: any): string => {
  const lang = headers['accept-language'];
  if (isEmpty(lang)) {
    return 'zh-CN';
  }
  return lang.split(',')[0].trim();
};

export const getResponseData = async (res: Observable<AxiosResponse<any>>): Promise<any> => {
  const response = await lastValueFrom(res);
  if (response.status != 200) {
    throw new ServerException(CommonException.SERVER_ERROR);
  }
  const restResponse = response.data as IHttpSuccessResponse<any>;
  if (!restResponse.success) {
    throw new Error(restResponse.message);
  }
  return restResponse!.data;
};
