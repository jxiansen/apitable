

import { FC, memo } from 'react';
import { useThemeColors } from '@apitable/components';
import { EdgeProps, getBezierPath } from '@apitable/react-flow';

export const BezierEdge: FC<React.PropsWithChildren<EdgeProps>> = memo(
  ({ id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition }) => {
    const colors = useThemeColors();
    const edgePath = getBezierPath({
      sourceX,
      sourceY,
      sourcePosition,
      targetX,
      targetY,
      targetPosition,
    });

    return <path id={id} stroke={colors.primaryColor} fill="none" strokeWidth={2} d={edgePath} strokeDasharray={5} />;
  },
);
