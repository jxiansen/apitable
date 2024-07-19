import { DynamicModule, Module } from '@nestjs/common';
import path from 'path';
import * as fs from 'fs';

@Module({})
export class AiDynamicModule {
  static forRoot(): DynamicModule {
    const enterpriseModulePath = path.join(__dirname, '../enterprise/ai');
    const isEnterpriseLevel: boolean = fs.existsSync(enterpriseModulePath);
    if (isEnterpriseLevel) {
      const { AiEnterpriseModule } = require(`${enterpriseModulePath}/ai.enterprise.module`);
      return {
        module: AiEnterpriseModule,
      };
    }
    return {
      module: AiModule,
    };
  }
}

@Module({})
export class AiModule {}
