

import { Dispatch, SetStateAction } from 'react';
import * as React from 'react';
import { Button, useThemeColors } from '@apitable/components';
import { ICheckboxField, IField, t, Strings, ConfigConstant } from '@apitable/core';
import { ChevronDownOutlined } from '@apitable/icons';
import { getNodeIcon } from 'pc/components/catalog/tree/node_icon';
import { EmojiPicker } from 'pc/components/common/emoji_picker';
import { EMOJI_SIZE } from '../../catalog/tree/tree';
import styles from './styles.module.less';
interface IFormateCheckboxProps {
  currentField: ICheckboxField;
  setCurrentField: Dispatch<SetStateAction<IField>>;
}

export const FormateCheckbox: React.FC<React.PropsWithChildren<IFormateCheckboxProps>> = (props: IFormateCheckboxProps) => {
  const { currentField, setCurrentField } = props;
  const colors = useThemeColors();
  const onSelect = (emoji: any) => {
    setCurrentField({
      ...currentField,
      property: { ...currentField.property, icon: emoji },
    });
  };

  const TriggerComponent = (
    <Button
      style={{
        height: 40,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'none',
        paddingLeft: 0,
      }}
    >
      {getNodeIcon(currentField.property.icon, ConfigConstant.NodeType.DATASHEET, {
        size: EMOJI_SIZE,
        emojiSize: EMOJI_SIZE,
      })}
      <span style={{ marginLeft: 4 }}>
        <ChevronDownOutlined size={16} color={colors.fourthLevelText} />
      </span>
    </Button>
  );

  return (
    <div className={styles.section}>
      <div className={styles.sectionTitle} style={{ margin: 0 }}>
        {t(Strings.icon_setting)}
      </div>
      <div className="flex item-center space-between">
        <div style={{ width: '100%' }}>
          <EmojiPicker onSelect={onSelect}>{TriggerComponent}</EmojiPicker>
        </div>
      </div>
    </div>
  );
};
