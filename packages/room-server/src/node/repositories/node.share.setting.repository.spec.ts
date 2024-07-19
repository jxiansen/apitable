
import { DeepPartial, getConnection } from 'typeorm';
import { NodeShareSettingRepository } from './node.share.setting.repository';
import { NodeShareSettingEntity } from '../entities/node.share.setting.entity';
import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfigService } from '../../shared/services/config/database.config.service';
import { clearDatabase } from '../../shared/testing/test-util';

describe('Test NodeShareSettingRepository', () => {
  let moduleFixture: TestingModule;
  let repository: NodeShareSettingRepository;

  beforeEach(async() => {
    moduleFixture = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        TypeOrmModule.forRootAsync({
          useClass: DatabaseConfigService,
        }),
        TypeOrmModule.forFeature([NodeShareSettingRepository]),
      ],
    }).compile();
    // clear database
    await clearDatabase(getConnection());
    repository = moduleFixture.get<NodeShareSettingRepository>(NodeShareSettingRepository);
    const nodeShareSetting: DeepPartial<NodeShareSettingEntity> = {
      id: '2023',
      nodeId: 'datasheetId',
      shareId: 'shareId',
      isEnabled: true,
      allowSave: true,
    };
    const record = repository.create(nodeShareSetting);
    await repository.save(record);
  });

  afterEach(async() => {
    await moduleFixture.close();
  });
  
  it('should be return share setting by share id', async() => {
    const shareSetting = await repository.selectByShareId('shareId');
    expect(shareSetting?.nodeId).toEqual('datasheetId');
  });

  it('should be return share setting by node id', async() => {
    const shareSetting = await repository.selectByNodeId('datasheetId');
    expect(shareSetting?.shareId).toEqual('shareId');
  });
});
