import { DynamicModule, Module } from '@nestjs/common';
import path from 'path';
import * as fs from 'fs';

@Module({})
export class EmbedDynamicModule {
  static forRoot(): DynamicModule {
    const embedEnterpriseModulePath = path.join(__dirname, '../enterprise/embed');
    const isEnterpriseLevel: boolean = fs.existsSync(embedEnterpriseModulePath);
    if (isEnterpriseLevel) {
      const { EmbedEnterpriseModule } = require(`${embedEnterpriseModulePath}/embed.enterprise.module`);
      return {
        module: EmbedEnterpriseModule,
      };
    }
    return {
      module: EmbedDynamicModule,
    };
  }
}
