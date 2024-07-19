

export interface ITriggerTypeServiceRelDto {
  serviceId: string,
  triggerTypeId: string,
  endpoint?: string,
}

export class TriggerTypeDetailDto {
  triggerTypeId!: string;
  name!: string;
  description!: string;
  endpoint!: string;
  i18n?: object;
  inputJSONSchema?: object;
  outputJSONSchema?: object;
  serviceId!: string;
}

export class TriggerInputJsonSchemaDto {
  triggerTypeId!: string;
  inputJSONSchema?: object;
}