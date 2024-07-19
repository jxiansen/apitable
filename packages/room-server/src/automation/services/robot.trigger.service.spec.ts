import { NodeService } from 'node/services/node.service';
import { RobotTriggerService } from './robot.trigger.service';
import { AutomationTriggerTypeRepository } from '../repositories/automation.trigger.type.repository';
import { AutomationTriggerRepository } from '../repositories/automation.trigger.repository';
import { AutomationServiceRepository } from '../repositories/automation.service.repository';
import { AutomationRobotRepository } from '../repositories/automation.robot.repository';
import { AutomationTriggerEntity } from '../entities/automation.trigger.entity';
import { EventTypeEnums } from '../events/domains/event.type.enums';
import { ResourceRobotTriggerDto } from '../dtos/trigger.dto';
import { Test, TestingModule } from '@nestjs/testing';
import { WinstonModule } from 'nest-winston';
import { LoggerConfigService } from 'shared/services/config/logger.config.service';

describe('RobotTriggerServiceTest', () => {
  let moduleFixture: TestingModule;
  let robotTriggerService: RobotTriggerService;
  let nodeService: NodeService;
  let automationTriggerTypeRepository: AutomationTriggerTypeRepository;
  let automationTriggerRepository: AutomationTriggerRepository;
  let automationServiceRepository: AutomationServiceRepository;
  let automationRobotRepository: AutomationRobotRepository;

  beforeEach(async () => {
    moduleFixture = await Test.createTestingModule({
      imports: [
        WinstonModule.forRootAsync({
          useClass: LoggerConfigService,
        }),
      ],
      providers: [
        AutomationTriggerTypeRepository,
        AutomationTriggerRepository,
        AutomationServiceRepository,
        AutomationRobotRepository,
        RobotTriggerService,
        {
          provide: NodeService,
          useValue: {
            getRelNodeIdsByMainNodeIds: jest.fn(),
          },
        },
      ],
    }).compile();

    automationTriggerTypeRepository = moduleFixture.get<AutomationTriggerTypeRepository>(AutomationTriggerTypeRepository);
    automationTriggerRepository = moduleFixture.get<AutomationTriggerRepository>(AutomationTriggerRepository);
    automationServiceRepository = moduleFixture.get<AutomationServiceRepository>(AutomationServiceRepository);
    automationRobotRepository = moduleFixture.get<AutomationRobotRepository>(AutomationRobotRepository);
    robotTriggerService = moduleFixture.get<RobotTriggerService>(RobotTriggerService);
    nodeService = moduleFixture.get<NodeService>(NodeService);
  });

  afterEach(async () => {
    await moduleFixture.close();
  });

  it('should be defined', () => {
    expect(automationTriggerTypeRepository).toBeDefined();
    expect(automationTriggerRepository).toBeDefined();
    expect(automationServiceRepository).toBeDefined();
    expect(automationRobotRepository).toBeDefined();
    expect(robotTriggerService).toBeDefined();
    expect(nodeService).toBeDefined();
  });

  it('given a trigger when get the map about triggers grouped by resource id', async () => {
    jest.spyOn(automationRobotRepository, 'getActiveRobotsByResourceIds').mockResolvedValue([{ resourceId: 'datasheetId', robotId: 'robotId' }]);
    jest
      .spyOn(automationTriggerRepository, 'selectRobotIdAndResourceIdByResourceIds')
      .mockResolvedValue([{ resourceId: 'datasheetId', robotId: 'robotId' }]);
    jest
      .spyOn(automationTriggerRepository, 'getAllTriggersByRobotIds')
      .mockResolvedValue([
        { triggerId: 'triggerId', robotId: 'robotId', triggerTypeId: 'triggerTypeId', resourceId: 'datasheetId' },
      ] as AutomationTriggerEntity[]);
    jest.spyOn(automationTriggerRepository, 'getRobotIdsByResourceIdsAndHasInput').mockResolvedValue(['robotId']);
    jest.spyOn(automationRobotRepository, 'selectActiveRobotIdsByRobotIds').mockResolvedValue(['robotId']);
    jest.spyOn(nodeService, 'getRelNodeIdsByMainNodeIds').mockResolvedValue([]);
    const triggersGroupByResourceId = await robotTriggerService.getTriggersGroupByResourceId(['datasheetId']);
    expect(triggersGroupByResourceId).toBeDefined();
    expect(Object.keys(triggersGroupByResourceId)).toEqual(['datasheetId']);
  });

  it('given none trigger when get the map about triggers grouped by resource id then should be return empty object', async () => {
    jest.spyOn(automationRobotRepository, 'getActiveRobotsByResourceIds').mockResolvedValue([]);
    jest.spyOn(automationTriggerRepository, 'selectRobotIdAndResourceIdByResourceIds').mockResolvedValue([]);
    jest.spyOn(automationTriggerRepository, 'getAllTriggersByRobotIds').mockResolvedValue([]);
    jest.spyOn(automationTriggerRepository, 'getRobotIdsByResourceIdsAndHasInput').mockResolvedValue([]);
    jest.spyOn(nodeService, 'getRelNodeIdsByMainNodeIds').mockResolvedValue([]);
    const triggersGroupByResourceId = await robotTriggerService.getTriggersGroupByResourceId(['datasheetId']);
    expect(triggersGroupByResourceId).toBeDefined();
    expect(Object.keys(triggersGroupByResourceId).length).toEqual(0);
  });

  it("given repositories mock when get resource's robot triggers then should be got the special one", async () => {
    jest
      .spyOn(automationTriggerTypeRepository, 'getTriggerTypeServiceRelByEndPoint')
      .mockResolvedValue([{ serviceId: 'serviceId', triggerTypeId: 'triggerTypeId' }]);
    jest.spyOn(automationServiceRepository, 'countOfficialServiceByServiceId').mockResolvedValue(1);
    jest.spyOn(automationRobotRepository, 'selectRobotIdByResourceId').mockResolvedValue([{ robotId: 'robotId' }]);
    jest
      .spyOn(automationTriggerRepository, 'getTriggerByRobotIdAndTriggerTypeId')
      .mockResolvedValue([{ triggerId: 'triggerId', triggerTypeId: 'triggerTypeId', input: {}, robotId: 'robotId' }] as ResourceRobotTriggerDto[]);
    jest.spyOn(automationTriggerRepository, 'getRobotIdsByResourceIdsAndHasInput').mockResolvedValue([]);
    jest.spyOn(nodeService, 'getRelNodeIdsByMainNodeIds').mockResolvedValue([]);
    jest.spyOn(automationRobotRepository, 'selectActiveRobotIdsByRobotIds').mockResolvedValue(['robotId']);

    const resourceRobotTriggerDtos = await robotTriggerService.getTriggersByResourceAndEventType(
      'datasheetId',
      'formId',
      EventTypeEnums.FormSubmitted,
    );
    expect(resourceRobotTriggerDtos).toBeDefined();
    expect(resourceRobotTriggerDtos.length).toEqual(1);
  });

  it("given empty triggers list when get resource's robot triggers then should be got empty list", async () => {
    jest.spyOn(automationTriggerTypeRepository, 'getTriggerTypeServiceRelByEndPoint').mockResolvedValue([]);
    const resourceRobotTriggerDtos = await robotTriggerService.getTriggersByResourceAndEventType(
      'datasheetId',
      'formId',
      EventTypeEnums.FormSubmitted,
    );
    expect(resourceRobotTriggerDtos).toBeDefined();
    expect(resourceRobotTriggerDtos.length).toEqual(0);
  });

  it("given not official trigger when get resource's robot triggers then should be got empty list", async () => {
    jest
      .spyOn(automationTriggerTypeRepository, 'getTriggerTypeServiceRelByEndPoint')
      .mockResolvedValue([{ serviceId: 'serviceId', triggerTypeId: 'triggerTypeId' }]);
    jest.spyOn(automationServiceRepository, 'countOfficialServiceByServiceId').mockResolvedValue(0);
    const resourceRobotTriggerDtos = await robotTriggerService.getTriggersByResourceAndEventType(
      'datasheetId',
      'formId',
      EventTypeEnums.FormSubmitted,
    );
    expect(resourceRobotTriggerDtos).toBeDefined();
    expect(resourceRobotTriggerDtos.length).toEqual(0);
  });

  it('getActiveRobotsByResourceIds--robot and trigger empty', async () => {
    jest.spyOn(automationRobotRepository, 'getActiveRobotsByResourceIds').mockResolvedValue([]);
    jest.spyOn(automationTriggerRepository, 'selectRobotIdAndResourceIdByResourceIds').mockResolvedValue([]);
    jest.spyOn(nodeService, 'getRelNodeIdsByMainNodeIds').mockResolvedValue([]);
    const resourceRobotDtos = await robotTriggerService.getActiveRobotsByResourceIds(['resourceId']);
    expect(resourceRobotDtos.length).toEqual(0);
  });

  it('getActiveRobotsByResourceIds--trigger empty', async () => {
    const dtos = [
      {
        robotId: 'robotId',
        resourceId: 'resourceId',
      },
    ];
    jest.spyOn(automationRobotRepository, 'getActiveRobotsByResourceIds').mockResolvedValue(dtos);
    jest.spyOn(automationTriggerRepository, 'selectRobotIdAndResourceIdByResourceIds').mockResolvedValue([]);
    jest.spyOn(nodeService, 'getRelNodeIdsByMainNodeIds').mockResolvedValue([]);
    const resourceRobotDtos = await robotTriggerService.getActiveRobotsByResourceIds(['resourceId']);
    expect(resourceRobotDtos).toEqual(dtos);
  });

  it('getActiveRobotsByResourceIds--robot empty but trigger not empty', async () => {
    const dtos = [
      {
        robotId: 'robotId',
        resourceId: 'resourceId',
      },
    ];
    jest.spyOn(automationRobotRepository, 'getActiveRobotsByResourceIds').mockResolvedValue([]);
    jest.spyOn(automationTriggerRepository, 'selectRobotIdAndResourceIdByResourceIds').mockResolvedValue(dtos);
    jest.spyOn(automationRobotRepository, 'selectActiveRobotIdsByRobotIds').mockResolvedValue(['robotId']);
    jest.spyOn(nodeService, 'getRelNodeIdsByMainNodeIds').mockResolvedValue([]);
    const resourceRobotDtos = await robotTriggerService.getActiveRobotsByResourceIds(['resourceId']);
    expect(resourceRobotDtos).toEqual(dtos);
  });

  it('getActiveRobotsByResourceIds--robot empty but trigger not empty', async () => {
    const dtos = [
      {
        robotId: 'robotId',
        resourceId: 'resourceId',
      },
    ];
    jest.spyOn(automationRobotRepository, 'getActiveRobotsByResourceIds').mockResolvedValue([]);
    jest.spyOn(automationTriggerRepository, 'selectRobotIdAndResourceIdByResourceIds').mockResolvedValue(dtos);
    jest.spyOn(automationRobotRepository, 'selectActiveRobotIdsByRobotIds').mockResolvedValue([]);
    jest.spyOn(nodeService, 'getRelNodeIdsByMainNodeIds').mockResolvedValue([]);
    const resourceRobotDtos = await robotTriggerService.getActiveRobotsByResourceIds(['resourceId']);
    expect(resourceRobotDtos).toEqual([]);
  });

  it('getActiveRobotsByResourceIds--form', async () => {
    const dtos = [
      {
        robotId: 'robotId',
        resourceId: 'formId',
      },
    ];
    jest.spyOn(automationRobotRepository, 'getActiveRobotsByResourceIds').mockResolvedValue([]);
    jest.spyOn(nodeService, 'getRelNodeIdsByMainNodeIds').mockResolvedValue([
      // @ts-ignore
      { relNodeId: 'formId', mainNodeId: 'resourceId' },
    ]);
    jest.spyOn(automationTriggerRepository, 'selectRobotIdAndResourceIdByResourceIds').mockResolvedValue(dtos);
    jest.spyOn(automationRobotRepository, 'selectActiveRobotIdsByRobotIds').mockResolvedValue(['robotId']);
    const resourceRobotDtos = await robotTriggerService.getActiveRobotsByResourceIds(['resourceId']);
    expect(resourceRobotDtos).toEqual(dtos);
  });
});
