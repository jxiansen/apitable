import * as React from 'react';
import { IMeta } from '@apitable/core';
import { ISearchPanelState } from 'pc/components/datasheet_search_panel/store/interface/search_panel';

export enum SecondConfirmType {
  Widget,
  Form,
  Chat,
  AIForm,
}

export interface INodeInstalledWidget {
  datasheetId: string;
  datasheetName: string;
  widgetId: string;
  widgetName: string;
  widgetPackageCover: string;
  widgetPackageIcon: string;
}

export interface ISearchOptions {
  showForm: boolean;
  showDatasheet: boolean;
  needPermission?: 'manageable' | 'editable';
  showMirror: boolean;
  showView: boolean;
}
export interface ISearchPanelProps {
  hidePanel(e: any): void;
  options?: {
    showForm: boolean;
    showDatasheet: boolean;
    needPermission?: 'manageable' | 'editable';
    showMirror: boolean;
    showView: boolean;
  };

  onNodeSelect?: (data: { datasheetId?: string; formId?: string }) => void;

  directClickMode?: boolean;
  noCheckPermission?: boolean;
  showMirrorNode: boolean | undefined;
  folderId: string;
  onChange: (result: {
    datasheetId?: string;
    formId?: string;
    mirrorId?: string;
    viewId?: string;
    widgetIds?: string[];
    nodeName?: string;
    meta?: IMeta;
  }) => void;
  secondConfirmType?: SecondConfirmType;
  localState: ISearchPanelState;
  localDispatch: React.Dispatch<Partial<ISearchPanelState>>;
}
