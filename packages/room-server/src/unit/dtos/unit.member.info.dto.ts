export class UnitMemberInfoDto {
  id!: string;
  memberName!: string;
  userId?: number;
  mobile!: string;
  spaceId!: string;
  isActive!: boolean | 0;
  isDeleted!: boolean;
  isSocialNameModified?: number;
}
