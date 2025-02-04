import { IAvatarProps } from './interface';
import styled from 'styled-components';
import { get } from 'lodash';

export const AvatarSizeConfig = {
  xxs: {
    size: 20,
    borderRadius: 2,
    borderWidth: 1,
    fontSize: 12,
    gap: 4,
  },
  xs: {
    size: 24,
    borderRadius: 3,
    borderWidth: 1,
    fontSize: 12,
    gap: 4,
  },
  s: {
    size: 32,
    borderRadius: 4,
    borderWidth: 2,
    fontSize: 14,
    gap: 8,
  },
  m: {
    size: 40,
    borderRadius: 6,
    borderWidth: 2,
    fontSize: 16,
    gap: 8,
  },
  l: {
    size: 64,
    borderRadius: 8,
    borderWidth: 3,
    fontSize: 24,
    gap: 16,
  },
  xl: {
    size: 80,
    borderRadius: 10,
    borderWidth: 4,
    fontSize: 32,
    gap: 16,
  },
};

export const AvatarWrapper = styled.span<IAvatarProps>`
  display: inline-block;
  box-sizing: border-box;
  text-align: center;
  position: relative;
  .avatar-icon {
    vertical-align: -0.25em;
  }
  ${(props) => {
    const sizeKey = props.size || 'm';
    const { size, borderRadius, fontSize } = AvatarSizeConfig[sizeKey];
    return `
        width: ${size}px;
        height: ${size}px;
        line-height: ${size}px;
        font-size: ${props.icon ? size / 2 : fontSize}px;
        border-radius: ${props.shape === 'square' ? borderRadius + 'px' : '50%'};
        background: ${get(props, 'style.background') || '#7B67EE'};
        overflow: hidden;
        color: #fff;
      `;
  }}
`;
export const AvatarChildWrapper = styled.span`
  white-space: nowrap;
  transform-origin: 0 center;
  position: absolute;
  left: 50%;
`;
