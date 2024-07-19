

import { produce } from 'immer';
import { ITemplateCentre, IUpdateTemplateCategoryAction, IUpdateTemplateDirectoryAction } from '../../../../exports/store/interfaces';
import * as actions from '../../../shared/store/action_constants';

const defaultTemplateCentre: ITemplateCentre = {
  category: [],
  directory: null,
};

type ISidebarActions = IUpdateTemplateCategoryAction | IUpdateTemplateDirectoryAction;

export const templateCentre = produce((draftSidebar: ITemplateCentre = defaultTemplateCentre, action: ISidebarActions) => {
  switch (action.type) {
    case actions.UPDATE_TEMPLATE_CATEGORY: {
      draftSidebar.category = action.payload;
      return draftSidebar;
    }
    case actions.UPDATE_TEMPLATE_DIRECTORY: {
      draftSidebar.directory = action.payload;
      return draftSidebar;
    }
    default:
      return draftSidebar;
  }
}, defaultTemplateCentre);
