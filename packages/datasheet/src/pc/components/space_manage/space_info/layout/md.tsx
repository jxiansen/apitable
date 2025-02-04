import { getEnvVariables } from 'pc/utils/env';
import { Block } from '../components';
import { ILayoutProps } from '../interface';
import { useCards } from './cards';

import styles from './style.module.less';

export const Md = (props: ILayoutProps) => {
  const {
    AdCard,
    AutomationCard,
    CapacityCard,
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
    <div className={styles.lg}>
      <Block isWrap vertical style={{ maxWidth: '33.3%' }}>
        <Block flex={43}>
          <InfoCard minHeight={494} />
        </Block>
        <Block flex={27}>
          <CreditCard minHeight={372} />
        </Block>
        <Block flex={27}>
          <RecordCard minHeight={372} />
        </Block>
        <Block flex={27}>
          <AutomationCard minHeight={372} />
        </Block>
      </Block>
      <Block isWrap vertical>
        <Block flex={16} isWrap>
          <Block>
            <LevelCard minHeight={176} />
          </Block>
          <Block>
            <MemberCard minHeight={176} />
          </Block>
        </Block>
        <Block flex={16} isWrap>
          <Block>
            <CapacityCard />
          </Block>
          <Block>
            <FileCard />
          </Block>
        </Block>
        <Block flex={16}>
          <CreditCostCard minHeight={372} />
        </Block>
        <Block flex={16} isWrap>
          <Block>
            <ApiCard />
          </Block>
          <Block>
            <ViewsCard />
          </Block>
        </Block>
        <Block flex={16} isWrap>
          <Block flex={1}>
            <OthersCard minHeight={372} />
          </Block>
          {!getEnvVariables().IS_APITABLE && (
            <Block flex={1}>
              <AdCard minHeight={372} />
            </Block>
          )}
        </Block>
      </Block>
    </div>
  );
};
