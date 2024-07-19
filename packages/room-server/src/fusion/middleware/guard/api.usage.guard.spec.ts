

import { ApiTipConstant } from '@apitable/core';
import '@apitable/i18n-lang';
import { RestService } from 'shared/services/rest/rest.service';
import { ApiException, CommonException, ServerException } from '../../../shared/exception';
import { ApiUsageGuard } from './api.usage.guard';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from 'app.module';

describe('ApiUsageGuard', () => {
  let app: NestFastifyApplication;
  let guard: ApiUsageGuard;
  let restService: RestService;
  let context: any;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = module.createNestApplication<NestFastifyApplication>(new FastifyAdapter());
    await app.init();
    context = {
      switchToHttp: jest.fn().mockReturnThis(),
      getRequest: jest.fn().mockReturnThis(),
    };
    restService = app.get(RestService);
    guard = app.get(ApiUsageGuard);
  });

  afterAll(async () => {
    await app.close();
  });

  describe('canActivate', () => {
    it('usage--call backend error--should return error', () => {
      jest.spyOn(restService, 'getApiUsage').mockImplementationOnce(
        () => {
          throw new ServerException(CommonException.SERVER_ERROR);
        },
      );
      return guard.canActivate(context).catch(e => {
        return expect(e).toStrictEqual(ApiException.tipError(ApiTipConstant.api_server_error));
      });
    });
    it('usage not isAllowOverLimit throws an error', () => {
      jest.spyOn(restService, 'getApiUsage').mockImplementationOnce(
        () => Promise.resolve({
          isAllowOverLimit: false,
          maxApiUsageCount: 2,
          apiCallUsedNumsCurrentMonth: 2,
          apiUsageUsedCount: 4,
          apiCallNumsPerMonth: 4
        }),
      );
      return guard.canActivate(context).catch(e => {
        return expect(e).toStrictEqual(ApiException.tipError(ApiTipConstant.api_forbidden_because_of_usage));
      });
    });
    it('java api not response throws an error', () => {
      jest.spyOn(restService, 'getApiUsage').mockImplementationOnce(
        (): any => {
          return null;
        },
      );
      return guard.canActivate(context).catch(e => {
        return expect(e).toStrictEqual(ApiException.tipError(ApiTipConstant.api_forbidden));
      });
    });
  });
});
