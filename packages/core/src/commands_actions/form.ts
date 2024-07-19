import { IFormProps } from '../exports/store/interfaces';
import { IJOTAction } from 'engine';
import { OTActionName } from '../engine/ot';
import { isEqual } from 'lodash';

export class FormAction {
  // update own properties
  static updatePropsAction(
    formProps: IFormProps,
    options: {
      partialProps: Partial<IFormProps>;
    }
  ): IJOTAction[] {
    const { partialProps } = options;
    const actions: IJOTAction[] = [];
    for (const key in partialProps) {
      const oi = partialProps[key];
      const od = formProps[key];
      if (!isEqual(oi, od)) {
        actions.push({
          n: OTActionName.ObjectReplace,
          p: ['formProps', key],
          oi,
          od,
        });
      }
    }
    return actions;
  }
}
