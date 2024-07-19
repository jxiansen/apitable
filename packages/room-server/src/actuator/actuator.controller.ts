

import { RedisService } from '@apitable/nestjs-redis';
import { Controller, Get } from '@nestjs/common';
import { HealthCheck, HealthCheckService, MemoryHealthIndicator, TypeOrmHealthIndicator } from '@nestjs/terminus';
import { HealthIndicatorResult } from '@nestjs/terminus/dist/health-indicator';
import * as os from 'os';
import { EnvConfigKey } from 'shared/common';
import { IActuatorConfig } from 'shared/interfaces';
import { EnvConfigService } from 'shared/services/config/env.config.service';
import { RedisHealthIndicator } from './redis.health.indicator';

@Controller(['actuator/health', 'socket/health'])
export class ActuatorController {
  constructor(
    private readonly envConfigService: EnvConfigService,
    private readonly redisService: RedisService,
    private health: HealthCheckService,
    private db: TypeOrmHealthIndicator,
    private redis: RedisHealthIndicator,
    private memory: MemoryHealthIndicator
  ) {}

  @Get()
  @HealthCheck()
  healthCheck() {
    const actuator = this.envConfigService.getRoomConfig(EnvConfigKey.ACTUATOR) as IActuatorConfig;
    return this.health.check([
      () => this.db.pingCheck('database', { timeout: 60000 }),
      () => this.memoryOfCheckRSS(actuator),
      () => this.memoryOfCheckHeap(actuator),
      () => this.redis.isRedisHealthy(this.redisService)
    ]);
  }

  private memoryOfCheckRSS(actuator: IActuatorConfig): Promise<HealthIndicatorResult> {
    const totalMem = os.totalmem();
    const rssThreshold = (actuator.rssRatio / 100) * totalMem;
    return this.memory.checkRSS('memory_rss', rssThreshold).then(result => {
      Object.assign(result['memory_rss']!, { totalMem: (totalMem / 1024 / 1024) });
      return result;
    });
  }

  private memoryOfCheckHeap(actuator: IActuatorConfig) {
    const { heapTotal } = process.memoryUsage();
    const heapUsedThreshold = (actuator.heapRatio / 100) * heapTotal;
    return this.memory.checkHeap('memory_heap', heapUsedThreshold).then(result => {
      Object.assign(result['memory_heap']!, { memoryUsageMem: (heapTotal / 1024 / 1024) });
      return result;
    });
  }

}

