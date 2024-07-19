import classnames from 'classnames';
import React from 'react';
import { GlobalContextProvider } from '@apitable/widget-sdk';
import { WidgetBlock } from './widget/widget_block';
import WidgetAlone from './widget_alone';
import styles from './style.module.less';

export const Main: React.FC<React.PropsWithChildren<unknown>> = () => {
  const query = new URLSearchParams(window.location.search);
  const isAlone = query.get('isAlone');
  const widgetId = query.get('widgetId');
  if (!widgetId && !isAlone) {
    return <>No widgetId</>;
  }
  return (
    <div className={classnames(styles.main, 'main')}>
      {!isAlone ? (
        <WidgetBlock widgetId={widgetId!} />
      ) : (
        <GlobalContextProvider>
          <WidgetAlone />
        </GlobalContextProvider>
      )}
    </div>
  );
};
