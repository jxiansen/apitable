import { resourceService } from 'pc/resource_service';
import { store } from 'pc/store';

let lastTemplateId: string | undefined;

store.subscribe(function TemplateChange() {
  const previousTemplateId = lastTemplateId;
  const state = store.getState();
  const { templateId } = state.pageParams;
  lastTemplateId = templateId;
  if ((!lastTemplateId && !previousTemplateId) || previousTemplateId === lastTemplateId) {
    return;
  }

  console.log('init resourceService.instance!: ', templateId);

  resourceService.instance!.init();
});
