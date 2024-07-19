import { ThemeName } from '@apitable/components';
import { IWidgetConfig, IWidgetState } from 'interface';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, Store } from 'redux';
import { rootReducers } from '../../store/slice/root';
import { WidgetConfigContext, WidgetContext } from '../widget_context';

const _Provider: any = Provider;

export function createWidgetStore(widgetState: IWidgetState): Store {
  return createStore(rootReducers, widgetState);
}

export function createWidgetContextWrapper(config: IWidgetConfig, widgetState: IWidgetState, locale = 'zh-CN') {
  const widgetStore = createWidgetStore(widgetState);

  return ({ children }: { children: any }) => (
    <_Provider store={widgetStore}>
      <WidgetContext.Provider value={{ id: widgetState.widget!.id, theme: ThemeName.Light, locale, widgetStore }}>
        <WidgetConfigContext.Provider value={config}>{children}</WidgetConfigContext.Provider>
      </WidgetContext.Provider>
    </_Provider>
  );
}
