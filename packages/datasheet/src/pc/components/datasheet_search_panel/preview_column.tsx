

import * as React from 'react';
import { useEffect, useState } from 'react';
import { IMeta, WidgetApi } from '@apitable/core';
import { FormPreviewer } from 'pc/components/datasheet_search_panel/components/form_previewer';
import { WidgetPreview } from 'pc/components/datasheet_search_panel/components/widget_preview';
import { INodeInstalledWidget, SecondConfirmType } from './interface';

interface IPriviewColumnProps {
  currentMeta: IMeta | null;
  setLoading: React.Dispatch<boolean>;
  currentViewId: string;
  currentDatasheetId: string;
  secondConfirmType?: SecondConfirmType;

  onChange(result: { datasheetId?: string; mirrorId?: string; viewId?: string; widgetIds?: string[] }): void;
}

export const PreviewColumn: React.FC<React.PropsWithChildren<IPriviewColumnProps>> = (props) => {
  const { currentMeta, setLoading, currentViewId, currentDatasheetId, onChange, secondConfirmType } = props;
  const [installedWidgets, setInstalledWidgets] = useState<INodeInstalledWidget[] | null>(null);

  useEffect(() => {
    setInstalledWidgets(null);
    searchDatasheetInstalledWidget(currentDatasheetId);
    // eslint-disable-next-line
  }, [currentDatasheetId]);

  const showSubColumnWithWidget = secondConfirmType === SecondConfirmType.Widget;
  const searchDatasheetInstalledWidget = (datasheetId: string) => {
    if (!showSubColumnWithWidget) {
      return;
    }
    if (!datasheetId) {
      return;
    }
    setLoading(true);
    WidgetApi.getWidgetsInfoByNodeId(datasheetId).then((res) => {
      const { data, success } = res.data;
      if (success) {
        setLoading(false);
        setInstalledWidgets(data);
      }
    });
  };

  const showViewPreview = Boolean(currentMeta && currentViewId && secondConfirmType === SecondConfirmType.Form);

  return (
    <>
      {showViewPreview && <FormPreviewer datasheetId={currentDatasheetId} viewId={currentViewId} meta={currentMeta!} onChange={onChange} />}
      {installedWidgets && <WidgetPreview onChange={onChange} installedWidgets={installedWidgets} />}
    </>
  );
};
