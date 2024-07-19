import { useState } from 'react';
import { ConfigConstant } from '@apitable/core';
import { SecondConfirmType } from '../components/datasheet_search_panel/interface';
import { useCatalog } from './use_catalog';

export interface IPanelInfo {
  folderId: string;
  datasheetId?: string;
  secondConfirmType?: SecondConfirmType;
}

export const useSearchPanel = () => {
  const [panelVisible, setPanelVisible] = useState(false);
  const [panelInfo, setPanelInfo] = useState<IPanelInfo | null>(null);
  const { addTreeNode } = useCatalog();
  const onChange = ({
    datasheetId,
    viewId,
    viewName,
    secondConfirmType,
  }: {
    datasheetId?: string;
    viewId?: string;
    viewName?: string;
    secondConfirmType?: SecondConfirmType;
  }) => {
    setPanelVisible(false);

    const _secondConfirmType = panelInfo?.secondConfirmType || secondConfirmType;

    if (_secondConfirmType === SecondConfirmType.Form) {
      addTreeNode(
        panelInfo?.folderId,
        ConfigConstant.NodeType.FORM,
        {
          datasheetId,
          viewId,
        },
        viewName,
      );
    }
  };

  return {
    panelVisible,
    panelInfo,
    onChange,
    setPanelInfo,
    setPanelVisible,
  };
};
