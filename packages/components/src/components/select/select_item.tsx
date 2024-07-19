import classNames from 'classnames';
import { IOption, ISelectProps } from 'components/select/interface';
import { Typography } from 'components/typography';
import React from 'react';
import EllipsisText from '../ellipsis_text';

type IRenderValue = Pick<ISelectProps, 'renderValue'>;

export const SelectItem: React.FC<
  React.PropsWithChildren<
    {
      iconClassName?: string;
      item: IOption;
      isChecked?: boolean;
    } & Required<IRenderValue>
  >
> = (props) => {
  const { item, iconClassName, children, renderValue, isChecked } = props;

  return (
    <>
      <span
        className={classNames(
          {
            isChecked: isChecked,
          },
          'prefixIcon',
          iconClassName
        )}
      >
        {item.prefixIcon}
      </span>
      {item.disabled ? (
        <Typography
          variant={'body1'}
          className={classNames(
            {
              isChecked: isChecked,
            },
            'optionLabel'
          )}
          component={'span'}
        >
          {children || renderValue(item)}
        </Typography>
      ) : (
        <EllipsisText>
          <Typography
            variant={'body1'}
            className={classNames(
              {
                isChecked: isChecked,
              },
              'optionLabel'
            )}
            component={'span'}
          >
            {children || renderValue(item)}
          </Typography>
        </EllipsisText>
      )}

      <span className={'suffixIcon'}>{item.suffixIcon}</span>
    </>
  );
};
