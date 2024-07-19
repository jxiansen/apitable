import { colorVars } from '@apitable/components';
import { WarnCircleFilled, CheckCircleFilled, InfoCircleFilled } from '@apitable/icons';
// const modulesFiles = require.context('./modules', true, /.js$/)

enum StatusType {
  Info = 'info',
  Primary = 'primary',
  Success = 'success',
  Error = 'error',
  Danger = 'danger',
  Warning = 'warning',
}

interface IStatusIconFuncProps {
  type: string;
  size?: number;
  fillColor?: string;
}
export const StatusIconFunc = (props: IStatusIconFuncProps) => {
  const { type, fillColor, size = 20 } = props;
  switch (type) {
    case StatusType.Info:
      return InfoCircleFilled({ size, color: fillColor || colorVars.primaryColor });
    case StatusType.Primary:
      return InfoCircleFilled({ size, color: fillColor || colorVars.primaryColor });
    case StatusType.Success:
      return CheckCircleFilled({ size, color: fillColor || colorVars.successColor });
    case StatusType.Error:
      return WarnCircleFilled({ size, color: fillColor || colorVars.textDangerDefault });
    case StatusType.Danger:
      return WarnCircleFilled({ size, color: fillColor || colorVars.textDangerDefault });
    case StatusType.Warning:
      return WarnCircleFilled({ size, color: fillColor || colorVars.textWarnDefault });
    default:
      return null;
  }
};
