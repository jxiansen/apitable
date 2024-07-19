

import { colorVars } from '@apitable/components';
import { ViewType } from '@apitable/core';
import {
  ArchitectureMirrorOutlined,
  CalendarMirrorOutlined,
  GalleryMirrorOutlined,
  GanttMirrorOutlined,
  GridMirrorOutlined,
  KanbanMirrorOutlined,
  MirrorOutlined,
} from '@apitable/icons';

export const gstMirrorIconByViewType = (viewType: ViewType, color: string = colorVars.thirdLevelText) => {
  switch (viewType) {
    case ViewType.Gallery: {
      return <GalleryMirrorOutlined color={color} />;
    }
    case ViewType.Kanban: {
      return <KanbanMirrorOutlined color={color} />;
    }
    case ViewType.Gantt: {
      return <GanttMirrorOutlined color={color} />;
    }
    case ViewType.Grid: {
      return <GridMirrorOutlined color={color} />;
    }
    case ViewType.Calendar: {
      return <CalendarMirrorOutlined color={color} />;
    }
    case ViewType.OrgChart: {
      return <ArchitectureMirrorOutlined color={color} />;
    }
    default: {
      return <MirrorOutlined color={color} />;
    }
  }
};
