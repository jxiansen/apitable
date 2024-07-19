import { Module } from '@nestjs/common';
import path from 'path';
import fs from 'fs';
import process from 'process';

export * as webhook from './webhook';
export * as ruliu from './ruliu';
export * as slack from './slack';
export * as sms from './sms';

const actionEnterpriseModulePath = path.join(__dirname, '../../enterprise/automation/action');
const isEnterpriseLevel: boolean = fs.existsSync(actionEnterpriseModulePath);
if (isEnterpriseLevel) {
  import(`${actionEnterpriseModulePath}/index`).then(
    (module) => {
      const keys = Object.keys(module);
      for (const key of keys) {
        exports[key] = module[key];
      }
    },
    (err) => {
      console.error('load enterprise action module error');
      console.error(err);
      process.exit(1);
    },
  );
}

@Module({
  imports: [],
})
export class AutomationActionModule {}
