import { CallHandler, ExecutionContext, HttpStatus, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommonStatusMsg } from 'shared/common';

/**
 * HTTP Response Interceptor
 * Interception of a successful response, wrapping the response data and returning a uniform structure
 */
@Injectable()
export class HttpResponseInterceptor implements NestInterceptor {
  intercept(_context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data: any) => {
        if (data?.code) {
          return data;
        }
        return {
          success: true,
          code: HttpStatus.OK,
          message: CommonStatusMsg.DEFAULT_SUCCESS_MESSAGE,
          data,
        };
      }),
    );
  }
}
