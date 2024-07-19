

import { ConfigConstant } from '@apitable/core';
import { isRabbitContext } from '@golevelup/nestjs-rabbitmq';
import { CallHandler, ExecutionContext, HttpStatus, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * HTTP Response Intercept
 * success response only, error response @code{GlobalExceptionFilter}
 * response standard format data
 */
@Injectable()
export class HttpResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // avoid to handle error mes in queue worker mode
    if (isRabbitContext(context)) {
      return next.handle();
    }
    const request = context.switchToHttp().getRequest();
    const response = context.switchToHttp().getResponse();
    /*
     * FIXME: The problem comes from a low version of @Nestjs-OpenTelemetry integration and wants to upgrade the dependency to solve it,
     *  at which point it is necessary to upgrade Nestjs, which will take a little time to verify...
     */
    request.route = Object.assign(request.route || {}, {
      path: request.raw.url,
    });
    response.__proto__.once = response.raw.once;
    response.__proto__.removeListener = response.raw.removeListener;
    // @ts-ignore
    response.__proto__.on = function(method, callback) {
      callback();
    };

    return next.handle().pipe(
      map((data: any) => {
        response.header('Cache-Control', 'no-cache,no-store,must-revalidate');
        if (data?.response instanceof Buffer) {
          response.header('Content-Type', 'application/json');
          return data!.response;
        }
        if (data?.code) {
          return data;
        }
        return {
          success: true,
          code: HttpStatus.OK,
          message: ConfigConstant.DefaultStatusMessage.OK_MSG,
          data,
        };
      }),
    );
  }
}
