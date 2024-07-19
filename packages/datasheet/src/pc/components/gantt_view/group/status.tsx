

import dynamic from 'next/dynamic';
import * as React from 'react';
import { ITheme } from '@apitable/components';
import { Rect } from 'pc/components/konva_components';

const Group = dynamic(() => import('pc/components/gantt_view/hooks/use_gantt_timeline/group'), { ssr: false });

const Status = (props: { x: number; KONVA_DATASHEET_ID: any; containerHeight: number; theme: ITheme }) => {
  const { x, KONVA_DATASHEET_ID, containerHeight, theme } = props;
  return (
    <Group x={x} listening={false}>
      <Rect name={KONVA_DATASHEET_ID.GANTT_HOVER_SPLITTER} width={2} height={containerHeight} fill={theme.color.primaryColor} />
    </Group>
  );
};

export default Status;
