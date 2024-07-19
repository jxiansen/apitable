import { OpenTelemetryModule } from '@metinseylan/nestjs-opentelemetry';
import { DynamicModule, Module } from '@nestjs/common';
import openTelemetryConfiguration from '../config/open.telemetry.config.service';

@Module({})
export class JaegerDynamicModule {
  static async register(enabled: boolean): Promise<DynamicModule> {
    if (!enabled) {
      return {
        module: JaegerDynamicModule,
      };
    }
    return await OpenTelemetryModule.forRoot(openTelemetryConfiguration);
  }
}
