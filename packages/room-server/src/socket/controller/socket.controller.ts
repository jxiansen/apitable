

import { Body, Controller, Post } from '@nestjs/common';
import { SocketRo } from 'socket/ros/socket.ro';
import { NestService } from 'socket/services/nest/nest.service';

@Controller()
export class SocketController {
  constructor(
    private readonly nestService: NestService
  ) {}

  @Post(['notify', 'socket/notify'])
  async notify(@Body() message: SocketRo) {
    return await this.nestService.handleHttpNotify(message);
  }
}
