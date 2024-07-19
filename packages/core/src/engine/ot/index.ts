// Only the JSON type is exported, because the text type is deprecated
// otherwise. (If you want to use it somewhere, you're welcome to pull it out
// into a separate module that json0 can depend on).
import { Strings, t } from '../../exports/i18n';
import json0 from 'ot-json0/lib/json0';
import { IJot } from './interface';

import { WasmApi } from 'modules/database/api';
import { getBrowserDatabusApiEnabled } from 'modules/database/api/wasm';

export * from './interface';
export * from './compose';

export const jot: IJot = {
  ...json0,
  apply(json, actions) {
    try {
      if (getBrowserDatabusApiEnabled()) {
        const jsonString = JSON.stringify(json);
        const actionsString = JSON.stringify(actions);

        let result;
        let resultString;

        try {
          resultString = WasmApi.getInstance().json0_apply(jsonString, actionsString);
          result = JSON.parse(resultString);
        } catch (error) {
          console.error('Error applying json0:', error);
          throw error;
        }

        // update previous json Proxy(Object) with new result
        for (const key in result) {
          if (Object.prototype.hasOwnProperty.call(result, key)) {
            json[key] = result[key];
          }
        }

        return result;
      }

      return json0.apply(json, actions);
    } catch (e: any) {
      if ((e as Error).message === 'invalid / missing instruction in op') {
        throw new Error(t(Strings.missing_instruction_op_error), { cause: e });
      } else {
        throw e;
      }
    }
  },
};
