import { Provider } from '@nestjs/common';
import Redis from 'ioredis';
import { RedisConstants } from 'shared/common/constants/socket.module.constants';
import { redisConfig } from './redis-config.factory';

export type RedisClient = Redis;

export const redisProviders: Provider[] = [
  {
    useFactory: (): RedisClient => {
      return new Redis(redisConfig.useFactory(RedisConstants.REDIS_CLIENT, RedisConstants.REDIS_PREFIX));
    },
    provide: RedisConstants.REDIS_CLIENT,
  },
];
