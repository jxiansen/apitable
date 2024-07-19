

import { Module } from '@nestjs/common';
import { AlarmDynamicModule } from './alarm/alarm.dynamic.module';
import { SubscriptionDynamicModule } from './subscription/subscription.dynamic.module';
import { AttachmentModule } from './attachment/attachment.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { DatasheetModule } from './datasheet/datasheet.module';
import { FormModule } from './form/form.module';
import { MirrorModule } from './mirror/mirror.module';
import { ResourceModule } from './resource/resource.module';
import { WidgetModule } from './widget/widget.module';
import { AssetModule } from './asset/asset.module';
import { OtModule } from './ot/ot.module';
import { CommandModule } from './command/command.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { CascaderModule } from './cascader/cascader.module';
import { TimeMachineDynamicModule } from './time_machine/time.machine.dynamic.module';

@Module({
  imports: [
    EventEmitterModule.forRoot(),
    AssetModule,
    AttachmentModule,
    AlarmDynamicModule.forRoot(),
    SubscriptionDynamicModule.forRoot(),
    DashboardModule,
    DatasheetModule,
    FormModule,
    MirrorModule,
    TimeMachineDynamicModule.forRoot(),
    ResourceModule,
    WidgetModule,
    OtModule,
    CommandModule,
    CascaderModule,
  ],
  providers: [],
  exports: [
    AssetModule,
    AttachmentModule,
    AlarmDynamicModule.forRoot(), 
    SubscriptionDynamicModule.forRoot(), 
    DashboardModule,
    DatasheetModule,
    FormModule,
    TimeMachineDynamicModule.forRoot(),
    MirrorModule,
    ResourceModule,
    WidgetModule,
    OtModule,
    CommandModule,
    CascaderModule,
  ]
})
export class DatabaseModule {}
