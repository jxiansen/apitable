import { ResourceType } from '@apitable/core';
import { resourceService } from 'pc/resource_service';
import { store } from 'pc/store';

let formId: string | undefined;

store.subscribe(function formIdChange() {
  const state = store.getState();
  const spaceId = state.space.activeId || state.share.spaceId || state.embedInfo.spaceId;
  const { shareId, templateId, embedId } = state.pageParams;

  if (!spaceId && !shareId && !templateId && !embedId) {
    return;
  }

  if (shareId && (!spaceId || !resourceService.instance?.initialized)) {
    return;
  }

  if (embedId && (!spaceId || !resourceService.instance?.initialized || !state.embedInfo?.spaceId)) {
    return;
  }

  const prevFormId = formId;
  formId = state.pageParams.formId;

  if (!formId || prevFormId === formId) {
    return;
  }

  resourceService.instance?.initialized &&
    resourceService.instance?.switchResource({
      from: prevFormId,
      to: formId!,
      resourceType: ResourceType.Form,
    });
});
