

import { subscribeDatasheetMap } from '@apitable/widget-sdk';
import { resourceService } from 'pc/resource_service';
import { store } from 'pc/store';

subscribeDatasheetMap(store, resourceService as any);
