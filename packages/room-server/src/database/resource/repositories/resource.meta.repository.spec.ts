import { DeepPartial, getConnection } from 'typeorm';
import { ResourceMetaRepository } from './resource.meta.repository';
import { ResourceMetaEntity } from '../entities/resource.meta.entity';
import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfigService } from 'shared/services/config/database.config.service';
import { clearDatabase } from 'shared/testing/test-util';

describe('DatasheetRepositoryTest', () => {
  let moduleFixture: TestingModule;
  let repository: ResourceMetaRepository;
  let entity: ResourceMetaEntity;

  beforeEach(async () => {
    moduleFixture = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        TypeOrmModule.forRootAsync({
          useClass: DatabaseConfigService,
        }),
        TypeOrmModule.forFeature([ResourceMetaRepository]),
      ],
    }).compile();
    // clear database
    await clearDatabase(getConnection());
    repository = moduleFixture.get<ResourceMetaRepository>(ResourceMetaRepository);
    const resourceMeta: DeepPartial<ResourceMetaEntity> = {
      resourceId: 'resourceId',
      revision: 1,
    };
    const record = repository.create(resourceMeta);
    entity = await repository.save(record);
  });

  afterEach(async () => {
    await moduleFixture.close();
  });

  it('should get revisions by resource ids', async () => {
    const resourceRevisions = await repository.getRevisionByRscIds([entity.resourceId]);
    expect(resourceRevisions.length).toEqual(1);
    expect(resourceRevisions[0]?.resourceId).toEqual(entity.resourceId);
    expect(resourceRevisions[0]?.revision).toEqual(entity.revision);
  });
});
