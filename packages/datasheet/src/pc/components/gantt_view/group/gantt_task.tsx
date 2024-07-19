import dynamic from 'next/dynamic';
import * as React from 'react';
import { ILightOrDarkThemeColors } from '@apitable/components';
import { Rect, Text } from 'pc/components/konva_components';

const Group = dynamic(() => import('pc/components/gantt_view/hooks/use_gantt_timeline/group'), { ssr: false });

interface IGanttTask {
  colors: ILightOrDarkThemeColors;
  x: number;
  y: number;
  text: string;
  width: number;
  height: number;
  fill: string;
  opacity: number;
  cornerRadius: number;
}

const GanttTask = (props: IGanttTask) => {
  const { colors, x, y, text, width, height, fill, opacity, cornerRadius } = props;
  return (
    <Group x={x} y={y} listening={false}>
      <Rect width={width} height={height} cornerRadius={cornerRadius} fill={fill} opacity={opacity} />
      <Text x={10} height={height} text={text} fill={colors.fc1} />
    </Group>
  );
};

export default GanttTask;
