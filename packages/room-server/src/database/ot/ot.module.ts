import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlarmDynamicModule } from 'database/alarm/alarm.dynamic.module';
import { DashboardModule } from 'database/dashboard/dashboard.module';
import { DatasheetModule } from 'database/datasheet/datasheet.module';
import { DatasheetWidgetRepository } from 'database/datasheet/repositories/datasheet.widget.repository';
import { FormModule } from 'database/form/form.module';
import { MirrorModule } from 'database/mirror/mirror.module';
import { NodeModule } from 'node/node.module';
import { ResourceModule } from 'database/resource/resource.module';
import { SubscriptionDynamicModule } from 'database/subscription/subscription.dynamic.module';
import { UserModule } from 'user/user.module';
import { WidgetModule } from 'database/widget/widget.module';
import { GrpcModule } from 'grpc/grpc.module';
import { DashboardOtService } from './services/dashboard.ot.service';
import { DatasheetOtService } from './services/datasheet.ot.service';
import { FormOtService } from './services/form.ot.service';
import { MirrorOtService } from './services/mirror.ot.service';
import { OtService } from './services/ot.service';
import { ResourceChangeHandler } from './services/resource.change.handler';
import { WidgetOtService } from './services/widget.ot.service';
import { RobotEventModule } from 'database/robot/robot.event.module';
import { DatasheetRecordArchiveRepository } from '../datasheet/repositories/datasheet.record.archive.repository';
import { EventModule } from 'shared/event/event.module';

@Module({
  imports: [
    forwardRef(() => GrpcModule),
    forwardRef(() => NodeModule),
    DatasheetModule,
    forwardRef(() => ResourceModule),
    WidgetModule,
    forwardRef(() => FormModule),
    MirrorModule,
    RobotEventModule,
    forwardRef(() => DashboardModule),
    UserModule,
    AlarmDynamicModule.forRoot(),
    SubscriptionDynamicModule.forRoot(),
    TypeOrmModule.forFeature([
      // TODO(Troy): stop using other modules's repositories, use service instead, via importing the module
      DatasheetWidgetRepository,
    ]),
    EventModule,
  ],
  providers: [
    OtService,
    DatasheetOtService,
    DashboardOtService,
    MirrorOtService,
    FormOtService,
    WidgetOtService,
    ResourceChangeHandler,
    DatasheetRecordArchiveRepository,
  ],
  exports: [OtService, DatasheetOtService, DashboardOtService, MirrorOtService, FormOtService, WidgetOtService, ResourceChangeHandler],
})
export class OtModule {}
