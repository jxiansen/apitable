import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { SocketConstants } from 'shared/common/constants/socket.module.constants';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers['token'];
    if (!token || token !== SocketConstants.AUTH_TOKEN) {
      return false;
    }
    return true;
  }
}
