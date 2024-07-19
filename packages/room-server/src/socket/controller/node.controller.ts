

import { Body, Controller, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { RoomGateway } from 'socket/gateway/room.gateway';
import { AuthGuard } from 'socket/guard/auth.guard';
import { HttpResponseInterceptor } from 'socket/interceptor/http.response.interceptor';
import { NodeShareDisableRo } from 'socket/ros/node/node.ro';
import { RoomService } from 'socket/services/room/room.service';

@Controller(['node', 'socket/node'])
@UseGuards(AuthGuard)
@UseInterceptors(HttpResponseInterceptor)
export class NodeController {
  constructor(
    private readonly roomGateway: RoomGateway,
    private readonly roomService: RoomService
  ) {}

  @Post('/disableShare')
  disableNodeShare(@Body() message: NodeShareDisableRo[]) {
    this.roomService.broadcastNodeShareDisabled(this.roomGateway.server, message);
  }
}
