

import { IMirrorSnapshot, INodeMeta, IServerMirror, ISourceDatasheetInfo } from '@apitable/core';

export class MirrorInfo implements IServerMirror {
  mirror!: INodeMeta;
  sourceInfo!: ISourceDatasheetInfo;
  snapshot!: IMirrorSnapshot;
}
