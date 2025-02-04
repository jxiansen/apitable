import { Logger } from '@nestjs/common';
import { RedisOptions } from 'ioredis';
import { RedisConstants } from 'shared/common/constants/socket.module.constants';

export const redisConfig = {
  provide: RedisConstants.REDIS_CONFIG,

  /*
   * custom factory
   *
   * @param clientType connection client type[sub/pub/client]
   * @param keyPrefix
   */
  useFactory: (clientType: string, keyPrefix: string): RedisOptions => {
    const logger = new Logger('RedisAdapterFactory');
    return {
      host: process.env.REDIS_HOST || 'localhost',
      port: parseInt(process.env.REDIS_PORT || '6379', 10),
      password: process.env.REDIS_PASSWORD,
      db: parseInt(process.env.REDIS_DB || '0', 10),
      tls: Object.is(process.env.REDIS_SSL_ENABLED, 'true') as any,
      retryStrategy(times: number): number | void {
        if (times <= RedisConstants.RE_CONNECT_MAX_TIMES) {
          // reconnect after
          logger.warn(`RedisClient:${clientType}:retryStrategy times:${times}`);
          return Math.min(times * 1000, 3000);
        }
        logger.error(`RedisClient:${clientType}:retryStrategy:RetryTimeExhausted times:${times}`);
      },
      reconnectOnError(e: Error): boolean | 1 | 2 {
        logger.error(`RedisClient:${clientType}:reconnectOnError`, e?.stack);
        return false;
      },
      keyPrefix: keyPrefix,
      autoResubscribe: true,
      // I had the same problem with Google Firebase Cloud Functions.
      // The problem was that latest version of Redis keep the connections alive forever.
      // If the process that calls Redis ends shortly after it calls Redis as in our case with the Cloud Functions,
      // you have to set the timeout setting to something different than the default 0.
      // redis reconnection error need to set connectTimeout
      connectTimeout: RedisConstants.CONNECT_TIMEOUT,
      maxRetriesPerRequest: 1,
    };
  },
};
