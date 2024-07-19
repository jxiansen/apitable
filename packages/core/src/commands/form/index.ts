import { ResourceType } from 'types';
import { ExecuteResult, ICollaCommandDef, ICollaCommandExecuteContext } from '../../command_manager';
import { FormAction } from '../../commands_actions/form';
import { IFormProps } from '../../exports/store/interfaces';
import { CollaCommandName } from '..';
import { getFormSnapshot } from 'modules/database/store/selectors/resource/form';

export interface IUpdateFormProps {
  cmd: CollaCommandName.UpdateFormProps;
  formId: string;
  partialProps: Partial<IFormProps>;
}

export const updateFormProps: ICollaCommandDef<IUpdateFormProps> = {
  undoable: false,

  execute(context: ICollaCommandExecuteContext, options) {
    const { state: state } = context;
    const { formId, partialProps } = options;
    const snapshot = getFormSnapshot(state, formId);
    if (!snapshot) {
      return null;
    }

    const updateFormPropsAction = FormAction.updatePropsAction(snapshot.formProps, { partialProps });
    if (updateFormPropsAction.length === 0) {
      return null;
    }
    return {
      result: ExecuteResult.Success,
      resourceId: formId,
      resourceType: ResourceType.Form,
      actions: updateFormPropsAction,
    };
  },
};
