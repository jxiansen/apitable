import { ApiCacheInterceptor } from 'shared/interceptor/api.cache.interceptor';

describe('ApiCacheInterceptor', () => {
  let interceptor: ApiCacheInterceptor;
  let cacheManager: any;
  let reflector: any;
  let context: any;
  beforeAll(() => {
    cacheManager = jest.fn().mockReturnThis();
    reflector = jest.fn().mockReturnThis();
    interceptor = new ApiCacheInterceptor(cacheManager, reflector);
    context = {
      switchToHttp: jest.fn().mockReturnThis(),
      getRequest: jest.fn().mockReturnThis(),
    };
  });

  describe('isRequestCacheable', () => {
    it('post request method--should return false', () => {
      const mockTrue = { isApiCacheEnabled: true };
      jest.mock('app.environment', () => mockTrue);
      (context.switchToHttp().getRequest as jest.Mock).mockReturnValueOnce({
        method: 'POST',
      });
      const result = interceptor.isRequestCacheable(context);
      expect(result).toEqual(false);
    });

    it('patch method--should return false', () => {
      const mockTrue = { isApiCacheEnabled: true };
      jest.mock('app.environment', () => mockTrue);
      (context.switchToHttp().getRequest as jest.Mock).mockReturnValueOnce({
        method: 'PATCH',
      });
      const result = interceptor.isRequestCacheable(context);
      expect(result).toEqual(false);
    });

    it('put method--should return false', () => {
      const mockTrue = { isApiCacheEnabled: true };
      jest.mock('app.environment', () => mockTrue);
      (context.switchToHttp().getRequest as jest.Mock).mockReturnValueOnce({
        method: 'PUT',
      });
      const result = interceptor.isRequestCacheable(context);
      expect(result).toEqual(false);
    });

    it('only get method--should return false', () => {
      const mockTrue = { isApiCacheEnabled: true };
      jest.mock('app.environment', () => mockTrue);
      (context.switchToHttp().getRequest as jest.Mock).mockReturnValue({
        method: 'GET',
        headers: {},
      });
      const result = interceptor.isRequestCacheable(context);
      expect(result).toEqual(false);
    });

    it('get method with header--should return true', () => {
      const mockTrue = { isApiCacheEnabled: true };
      jest.mock('app.environment', () => mockTrue);
      (context.switchToHttp().getRequest as jest.Mock).mockReturnValue({
        method: 'GET',
        headers: {
          'x-max-age': 10,
        },
      });
      const result = interceptor.isRequestCacheable(context);
      expect(result).toEqual(false);
    });
  });
});
