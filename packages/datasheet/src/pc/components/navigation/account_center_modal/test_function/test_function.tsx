import cls from 'classnames';
import { compact } from 'lodash';
import { useMemo } from 'react';
import { Typography } from '@apitable/components';
import { Strings, t, Api } from '@apitable/core';
import { useRequest } from 'pc/hooks';
import { Card } from './card';
import { ApplicantType } from './interface';
import styles from './style.module.less';

interface ITestFunctionProps {
  isUser?: boolean;
}

export const TestFunction = ({ isUser }: ITestFunctionProps) => {
  const { data: labsFeatureListData } = useRequest(Api.getLabsFeatureList);
  const data = useMemo(() => {
    if (!labsFeatureListData) {
      return [];
    }
    const { space: spaceLabs = [] } = labsFeatureListData.data.data.features;
    return compact([
      {
        type: ApplicantType.SPACE_TYPE,
        title: !isUser ? '' : t(Strings.test_function_space_level_title),
        desc: !isUser ? '' : t(Strings.test_function_space_level_desc),
        features: spaceLabs.filter((item) => !isUser || item.key !== 'view_manual_save'),
      },
    ]);
  }, [labsFeatureListData, isUser]);
  return (
    <div className={cls(styles.testFuncContainer, { [styles.space]: !isUser })}>
      <Typography variant={!isUser ? 'h1' : 'h6'}>{isUser ? t(Strings.test_function) : t(Strings.admin_test_function)}</Typography>
      <div className={styles.desc}>{isUser ? t(Strings.test_function_desc) : t(Strings.admin_test_function_content)}</div>
      {data.map((item) => (
        <div className={styles.functionsBox} key={item.type}>
          {item.title && <div className={styles.functionsBoxTitle}>{item.title}</div>}
          {item.desc && <div className={styles.functionsBoxDesc}>{item.desc}</div>}
          <div className={styles.functionsBoxList}>
            {item.features.map((feature) => {
              return <Card key={feature.key} feature={feature} isUser={isUser} />;
            })}
          </div>
        </div>
      ))}
    </div>
  );
};
