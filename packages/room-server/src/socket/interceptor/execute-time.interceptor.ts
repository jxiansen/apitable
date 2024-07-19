

import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { GatewayConstants } from 'shared/common/constants/socket.module.constants';

@Injectable()
export class ExecuteTimeInterceptor implements NestInterceptor {
  private readonly logger = new Logger(ExecuteTimeInterceptor.name);

  intercept(_context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
    const now = Date.now();
    return next.handle().pipe(
      tap(data => {
        const executeTime = Date.now() - now;
        if (executeTime > GatewayConstants.ACK_TIMEOUT) {
          const message = data.data && data.data.changesets ?
            data.data.changesets.map((item: any) => {
              return { messageId: item?.messageId, dstId: item?.resourceId };
            }) : [];
          this.logger.log({ time: `${executeTime}ms`, message: JSON.stringify(message) });
        }
      }),
    );
  }
}
