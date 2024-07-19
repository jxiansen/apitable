

import { HttpModule, HttpService } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { PROJECT_DIR } from 'app.environment';
import { protobufPackage } from 'grpc/generated/serving/RoomServingService';
import { join } from 'path';
import { BootstrapConstants } from 'shared/common/constants/bootstrap.constants';
import { SocketConstants } from 'shared/common/constants/socket.module.constants';
import { RedisModule } from 'socket/services/redis/redis.module';
import { RedisService } from 'socket/services/redis/redis.service';
import { GrpcClient } from './grpc.client';
import { GrpcClientProxy } from './grpc.client.proxy';
import { ROOM_GRPC_CLIENT } from 'shared/common';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: ROOM_GRPC_CLIENT,
        imports: [RedisModule, HttpModule],
        inject: [RedisService, HttpService],
        useFactory: (redisService: RedisService, httpService: HttpService) => {
          const { maxSendMessageLength, maxReceiveMessageLength, keepalive, channelOptions } = SocketConstants.GRPC_OPTIONS;
          return {
            customClass: GrpcClientProxy,
            options: {
              url: BootstrapConstants.ROOM_GRPC_URL,
              maxSendMessageLength: maxSendMessageLength,
              maxReceiveMessageLength: maxReceiveMessageLength,
              keepalive: keepalive,
              channelOptions: channelOptions,
              package: [protobufPackage],
              protoPath: [
                join(PROJECT_DIR, 'grpc/generated/serving/RoomServingService.proto'),
                join(PROJECT_DIR, 'grpc/generated/common/Core.proto'),
              ],
              loader: {
                json: true,
              },
              proxyClient: redisService,
              httpService: httpService,
            },
          };
        },
      },
    ]),
  ],
  providers: [GrpcClient],
  exports: [GrpcClient],
})
export class GrpcClientModule {}
