

import { Injectable, OnApplicationShutdown } from '@nestjs/common';
import { EnvConfigKey } from '../../common';
import { IActuatorConfig, IBaseRateLimiter, IOssConfig, IRateLimiter, IServerConfig } from '../../interfaces';
import { ConfigStoreInMemory } from './config.store';

/**
 * environment variables, store them in the memory
 */
@Injectable()
export class EnvConfigService implements OnApplicationShutdown {

  private configStore: ConfigStoreInMemory = new ConfigStoreInMemory();

  constructor() {
    // server constants configuration
    const server: IServerConfig = {
      url: process.env.BACKEND_BASE_URL!,
      transformLimit: parseInt(process.env.SERVER_TRANSFORM_LIMIT!) || 100000,
      maxViewCount: parseInt(process.env.SERVER_MAX_VIEW_COUNT!) || 30,
      maxFieldCount: parseInt(process.env.SERVER_MAX_FIELD_COUNT!) || 200,
      maxRecordCount: parseInt(process.env.SERVER_MAX_RECORD_COUNT!) || 50000,
      recordRemindRange: parseInt(process.env.SERVER_RECORD_REMIND_RANGE!) || 90,
    };
    this.configStore.set(EnvConfigKey.CONST, server);

    // oss constants configuration
    const oss: IOssConfig = {
      host: process.env.OSS_HOST!,
      bucket: process.env.OSS_BUCKET!,
      ossSignatureEnabled: process.env.OSS_SIGNATURE_ENABLED === 'true',
    };
    this.configStore.set(EnvConfigKey.OSS, oss);

    // API limit constants configuration
    const limit: IRateLimiter = {
      points: parseInt(process.env.LIMIT_POINTS!) || 5,
      duration: parseInt(process.env.LIMIT_DURATION!) || 1,
      whiteList: null as any
    };
    const limitWhiteList = process.env.LIMIT_WHITE_LIST && JSON.parse(process.env.LIMIT_WHITE_LIST);
    // const limitWhiteList = envWhiteList || this.configService.get<Map<string, IBaseRateLimiter>>('limit.whiteList', null as any);
    if (limitWhiteList) {
      const limitWhitMap = new Map<string, IBaseRateLimiter>();
      Object.keys(limitWhiteList).forEach(token => {
        limitWhitMap.set(token, limitWhiteList[token]);
      });
      limit.whiteList = limitWhitMap;
    }
    this.configStore.set(EnvConfigKey.API_LIMIT, limit);

    // health check configuration
    const actuator: IActuatorConfig = {
      dnsUrl: process.env.ACTUATOR_DNS_URL!,
      rssRatio: parseInt(process.env.ACTUATOR_RSS_RATIO!) || 90,
      heapRatio: parseInt(process.env.ACTUATOR_HEAP_RATIO!) || 100,
    };
    this.configStore.set(EnvConfigKey.ACTUATOR, actuator);
  }

  onApplicationShutdown(_signal?: string) {
    this.configStore.clear();
  }

  getRoomConfig(key: string): IServerConfig | IOssConfig | IRateLimiter | IActuatorConfig {
    return this.configStore.get(key);
  }
}
