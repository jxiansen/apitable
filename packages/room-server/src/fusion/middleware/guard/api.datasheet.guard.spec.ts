import { ApiTipConstant } from '@apitable/core';
import { Reflector } from '@nestjs/core';
import { ApiDatasheetGuard, IApiDatasheetOptions } from 'fusion/middleware/guard/api.datasheet.guard';
import { DATASHEET_HTTP_DECORATE, USER_HTTP_DECORATE } from 'shared/common';
import { ApiException } from '../../../shared/exception';

describe('ApiDatasheetGuard', () => {
  let guard: ApiDatasheetGuard;
  // let request;
  let context: any;
  let memberRepository: any;
  let reflector: Reflector;
  let metaService: any;
  beforeEach(() => {
    // request = app.resolve(REQUEST);
    context = {
      switchToHttp: jest.fn().mockReturnThis(),
      getRequest: jest.fn().mockReturnThis(),
      getHandler: jest.fn().mockReturnThis(),
    };
    memberRepository = {
      selectSpaceIdsByUserId: jest.fn().mockReturnThis(),
    };
    metaService = {
      getMetaDataByDstId: jest.fn().mockReturnThis(),
    };
    reflector = new Reflector();
    guard = new ApiDatasheetGuard(memberRepository, reflector, metaService);
  });

  describe('canActivate', () => {
    it('dstId--null--should return error', () => {
      jest.spyOn(reflector, 'get').mockImplementationOnce((): IApiDatasheetOptions => ({}));
      (context.switchToHttp().getRequest as jest.Mock).mockReturnValueOnce({
        params: {
          dstId: null,
        },
      });
      const error = ApiException.tipError(ApiTipConstant.api_datasheet_not_exist);
      return guard.canActivate(context).catch((e) => {
        return expect(e).toStrictEqual(error);
      });
    });
    it('request datasheet null with error', () => {
      jest.spyOn(reflector, 'get').mockImplementationOnce((): IApiDatasheetOptions => ({}));
      (context.switchToHttp().getRequest as jest.Mock).mockReturnValueOnce({
        datasheet: null,
      });
      const error = ApiException.tipError(ApiTipConstant.api_datasheet_not_exist);
      return guard.canActivate(context).catch((e) => {
        return expect(e).toStrictEqual(error);
      });
    });
    it('request datasheet not in space error', () => {
      jest.spyOn(reflector, 'get').mockImplementationOnce((): IApiDatasheetOptions => ({}));
      (context.switchToHttp().getRequest as jest.Mock).mockReturnValueOnce({
        datasheet: 'aaa',
        user: {
          spaceId: ['aa'],
        },
        params: {
          dstId: 'aaa',
        },
      });
      (memberRepository.selectSpaceIdsByUserId as jest.Mock).mockReturnValueOnce(['bbb']);
      const error = ApiException.tipError(ApiTipConstant.api_datasheet_not_visible);
      return guard.canActivate(context).catch((e) => {
        return expect(e).toStrictEqual(error);
      });
    });
    it('should load metadata if requireMetadata is true', async () => {
      (context.switchToHttp().getRequest as jest.Mock).mockReturnValueOnce({
        [DATASHEET_HTTP_DECORATE]: {
          spaceId: 'aaa',
        },
        [USER_HTTP_DECORATE]: {
          spaceId: ['aa'],
        },
        params: {
          dstId: 'aaa',
        },
      });
      jest.spyOn(reflector, 'get').mockImplementationOnce(
        (): IApiDatasheetOptions => ({
          requireMetadata: true,
        }),
      );
      (metaService.getMetaDataByDstId as jest.Mock).mockReturnValueOnce({});
      (memberRepository.selectSpaceIdsByUserId as jest.Mock).mockReturnValueOnce(['aaa', 'bbb']);
      const result = await guard.canActivate(context);
      expect(result).toBeTruthy();
    });
  });
});
