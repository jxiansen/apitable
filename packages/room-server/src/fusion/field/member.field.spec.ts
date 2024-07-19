

import { FieldType, IMemberField } from '@apitable/core';
import '@apitable/i18n-lang';
import { MemberField } from 'fusion/field/member.field';
import { UnitMemberService } from 'unit/services/unit.member.service';
import { UnitService } from 'unit/services/unit.service';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../../app.module';

describe('MemberField', () => {
  let app: NestFastifyApplication;
  let fieldClass: MemberField;
  let field: IMemberField;
  let unitService: UnitService;

  beforeAll(async() => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = module.createNestApplication<NestFastifyApplication>(new FastifyAdapter());
    await app.init();
    unitService = app.get(UnitMemberService);
    fieldClass = new MemberField(unitService);
    field = {
      id: 'fldpRxaCC8Mhe',
      name: 'Member',
      type: FieldType.Member,
      property: {
        isMulti: true,
        shouldSendMsg: false,
        unitIds: [''],
      },
    };
  });

  afterAll(async() => {
    await app.close();
  });

  describe('validate', () => {
    it('null--should pass', () => {
      expect(() => fieldClass.validate(null, field)).not.toThrow();
    });
    it('not an array--should throw an error', () => {
      expect(() => fieldClass.validate({}, field)).toThrow(/^api_param_member_field_type_error$/);
    });
    it('single member with multiple--should throw an error', () => {
      field.property.isMulti = false;
      expect(() => fieldClass.validate(['member1', 'member2'], field)).toThrow(/^api_params_member_field_records_max_count_error$/);
    });
    it('memberId not string--should throw an error', () => {
      field.property.isMulti = false;
      expect(() => fieldClass.validate([{
        id: 1
      }], field)).toThrow(/^api_param_member_id_type_error$/);
    });
    it('name not exist--should throw an error', () => {
      field.property.isMulti = false;
      expect(() => fieldClass.validate([{}], field)).toThrow(/^api_params_instance_member_name_error$/);
    });
    it('type not exist--should throw an error', () => {
      field.property.isMulti = false;
      expect(() => fieldClass.validate([{
        name: 'name'
      }], field)).toThrow(/^api_params_instance_member_type_error$/);
    });
  });
});
