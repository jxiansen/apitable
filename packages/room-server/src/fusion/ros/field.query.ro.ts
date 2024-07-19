import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class FieldQueryRo {
  @ApiPropertyOptional({
    type: String,
    required: false,
    example: 'viwG9l1VPD6nH',
    description: 'The view Id, specifying the view, returns the fields in the same order as the view, hidden fields are not returned',
  })
  @IsString()
  @IsOptional()
  viewId?: string;
}
