import { EntityRepository, In, Repository } from 'typeorm';
import { DatasheetRecordArchiveEntity } from '../entities/datasheet.record.archive.entity';
import { chunk } from 'lodash';

@EntityRepository(DatasheetRecordArchiveEntity)
export class DatasheetRecordArchiveRepository extends Repository<DatasheetRecordArchiveEntity> {
  async getArchiveStatusByDstIdAndRecordId(dstId: string, recordId: string): Promise<boolean> {
    return await this.findOne({
      where: { dstId, recordId, isDeleted: false },
      select: ['isArchived'],
    }).then((entity) => {
      return entity == null ? false : entity.isArchived;
    });
  }

  async getArchivedRecordIdsByDstId(dstId: string): Promise<Set<String>> {
    return await this.find({
      where: { dstId, isArchived: true, isDeleted: false },
      select: ['recordId'],
    }).then((entities) => {
      return new Set(entities.map((entity) => entity.recordId));
    });
  }

  async getArchivedRecordIdsByDstIdAndRecordIds(dstId: string, recordIds: string[]): Promise<Set<String>> {
    let dbMethod = async (dstId: string, recordIds: string[]) => {
      let entities = await this.find({
        where: { dstId, recordId: In(recordIds), isArchived: true, isDeleted: false },
        select: ['recordId'],
      });
      return entities.map((entity) => entity.recordId);
    };

    let batchRecordIds = chunk(recordIds, 1000);

    let promise = [];
    for (let batchRecordId of batchRecordIds) {
      promise.push(dbMethod(dstId, batchRecordId));
    }

    let promiseResult = await Promise.all(promise);

    let results = promiseResult.reduce((pre: String[], cur) => {
      return pre.concat(cur);
    }, []);
    return new Set<String>(results);
  }

  async countRowsByDstId(dstId: string): Promise<number> {
    return await this.count({ where: [{ dstId, isArchived: true, isDeleted: false }] });
  }

  async getArchivedRecords(dstId: string, pageSize: number, offset: number) {
    return await this.find({
      where: { dstId, isArchived: true, isDeleted: false },
      order: { archivedAt: 'DESC' },
      take: pageSize,
      skip: offset,
    });
  }
}
