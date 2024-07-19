

import { Injectable } from '@nestjs/common';
import { RecordAlarmStatus } from 'shared/enums/record.alarm.enum';
import { DatasheetRecordAlarmEntity } from './entities/datasheet.record.alarm.entity';
import { EntityManager } from 'typeorm';
import { ICommonData } from '../ot/interfaces/ot.interface';

@Injectable()
export abstract class DatasheetRecordAlarmBaseService {

  public async getCurrentActivatedRecordAlarms(_intervalSecond: number): Promise<DatasheetRecordAlarmEntity[] | null> {
    return await Promise.resolve([]);
  }

  public async batchUpdateStatusOfRecordAlarms(_alarmIds: string[], _status: RecordAlarmStatus) {
    await Promise.resolve();
  }

  async handleRecordAlarms(
    _manager: EntityManager,
    _commonData: ICommonData,
    _resultSet: { [key: string]: any },
  ) {
    await Promise.resolve();
  }

}
