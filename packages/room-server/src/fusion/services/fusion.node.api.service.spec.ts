
import { FusionNodeApiService } from './fusion.node.api.service';
import { RestService } from 'shared/services/rest/rest.service';
import { NodeTypeEnum } from '../../shared/enums/node.enum';
import { Test, TestingModule } from '@nestjs/testing';
import { REQUEST } from '@nestjs/core';

describe('Test FusionNodeApiService', () => {
  let moduleFixture: TestingModule;
  let service: FusionNodeApiService;
  let restService: RestService;

  beforeEach(async() => {
    moduleFixture = await Test.createTestingModule({
      providers: [
        {
          provide: RestService,
          useValue: {
            getNodesList: jest.fn(),
          },
        },
        {
          provide: REQUEST,
          useValue: {
            headers: {
              authorization: 'token',
            }
          },
        },
        FusionNodeApiService,
      ],
    }).compile();
    restService = moduleFixture.get<RestService>(RestService);
    service = moduleFixture.get<FusionNodeApiService>(FusionNodeApiService);
  });

  afterEach(async() => {
    await moduleFixture.close();
  });

  it('should be return edit space\'s datasheets', async() => {
    jest.spyOn(restService, 'getNodesList').mockResolvedValue([
      { nodeId: 'datasheetId', nodeName: 'datasheetId', type: 2, icon: '100', parentId: 'parentId' }
    ] as any);
    const nodes = await service.getNodeList('spaceId', NodeTypeEnum.Datasheet, [1]);
    expect(nodes.length).toEqual(1);
  });
});