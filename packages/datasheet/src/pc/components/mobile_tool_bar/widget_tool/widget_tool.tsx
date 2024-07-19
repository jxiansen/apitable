import { IconButton } from '@apitable/components';
import { ResourceType, Selectors } from '@apitable/core';
import { WidgetOutlined } from '@apitable/icons';
import { ShortcutActionManager, ShortcutActionName } from 'modules/shared/shortcut_key';
import { WidgetPanel } from 'pc/components/widget';
import { useMountWidgetPanelShortKeys } from 'pc/components/widget/hooks';
import { useAppSelector } from 'pc/store/react-redux';
import { Popup } from '../../common/mobile/popup';
import styles from './style.module.less';

export const WidgetTool = () => {
  const isOpenPanel = useAppSelector((state) => {
    const { mirrorId, datasheetId } = state.pageParams;
    const resourceType = mirrorId ? ResourceType.Mirror : ResourceType.Datasheet;
    const resourceId = mirrorId || datasheetId || '';
    return Boolean(Selectors.getResourceWidgetPanelStatus(state, resourceId, resourceType)?.opening);
  });

  const togglePanel = async () => {
    await ShortcutActionManager.trigger(ShortcutActionName.ToggleWidgetPanel);
  };

  useMountWidgetPanelShortKeys();

  return (
    <>
      <IconButton className={styles.widgetTool} icon={WidgetOutlined} onClick={togglePanel} />
      <Popup
        className={styles.widgetToolPopup}
        open={isOpenPanel}
        placement="right"
        width={'100vw'}
        height={'100vh'}
        closable={false}
        bodyStyle={{
          padding: '0',
        }}
      >
        <WidgetPanel />
      </Popup>
    </>
  );
};
