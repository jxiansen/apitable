

import { AvatarSizeConfig } from './styled';

export type IAvatarSizeConfigKey = keyof typeof AvatarSizeConfig;

export interface IAvatarProps {
  /** avatar shape */
  shape?: 'circle' | 'square';
  /** avatar size xxs(20px)、xs(24px)、s(32px)、m(40px)、l(64px)、xl(80px) */
  size?: IAvatarSizeConfigKey;
  /** avatar link */
  src?: React.ReactNode;
  /** avatar icon */
  icon?: React.ReactNode;
  /** custom inline style */
  style?: React.CSSProperties;
  /** class name */
  className?: string;
  /** avatar image alt attribute */
  alt?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}