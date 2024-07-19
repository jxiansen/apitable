import { EntityRepository, In, Repository } from 'typeorm';
import { DatasheetRecordEntity } from '../entities/datasheet.record.entity';

@EntityRepository(DatasheetRecordEntity)
export class DatasheetRecordRepository extends Repository<DatasheetRecordEntity> {
  selectRecordsDataByDstId(dstId: string): Promise<DatasheetRecordEntity[] | undefined> {
    return this.find({
      select: ['recordId', 'data', 'recordMeta'],
      where: [{ dstId, isDeleted: false }],
    });
  }

  selectRecordsDataByDstIdIgnoreDeleted(dstId: string): Promise<DatasheetRecordEntity[] | undefined> {
    return this.find({
      select: ['recordId', 'data', 'recordMeta'],
      where: [{ dstId }],
    });
  }

  selectRevisionHistoryByDstIdAndRecordId(dstId: string, recordId: string): Promise<{ revisionHistory: string } | undefined> {
    return this.createQueryBuilder('vdr')
      .select('vdr.revision_history', 'revisionHistory')
      .where('vdr.dst_id = :dstId', { dstId })
      .andWhere('vdr.record_id = :recordId', { recordId })
      .andWhere('vdr.is_deleted = 0')
      .getRawOne<{ revisionHistory: string }>();
  }

  selectLinkRecordIdsByRecordIdAndFieldId(dstId: string, recordId: string, fieldId: string) {
    const path = `$.${fieldId}`;
    // todo(itou): replace dynamic sql
    return this.query(
      `
       SELECT vdr.data->?  as linkRecordIds
       FROM ${this.manager.connection.options.entityPrefix}datasheet_record vdr
       WHERE vdr.dst_id = ? AND vdr.record_id = ? AND vdr.is_deleted = 0 limit 1
      `,
      [path, dstId, recordId],
    );
  }

  selectDeletedCountByDstIdAndRecordIs(dstId: string, recordIds: string[]): Promise<number> {
    return this.count({ where: [{ dstId, recordId: In(recordIds), isDeleted: true }] });
  }
}
