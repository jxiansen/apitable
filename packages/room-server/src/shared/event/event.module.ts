import { Module } from '@nestjs/common';
import { OTEventService } from './ot.event.service';

@Module({
  imports: [],
  providers: [OTEventService],
  exports: [OTEventService],
})
export class EventModule {}
