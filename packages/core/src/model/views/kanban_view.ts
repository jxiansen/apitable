import { Settings } from 'config';
import { Strings, t } from '../../exports/i18n';
import { DatasheetActions } from 'commands_actions/datasheet';
import { IFieldMap, IKanbanViewProperty, ISnapshot } from '../../exports/store/interfaces';
import { ViewType } from 'modules/shared/store/constants';
import { IViewColumn, IViewProperty } from '../../exports/store/interfaces';
import { FieldType, IField, IMemberProperty } from 'types';
import { CardView } from './card_view';
import { integrateCdnHost } from 'utils';

export class KanbanView extends CardView {
  static findGroupFieldId(srcView: IViewProperty, fieldMap: IFieldMap) {
    const column = srcView.columns.find((item) => {
      const field = fieldMap[item.fieldId]!;
      return field.type === FieldType.SingleSelect || (field.type === FieldType.Member && !field.property.isMulti);
    });
    return column?.fieldId;
  }

  static getFieldProperty(column: IViewColumn | undefined, fieldMap: IFieldMap) {
    if (!column) {
      return [];
    }
    const field = fieldMap[column.fieldId]!;
    if (field.type === FieldType.Member) {
      return field.property.unitIds;
    }
    if (field.type === FieldType.SingleSelect) {
      return field.property.options.map((item) => item.id);
    }
    return [];
  }

  static getHiddenGroupMap(field: IField | undefined) {
    if (!field) {
      return;
    }

    const hiddenGroupMap = {};

    if (field.type === FieldType.SingleSelect) {
      field.property.options.forEach((item) => {
        hiddenGroupMap[item.id] = false;
      });
    } else {
      (field.property as IMemberProperty).unitIds.forEach((id) => {
        hiddenGroupMap[id] = false;
      });
    }

    return hiddenGroupMap;
  }

  static defaultStyle(snapshot: ISnapshot, activeViewId: string) {
    const srcView = this.getSrcView(snapshot, activeViewId);

    // the first attachment field will be default cover field

    const kanbanFieldId = this.findGroupFieldId(srcView, snapshot.meta.fieldMap)!;
    const field = snapshot.meta.fieldMap[kanbanFieldId];

    return {
      isCoverFit: false,
      coverFieldId: undefined,
      kanbanFieldId,
      isColNameVisible: true,
      hiddenGroupMap: KanbanView.getHiddenGroupMap(field),
    };
  }

  static generateDefaultProperty(snapshot: ISnapshot, activeViewId: string | null | undefined): IKanbanViewProperty {
    const srcView = this.getSrcView(snapshot, activeViewId);
    const views = snapshot.meta.views;
    return {
      id: DatasheetActions.getNewViewId(views),
      name: DatasheetActions.getDefaultViewName(views, ViewType.Kanban),
      type: ViewType.Kanban,
      columns: this.defaultColumns(srcView, 2),
      rows: this.defaultRows(srcView),
      style: this.defaultStyle(snapshot, activeViewId!),
      groupInfo: [{ fieldId: this.findGroupFieldId(srcView, snapshot.meta.fieldMap)!, desc: false }],
      displayHiddenColumnWithinMirror: true,
    };
  }

  static getViewIntroduce() {
    return {
      title: t(Strings.kanban_view),
      desc: t(Strings.kanban_guide_desc),
      videoGuide: integrateCdnHost(Settings.view_kanban_guide_video.value),
    };
  }
}
