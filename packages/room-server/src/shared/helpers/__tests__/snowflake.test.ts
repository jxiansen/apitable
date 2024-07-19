

import { groupBy } from 'lodash';
import { IdWorker, TIMESTAMP_LEFT_SHIFT } from '../snowflake';

describe('snowflake', () => {
  it('should generate unique IDs', () => {
    const ids = Array(1000)
      .fill(0)
      .map(_ => IdWorker.nextId());
    const idSet = new Set(ids);
    expect(idSet.size).toEqual(1000);
  });

  it('should generate monotonically increasing IDs', () => {
    const ids = Array(1000)
      .fill(0)
      .map(_ => IdWorker.nextId());
    for (let i = 0; i < ids.length - 1; i++) {
      expect(ids[i]).toBeLessThan(ids[i + 1]!);
    }
  });

  it('should generate unique IDs in one millisecond', () => {
    const ids = Array(1000)
      .fill(0)
      .map(_ => IdWorker.nextId());
    const idGroups = groupBy(ids, id => id >> TIMESTAMP_LEFT_SHIFT);
    for (const timestamp in idGroups) {
      const idsInOneMs = idGroups[timestamp]!;
      const set = new Set(idsInOneMs);
      expect(set.size).toEqual(idsInOneMs.length);
    }
  });
});
