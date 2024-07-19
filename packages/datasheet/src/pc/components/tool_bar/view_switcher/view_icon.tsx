

import * as React from 'react';
import { useThemeColors } from '@apitable/components';
import { ViewType } from '@apitable/core';
import { GanttOutlined, ArchitectureOutlined, GridOutlined, GalleryOutlined, KanbanOutlined, CalendarOutlined } from '@apitable/icons';

const viewIconMap = {
  [ViewType.Grid]: GridOutlined,
  [ViewType.Gallery]: GalleryOutlined,
  [ViewType.Kanban]: KanbanOutlined,
  [ViewType.Calendar]: CalendarOutlined,
  [ViewType.Gantt]: GanttOutlined,
  [ViewType.OrgChart]: ArchitectureOutlined,
};

interface IViewIcon {
  viewType: ViewType;
  size?: number;
  color?: string;
  onClick?: (e: React.MouseEvent<SVGSVGElement>) => void;
}

export const ViewIcon: React.FC<React.PropsWithChildren<IViewIcon>> = (props) => {
  const colors = useThemeColors();
  const { viewType, size = 15, color = colors.thirdLevelText, onClick } = props;

  if (viewType && viewIconMap[viewType]) {
    return React.createElement(viewIconMap[viewType], {
      size,
      color,
      onClick,
    });
  }
  return <></>;
};
