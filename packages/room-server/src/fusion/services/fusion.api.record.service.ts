import { IRecordMap } from '@apitable/core';
import { Injectable } from '@nestjs/common';
import { DatasheetRecordService } from 'database/datasheet/services/datasheet.record.service';
import { difference } from 'lodash';
import { ApiException, ApiTipId } from 'shared/exception';

@Injectable()
export class FusionApiRecordService {
  constructor(private readonly recordService: DatasheetRecordService) {}

  /**
   * Check if recordId and table ID match
   *
   * @param dstId
   * @param recordIds
   * @param error error message
   *
   * @throws ApiException
   */
  public async validateRecordExists(dstId: string, recordIds: string[], error: ApiTipId) {
    const dbRecordIds = await this.recordService.getIdsByDstIdAndRecordIds(dstId, recordIds);
    if (!dbRecordIds?.length) {
      throw ApiException.tipError(error, { recordId: recordIds.join(', ') });
    }
    const diffs = difference(recordIds, dbRecordIds);
    if (diffs.length) {
      throw ApiException.tipError(error, { recordId: diffs.join(',') });
    }
  }

  public async validateArchivedRecordIncludes(dstId: string, recordIds: string[], error: ApiTipId) {
    const archivedRecordIds = await this.recordService.getArchivedIdsByDstIdAndRecordIds(dstId, recordIds);
    if (archivedRecordIds.size) {
      throw ApiException.tipError(error, { recordId: Array.from(archivedRecordIds).join(', ') });
    }
  }

  public getBasicRecordsByRecordIds(dstId: string, recordIds: string[]): Promise<IRecordMap> {
    return this.recordService.getBasicRecordsByRecordIds(dstId, recordIds);
  }

  public async getDeletedRecordsByDstId(dstId: string): Promise<string[]> {
    return this.recordService.getDeletedRecordsByDstId(dstId);
  }
}
