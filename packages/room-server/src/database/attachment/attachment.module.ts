import { forwardRef, Module } from '@nestjs/common';
import { NodeModule } from 'node/node.module';
import { ResourceModule } from 'database/resource/resource.module';
import { AttachmentController } from './controllers/attachment.controller';
import { AttachmentService } from './services/attachment.service';
import { HttpModule } from '@nestjs/axios';
import { HttpConfigService } from 'shared/services/config/http.config.service';

@Module({
  imports: [
    HttpModule.registerAsync({
      useClass: HttpConfigService,
    }),
    ResourceModule,
    forwardRef(() => NodeModule),
  ],
  controllers: [AttachmentController],
  providers: [AttachmentService],
  exports: [AttachmentService],
})
export class AttachmentModule {}
