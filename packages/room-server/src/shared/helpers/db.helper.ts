

import { In, ObjectLiteral, Repository } from 'typeorm';

export async function batchQueryByRecordIdIn<T extends ObjectLiteral>(
  repository: Repository<T>,
  select: string[],
  recordIds: string[],
  whereConditions: ObjectLiteral,
  batchSize = 1000,
) {
  const totalRecords = recordIds.length;
  let offset = 0;
  let records: any[] = [];

  while (offset < totalRecords) {
    const batchRecordIds = recordIds.slice(offset, offset + batchSize);

    const batchRecords = await repository.find({
      select,
      where: { recordId: In(batchRecordIds), ...whereConditions },
    });

    records = records.concat(batchRecords);

    offset += batchSize;
  }

  return records;
}
