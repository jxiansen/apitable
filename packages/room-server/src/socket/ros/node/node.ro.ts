import { IsArray, IsOptional, IsString } from 'class-validator';

export class NodeShareDisableRo {
  @IsString()
  nodeId!: string;

  @IsArray()
  @IsOptional()
  shareIds?: string[];
}
