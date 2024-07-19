import { DynamicModule, Module } from '@nestjs/common';
import path from 'path';
import * as fs from 'fs';
import { HocuspocusBaseService, HocuspocusService } from './services/hocuspocus.base.service';

@Module({})
export class WorkDocDynamicModule {
  static forRoot(): DynamicModule {
    const enterpriseModulePath = path.join(__dirname, '../enterprise/workdoc');
    const isEnterpriseLevel: boolean = fs.existsSync(enterpriseModulePath);
    if (isEnterpriseLevel) {
      const { WorkDocEnterpriseModule } = require(`${enterpriseModulePath}/workdoc.enterprise.module`);
      return {
        module: WorkDocEnterpriseModule,
      };
    }
    return {
      module: WorkDocModule,
    };
  }
}

@Module({
  providers: [
    {
      provide: HocuspocusBaseService,
      useClass: HocuspocusService,
    },
  ],
  exports: [
    {
      provide: HocuspocusBaseService,
      useClass: HocuspocusService,
    },
  ],
})
export class WorkDocModule {}
