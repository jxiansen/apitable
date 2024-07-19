import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from 'database/database.module';
import { BackendApiModule } from 'shared/backend_client/backend.api.module';
import { Configuration } from 'shared/backend_client/configuration';
import { UnitModule } from 'unit/unit.module';
import { UserModule } from 'user/user.module';
import { NodeDescRepository } from './repositories/node.desc.repository';
import { NodeRelRepository } from './repositories/node.rel.repository';
import { NodeRepository } from './repositories/node.repository';
import { NodeShareSettingRepository } from './repositories/node.share.setting.repository';
import { NodeDescriptionService } from './services/node.description.service';
import { NodePermissionService } from './services/node.permission.service';
import { NodeService } from './services/node.service';
import { NodeShareSettingService } from './services/node.share.setting.service';
import { IsNodeExistConstraint } from './validations/validation.constraint';

@Module({
  imports: [
    BackendApiModule.forRoot(() => {
      const baseUrl = process.env.BACKEND_BASE_URL;
      if (baseUrl && baseUrl.endsWith('/')) {
        return new Configuration({ basePath: baseUrl.substring(0, baseUrl.length - 1) });
      }
      return new Configuration({ basePath: baseUrl });
    }),
    UserModule,
    UnitModule,
    forwardRef(() => DatabaseModule),
    TypeOrmModule.forFeature([NodeRepository, NodeRelRepository, NodeDescRepository, NodeShareSettingRepository]),
  ],
  controllers: [],
  providers: [NodeService, NodePermissionService, NodeShareSettingService, NodeDescriptionService, IsNodeExistConstraint],
  exports: [NodeService, NodePermissionService, NodeShareSettingService, NodeDescriptionService, IsNodeExistConstraint],
})
export class NodeModule {}
