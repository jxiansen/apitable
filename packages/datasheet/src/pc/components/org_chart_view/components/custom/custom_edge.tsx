

import { FC, memo } from 'react';
import { useThemeColors } from '@apitable/components';
import { EdgeProps, getSmoothStepPath } from '@apitable/react-flow';

export const CustomEdge: FC<React.PropsWithChildren<EdgeProps>> = memo(
  ({ id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, style }) => {
    const colors = useThemeColors();
    const edgePath = getSmoothStepPath({
      sourceX,
      sourceY,
      sourcePosition,
      targetX,
      targetY,
      targetPosition,
    });

    return <path id={id} stroke={colors.primaryColor} fill="none" strokeWidth={2} d={edgePath} style={style} />;
  },
);
