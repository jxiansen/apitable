import { forwardRef, Module } from '@nestjs/common';
import { CommandModule } from 'database/command/command.module';
import { DatasheetModule } from 'database/datasheet/datasheet.module';
import { NodeModule } from 'node/node.module';
import { OtModule } from 'database/ot/ot.module';
import { ResourceModule } from 'database/resource/resource.module';
import { UserModule } from 'user/user.module';
import { FusionApiTransformer } from 'fusion/transformer/fusion.api.transformer';
import { FormController } from './controllers/form.controller';
import { FormService } from './services/form.service';

@Module({
  imports: [forwardRef(() => ResourceModule), CommandModule, forwardRef(() => NodeModule), UserModule, DatasheetModule, forwardRef(() => OtModule)],
  controllers: [FormController],
  providers: [FormService, FusionApiTransformer],
})
export class FormModule {}
