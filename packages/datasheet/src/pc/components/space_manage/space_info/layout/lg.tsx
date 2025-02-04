import { getEnvVariables } from 'pc/utils/env';
import { Block } from '../components';
import { ILayoutProps } from '../interface';
import { useCards } from './cards';

import styles from './style.module.less';

export const Lg = (props: ILayoutProps) => {
  const {
    AdCard,
    CapacityCard,
    AutomationCard,
    ApiCard,
    FileCard,
    RecordCard,
    MemberCard,
    ViewsCard,
    OthersCard,
    InfoCard,
    LevelCard,
    CreditCard,
    CreditCostCard,
  } = useCards(props);

  return (
    <div className={styles.lg} style={{ height: '100%' }}>
      <Block isWrap vertical style={{ maxWidth: '25%' }}>
        <Block flex={43}>
          <InfoCard minHeight={494} />
        </Block>
        <Block flex={57}>
          <CreditCard minHeight={372} />
        </Block>
        <Block flex={27}>
          <AutomationCard minHeight={372} />
        </Block>
        {!getEnvVariables().IS_APITABLE && (
          <Block flex={27}>
            <AdCard minHeight={372} />
          </Block>
        )}
      </Block>
      <Block isWrap vertical flex={2}>
        <Block flex={16} isWrap>
          <Block flex={1}>
            <LevelCard minHeight={176} />
          </Block>
          <Block flex={2}>
            <MemberCard minHeight={176} />
          </Block>
        </Block>
        <Block flex={16} isWrap>
          <Block flex={16}>
            <CapacityCard />
          </Block>
          <Block flex={16}>
            <FileCard />
          </Block>
          <Block flex={16}>
            <RecordCard />
          </Block>
        </Block>
        <Block flex={16}>
          <CreditCostCard minHeight={372} />
        </Block>
        <Block flex={16} isWrap>
          <Block flex={16}>
            <ApiCard minHeight={372} />
          </Block>
          <Block flex={16}>
            <ViewsCard />
          </Block>
          <Block flex={16}>
            <OthersCard minHeight={372} />
          </Block>
        </Block>
      </Block>
    </div>
  );
};
