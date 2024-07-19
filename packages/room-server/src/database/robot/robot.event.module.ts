

import { forwardRef, Module } from '@nestjs/common';
import { RobotModule } from 'automation/robot.module';
import { CommandModule } from 'database/command/command.module';
import { DatasheetModule } from 'database/datasheet/datasheet.module';
import { RobotEventService } from './services/robot.event.service';

@Module({
  imports: [
    CommandModule,
    DatasheetModule,
    forwardRef(()=>RobotModule),
  ],
  providers: [RobotEventService],
  exports: [RobotEventService]
})
export class RobotEventModule {}
