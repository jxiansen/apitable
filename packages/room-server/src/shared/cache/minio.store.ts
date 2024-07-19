

import { CacheStore, CacheStoreFactory, CacheStoreSetOptions, LiteralObject } from '@nestjs/common';
import { Client } from 'minio';
import { BaseOssStore } from 'shared/cache/base.oss.store';

export class MinioStoreFactory implements CacheStoreFactory {
  create(args: LiteralObject): CacheStore {
    return new MinioStore(args);
  }
}

export class MinioStore extends BaseOssStore implements CacheStore {
  private readonly minioClient: Client;

  constructor(args: LiteralObject) {
    super(args);
    if (args.minioClient) {
      this.minioClient = args.s3Client;
    } else {
      const { endPoint, useSSL, port, accessKey, secretKey } = this.options;
      this.minioClient = new Client({ endPoint, useSSL, port, accessKey, secretKey });
    }
    // TODO: create a bucket automatically
    // this.setLifecycle();
  }

  get<T>(key: string): Promise<T | undefined> | T | undefined {
    return new Promise((resolve, reject) => {
      const cb = (err: Error | null, result: T) => (err ? reject(err) : resolve(result));
      this.minioClient.getObject(this.options.bucket, this.getFileNameByKey(key), this.handleResponse(cb));
    });
  }

  set<T>(key: string, value: T, _options?: CacheStoreSetOptions<T>): Promise<void> | void {
    return new Promise((resolve, reject) => {
      const cb = (err: Error | null, result: any) => (err ? reject(err) : resolve(result));
      const stream = JSON.stringify(value);
      this.minioClient.putObject(this.options.bucket, this.getFileNameByKey(key), stream, this.handleResponse(cb));
    });
  }

  protected handleResponse(cb: (error: Error | null, result?: any) => void) {
    return (err: Error | null, result: any) => {
      if (err) {
        if (err['code'] == 'NoSuchKey') {
          return cb && cb(null, result);
        }
        return cb && cb(err);
      }
      const chunks: Uint8Array[] = [];
      result.on('data', (chunk: any) => chunks.push(chunk));
      result.on('error', (err: Error) => cb(err));
      result.on('end', () => {
        if (this.options.parse) {
          const content = Buffer.concat(chunks).toString('utf8');
          try {
            const data = JSON.parse(content);
            return cb && cb(null, data);
          } catch (e) {
            return cb && cb(e as Error);
          }
        }
        return cb && cb(null, result);
      });
    };
  }

  // private setLifecycle() {
  //   // set the lifecycle state of the object in the bucket
  //   const lifecycleConfig = {
  //     Rule: [
  //       {
  //         ID: 'api cache overtime',
  //         Status: 'Enabled',
  //         Filter: {
  //           Prefix: '',
  //         },
  //         Expiration: {
  //           Days: this.options.ttl
  //         }
  //       },
  //     ]
  //   };
  //   this.minioClient.setBucketLifecycle(this.options.bucket, lifecycleConfig, (err) => {
  //     console.error('minioClient', err);
  //   });
  // }
}
