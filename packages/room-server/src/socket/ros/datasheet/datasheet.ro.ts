

import { IsArray, IsEnum, IsInt, IsObject, IsOptional, IsString } from 'class-validator';
import { BroadcastTypes } from 'shared/enums/broadcast-types.enum';

export class FieldPermissionChange {
  @IsArray()
  uuids!: string[];

  @IsString()
  role!: string;

  @IsObject()
  permission: any;
}

export class FieldPermissionChangeRo {
  @IsEnum(BroadcastTypes)
  event!: BroadcastTypes;

  @IsString()
  datasheetId!: string;

  @IsString()
  fieldId!: string;

  @IsString()
  operator!: string;

  @IsInt()
  changeTime!: number;

  @IsObject()
  @IsOptional()
  setting?: any;

  @IsArray()
  @IsOptional()
  changes?: FieldPermissionChange[];
}
