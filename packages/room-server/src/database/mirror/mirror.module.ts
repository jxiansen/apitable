import { forwardRef, Module } from '@nestjs/common';
import { DatasheetModule } from 'database/datasheet/datasheet.module';
import { NodeModule } from 'node/node.module';
import { ResourceModule } from 'database/resource/resource.module';
import { SubscriptionDynamicModule } from 'database/subscription/subscription.dynamic.module';
import { UserModule } from 'user/user.module';
import { MirrorController } from './controllers/mirror.controller';
import { MirrorService } from './services/mirror.service';

@Module({
  imports: [forwardRef(() => ResourceModule), forwardRef(() => NodeModule), UserModule, DatasheetModule, SubscriptionDynamicModule.forRoot()],
  providers: [MirrorService],
  controllers: [MirrorController],
  exports: [MirrorService],
})
export class MirrorModule {}
