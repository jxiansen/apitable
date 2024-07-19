import { EntityRepository, Repository } from 'typeorm';
import { DatasheetCascaderFieldEntity } from '../entities/datasheet.cascader.field.entity';

@EntityRepository(DatasheetCascaderFieldEntity)
export class DatasheetCascaderFieldRepository extends Repository<DatasheetCascaderFieldEntity> {
  public async selectRecordData(spaceId: string, datasheetId: string, fieldId: string): Promise<DatasheetCascaderFieldEntity[]> {
    return await this.find({
      select: ['linkedRecordData', 'linkedRecordId'],
      where: {
        spaceId,
        datasheetId,
        fieldId,
        isDeleted: false,
      },
    });
  }
}
