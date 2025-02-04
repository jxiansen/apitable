import { CacheModuleOptions, CacheOptionsFactory, Injectable } from '@nestjs/common';
import { IBaseBucketConfig } from '../interfaces';
import { S3StoreFactory } from 'shared/cache/s3.store';
import { MinioStoreFactory } from './minio.store';
import { DEFAULT_X_MAX_AGE } from '../common';

@Injectable()
export class CacheConfigService implements CacheOptionsFactory {
  createCacheOptions(): Promise<CacheModuleOptions> | CacheModuleOptions {
    const s3Options = this.getS3Options();
    if (s3Options != null) {
      return s3Options;
    }
    // compatible with privatization(minio)
    const minioOptions = this.getMinioOptions();
    if (minioOptions != null) {
      return minioOptions;
    }
    // use cache as default
    return {
      // time to live, units are in seconds
      ttl: 10,
    };
  }

  private getS3Options(): CacheModuleOptions | null {
    const cacheType = process.env.OSS_CACHE_TYPE;
    if (!cacheType || cacheType !== 's3') {
      return null;
    }
    const s3 = process.env.OSS_S3_BUCKET_CACHE; // this.configService.get<IBaseBucketConfig | null>('oss.s3', null);
    if (!s3) {
      return null;
    }
    const bucketConfig: IBaseBucketConfig = JSON.parse(s3);
    const region = bucketConfig?.region || null;
    const bucket = bucketConfig?.name || null;
    if (region && bucket) {
      return {
        // s3 setting, 1 day by default
        ttl: DEFAULT_X_MAX_AGE,
        store: new S3StoreFactory(),
        region,
        bucket,
      };
    }
    return null;
  }

  private getMinioOptions(): CacheModuleOptions | null {
    const cacheType = process.env.OSS_CACHE_TYPE;
    if (!cacheType || cacheType !== 'minio') {
      return null;
    }
    const minioConfig = process.env.OSS_MINIO; // this.configService.get<IBaseBucketConfig | null>('OSS_MINIO', null);
    if (!minioConfig) {
      return null;
    }
    const { endPoint, port, useSSL, accessKey, secretKey } = JSON.parse(minioConfig) as any;
    if (endPoint && accessKey && secretKey) {
      const bucketConfig: IBaseBucketConfig = JSON.parse(process.env.OSS_MINIO_BUCKET_CACHE!);
      const bucket = bucketConfig?.name || null;
      if (bucket) {
        return {
          // s3 setting, 1 day by default
          ttl: DEFAULT_X_MAX_AGE,
          store: new MinioStoreFactory(),
          bucket,
          endPoint,
          port,
          useSSL,
          accessKey,
          secretKey,
        };
      }
    }
    return null;
  }
}
