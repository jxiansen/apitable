

export type SwitchChangeEventHandler = (
  checked: boolean,
  event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>,
) => void;
export type SwitchClickEventHandler = SwitchChangeEventHandler;
export interface ISwitchProps extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'onChange' | 'onClick'> {
  className?: string;
  text?: boolean|string;
  prefixCls?: string;
  /**
   * Whether disabled or not
   */
  disabled?: boolean;
  clazz ?: {
    checkedText?: string,
    unCheckedText?: string,
    checkedCircle?: string
    unCheckedCircle?: string
    checkedBackground?: string
    unCheckedBackground?: string
  }
  checkedChildren?: React.ReactNode;
  unCheckedChildren?: React.ReactNode;
  onChange?: SwitchChangeEventHandler;
  onKeyDown?: React.KeyboardEventHandler<HTMLButtonElement>;
  onClick?: SwitchClickEventHandler;
  tabIndex?: number;
  /**
   * Whether checked or not
   */
  checked?: boolean;
  /**
   * Default is Checked or UnChecked
   */
  defaultChecked?: boolean;
  /**
   * switch loading status
   */
  loading?: boolean;
  /**
   * loading icon
   */
  loadingIcon?: React.ReactNode;
  /**
   * inline styles
   */
  style?: React.CSSProperties;
  title?: string;
  /**
   * size
   */
  size?: 'small' | 'default' | 'large' |'xl';
}
