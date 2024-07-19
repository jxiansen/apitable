

import { DynamicModule, Module } from '@nestjs/common';
import path from 'path';
import * as fs from 'fs';
import { DocumentBaseService } from './document.base.service';

@Module({
  providers: [
    {
      provide: DocumentBaseService,
      useClass: class DefaultDocumentService extends DocumentBaseService {
      }
    },
  ],
  exports: [
    {
      provide: DocumentBaseService,
      useClass: class DefaultDocumentService extends DocumentBaseService {
      }
    },
  ],
})
export class DocumentServiceDynamicModule {

  static forRoot(): DynamicModule {
    const enterpriseModulePath = path.join(__dirname, '../../enterprise/workdoc');
    const isEnterpriseLevel: boolean = fs.existsSync(enterpriseModulePath);
    if (isEnterpriseLevel) {
      const { DocumentEnterpriseModule } = require(`${enterpriseModulePath}/document.enterprise.module`);
      return {
        module: DocumentEnterpriseModule,
      };
    }
    return { 
      module: DocumentServiceDynamicModule,
    }; 
  }

}