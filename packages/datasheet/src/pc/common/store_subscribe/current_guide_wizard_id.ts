import { store } from 'pc/store';
// @ts-ignore
import { currentGuideWizardIdInHook } from 'enterprise/guide/utils';

store.subscribe(currentGuideWizardIdInHook || (() => {}));
