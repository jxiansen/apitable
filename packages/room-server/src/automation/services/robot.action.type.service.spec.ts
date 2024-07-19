import { RobotActionTypeService } from './robot.action.type.base.service';
import { AutomationActionTypeRepository } from '../repositories/automation.action.type.repository';
import { AutomationServiceRepository } from '../repositories/automation.service.repository';
import { AutomationActionTypeEntity } from '../entities/automation.action.type.entity';
import { AutomationServiceEntity } from '../entities/automation.service.entity';
import { Test, TestingModule } from '@nestjs/testing';

describe('RobotActionTypeServiceTest', () => {
  let moduleFixture: TestingModule;
  let automationActionTypeRepository: AutomationActionTypeRepository;
  let automationServiceRepository: AutomationServiceRepository;
  let service: RobotActionTypeService;

  beforeEach(async () => {
    moduleFixture = await Test.createTestingModule({
      providers: [AutomationActionTypeRepository, AutomationServiceRepository, RobotActionTypeService],
    }).compile();
    automationActionTypeRepository = moduleFixture.get<AutomationActionTypeRepository>(AutomationActionTypeRepository);
    automationServiceRepository = moduleFixture.get<AutomationServiceRepository>(AutomationServiceRepository);
    service = moduleFixture.get<RobotActionTypeService>(RobotActionTypeService);
  });

  afterEach(async () => {
    await moduleFixture.close();
  });

  it('should be defined', () => {
    expect(automationActionTypeRepository).toBeDefined();
    expect(automationServiceRepository).toBeDefined();
    expect(service).toBeDefined();
  });

  it('get action type should be return webhook', async () => {
    jest.spyOn(automationActionTypeRepository, 'find').mockResolvedValue([
      {
        id: 'id',
        serviceId: 'serviceId',
        actionTypeId: 'actionTypeId',
        name: 'name',
        description: 'description',
        endpoint: 'endpoint',
        i18n: { en: {} },
      } as AutomationActionTypeEntity,
    ]);
    jest.spyOn(automationServiceRepository, 'findOne').mockResolvedValue({
      id: 'id',
      serviceId: 'serviceId',
      slug: 'slug',
      i18n: { en: {} },
    } as AutomationServiceEntity);
    const detailVos = await service.getActionType('en');
    expect(detailVos).toBeDefined();
    expect(detailVos.length).toBeGreaterThan(0);
  });
});
