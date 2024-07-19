
import { forwardRef, Module } from '@nestjs/common';
import { DatasheetModule } from 'database/datasheet/datasheet.module';
import { NodeModule } from 'node/node.module';
import { CascaderController } from './controllers/cascader.controller';
import { UserModule } from 'user/user.module';
import { DatasheetCascaderFieldRepository } from './repositories/datasheet.cascader.field.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatasheetFieldCascaderService } from './services/datasheet.field.cascader.service';
import { DatasheetFieldCascaderSnapshotService } from './services/datasheet.field.cascader.snapshot.service';
import { CommandModule } from 'database/command/command.module';
import { CascaderDatabusService } from './services/cascader.databus.service';
import { UnitModule } from 'unit/unit.module';

@Module({
  imports: [
    UserModule,
    UnitModule,
    DatasheetModule,
    forwardRef(() => NodeModule),
    CommandModule,
    TypeOrmModule.forFeature([DatasheetCascaderFieldRepository]),
  ],
  controllers: [CascaderController],
  providers: [DatasheetFieldCascaderService, DatasheetFieldCascaderSnapshotService, CascaderDatabusService],
})
export class CascaderModule {}
