import classnames from 'classnames';
import Trigger from 'rc-trigger';
import { FC, useEffect, useState } from 'react';
import { shallowEqual } from 'react-redux';
import { useThemeColors } from '@apitable/components';
import { Api, ConfigConstant, DATASHEET_ID, Selectors, Strings, t } from '@apitable/core';
import { MirrorOutlined } from '@apitable/icons';
import { TComponent } from 'pc/components/common/t_component';
import { MirrorListInner } from 'pc/components/mirror/mirror_list/mirror_list_inner';
import { ToolItem } from 'pc/components/tool_bar/tool_item';
import { useAppSelector } from 'pc/store/react-redux';
import { IForeignFormProps, IMirrorItem } from './interface';
import styles from './style.module.less';

export const MirrorList: FC<React.PropsWithChildren<IForeignFormProps>> = (props) => {
  const colors = useThemeColors();
  const { className, showLabel = true, isHide } = props;
  const [loading, setLoading] = useState(false);
  const [panelVisible, setPanelVisible] = useState(false);
  const [mirrorList, setMirrorList] = useState<IMirrorItem[]>([]);
  // const spaceId = useAppSelector(state => state.space.activeId);
  const {
    folderId,
    datasheetId,
    viewId,
    // viewName,
  } = useAppSelector((state) => {
    const datasheetId = Selectors.getActiveDatasheetId(state)!;
    const datasheet = Selectors.getDatasheet(state, datasheetId);
    const activeView = Selectors.getActiveViewId(state)!;
    const views = datasheet?.snapshot.meta.views || [];
    const viewName = views.find((item) => item.id === activeView)?.name;
    return {
      folderId: Selectors.getDatasheetParentId(state)!,
      datasheetId,
      viewId: activeView,
      viewName,
    };
  }, shallowEqual);
  const creatable = useAppSelector((state) => {
    const { manageable } = state.catalogTree.treeNodesMap[folderId]?.permissions || {};
    const { editable } = Selectors.getPermissions(state);
    return manageable && editable;
  });

  const fetchMirrorList = () => {
    setLoading(true);
    Api.getRelateNodeByDstId(datasheetId, viewId, ConfigConstant.NodeType.MIRROR).then((res) => {
      const { success, data } = res.data;
      if (success) {
        setMirrorList(data);
        setLoading(false);
      }
    });
  };

  const onClick = () => {
    setPanelVisible(true);
    fetchMirrorList();
  };

  useEffect(() => {
    fetchMirrorList();
    // eslint-disable-next-line
  }, [viewId]);

  return (
    <>
      <Trigger
        action={['click']}
        popup={<MirrorListInner creatable={creatable} mirrorList={mirrorList} loading={loading} />}
        destroyPopupOnHide
        popupAlign={{ points: ['tr', 'br'], offset: [0, 0], overflow: { adjustX: true, adjustY: true } }}
        popupStyle={{ width: 400 }}
        popupVisible={panelVisible}
        onPopupVisibleChange={(visible) => setPanelVisible(visible)}
        zIndex={1000}
      >
        <ToolItem
          showLabel={isHide || showLabel}
          className={classnames(className, styles.mirrorItem, {
            [styles.active]: panelVisible,
          })}
          text={mirrorList.length ? <TComponent tkey={t(Strings.view_mirror_count)} params={{ count: mirrorList.length }} /> : t(Strings.mirror)}
          icon={<MirrorOutlined color={panelVisible ? colors.primaryColor : colors.secondLevelText} className={styles.toolIcon} />}
          onClick={onClick}
          id={DATASHEET_ID.FORM_BTN}
        />
      </Trigger>
    </>
  );
};
