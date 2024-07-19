import dynamic from 'next/dynamic';
import * as React from 'react';
import { FC, memo, useCallback, useContext } from 'react';
import { KONVA_DATASHEET_ID, StoreActions } from '@apitable/core';
import { TriangleDownFilled, TriangleRightFilled } from '@apitable/icons';
import { Icon, Rect } from 'pc/components/konva_components';
import { setStorage, StorageName } from 'pc/utils/storage/storage';
import { GRID_ICON_COMMON_SIZE } from '../../../constant';
import { KonvaGridViewContext } from '../../../context';

const Group = dynamic(() => import('pc/components/gantt_view/hooks/use_gantt_timeline/group'), { ssr: false });
interface IGroupTabProps {
  x?: number;
  y?: number;
  height: number;
  width: number;
  depth: number;
  recordId: string;
}

const TriangleDown16FilledPath = TriangleDownFilled.toString();
const TriangleRight16FilledPath = TriangleRightFilled.toString();

export const GroupTab: FC<React.PropsWithChildren<IGroupTabProps>> = memo((props) => {
  const { x = 0, y = 0, width, height, recordId, depth } = props;
  const { datasheetId, view, groupCollapseIds, dispatch } = useContext(KonvaGridViewContext);
  const viewId = view.id;
  const pathKey = `${recordId}_${depth}`;
  const groupingCollapseIdsSet = new Set<string>(groupCollapseIds);
  const isCollapse = groupingCollapseIdsSet.has(pathKey);

  const changeGroupCollapseState = useCallback(
    (newState: string[]) => {
      // Masking collapsing grouping operation when searching within a datasheet.
      dispatch(StoreActions.setGroupingCollapse(datasheetId, newState));
      // QuickAppend component display depends on hoverRecordId, which should be cleared in case of group collapse to avoid visual misleading.
      dispatch(StoreActions.setHoverRecordId(datasheetId, null));
      setStorage(StorageName.GroupCollapse, { [`${datasheetId},${viewId}`]: newState });
    },
    [dispatch, datasheetId, viewId],
  );

  function clickExpandToggle() {
    if (groupingCollapseIdsSet.has(pathKey)) {
      groupingCollapseIdsSet.delete(pathKey);
    } else {
      groupingCollapseIdsSet.add(pathKey);
    }
    return changeGroupCollapseState(Array.from(groupingCollapseIdsSet));
  }

  return (
    <Group x={x} y={y}>
      <Rect name={KONVA_DATASHEET_ID.GRID_GROUP_TAB} width={width} height={height} fill={'transparent'} />
      <Icon
        name={KONVA_DATASHEET_ID.GRID_GROUP_TOGGLE_BUTTON}
        x={16}
        y={(height - GRID_ICON_COMMON_SIZE) / 2}
        scaleX={0.8}
        scaleY={0.8}
        transformsEnabled={'all'}
        data={isCollapse ? TriangleRight16FilledPath : TriangleDown16FilledPath}
        onClick={clickExpandToggle}
        onTap={clickExpandToggle}
      />
    </Group>
  );
});
