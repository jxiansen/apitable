export class UnitMemberBaseInfoDto {
  id!: string;
  memberName!: string;
  userId!: string;
  isActive!: number;
  isDeleted!: boolean;
  isMemberNameModified?: boolean;
  unitId!: string;
}
