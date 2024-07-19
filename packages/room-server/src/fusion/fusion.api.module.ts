import { CacheModule, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  AttachmentField,
  AutoNumberField,
  CascaderField,
  CheckboxField,
  CreatedByField,
  CreatedTimeField,
  CurrencyField,
  DateTimeField,
  EmailField,
  FormulaField,
  LastModifiedByField,
  LastModifiedTimeField,
  LinkField,
  LookUpField,
  MemberField,
  MultiSelectField,
  NumberField,
  PercentField,
  PhoneField,
  RatingField,
  SingleSelectField,
  SingleTextField,
  TextField,
  UrlField,
  WorkDocField,
} from 'fusion/field';
import { CacheConfigService } from 'shared/cache/cache.config.service';
import { ApiRequestMiddleware } from './middleware/api.request.middleware';
import { NodeRateLimiterMiddleware } from 'shared/middleware/node.rate.limiter.middleware';
import { FusionApiController } from './fusion.api.controller';
import { ApiUsageRepository } from './repositories/api.usage.repository';
import { DatabaseModule } from 'database/database.module';
import { FusionApiRecordService } from './services/fusion.api.record.service';
import { FusionApiService } from './services/fusion.api.service';
import { DataBusService } from './services/databus/databus.service';
import { NodePermissionGuard } from './middleware/guard/node.permission.guard';
import { QueryPipe } from './middleware/pipe/query.pipe';
import { FieldPipe } from './middleware/pipe/field.pipe';
import { ApiAuthGuard } from './middleware/guard/api.auth.guard';
import { FusionApiTransformer } from './transformer/fusion.api.transformer';
import { FusionApiFilter } from './filter/fusion.api.filter';
import { UserModule } from 'user/user.module';
import { NodeModule } from 'node/node.module';
import { UnitModule } from 'unit/unit.module';
import { FusionApiV2Controller } from './fusion.api.v2.controller';
import { FusionNodeApiService } from './services/fusion.node.api.service';
import { DeveloperModule } from '../developer/developer.module';
import { OneWayLinkField } from './field/one_way_link.field';

@Module({
  imports: [
    DatabaseModule,
    NodeModule,
    UserModule,
    UnitModule,
    DeveloperModule,
    CacheModule.registerAsync({
      useClass: CacheConfigService,
    }),
    TypeOrmModule.forFeature([ApiUsageRepository]),
  ],
  controllers: [FusionApiController, FusionApiV2Controller],
  providers: [
    FusionApiRecordService,
    FusionApiService,
    FusionNodeApiService,
    DataBusService,
    QueryPipe,
    FieldPipe,
    ApiAuthGuard,
    NodePermissionGuard,
    // field service
    AttachmentField,
    AutoNumberField,
    CascaderField,
    CheckboxField,
    CreatedByField,
    CreatedTimeField,
    CurrencyField,
    DateTimeField,
    EmailField,
    FormulaField,
    LastModifiedByField,
    LastModifiedTimeField,
    LinkField,
    OneWayLinkField,
    LookUpField,
    MemberField,
    MultiSelectField,
    NumberField,
    PercentField,
    PhoneField,
    RatingField,
    SingleSelectField,
    SingleTextField,
    TextField,
    UrlField,
    WorkDocField,
    FusionApiTransformer,
    FusionApiFilter,
  ],
})
export class FusionApiModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ApiRequestMiddleware, NodeRateLimiterMiddleware).forRoutes(FusionApiController);
  }
}
