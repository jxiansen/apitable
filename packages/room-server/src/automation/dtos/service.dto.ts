export class ServiceBaseUrlDto {
  serviceId!: string;

  baseUrl?: string;
}

export class ServiceInfoDto {
  serviceId!: string;
  slug!: string;
  name?: string;
  logo?: string;
  i18n?: object;
}
