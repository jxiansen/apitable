

import { forwardRef, Module } from '@nestjs/common';
import { NodeModule } from 'node/node.module';
import { ResourceModule } from 'database/resource/resource.module';
import { UserModule } from 'user/user.module';
import { DashboardController } from './controllers/dashboard.controller';
import { DashboardService } from './services/dashboard.service';

@Module({
  imports: [
    forwardRef(()=>NodeModule),
    UserModule,
    forwardRef(()=>ResourceModule)
  ],
  controllers: [DashboardController],
  providers: [DashboardService],
  exports: [DashboardService]
})
export class DashboardModule {}
