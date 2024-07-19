

import * as React from 'react';
import { useThemeColors } from '@apitable/components';
import { ConfigConstant } from '@apitable/core';
import { FormOutlined } from '@apitable/icons';

const nodeIconMap = {
  [ConfigConstant.NodeType.FORM]: FormOutlined,
};

interface INodeIcon {
  nodeType: ConfigConstant.NodeType;
  size?: number;
  color?: string;
  onClick?: (e: React.MouseEvent<SVGSVGElement>) => void;
}

export const NodeIcon: React.FC<React.PropsWithChildren<INodeIcon>> = (props) => {
  const colors = useThemeColors();
  const { nodeType, size = 15, color = colors.thirdLevelText, onClick } = props;

  if (nodeType && nodeIconMap[nodeType]) {
    return React.createElement(nodeIconMap[nodeType], {
      size,
      color,
      onClick,
    });
  }
  return <></>;
};
