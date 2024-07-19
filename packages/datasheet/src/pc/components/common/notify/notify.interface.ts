export enum NotifyKey {
  ArchiveRecord = 'archiveRecord',
  Export = 'export',
  Paste = 'paste',
  DeleteRecord = 'deleteRecord',
  Undo = 'undo',
  // clear Record data
  ClearRecordData = 'clearRecordData',
  DeleteField = 'deleteField',
  DeleteOption = 'deleteOption',
  ChangeOptionName = 'changeOptionName',
  AddField = 'addField',
  ChangeFieldSetting = 'changeFieldSetting',
  InsertField = 'insetField',
  DuplicateField = 'DuplicateField',
  FillCell = 'fillCell',
  DeleteKanbanGroup = 'deleteKanbanGroup',
  Rollback = 'rollback',
}

export interface ICustomNotifyConfig {
  btnText: string;
  btnFn(): void | Promise<void>;
  key: NotifyKey;
  dom?: HTMLElement | null;
}
