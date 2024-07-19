import { DeepPartial, getConnection } from 'typeorm';
import { WidgetRepository } from './widget.repository';
import { WidgetEntity } from '../entities/widget.entity';
import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfigService } from 'shared/services/config/database.config.service';
import { clearDatabase } from 'shared/testing/test-util';

describe('DatasheetRepositoryTest', () => {
  let moduleFixture: TestingModule;
  let repository: WidgetRepository;
  let entity: WidgetEntity;

  beforeEach(async () => {
    moduleFixture = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        TypeOrmModule.forRootAsync({
          useClass: DatabaseConfigService,
        }),
        TypeOrmModule.forFeature([WidgetRepository]),
      ],
    }).compile();

    // clear database
    await clearDatabase(getConnection());
    repository = moduleFixture.get<WidgetRepository>(WidgetRepository);
    const widgetEntity: DeepPartial<WidgetEntity> = {
      widgetId: 'widgetId',
      revision: 1,
    };
    const record = repository.create(widgetEntity);
    entity = await repository.save(record);
  });

  afterEach(async () => {
    await moduleFixture.close();
  });

  it('should get revisions by widget ids', async () => {
    const resourceRevisions = await repository.getRevisionByWdtIds([entity.widgetId]);
    expect(resourceRevisions.length).toEqual(1);
    expect(resourceRevisions[0]?.resourceId).toEqual(entity.widgetId);
    expect(resourceRevisions[0]?.revision).toEqual('1');
  });
});
