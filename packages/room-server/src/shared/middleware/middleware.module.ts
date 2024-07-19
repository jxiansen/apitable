import { Module } from '@nestjs/common';
import { NodeRateLimiterMiddleware } from './node.rate.limiter.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatasheetRepository } from 'database/datasheet/repositories/datasheet.repository';
import { DeveloperModule } from '../../developer/developer.module';

/**
 * middleware module works with pipe, middleware and guard
 * @author Zoe zheng
 * @date 2020/7/24 4:39 PM
 */
@Module({
  imports: [TypeOrmModule.forFeature([DatasheetRepository]), DeveloperModule],
  providers: [NodeRateLimiterMiddleware],
  exports: [NodeRateLimiterMiddleware],
})
export class MiddlewareModule {}
