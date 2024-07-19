

import { Global, Module } from '@nestjs/common';
import { redisConfig } from './redis-config.factory';
import { redisProviders } from './redis.provider';
import { RedisService } from './redis.service';

@Global()
@Module({
  providers: [...redisProviders, RedisService, redisConfig],
  exports: [...redisProviders, RedisService],
})
export class RedisModule {
}
