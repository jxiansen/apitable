

import { ApiTipConstant } from '@apitable/core';
import '@apitable/i18n-lang';
import { Reflector } from '@nestjs/core';
import { ApiException } from '../../../shared/exception';
import { ApiFieldGuard } from './api.field.guard';

describe('ApiDatasheetGuard', () => {
  let guard: ApiFieldGuard;
  // let request;
  let context: any;
  let memberRepository: any;
  let reflector: Reflector;
  let metaService: any;
  beforeAll(() => {
    context = {
      switchToHttp: jest.fn().mockReturnThis(),
      getRequest: jest.fn().mockReturnThis(),
    };
    memberRepository = {
      selectSpaceIdsByUserId: jest.fn().mockReturnThis(),
    };
    reflector = new Reflector();
    metaService = {
      getMetaDataByDstId: jest.fn().mockReturnThis(),
    };
    guard = new ApiFieldGuard(memberRepository, reflector, metaService);
  });

  describe('canActivate', () => {
    it('missing spaceId, return 400 code', () => {
      (context.switchToHttp().getRequest as jest.Mock).mockReturnValueOnce({
        params: {
          dstId: 'abc'
        },
      });
      const error = ApiException.tipError(ApiTipConstant.api_params_instance_space_id_error);
      return guard.canActivate(context).catch(e => {
        return expect(e).toStrictEqual(error);
      });
    });

    it('missing dstId, return 400 code', () => {
      (context.switchToHttp().getRequest as jest.Mock).mockReturnValueOnce({
        params: {
          spaceId: 'abc',
        },
      });
      const error = ApiException.tipError(ApiTipConstant.api_datasheet_not_exist);
      return guard.canActivate(context).catch(e => {
        return expect(e).toStrictEqual(error);
      });
    });

    it('invalid dstId, return 400 code', () => {
      (context.switchToHttp().getRequest as jest.Mock).mockReturnValueOnce({
        datasheet: null,
        params: {
          spaceId: 'bbb',
        },
      });
      const error = ApiException.tipError(ApiTipConstant.api_datasheet_not_exist);
      return guard.canActivate(context).catch(e => {
        return expect(e).toStrictEqual(error);
      });
    });

    it('dstId is not in space, return 400 code', () => {
      (context.switchToHttp().getRequest as jest.Mock).mockReturnValueOnce({
        datasheet: { spaceId: 'aaa' },
        user: {
          id: 'dafad',
        },
        params: {
          spaceId: 'bbb',
          dstId: 'aaa',
        },
      });
      (memberRepository.selectSpaceIdsByUserId as jest.Mock).mockReturnValueOnce(['bbb']);
      const error = ApiException.tipError(ApiTipConstant.api_datasheet_not_visible);
      return guard.canActivate(context).catch(e => {
        return expect(e).toStrictEqual(error);
      });
    });

    it('do not have permission to visit space, return 400 code', () => {
      (context.switchToHttp().getRequest as jest.Mock).mockReturnValueOnce({
        datasheet: 'aaa',
        user: {
          id: 'abadf',
        },
        params: {
          spaceId: 'aaa',
          dstId: 'aaa',
        },
      });
      (memberRepository.selectSpaceIdsByUserId as jest.Mock).mockReturnValueOnce(['bbb']);
      const error = ApiException.tipError(ApiTipConstant.api_forbidden_because_of_not_in_space);
      return guard.canActivate(context).catch(e => {
        return expect(e).toStrictEqual(error);
      });
    });
  });
});
