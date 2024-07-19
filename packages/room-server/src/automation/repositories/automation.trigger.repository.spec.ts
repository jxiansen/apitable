

import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfigService } from 'shared/services/config/database.config.service';
import { clearDatabase } from 'shared/testing/test-util';
import { DeepPartial, getConnection } from 'typeorm';
import { AutomationTriggerEntity } from '../entities/automation.trigger.entity';
import { AutomationTriggerRepository } from './automation.trigger.repository';

describe('AutomationTriggerRepository', () => {
  let moduleFixture: TestingModule;
  let repository: AutomationTriggerRepository;
  const theTriggerId = 'theTriggerId';
  const theTriggerTypeId = 'theTriggerTypeId';
  const theRobotId = 'theRobotId';
  let entity: AutomationTriggerEntity;

  beforeEach(async () => {
    moduleFixture = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        TypeOrmModule.forRootAsync({
          useClass: DatabaseConfigService,
        }),
        TypeOrmModule.forFeature([AutomationTriggerRepository]),
      ],
      providers: [AutomationTriggerRepository],
    }).compile();

    repository = moduleFixture.get<AutomationTriggerRepository>(AutomationTriggerRepository);
    // clear database
    await clearDatabase(getConnection());
    const trigger: DeepPartial<AutomationTriggerEntity> = {
      triggerId: theTriggerId,
      triggerTypeId: theTriggerTypeId,
      robotId: theRobotId,
      input: {},
      resourceId: 'dst',
    };
    const record = repository.create(trigger);
    entity = await repository.save(record);
  });

  afterEach(async () => {
    await moduleFixture.close();
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });

  it('given a trigger entity when get trigger by the robot id and the trigger type id', async () => {
    const resourceRobotTriggerDtos = await repository.getTriggerByRobotIdAndTriggerTypeId(theRobotId, theTriggerTypeId);
    expect(resourceRobotTriggerDtos).toBeDefined();
    expect(resourceRobotTriggerDtos.length).toEqual(1);
    expect(resourceRobotTriggerDtos[0]!.triggerId).toEqual(theTriggerId);
  });

  it('should be get triggers by robot ids', async () => {
    const robotTriggerBaseInfoDtos = await repository.selectTriggerBaseInfosByRobotIds([theRobotId]);
    expect(robotTriggerBaseInfoDtos).toBeDefined();
    expect(robotTriggerBaseInfoDtos.length).toEqual(1);
    expect(robotTriggerBaseInfoDtos[0]!.triggerId).toEqual(theTriggerId);
    expect(robotTriggerBaseInfoDtos[0]!.triggerTypeId).toEqual(theTriggerTypeId);
    expect(robotTriggerBaseInfoDtos[0]!.robotId).toEqual(theRobotId);
  });

  it('should get trigger info by robot id', async () => {
    const triggerInfo = await repository.selectTriggerInfoByRobotId(theRobotId);
    expect(triggerInfo).toBeDefined();
    expect(triggerInfo!.triggerId).toEqual(theTriggerId);
    expect(triggerInfo!.triggerTypeId).toEqual(theTriggerTypeId);
    expect(triggerInfo!.input).toEqual({});
  });

  it('should get undefined if robot not config the trigger', async () => {
    await repository.delete(entity.id);
    const triggerInfo = await repository.selectTriggerInfoByRobotId(theRobotId);
    expect(triggerInfo).toEqual(undefined);
  });
});
