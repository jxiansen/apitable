import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { isDevMode } from 'app.environment';

/**
 * database configuration service
 */
@Injectable()
export class DatabaseConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    const { host, port, username, password, database, ssl, entityPrefix, connectionLimit, keepConnectionAlive, retryDelay } = {
      host: process.env.MYSQL_HOST || 'localhost',
      port: parseInt(process.env.MYSQL_PORT!) || 3306,
      username: process.env.MYSQL_USERNAME || 'root',
      password: process.env.MYSQL_PASSWORD || 'apitable@com',
      database: process.env.MYSQL_DATABASE || 'apitable',
      entityPrefix: process.env.DATABASE_TABLE_PREFIX || 'apitable_',
      ssl: process.env.MYSQL_SSL || false,
      connectionLimit: parseInt(process.env.MYSQL_CONNECTION_LIMIT!) || 20,
      keepConnectionAlive: !!process.env.MYSQL_KEEP_CONNECTION_ALIVE || this.configService.get<boolean>('MYSQL_KEEP_CONNECTION_ALIVE', true),
      retryDelay: parseInt(process.env.MYSQL_RETRY_DELAY!) || 300,
    };
    return {
      type: 'mysql',
      host,
      port,
      username,
      password,
      database,
      ssl,
      entityPrefix,
      // don't change the below settings
      // entities: ['dist/**/*.entity{.ts,.js}'],
      autoLoadEntities: true,
      // use utf8mb4 to fix emoji storage issue
      charset: 'utf8mb4',
      // print SQL logs in dev mode only
      logging: isDevMode,
      connectTimeout: 60000,
      supportBigNumbers: true,
      bigNumberStrings: true,
      // don't change synchronize setting
      synchronize: false,
      // connection pool settings
      keepConnectionAlive,
      retryDelay,
      verboseRetryLog: true,
      extra: {
        connectionLimit,
      },
    };
  }
}
