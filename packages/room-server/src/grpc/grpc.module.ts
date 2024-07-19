

import { forwardRef, Module } from '@nestjs/common';
import { DatabaseModule } from 'database/database.module';
import { GrpcClientModule } from 'grpc/client/grpc.client.module';
import { GrpcSocketService } from 'grpc/services/grpc.socket.service';
import { NodeModule } from 'node/node.module';
import { UserModule } from 'user/user.module';
import { GrpcController } from './controllers/grpc.controller';
import { DocumentServiceDynamicModule } from 'workdoc/services/document.service.dynamic.module';

@Module({
  imports: [
    forwardRef(() => DatabaseModule),
    UserModule,
    forwardRef(() => NodeModule),
    GrpcClientModule,
    DocumentServiceDynamicModule.forRoot(),
  ],
  controllers: [GrpcController],
  providers: [
    GrpcSocketService,
  ],
  exports: [
    GrpcSocketService,
    GrpcClientModule,
  ],
})
export class GrpcModule {
}

