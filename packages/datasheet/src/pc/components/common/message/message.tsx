import { message } from 'antd';
import { ArgsProps, ConfigOptions } from 'antd/lib/message';
import { Strings, t } from '@apitable/core';
import { CheckCircleFilled, CloseCircleFilled, InfoCircleFilled, WarnCircleFilled } from '@apitable/icons';

message.config({
  top: 80,
  // maxCount: 1,
});

type IMessageProps = ConfigOptions & {
  key?: string;
  content?: ArgsProps['content'];
  onClose?: ArgsProps['onClose'];
};
const duration = 3;
const success = (props: IMessageProps) => {
  const config = {
    content: props.content || t(Strings.operate_success),
    duration,
    icon: <CheckCircleFilled />,
    ...props,
  };
  return message.success(config);
};
const error = (props: IMessageProps) => {
  const config = {
    content: props.content || t(Strings.operate_fail),
    duration,
    icon: <CloseCircleFilled />,
    ...props,
  };
  return message.error(config);
};
const warning = (props: IMessageProps) => {
  const config = {
    content: props.content || t(Strings.operate_warning),
    duration,
    icon: <WarnCircleFilled />,
    ...props,
  };
  return message.warning(config);
};
const info = (props: IMessageProps) => {
  const config = {
    content: props.content || t(Strings.operate_info),
    duration,
    icon: <InfoCircleFilled />,
    ...props,
  };
  return message.info(config);
};
const loading = (props: IMessageProps) => {
  const config = {
    content: props.content || t(Strings.loading),
    ...props,
  };
  return message.loading(config);
};
const destroy = message.destroy;
export const Message = {
  info,
  success,
  error,
  warning,
  loading,
  destroy,
};
