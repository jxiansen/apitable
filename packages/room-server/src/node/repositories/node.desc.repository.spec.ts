import { DeepPartial, getConnection } from 'typeorm';
import { NodeDescRepository } from './node.desc.repository';
import { NodeDescEntity } from '../entities/node.desc.entity';
import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfigService } from 'shared/services/config/database.config.service';
import { clearDatabase } from 'shared/testing/test-util';

describe('Test NodeDescRepository', () => {
  let moduleFixture: TestingModule;
  let repository: NodeDescRepository;
  let entity: NodeDescEntity;

  beforeEach(async () => {
    moduleFixture = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        TypeOrmModule.forRootAsync({
          useClass: DatabaseConfigService,
        }),
        TypeOrmModule.forFeature([NodeDescRepository]),
      ],
    }).compile();
    // clear database
    await clearDatabase(getConnection());
    repository = moduleFixture.get<NodeDescRepository>(NodeDescRepository);
    const nodeDesc: DeepPartial<NodeDescEntity> = {
      id: '2023',
      nodeId: 'nodeId',
      description: 'description',
    };
    const record = repository.create(nodeDesc);
    entity = await repository.save(record);
  });

  afterEach(async () => {
    await moduleFixture.close();
  });

  it('should be return description', async () => {
    const description = await repository.selectDescriptionByNodeId('nodeId');
    expect(description?.description).toEqual(entity.description);
  });
});
