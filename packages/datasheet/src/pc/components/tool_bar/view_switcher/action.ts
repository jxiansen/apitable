

import { CollaCommandName, ExecuteResult, getUniqName, IViewProperty, Selectors, Strings, t, DatasheetActions, StoreActions } from '@apitable/core';
import { notify } from 'pc/components/common/notify';
import { changeView, useDispatch } from 'pc/hooks';
import { resourceService } from 'pc/resource_service';
import { store } from 'pc/store';

import { useAppSelector } from 'pc/store/react-redux';

export const useViewAction = () => {
  const views = useAppSelector((state) => {
    const snapshot = Selectors.getSnapshot(state)!;
    return snapshot.meta.views;
  });
  const datasheetId = useAppSelector((state) => state.pageParams.datasheetId);
  const closeSyncViewIds = useAppSelector((state) => {
    return Selectors.getCloseSyncViewIds(state, datasheetId!);
  });
  const dispatch = useDispatch();

  return {
    modifyView: (viewId: string, value: string) => {
      resourceService.instance!.commandManager.execute({
        cmd: CollaCommandName.ModifyViews,
        data: [
          {
            viewId,
            key: 'name',
            value,
          },
        ],
      });
    },

    deleteView: (viewId: string) => {
      const { result } = resourceService.instance!.commandManager.execute({
        cmd: CollaCommandName.DeleteViews,
        data: [
          {
            viewId,
          },
        ],
      });
      if (ExecuteResult.Success === result) {
        closeSyncViewIds?.includes(viewId) && dispatch(StoreActions.setCloseSyncViewId(viewId, datasheetId!));
        notify.open({
          message: t(Strings.delete_view_success),
        });
      }
    },

    addView: (view: IViewProperty, index?: number) => {
      const { result } = resourceService.instance!.commandManager.execute({
        cmd: CollaCommandName.AddViews,
        data: [
          {
            view,
            startIndex: index || views.length,
          },
        ],
      });
      if (ExecuteResult.Success === result) {
        notify.open({
          message: t(Strings.add_new_view_success, { viewName: view.name }),
        });
      }
    },

    duplicateView: (viewId: string) => {
      const index = views.findIndex((view) => view.id === viewId);
      const view = views[index]!;
      const snapshot = Selectors.getSnapshot(store.getState());
      const { id: newId } = DatasheetActions.deriveDefaultViewProperty(snapshot!, view.type, view.id);
      const { result } = resourceService.instance!.commandManager.execute({
        cmd: CollaCommandName.AddViews,
        data: [
          {
            startIndex: index + 1,
            view: {
              ...view,
              id: newId,
              name: getUniqName(
                view.name + t(Strings.copy),
                views.map((v) => v.name),
              ),
            },
          },
        ],
      });
      if (ExecuteResult.Success === result) {
        changeView(newId);
      }
    },

    moveView: (viewId: string, index: number) => {
      resourceService.instance!.commandManager.execute({
        cmd: CollaCommandName.MoveViews,
        data: [
          {
            viewId,
            newIndex: index,
          },
        ],
      });
    },
  };
};
