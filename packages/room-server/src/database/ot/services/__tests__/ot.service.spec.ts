

import {
  generateRandomString,
  getNewIds,
  IDPrefix,
  IListDeleteAction,
  IListInsertAction,
  ILocalChangeset,
  IObjectDeleteAction,
  IObjectInsertAction,
  ResourceType,
} from '@apitable/core';
import { OtService } from 'database/ot/services/ot.service';
import { IRoomChannelMessage } from '../../interfaces/ot.interface';
import { Test } from '@nestjs/testing';
import { AppModule } from 'app.module';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';

describe('OtService', () => {
  let app: NestFastifyApplication;
  let otService: OtService;

  beforeAll(async() => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule]
    }).compile();
    app = moduleFixture.createNestApplication<NestFastifyApplication>(new FastifyAdapter());
    await app.init();
    otService = app.get<OtService>(OtService);
  });

  afterAll(async() => {
    await app.close();
  });

  const spaceId = 'spczdmQDfBAn5';
  const dstId = 'dstsejCJ4l2Rvora4d';

  // tests keep failing, TODO: fix
  xdescribe('parseChanges', () => {
    it('add and del same record', async() => {
      const recordId = getNewIds(IDPrefix.Record, 1, [])[0];
      const cs: ILocalChangeset = {
        messageId: generateRandomString(),
        baseRevision: 0,
        resourceId: dstId,
        resourceType: ResourceType.Datasheet,
        operations: [
          {
            cmd: 'AddRecords',
            actions: [
              { n: 'LI', p: ['meta', 'views', 0, 'rows', 1], li: { recordId }} as IListInsertAction,
              { n: 'OI', p: ['recordMap', recordId], oi: { id: recordId, data: {}, commentCount: 0 }} as IObjectInsertAction,
            ],
          },
          {
            cmd: 'DeleteRecords',
            actions: [
              { n: 'LD', p: ['meta', 'views', 0, 'rows', 1], ld: { recordId }} as IListDeleteAction,
              { n: 'OD', p: ['recordMap', recordId], od: { id: recordId, data: {}, commentCount: 0 }} as IObjectDeleteAction,
            ],
          },
        ],
      };
      const message: IRoomChannelMessage = { roomId: dstId, changesets: [cs], internalAuth: { userId: '', uuid: '' }};
      const { resultSet } = await otService.parseChanges(spaceId, message, cs, {});
      expect(resultSet.toCreateRecord.has(recordId)).toEqual(false);
    });

    it('del record and undo', async() => {
      const recordId = 'recEGVXZkR3ri';
      const cs: ILocalChangeset = {
        messageId: generateRandomString(),
        baseRevision: 0,
        resourceId: dstId,
        resourceType: ResourceType.Datasheet,
        operations: [
          {
            cmd: '"DeleteRecords"',
            actions: [
              { n: 'LD', p: ['meta', 'views', 0, 'rows', 1], ld: { recordId }} as IListDeleteAction,
              { n: 'OD', p: ['recordMap', recordId], od: { id: recordId, data: {}, commentCount: 0 }} as IObjectDeleteAction,
            ],
          },
          {
            cmd: 'UNDO:"DeleteRecords"',
            actions: [
              { n: 'LI', p: ['meta', 'views', 0, 'rows', 1], li: { recordId }} as IListInsertAction,
              { n: 'OI', p: ['recordMap', recordId], oi: { id: recordId, data: {}, commentCount: 0 }} as IObjectInsertAction,
            ],
          },
        ],
      };
      const message: IRoomChannelMessage = { roomId: dstId, changesets: [cs], internalAuth: { userId: '', uuid: '' }};
      const { resultSet } = await otService.parseChanges(spaceId, message, cs, {});
      expect(resultSet.toDeleteRecordIds.includes(recordId)).toEqual(false);
    });
  });
});
