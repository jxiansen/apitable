

import { useState } from 'react';

import { ConfigConstant } from '@apitable/core';
import { useCatalog } from 'pc/hooks/use_catalog';

export interface IPanelInfo {
  folderId: string;
  datasheetId?: string;
}

export const useControlDataSourceSelectorForForm = () => {
  const [panelVisible, setPanelVisible] = useState(false);
  const [panelInfo, setPanelInfo] = useState<IPanelInfo | null>(null);
  const { addTreeNode } = useCatalog();
  const onChange = ({ datasheetId, viewId, viewName }: {
    datasheetId?: string,
    viewId?: string,
    viewName?: string,
  }) => {
    setPanelVisible(false);

    addTreeNode(panelInfo?.folderId, ConfigConstant.NodeType.FORM, {
      datasheetId,
      viewId,
    }, viewName);

  };

  return {
    panelVisible,
    panelInfo,
    onChange,
    setPanelInfo,
    setPanelVisible,
  };
};
