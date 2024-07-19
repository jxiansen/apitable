import { Divider, Tooltip } from 'antd';
import { FC, useContext } from 'react';
import { IconButton, Button, useThemeColors } from '@apitable/components';
import { t, Strings } from '@apitable/core';
import { AddOutlined, ListOutlined, OrgZoomOutOutlined, FitviewOutlined } from '@apitable/icons';
import { useStoreState } from '@apitable/react-flow';
import { FlowContext } from '../../context/flow_context';
import styles from './styles.module.less';

interface IControlsProps {
  zoomIn: () => void;
  zoomOut: () => void;
  zoomReset: () => void;
  fitView: () => void;
}

export const Controls: FC<React.PropsWithChildren<IControlsProps>> = ({ zoomIn, zoomOut, zoomReset, fitView }) => {
  const colors = useThemeColors();
  const { menuVisible, setMenuVisible } = useContext(FlowContext);
  const [, , scale] = useStoreState((state) => state.transform);

  return (
    <div className={styles.controls}>
      <Tooltip placement="left" title={menuVisible ? t(Strings.org_chart_controls_close_menu) : t(Strings.org_chart_controls_open_menu)}>
        <IconButton
          icon={ListOutlined}
          onClick={() => setMenuVisible(!menuVisible)}
          size="small"
          active={menuVisible}
          style={{
            background: colors.defaultTag,
          }}
        />
      </Tooltip>
      <Divider />
      <Tooltip placement="left" title={t(Strings.org_chart_controls_zoom_in)}>
        <IconButton icon={AddOutlined} onClick={zoomIn} />
      </Tooltip>
      <Tooltip placement="left" title={t(Strings.org_chart_controls_zoom_reset)}>
        <Button className={styles.zoomReset} onClick={zoomReset} variant="fill" color={colors.defaultBg} size="small">
          {`${Math.ceil(scale * 100)}%`}
        </Button>
      </Tooltip>
      <Tooltip placement="left" title={t(Strings.org_chart_controls_zoom_out)}>
        <IconButton icon={OrgZoomOutOutlined} onClick={zoomOut} />
      </Tooltip>
      <Tooltip placement="left" title={t(Strings.org_chart_controls_fit_view)}>
        <IconButton icon={FitviewOutlined} onClick={fitView} />
      </Tooltip>
    </div>
  );
};
