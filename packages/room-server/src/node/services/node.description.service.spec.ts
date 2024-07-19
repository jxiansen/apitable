import { NodeDescriptionService } from './node.description.service';
import { NodeDescRepository } from '../repositories/node.desc.repository';
import { Test, TestingModule } from '@nestjs/testing';

describe('Test NodeDescriptionService', () => {
  let moduleFixture: TestingModule;
  let repository: NodeDescRepository;
  let service: NodeDescriptionService;

  beforeEach(async () => {
    moduleFixture = await Test.createTestingModule({
      providers: [
        {
          provide: NodeDescRepository,
          useValue: {
            selectDescriptionByNodeId: jest.fn(),
          },
        },
        NodeDescriptionService,
      ],
    }).compile();
    service = moduleFixture.get<NodeDescriptionService>(NodeDescriptionService);
    repository = moduleFixture.get<NodeDescRepository>(NodeDescRepository);
    jest.spyOn(repository, 'selectDescriptionByNodeId').mockResolvedValue({ description: 'node description' });
  });

  afterEach(async () => {
    await moduleFixture.close();
  });

  it('should be return node description', async () => {
    const nodeDescription = await service.getDescription('nodeId');
    expect(nodeDescription).toEqual('node description');
  });
});
