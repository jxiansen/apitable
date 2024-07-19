import { ApiTipConstant } from '@apitable/core';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { USER_HTTP_DECORATE } from '../../../shared/common';
import { ApiException } from '../../../shared/exception';

/**
 * Guards are executed after each middleware, but before any interceptor or pipe.
 * Authorization guard
 */
@Injectable()
export class ApiAuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request[USER_HTTP_DECORATE];
    // unauthorized
    if (!user) throw ApiException.tipError(ApiTipConstant.api_unauthorized);
    return true;
  }
}
