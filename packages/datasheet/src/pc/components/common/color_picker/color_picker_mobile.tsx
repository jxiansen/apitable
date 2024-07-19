

import * as React from 'react';
import { Strings, t } from '@apitable/core';
import { stopPropagation } from 'pc/utils';
import { Popup } from '../mobile/popup';
import { ColorPickerPane, IColorPickerPane } from './color_picker_pane';

interface IColorPickerMobileProps extends IColorPickerPane {
  visible: boolean;
}

export const ColorPickerMobile: React.FC<React.PropsWithChildren<IColorPickerMobileProps>> = (props) => {
  const { visible, ...rest } = props;

  return (
    <Popup
      title={t(Strings.please_choose)}
      height="auto"
      open={visible}
      onClose={(e) => {
        stopPropagation(e as any);
        props.onClose();
      }}
      destroyOnClose
    >
      <ColorPickerPane {...rest} />
    </Popup>
  );
};
