

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UnitMemberRepository } from 'unit/repositories/unit.member.repository';
import { UserRepository } from './repositories/user.repository';
import { UserService } from './services/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository, UnitMemberRepository])],
  providers: [UserService],
  controllers: [],
  exports: [UserService],
})
export class UserModule {}
