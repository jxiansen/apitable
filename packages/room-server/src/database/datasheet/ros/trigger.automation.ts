import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class TriggerAutomationRO {
  @ApiProperty({
    required: true,
    example: 'rec4zxfWB5uyM',
    description: 'Record id',
  })
  @IsNotEmpty()
  recordId!: string;

  @ApiProperty({
    required: true,
    example: 'fl4zxfWB5uyM',
    description: 'Field id',
  })
  @IsNotEmpty()
  fieldId!: string;
}
