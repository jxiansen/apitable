import { Tooltip } from 'antd';
import { FC } from 'react';
import { ScreenSize } from 'pc/components/common/component_display';
import { useResponsive } from 'pc/hooks';

interface IComputedFieldWrapperProps {
  title: string;
  className?: string;
}

export const ComputedFieldWrapper: FC<React.PropsWithChildren<IComputedFieldWrapperProps>> = (props) => {
  const { screenIsAtMost } = useResponsive();
  const isMobile = screenIsAtMost(ScreenSize.md);
  return (
    <Tooltip trigger={isMobile ? 'click' : 'hover'} title={props.title}>
      <div className={props.className} style={{ width: '100%' }}>
        {props.children}
      </div>
    </Tooltip>
  );
};
