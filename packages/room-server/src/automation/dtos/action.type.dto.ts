export class ActionTypeBaseInfoDto {
  actionTypeId!: string;

  inputJSONSchema!: object;

  outputJSONSchema?: object;

  endpoint!: string;

  serviceId!: string;
}
