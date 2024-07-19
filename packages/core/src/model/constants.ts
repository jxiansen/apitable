

import { BasicValueType } from 'types';
import { isServer } from 'utils/env';

// album(gallery) view has no cover field ID
export const NO_COVER_FIELD_ID = 'NO_COVER_FIELD_ID';

export const DEFAULT_TIME_ZONE = (isServer() && (process.env.TZ || process.env.TIMEZONE)) || 'UTC';

export const ValueTypeMap = {
  [BasicValueType.Number]: 'number',
  [BasicValueType.String]: 'string',
  [BasicValueType.Boolean]: 'boolean',
  [BasicValueType.Array]: 'array',
  [BasicValueType.DateTime]: 'string',
};
