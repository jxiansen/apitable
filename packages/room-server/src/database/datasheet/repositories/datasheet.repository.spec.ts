import { DatasheetRepository } from './datasheet.repository';
import { DatasheetEntity } from '../entities/datasheet.entity';
import { DeepPartial, getConnection } from 'typeorm';
import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfigService } from 'shared/services/config/database.config.service';
import { clearDatabase } from 'shared/testing/test-util';

describe('DatasheetRepositoryTest', () => {
  let moduleFixture: TestingModule;
  let repository: DatasheetRepository;
  let entity: DatasheetEntity;

  beforeEach(async () => {
    moduleFixture = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        TypeOrmModule.forRootAsync({
          useClass: DatabaseConfigService,
        }),
        TypeOrmModule.forFeature([DatasheetRepository]),
      ],
      providers: [DatasheetRepository],
    }).compile();
    // clear database
    await clearDatabase(getConnection());
    repository = moduleFixture.get<DatasheetRepository>(DatasheetRepository);
    const datasheet: DeepPartial<DatasheetEntity> = {
      dstId: 'datasheetId',
      revision: 1,
    };
    const record = repository.create(datasheet);
    entity = await repository.save(record);
  });

  afterEach(async () => {
    await moduleFixture.close();
  });

  it('should get revisions by datasheet ids', async () => {
    const revisions = await repository.selectRevisionByDstIds([entity.dstId!]);
    expect(revisions.length).toEqual(1);
    expect(revisions[0]?.resourceId).toEqual(entity.dstId);
    expect(revisions[0]?.revision).toEqual('1');
  });
});
