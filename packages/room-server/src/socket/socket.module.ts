

import { HttpModule } from '@nestjs/axios';
import { DynamicModule, Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { GrpcModule } from 'grpc/grpc.module';
import { DatasheetController } from 'socket/controller/datasheet.controller';
import { NodeController } from 'socket/controller/node.controller';
import { SocketController } from 'socket/controller/socket.controller';
import { SocketGrpcController } from 'socket/controller/socket.grpc.controller';
import { NotificationGateway } from 'socket/gateway/notification.gateway';
import { RoomGateway } from 'socket/gateway/room.gateway';
import { GrpcClientModule } from 'socket/grpc/client/grpc.client.module';
import { NestService } from 'socket/services/nest/nest.service';
import { NotificationService } from 'socket/services/notification/notification.service';
import { RedisModule } from 'socket/services/redis/redis.module';
import { RoomService } from 'socket/services/room/room.service';
import { SocketIoService } from 'socket/services/socket-io/socket-io.service';

@Module({})
export class SocketModule {
  static register(enabled: boolean): DynamicModule {
    if (!enabled) {
      return {
        module: SocketModule,
      };
    }

    return {
      module: SocketModule,
      imports: [
        GrpcClientModule,
        GrpcModule,
        HttpModule,
        RedisModule,
        TerminusModule,
      ],
      controllers: [
        SocketController,
        NodeController,
        DatasheetController,
        SocketGrpcController,
      ],
      providers: [
        SocketIoService,
        RoomService,
        NotificationService,
        NestService,
        NotificationGateway,
        RoomGateway,
      ],
    };
  }
}

