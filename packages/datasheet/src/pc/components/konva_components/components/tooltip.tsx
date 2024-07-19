

import { ShapeConfig } from 'konva/lib/Shape';
import dynamic from 'next/dynamic';
import { FC } from 'react';
import { useThemeColors } from '@apitable/components';
import { Text } from './text';

const Label = dynamic(() => import('pc/components/gantt_view/hooks/use_gantt_timeline/label'), { ssr: false });
const Tag = dynamic(() => import('pc/components/gantt_view/hooks/use_gantt_timeline/tag'), { ssr: false });

interface IToolTipProps extends ShapeConfig {
  text: string;
  background?: string | null;
}

export const ToolTip: FC<React.PropsWithChildren<IToolTipProps>> = (props) => {
  const colors = useThemeColors();
  const {
    x,
    y,
    text,
    background = colors.tooltipBg,
    fill = colors.defaultBg,
    padding = 10,
    cornerRadius = 4,
    pointerDirection = '',
    pointerWidth = 10,
    pointerHeight = 10,
  } = props;

  return (
    <Label x={x} y={y}>
      <Tag
        fill={background}
        listening={false}
        perfectDrawEnabled={false}
        cornerRadius={cornerRadius}
        pointerDirection={pointerDirection}
        pointerWidth={pointerWidth}
        pointerHeight={pointerHeight}
      />
      <Text text={text} fill={fill} padding={padding} />
    </Label>
  );
};
