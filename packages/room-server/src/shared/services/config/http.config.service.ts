import { Injectable } from '@nestjs/common';
import { HttpModuleOptions, HttpModuleOptionsFactory } from '@nestjs/axios';

/**
 * Http configuration service
 *
 */
@Injectable()
export class HttpConfigService implements HttpModuleOptionsFactory {
  createHttpOptions(): HttpModuleOptions {
    const baseURL = process.env.BACKEND_BASE_URL;
    return {
      baseURL,
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
    };
  }
}
