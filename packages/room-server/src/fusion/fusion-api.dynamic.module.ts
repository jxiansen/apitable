import { DynamicModule, Module } from '@nestjs/common';
import path from 'path';
import * as fs from 'fs';

@Module({})
export class FusionApiDynamicModule {
  static forRoot(): DynamicModule {
    const fusionEnterpriseModulePath = path.join(__dirname, '../enterprise/fusion');
    const isEnterpriseLevel: boolean = fs.existsSync(fusionEnterpriseModulePath);
    if (isEnterpriseLevel) {
      const { FusionApiEnterpriseModule } = require(`${fusionEnterpriseModulePath}/fusion-api.enterprise.module`);
      return {
        module: FusionApiEnterpriseModule,
      };
    }
    return {
      module: FusionApiDynamicModule,
    };
  }
}
