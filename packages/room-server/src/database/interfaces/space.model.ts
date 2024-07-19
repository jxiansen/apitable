export class InternalSpaceSubscriptionView {
  maxRowsPerSheet!: number; // The maximum record allowed per datasheet
  maxArchivedRowsPerSheet!: number; // The maximum archived record allowed per datasheet
  maxRowsInSpace!: number; // The maximum record allowed by the current space
  maxGalleryViewsInSpace!: number; // The maximum number of gallery views allowed in the space
  maxKanbanViewsInSpace!: number; // The maximum number of kanban views allowed in the space
  maxGanttViewsInSpace!: number; // The maximum quantity of the allowable Gantt view in the space
  maxCalendarViewsInSpace!: number; // The maximum number of calendar views allowed in the space
  maxMessageCredits!: number; // The maximum number of chatBot credits allowed in the space
  maxWidgetNums!: number; // The maximum number of widgets allowed in the space
  maxAutomationRunsNums!: number; // The maximum number of automation runs allowed in the space
  allowEmbed!: boolean; // Is it possible to call enterprise-level api?
  allowOrgApi!: boolean;
}

export class InternalSpaceUsageView {
  recordNums!: number; // The number of all records of all datasheets in the space
  galleryViewNums!: number; // The number of all views in the space
  kanbanViewNums!: number; // The number of all kanban views in the space
  ganttViewNums!: number; // The number of all gantt views in the space
  calendarViewNums!: number; // The number of all calender views in the space
  usedCredit!: number; // The number of credits in the space
}

export class InternalSpaceCreditUsageView {
  maxMessageCredits!: number;
  usedCredit!: number; // The number of credits in the space
  allowOverLimit!: boolean;
}

export class InternalSpaceAutomationRunsMessageView {
  maxAutomationRunNums!: number;
  automationRunNums!: number; // The number of automation run in the space
  allowRun!: boolean;
}

export class InternalCreateDatasheetVo {
  datasheetId!: string;
  createdAt!: number;
}

export class InternalSpaceInfoVo {
  spaceId!: string;
  labs!: {
    viewManualSave: boolean;
  };
}

export class InternalSpaceStatisticsRo {
  viewCount?: { [key: number]: number };
  recordCount?: number;
}
