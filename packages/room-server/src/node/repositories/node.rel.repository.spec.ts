
import { DeepPartial, getConnection } from 'typeorm';
import { NodeRelRepository } from './node.rel.repository';
import { NodeRelEntity } from '../entities/node.rel.entity';
import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfigService } from 'shared/services/config/database.config.service';
import { clearDatabase } from 'shared/testing/test-util';

describe('Test NodeRelRepository', () => {
  let moduleFixture: TestingModule;
  let repository: NodeRelRepository;

  beforeEach(async() => {
    moduleFixture = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        TypeOrmModule.forRootAsync({
          useClass: DatabaseConfigService,
        }),
        TypeOrmModule.forFeature([NodeRelRepository]),
      ],
    }).compile();
    // clear database
    await clearDatabase(getConnection());
    repository = moduleFixture.get<NodeRelRepository>(NodeRelRepository);
    const nodeRel: DeepPartial<NodeRelEntity> = {
      id: '2023',
      mainNodeId: 'mainNodeId',
      relNodeId: 'nodeId',
    };
    const record = repository.create(nodeRel);
    await repository.save(record);
  });

  afterEach(async() => {
    await moduleFixture.close();
  });

  it('should be return main node id', async() => {
    const mainNodeId = await repository.selectMainNodeIdByRelNodeId('nodeId');
    expect(mainNodeId?.mainNodeId).toEqual('mainNodeId');
  });

  it('should be return undefined main node id', async() => {
    const mainNodeId = await repository.selectMainNodeIdByRelNodeId('');
    expect(mainNodeId).toBeUndefined();
  });

  it('should be return rel node by main node id', async() => {
    const relNode = await repository.selectRelNodeIdByMainNodeId('mainNodeId');
    expect(relNode.length).toEqual(0);
  });

  it('should be return undefined rel node by rel node id', async() => {
    const relNode = await repository.selectNodeRelInfo('nodeId');
    expect(relNode).toBeUndefined();
  });
});