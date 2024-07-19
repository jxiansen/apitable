

import classNames from 'classnames';
import { memo, useState } from 'react';
import * as React from 'react';
import { useThemeColors } from '@apitable/components';
import { ConfigConstant, t, Strings } from '@apitable/core';
import { ChevronDownOutlined } from '@apitable/icons';
import { getNodeIcon } from 'pc/components/catalog/tree/node_icon';
import { Emoji } from 'pc/components/common/emoji';
import { Popup } from 'pc/components/common/mobile/popup';
import { Rate } from 'pc/components/common/rate';
import { RateItem } from './rate_item';
import style from './style.module.less';

export interface IRatingEditorMobileProps {
  editable: boolean;
  editing: boolean;
  max: number;
  value: number | null;
  onChange(value: number): void;
  emoji: any;
  filtering?: boolean;
}

const RatingEditorMobileBase: React.FC<React.PropsWithChildren<IRatingEditorMobileProps>> = (props) => {
  const { editable, max, value, editing, emoji, onChange, filtering } = props;
  const colors = useThemeColors();
  const [visible, setVisible] = useState(false);

  const emojiIcon = getNodeIcon(emoji, ConfigConstant.NodeType.DATASHEET, {
    size: ConfigConstant.CELL_EMOJI_SIZE,
    emojiSize: ConfigConstant.CELL_EMOJI_SIZE,
  });

  return (
    <>
      <div className={classNames(style.editorContent, filtering && style.filtering)} onClick={() => setVisible(!visible)}>
        <Rate disabled={!editable} value={value} character={emojiIcon} max={max} />
        {editable && <ChevronDownOutlined size={16} color={colors.fourthLevelText} />}
      </div>
      {visible && editable && (
        <Popup
          title={t(Strings.please_choose)}
          height={'50%'}
          open={visible && editing}
          onClose={() => setVisible(false)}
          className={style.ratingEditorPopupWrapper}
        >
          <div className={style.rateItemList}>
            {[...Array(max + 1).keys()].map((_item, index) => (
              <RateItem
                key={index}
                onChange={(value) => {
                  onChange(value);
                  setVisible(false);
                }}
                value={index}
                checked={value === index}
              >
                {emojiIcon}
              </RateItem>
            ))}
          </div>
        </Popup>
      )}
    </>
  );
};

export const RatingEditorMobile = memo(RatingEditorMobileBase);
