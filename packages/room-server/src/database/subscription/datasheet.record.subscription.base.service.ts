

import { IRemoteChangeset } from '@apitable/core';
import { Injectable } from '@nestjs/common';
import { ICommonData } from 'database/ot/interfaces/ot.interface';
import { isEmpty } from 'lodash';
import { DatasheetRecordSubscriptionEntity } from './entities/datasheet.record.subscription.entity';

@Injectable()
export class DatasheetRecordSubscriptionBaseService {

  public async subscribeDatasheetRecords(_userId: string, _dstId: string, recordIds: string[], _mirrorId?: string | null) {
    if (isEmpty(recordIds)) return;
    await Promise.resolve();
  }

  public async unsubscribeDatasheetRecords(_userId: string, _dstId: string, recordIds: string[]) {
    if (isEmpty(recordIds)) return;
    await Promise.resolve();
  }

  public async getSubscribedRecordIds(_userId: string, _dstId: string): Promise<string[]> {
    return await Promise.resolve([]);
  }

  public async getSubscriptionsByRecordId(_dstId: string, _recordId: string): Promise<DatasheetRecordSubscriptionEntity[]> {
    return await Promise.resolve([]);
  }

  public async getSubscriptionsByRecordIds(_dstId: string, _recordIds: string[]): Promise<DatasheetRecordSubscriptionEntity[]> {
    return await Promise.resolve([]);
  }

  public async handleChangesets(_changesets: IRemoteChangeset[], _context: any) {
    await Promise.resolve();
  }

  public async handleRecordAutoSubscriptions(
    _commonData: ICommonData,
    _resultSet: { [key: string]: any },
  ) {
    await Promise.resolve();
  }

}
