

import { AutomationTriggerTypeRepository } from './automation.trigger.type.repository';
import { AutomationTriggerTypeEntity } from '../entities/automation.trigger.type.entity';
import { DeepPartial, getConnection } from 'typeorm';
import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfigService } from 'shared/services/config/database.config.service';
import { clearDatabase } from 'shared/testing/test-util';

describe('AutomationTriggerTypeRepository', () => {
  let moduleFixture: TestingModule;
  let repository: AutomationTriggerTypeRepository;
  const theServiceId = 'serviceId';
  const theTriggerTypeId = 'triggerTypeId';
  const theEndpoint = 'endpoint';

  beforeEach(async() => {
    moduleFixture = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        TypeOrmModule.forRootAsync({
          useClass: DatabaseConfigService,
        }),
        TypeOrmModule.forFeature([AutomationTriggerTypeRepository]),
      ],
      providers: [AutomationTriggerTypeRepository],
    }).compile();
    // clear database
    await clearDatabase(getConnection());
    repository = moduleFixture.get<AutomationTriggerTypeRepository>(AutomationTriggerTypeRepository);
    const triggerType: DeepPartial<AutomationTriggerTypeEntity> = {
      serviceId: theServiceId,
      triggerTypeId: theTriggerTypeId,
      endpoint: theEndpoint,
      inputJSONSchema: {},
    };
    const record = repository.create(triggerType);
    await repository.save(record);
  });

  afterEach(async() => {
    await moduleFixture.close();
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });

  it('given a RecordMatchesConditions trigger type entity when get it by endpoint then should be got it', async() => {
    const triggerTypeServiceRelDtos = await repository.getTriggerTypeServiceRelByEndPoint(theEndpoint);
    expect(triggerTypeServiceRelDtos).toBeDefined();
    expect(triggerTypeServiceRelDtos.length).toEqual(1);
    expect(triggerTypeServiceRelDtos[0]!.serviceId).toEqual(theServiceId);
    expect(triggerTypeServiceRelDtos[0]!.triggerTypeId).toEqual(theTriggerTypeId);
  });

  it('given a RecordMatchesConditions trigger type entity when get it by endpoint then should be got it', async() => {
    const triggerTypeServiceRelWithEndpointDtos = await repository.getTriggerTypeServiceRelByEndPoints([theEndpoint]);
    expect(triggerTypeServiceRelWithEndpointDtos).toBeDefined();
    expect(triggerTypeServiceRelWithEndpointDtos.length).toEqual(1);
    expect(triggerTypeServiceRelWithEndpointDtos[0]!.serviceId).toEqual(theServiceId);
    expect(triggerTypeServiceRelWithEndpointDtos[0]!.triggerTypeId).toEqual(theTriggerTypeId);
    expect(triggerTypeServiceRelWithEndpointDtos[0]!.endpoint).toEqual(theEndpoint);
  });

  it('should be get inputJsonSchema by trigger type id.', async() => {
    const inputJsonSchema = await repository.selectInputJsonSchemaById(theTriggerTypeId);
    expect(inputJsonSchema).toBeDefined();
    expect(inputJsonSchema!.triggerTypeId).toEqual(theTriggerTypeId);
    expect(inputJsonSchema!.inputJSONSchema).toEqual({});
  });
});
