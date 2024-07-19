import dynamic from 'next/dynamic';
import { FC, memo, useContext } from 'react';
import { useGetSignatureAssertFunc } from '@apitable/widget-sdk';
import { AvatarSize, AvatarType, getAvatarRandomColor, getFirstWordFromString } from 'pc/components/common';
import { Icon, IconType, Image, Rect, Text } from 'pc/components/konva_components';
import { KonvaGridContext, KonvaGridViewContext } from 'pc/components/konva_grid';
import { createAvatarRainbowColorsArr } from 'pc/utils/color_utils';
import { getEnvVariables } from 'pc/utils/env';

const Group = dynamic(() => import('pc/components/gantt_view/hooks/use_gantt_timeline/group'), { ssr: false });
const Circle = dynamic(() => import('pc/components/gantt_view/hooks/use_gantt_timeline/circle'), { ssr: false });

interface IAvatarProps {
  x?: number;
  y?: number;
  /**
   * The component generates random colors based on id,
   * in general, members, departments, space avatars pass memberId, teamId, spaceId respectively to ensure that
   * the background generated by each place calling this component is the same.
   */
  id: string;
  // Get the first character of the title as the avatar when there is no image.
  title: string;
  src?: string;
  size?: AvatarSize;
  bgColor?: number | null;
  isGzip?: boolean;
  children?: JSX.Element;
  type?: AvatarType;
  isDefaultIcon?: boolean;
}

export const Avatar: FC<React.PropsWithChildren<IAvatarProps>> = memo((props) => {
  const ratio = Math.max(window.devicePixelRatio, 2);
  const { x = 0, y = 0, src: _src, title, isGzip = true, id, bgColor, size = AvatarSize.Size32, type = AvatarType.Member, isDefaultIcon } = props;
  const { theme } = useContext(KonvaGridContext);
  const { cacheTheme } = useContext(KonvaGridViewContext);
  const colors = theme.color;

  const getSignatureUrl = useGetSignatureAssertFunc();

  if (title == null || id == null) return null;

  const src = getSignatureUrl(_src || '');

  const avatarSrc =
    isGzip && src && !getEnvVariables().DISABLED_QINIU_COMPRESSION_PARAMS ? `${src}?imageView2/1/w/${size * ratio}/q/100!` : src || '';
  const firstWord = getFirstWordFromString(title.trim());
  const avatarBg = avatarSrc ? colors.defaultBg : createAvatarRainbowColorsArr(cacheTheme)[bgColor ?? 0];

  const renderer = () => {
    switch (type) {
      case AvatarType.Team: {
        if (!src) {
          return (
            <Icon
              type={IconType.TeamAvatar}
              size={size - 4}
              backgroundWidth={size}
              backgroundHeight={size}
              fill={colors.defaultBg}
              cornerRadius={4}
              background={getAvatarRandomColor(id)}
            />
          );
        }
        return <Image url={src} width={size} height={size} alt="" fill={getAvatarRandomColor(id)} />;
      }
      case AvatarType.Space: {
        if (!avatarSrc) {
          return (
            <>
              <Rect width={size} height={size} cornerRadius={4} />
              <Text width={size} height={size} align={'center'} text={firstWord.toUpperCase()} />
            </>
          );
        }
        return <Image url={avatarSrc} width={size} height={size} fill={avatarBg} alt="" />;
      }
      case AvatarType.Member: {
        if (!avatarSrc && isDefaultIcon) {
          return <Icon type={IconType.MemberAvatar} shape="circle" size={size} background={colors.rc01} />;
        }
        if (!avatarSrc && !isDefaultIcon) {
          const radius = size / 2;
          return (
            <>
              <Circle x={radius} y={radius} radius={radius} fill={avatarBg} />
              <Text width={size} height={size} align={'center'} text={getFirstWordFromString(title)} fill={colors.textStaticPrimary} />
            </>
          );
        }
        return <Image url={avatarSrc} shape={'circle'} width={size} height={size} fill={avatarBg} alt="" />;
      }
    }
  };

  return (
    <Group x={x} y={y} listening={false}>
      {renderer()}
    </Group>
  );
});
