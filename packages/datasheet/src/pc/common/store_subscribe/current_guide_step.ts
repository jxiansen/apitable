

import { store } from 'pc/store';
// @ts-ignore
import { currentStepInHook } from 'enterprise/guide/utils';

store.subscribe(currentStepInHook || (() => {}));
