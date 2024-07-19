
import { IRobotAction, IRobotTrigger } from 'pc/components/robot/interface';

export interface UpdatedBy {
  uuid: string;
  nickName: string;
  avatar: string;
}

export interface IAutomationRobotDetailItem {
  robotId: string;
  name: string;
  description: string;
  isActive: boolean;
  isOverLimit: boolean;
  recentlyRunCount?: number;
  updatedBy: UpdatedBy;
  updatedAt: string;
  props: Props;
  triggers: Trigger[];
  actions: Action[];
  relatedResources: RelatedResource[];
}

export interface Props {
  failureNotifyEnable: boolean;
}

export type Trigger = IRobotTrigger;
export type Action = IRobotAction;
export interface RelatedResource {
  nodeId: string;
  nodeName: string;
  icon: string;
}
