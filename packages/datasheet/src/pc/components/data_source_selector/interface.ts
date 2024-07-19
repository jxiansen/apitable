import { IMeta } from '@apitable/core';

export interface INodeInstalledWidget {
  datasheetId: string;
  datasheetName: string;
  widgetId: string;
  widgetName: string;
  widgetPackageCover: string;
  widgetPackageIcon: string;
}

// interface IAllowNodeType {
//   datasheet?: boolean;
//   view?: boolean;
//   mirror?: boolean
// }

export interface IOnChangeParams {
  datasheetId?: string;
  automationId?: string;
  mirrorId?: string;
  viewId?: string;
  widgetIds?: string[];
  nodeName?: string;
  meta?: IMeta;
  formId?: string;
}

export type IOnChange<R extends IOnChangeParams> = (result: R) => void;

export interface IHeadConfig {
  title: string;
  docUrl?: string;

  onHide(): void;
}

// type IRequiredData = keyof IOnChangeParams;

export interface ISearchPanelProps<R extends IOnChangeParams = IOnChangeParams> {
  headerConfig?: IHeadConfig;
  onChange: IOnChange<R>;
  single?: boolean;
  // allowNodeType?: IAllowNodeType;
  filterPermissionForNode?: 'editable';
  requiredData: (keyof R)[];
  defaultNodeIds: {
    folderId: string;
    datasheetId?: string;
    automationId?: string;
    formId?: string;
  };
}
