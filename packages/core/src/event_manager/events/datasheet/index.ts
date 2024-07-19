

import { OPEventCellUpdated } from './cell_updated';
import { OPEventFieldUpdated } from './field_updated';
import { OPEventRecordCreated } from './record_created';
import { OPEventRecordDeleted } from './record_deleted';
import { OPEventRecordCommentUpdated, OPEventRecordMetaUpdated, OPEventRecordUpdated } from './record_updated';
import { OPEventRecordUnarchived } from './record_unarchived';
import { OPEventRecordArchived } from './record_archived';

export const datasheetEvent = {
  // Cell
  OPEventCellUpdated,
  // OPEventMemberCellAdd,
  // OPEventMemberCellUpdate,
  // field
  OPEventFieldUpdated,
  // Record
  OPEventRecordDeleted,
  OPEventRecordUpdated,
  OPEventRecordCommentUpdated,
  OPEventRecordMetaUpdated,
  OPEventRecordCreated,
  OPEventRecordUnarchived,
  OPEventRecordArchived,
};