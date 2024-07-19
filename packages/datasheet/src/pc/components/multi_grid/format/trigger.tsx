

import { useClickAway } from 'ahooks';
import Trigger, { TriggerProps as RcTriggerProps } from 'rc-trigger';
import * as React from 'react';
import { memo, useRef } from 'react';
import { ComponentDisplay, ScreenSize } from 'pc/components/common/component_display';
import { Popup } from 'pc/components/common/mobile/popup';

interface ITriggerProps extends Partial<RcTriggerProps> {
  trigger: React.ReactNode;
  popup: React.ReactNode;
  showPopup: boolean;
  action?: string[];
  popupVisibleCheck?: (value: boolean) => boolean;
  setShowPopup(value: boolean): void;
  popupStyle?: React.CSSProperties;
}

export const MyTrigger: React.FC<React.PropsWithChildren<ITriggerProps>> = memo((props: ITriggerProps) => {
  const { showPopup, setShowPopup, trigger, popup, popupVisibleCheck, action = ['click'], popupStyle, ...rest } = props;
  const triggerSelfRef = useRef<any>(null);
  const triggerRef = useRef(null);
  const ref = useRef(null);

  useClickAway((event: any) => {
    if (triggerRef.current && (triggerRef.current! as any).contains(event.target)) {
      return;
    }
    triggerSelfRef.current!.close();
  }, ref);

  return (
    <>
      <ComponentDisplay minWidthCompatible={ScreenSize.md}>
        <Trigger
          action={action}
          mouseLeaveDelay={0.1}
          popup={<div ref={ref}>{popup}</div>}
          destroyPopupOnHide
          // alignPoint
          forceRender
          onPopupVisibleChange={(value: boolean) => {
            const isShow = popupVisibleCheck ? popupVisibleCheck(value) : true;
            isShow && setShowPopup(value);
          }}
          defaultPopupVisible={false}
          popupVisible={showPopup}
          popupAlign={{
            points: ['tl', 'tr'],
            offset: [20, 0],
            overflow: {
              adjustX: true,
              adjustY: true,
              // alwaysByViewport: true,
            },
            useCssRight: true,
            useCssBottom: true,
            useCssTransform: true,
          }}
          popupStyle={{
            width: 288,
            // zIndex: 101,
            ...popupStyle,
          }}
          ref={triggerSelfRef}
          {...rest}
        >
          <div ref={triggerRef}>{trigger}</div>
        </Trigger>
      </ComponentDisplay>

      <ComponentDisplay maxWidthCompatible={ScreenSize.md}>
        <Popup open={showPopup} onClose={() => setShowPopup(false)} bodyStyle={{ padding: 0 }} height="90%">
          {popup}
        </Popup>
        <div onClick={() => setShowPopup(true)}>{trigger}</div>
      </ComponentDisplay>
    </>
  );
});
