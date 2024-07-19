import { AutomationServiceRepository } from './automation.service.repository';
import { AutomationServiceEntity } from '../entities/automation.service.entity';
import { DeepPartial, getConnection } from 'typeorm';
import { OFFICIAL_SERVICE_SLUG } from '../events/helpers/trigger.event.helper';
import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfigService } from 'shared/services/config/database.config.service';
import { clearDatabase } from 'shared/testing/test-util';

describe('AutomationServiceRepository', () => {
  let moduleFixture: TestingModule;
  let repository: AutomationServiceRepository;
  const theServiceId = 'serviceId';
  const theBaseUrl = 'baseUrl';
  let entity: AutomationServiceEntity;

  beforeEach(async () => {
    moduleFixture = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        TypeOrmModule.forRootAsync({
          useClass: DatabaseConfigService,
        }),
        TypeOrmModule.forFeature([AutomationServiceRepository]),
      ],
      providers: [AutomationServiceRepository],
    }).compile();

    repository = moduleFixture.get<AutomationServiceRepository>(AutomationServiceRepository);
    // clear database
    await clearDatabase(getConnection());
    const service: DeepPartial<AutomationServiceEntity> = {
      serviceId: theServiceId,
      slug: OFFICIAL_SERVICE_SLUG,
      baseUrl: theBaseUrl,
    };
    const record = repository.create(service);
    entity = await repository.save(record);
  });

  afterEach(async () => {
    await moduleFixture.close();
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });

  it("given one official service entity when judge whether the service id is the official service's id", async () => {
    const number = await repository.countOfficialServiceByServiceId(entity.serviceId);
    expect(number).toEqual(1);
  });

  it('given one official service entity when judge whether the service with the special service id and service slug exist', async () => {
    const number = await repository.countServiceByServiceIdAndSlug(entity.serviceId, OFFICIAL_SERVICE_SLUG);
    expect(number).toEqual(1);
  });

  it("should be get services' baseUrls", async () => {
    const baseUrls = await repository.selectBaseUrlsByServiceIds([theServiceId]);
    expect(baseUrls).toBeDefined();
    expect(baseUrls.length).toEqual(1);
    expect(baseUrls[0]!.serviceId).toEqual(theServiceId);
    expect(baseUrls[0]!.baseUrl).toEqual(theBaseUrl);
  });
});
