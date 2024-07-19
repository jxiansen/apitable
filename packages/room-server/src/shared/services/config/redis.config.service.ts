import { RedisModuleOptions } from '@apitable/nestjs-redis';

export const redisModuleOptions = (): RedisModuleOptions => {
  const { host, port, password, db, tls } = {
    host: process.env.REDIS_HOST || 'localhost',
    port: parseInt(process.env.REDIS_PORT || '6379', 10),
    db: parseInt(process.env.REDIS_DB || '0', 10),
    password: process.env.REDIS_PASSWORD,
    tls: Object.is(process.env.REDIS_SSL_ENABLED, 'true'),
  };
  const redisConfig: RedisModuleOptions = {
    host,
    port,
  };
  // use config values if there is a configuration
  if (password) {
    redisConfig.password = password;
  }
  if (db) {
    redisConfig.db = db;
  }
  if (tls) {
    redisConfig.tls = true as any;
  }
  return redisConfig;
};
