

import { ApiTipConstant } from '@apitable/core';
import { ApiException } from '../../../shared/exception';
import { ApiAuthGuard } from './api.auth.guard';

describe('ApiAuthGuard', () => {
  let guard: ApiAuthGuard;
  // let request;
  let context: any;
  beforeEach(() => {
    context = {
      switchToHttp: jest.fn().mockReturnThis(),
      getRequest: jest.fn().mockReturnThis(),
    };
    guard = new ApiAuthGuard();
  });

  describe('canActivate', () => {
    it('request user null error', () => {
      const error = ApiException.tipError(ApiTipConstant.api_unauthorized);
      (context.switchToHttp().getRequest as jest.Mock).mockReturnValueOnce({
        user: null,
      });
      try {
        guard.canActivate(context);
      } catch (e) {
        expect(e).toStrictEqual(error);
      }
    });
    it('request user not null with true', () => {
      (context.switchToHttp().getRequest as jest.Mock).mockReturnValueOnce({
        user: 'aaa',
      });
      expect(guard.canActivate(context)).toBe(true);
    });
  });
});
