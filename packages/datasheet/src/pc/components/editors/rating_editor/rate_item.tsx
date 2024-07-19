import * as React from 'react';
import { RowChecked } from 'pc/components/multi_grid/operate_column';
import style from './style.module.less';

interface IRateItemProps {
  onChange: (value: any) => void;
  value: number;
  checked: boolean;
}

export const RateItem: React.FC<React.PropsWithChildren<IRateItemProps>> = (props) => {
  const { children, checked, onChange, value } = props;

  const handleClick = () => {
    onChange(value || null);
  };
  return (
    <div className={style.rateItemWrapper} onClick={handleClick}>
      <div className={style.item}>
        {children} × {value}
      </div>
      <RowChecked isChecked={checked} shape="circle" />
    </div>
  );
};
