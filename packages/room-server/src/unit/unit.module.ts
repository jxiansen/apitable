import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'user/user.module';
import { UnitMemberRepository } from './repositories/unit.member.repository';
import { UnitRepository } from './repositories/unit.repository';
import { UnitTeamRepository } from './repositories/unit.team.repository';
import { UnitService } from './services/unit.service';
import { UnitTeamService } from './services/unit.team.service';
import { UnitMemberService } from './services/unit.member.service';
import { UnitRoleMemberRepository } from './repositories/unit.role.member.repository';
import { UnitTeamMemberRefRepository } from './repositories/unit.team.member.ref.repository';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forFeature([UnitRepository, UnitMemberRepository, UnitTeamRepository, UnitTeamMemberRefRepository, UnitRoleMemberRepository]),
  ],
  providers: [UnitService, UnitTeamService, UnitMemberService],
  exports: [UnitService, UnitTeamService, UnitMemberService],
})
export class UnitModule {}
