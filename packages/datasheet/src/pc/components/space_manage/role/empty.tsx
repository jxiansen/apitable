

import Image from 'next/image';
import { useContext } from 'react';
import { Box, Button, Typography, useThemeColors } from '@apitable/components';
import { Strings, t, ThemeName } from '@apitable/core';
import { useAppSelector } from 'pc/store/react-redux';
import { getEnvVariables } from 'pc/utils/env';
import RoleEmptyDark from 'static/icon/common/role_empty_dark.png';
import RoleEmptyLight from 'static/icon/common/role_empty_light.png';
import { RoleContext } from './context';

export const Empty: React.FC<React.PropsWithChildren<{ onClick: () => void }>> = (props) => {
  const colors = useThemeColors();
  const { manageable } = useContext(RoleContext);
  const theme = useAppSelector((state) => state.theme);
  const RoleEmpty = theme === ThemeName.Light ? RoleEmptyLight : RoleEmptyDark;
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      width={'100%'}
      backgroundColor={colors.bgCommonDefault}
    >
      <Box width={480}>
        <Box textAlign={'center'} marginBottom={24}>
          <Image width={320} height={240} src={RoleEmpty} alt="role" />
        </Box>
        <Typography variant="h5" align="center">
          {t(Strings.manage_role_empty_title)}
        </Typography>
        <Box marginTop={'8px'}>
          <Typography variant="body2">
            <span dangerouslySetInnerHTML={{ __html: t(Strings.manage_role_empty_desc1, { url: getEnvVariables().SPACE_ROLE_HELP_URL }) }} />
          </Typography>
        </Box>
        <Box borderRadius={'4px'} backgroundColor={colors.bgCommonLower} padding={'8px'} marginTop={'8px'}>
          <Typography variant="body4" color={colors.textCommonTertiary}>
            {t(Strings.manage_role_empty_desc2)}
          </Typography>
        </Box>
        {manageable && (
          <Box width={240} margin={'24px auto 0'}>
            <Button color="primary" block onClick={props.onClick}>
              {t(Strings.manage_role_empty_btn)}
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};
