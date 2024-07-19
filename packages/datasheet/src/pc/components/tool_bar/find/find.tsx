import { useKeyPress } from 'ahooks';
import classNames from 'classnames';
import { ShortcutActionManager, ShortcutActionName } from 'modules/shared/shortcut_key';
import { useCallback, useEffect, useRef, useState } from 'react';
import * as React from 'react';
import { useThemeColors } from '@apitable/components';
import { Selectors, StoreActions, Strings, t, ViewType } from '@apitable/core';
import { SearchOutlined } from '@apitable/icons';
import { expandRecordIdNavigate } from 'pc/components/expand_record';
import { store } from 'pc/store';
import { useAppSelector } from 'pc/store/react-redux';
import { setStorage, StorageName } from 'pc/utils/storage/storage';
import { dispatch } from 'pc/worker/store';
import { ToolItem } from '../tool_item';
import { FindSearchInput } from './find_search_input';
import styles from './styles.module.less';

interface ISearchInputRef {
  select(): void;
}

type IKanbanGroupCollapse = string[];
type IGirdGroupCollapse = string[];
type IGroupCollapse = IKanbanGroupCollapse | IGirdGroupCollapse | null;
type IGroupCollapseState = {
  [datasheetIdViewId: string]: IGroupCollapse;
};

type IFindProps = {
  className: string;
  showLabel?: boolean;
  onOpen?: () => void;
  isFindOpen: boolean;
  setIsFindOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const FIND = 'FIND';

export const Find = (props: IFindProps) => {
  const colors = useThemeColors();
  const { className, showLabel = true, onOpen, isFindOpen, setIsFindOpen } = props;
  const { viewId, datasheetId } = useAppSelector((state) => state.pageParams);
  const [keyword, setKeyword] = useState('');
  const inputRef = useRef<ISearchInputRef>(null);
  const viewType = useAppSelector((state) => {
    const snapshot = Selectors.getSnapshot(state, datasheetId)!;
    const view = Selectors.getViewById(snapshot, viewId!)!;
    return view?.type || ViewType.NotSupport;
  });
  const storageId = `${datasheetId},${viewId}`;
  const [lastGroupingCollapseState, setLastGroupingCollapseState] = useState<IGroupCollapseState>();
  const activeCurrentSearchCell = useCallback(() => {
    const state = store.getState();
    const snapshot = Selectors.getSnapshot(state, datasheetId)!;
    const view = Selectors.getViewById(snapshot, viewId!);
    const isSideRecordOpen = state.space.isSideRecordOpen;
    if ([ViewType.Grid, ViewType.Gantt, ViewType.Calendar].includes(view?.type as ViewType)) {
      const currentSearchCell = Selectors.getCurrentSearchItem(state);
      if (currentSearchCell) {
        const [recordId, fieldId] = currentSearchCell;
        dispatch(StoreActions.setActiveCell(datasheetId!, { recordId, fieldId }));
        if (isSideRecordOpen) {
          expandRecordIdNavigate(recordId);
        }
      }
    }
  }, [viewId, datasheetId]);

  const cacheLastGroupingCollapse = useCallback(() => {
    let lastGroupingCollapseState: string[] = [];
    const state = store.getState();
    switch (viewType) {
      case ViewType.Grid:
      case ViewType.Gallery:
        lastGroupingCollapseState = Selectors.getGroupingCollapseIds(state) || [];
        break;
      case ViewType.Kanban:
      default:
        lastGroupingCollapseState = Selectors.getKanbanGroupCollapse(state);
    }
    setLastGroupingCollapseState({ [storageId]: lastGroupingCollapseState });
  }, [viewType, storageId]);

  const changeGroupCollapse = useCallback(
    (groupCollapseState: IGroupCollapseState) => {
      const status = groupCollapseState[storageId];
      if (!status) return;
      switch (viewType) {
        case ViewType.Grid:
        case ViewType.Gallery:
          dispatch(StoreActions.setGroupingCollapse(datasheetId!, status as IGirdGroupCollapse));
          setStorage(StorageName.GroupCollapse, { [storageId]: status as IGirdGroupCollapse });
          break;
        case ViewType.Kanban:
        default:
          dispatch(StoreActions.setKanbanGroupingExpand(datasheetId!, status as IKanbanGroupCollapse));
          setStorage(StorageName.KanbanCollapse, { [storageId]: status as IKanbanGroupCollapse });
          break;
      }
    },
    [viewType, storageId, datasheetId],
  );

  useEffect(() => {
    if (isFindOpen) {
      // Clear the selection to avoid competing with the editor for input focus.
      dispatch(StoreActions.clearSelection(datasheetId!));
      // Cache the last grouping information.
      cacheLastGroupingCollapse();
      let clearGroupCollapse: never[];
      switch (viewType) {
        case ViewType.Grid:
        case ViewType.Gallery:
          clearGroupCollapse = [];
          break;
        case ViewType.Kanban:
        default:
          clearGroupCollapse = [];
          break;
      }
      // Clear group information.
      changeGroupCollapse({ [storageId]: clearGroupCollapse });
      onOpen && onOpen();
    } else {
      // Restore group information.
      if (lastGroupingCollapseState != null) {
        changeGroupCollapse(lastGroupingCollapseState);
      }
      // When the panel is not visible, activate the last cell searched and clear the search keywords.
      activeCurrentSearchCell();
      dispatch(StoreActions.clearActiveRowInfo(datasheetId!));
      dispatch(StoreActions.setSearchKeyword(datasheetId!, ''));
    }
    // eslint-disable-next-line
  }, [isFindOpen]);

  useEffect(() => {
    setIsFindOpen(false);
    setKeyword('');
    dispatch(StoreActions.setSearchKeyword(datasheetId!, ''));
    setLastGroupingCollapseState({ [storageId]: null });
  }, [storageId, datasheetId, setIsFindOpen]);

  useEffect(() => {
    // cmd + f only the search panel can be opened, not closed.
    const showFindPanel = () => {
      setIsFindOpen(true);
      inputRef.current?.select();
      dispatch(StoreActions.clearSelection(datasheetId!));
    };
    ShortcutActionManager.bind(ShortcutActionName.ToggleFindPanel, showFindPanel);
    return () => {
      ShortcutActionManager.unbind(ShortcutActionName.ToggleFindPanel);
    };
  });

  const toggleFinder = useCallback(() => {
    setIsFindOpen(!isFindOpen);
  }, [isFindOpen, setIsFindOpen]);

  const previewModalVisible = useAppSelector((state) => state.space.previewModalVisible);

  useKeyPress('Esc', () => {
    if (!previewModalVisible) {
      setIsFindOpen(false);
    }
  });

  if (isFindOpen) {
    return <FindSearchInput setVisible={setIsFindOpen} keyword={keyword} setKeyword={setKeyword} ref={inputRef} />;
  }

  return (
    <div>
      <div id={FIND}>
        <ToolItem
          showLabel={showLabel}
          className={classNames({
            [className]: true,
            [styles.find]: true,
            [styles.active]: isFindOpen,
          })}
          onClick={toggleFinder}
          icon={<SearchOutlined size={16} color={isFindOpen ? colors.primaryColor : colors.secondLevelText} />}
          text={t(Strings.find)}
        />
      </div>
    </div>
  );
};
