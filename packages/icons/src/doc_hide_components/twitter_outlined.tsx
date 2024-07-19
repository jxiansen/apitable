/* eslint-disable max-len */
import React from 'react';
import { makeIcon, IIconProps } from '../utils/icon';

export const TwitterOutlined: React.FC<IIconProps> = makeIcon({
  Path: ({ colors }) => (
    <>
      <path
        d="M22.851 12.3389C22.8582 12.4974 22.8611 12.6574 22.8611 12.8189C22.8611 17.728 19.3062 23.3862 12.8059 23.3847C10.8088 23.3847 8.95132 22.7593 7.38623 21.6858C7.66259 21.7207 7.94478 21.7396 8.22987 21.7396C9.88514 21.744 11.4095 21.1447 12.6197 20.1411C11.0735 20.1047 9.76732 19.0094 9.31787 17.5098C9.53314 17.5564 9.75423 17.5811 9.98259 17.5825C10.304 17.584 10.6168 17.5404 10.9135 17.456C9.29605 17.0982 8.07714 15.5651 8.07714 13.7353V13.6873C8.55423 13.9753 9.09823 14.1513 9.67859 14.1774C8.73023 13.4909 8.10623 12.3273 8.10623 11.0182C8.10623 10.3258 8.28078 9.67999 8.58478 9.12727C10.3273 11.4342 12.9324 12.9644 15.872 13.1534C15.811 12.8785 15.7804 12.5934 15.7804 12.2996C15.7804 10.2327 17.363 8.58327 19.315 8.61526C20.3317 8.63272 21.251 9.09963 21.8953 9.83272C22.6997 9.67854 23.4561 9.38181 24.1397 8.96727C23.875 9.82981 23.315 10.5484 22.5848 10.9978C23.3004 10.9178 23.9811 10.7273 24.6153 10.4422C24.1411 11.1796 23.5419 11.824 22.851 12.3389Z"
        fill={colors[0]}
      />
    </>
  ),
  name: 'twitter_outlined',
  defaultColors: ['#D9D9D9'],
  colorful: false,
  allPathData: [
    'M22.851 12.3389C22.8582 12.4974 22.8611 12.6574 22.8611 12.8189C22.8611 17.728 19.3062 23.3862 12.8059 23.3847C10.8088 23.3847 8.95132 22.7593 7.38623 21.6858C7.66259 21.7207 7.94478 21.7396 8.22987 21.7396C9.88514 21.744 11.4095 21.1447 12.6197 20.1411C11.0735 20.1047 9.76732 19.0094 9.31787 17.5098C9.53314 17.5564 9.75423 17.5811 9.98259 17.5825C10.304 17.584 10.6168 17.5404 10.9135 17.456C9.29605 17.0982 8.07714 15.5651 8.07714 13.7353V13.6873C8.55423 13.9753 9.09823 14.1513 9.67859 14.1774C8.73023 13.4909 8.10623 12.3273 8.10623 11.0182C8.10623 10.3258 8.28078 9.67999 8.58478 9.12727C10.3273 11.4342 12.9324 12.9644 15.872 13.1534C15.811 12.8785 15.7804 12.5934 15.7804 12.2996C15.7804 10.2327 17.363 8.58327 19.315 8.61526C20.3317 8.63272 21.251 9.09963 21.8953 9.83272C22.6997 9.67854 23.4561 9.38181 24.1397 8.96727C23.875 9.82981 23.315 10.5484 22.5848 10.9978C23.3004 10.9178 23.9811 10.7273 24.6153 10.4422C24.1411 11.1796 23.5419 11.824 22.851 12.3389Z',
  ],
  width: '32',
  height: '32',
  viewBox: '0 0 32 32',
});
