import { FieldType, ILinkField } from '@apitable/core';
import { DatasheetRecordService } from 'database/datasheet/services/datasheet.record.service';
import { LinkField } from 'fusion/field/link.field';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../../app.module';

describe('LinkField', () => {
  let app: NestFastifyApplication;
  let fieldClass: LinkField;
  let field: ILinkField;
  let recordService: any;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = module.createNestApplication<NestFastifyApplication>(new FastifyAdapter());
    await app.init();
    recordService = app.get(DatasheetRecordService);
    fieldClass = new LinkField(recordService);
    field = {
      id: 'fldpRxaCC8Mhe',
      name: 'Two-way Link',
      type: FieldType.Link,
      property: { foreignDatasheetId: 'string' },
    };
  });

  afterAll(async () => {
    await app.close();
  });

  describe('validate', () => {
    it('null--should pass', () => {
      expect(() => fieldClass.validate(null!, field)).not.toThrow();
    });
    it('empty array--should throw an error', () => {
      expect(() => fieldClass.validate([], field)).toThrow(/^api_params_link_field_recordids_empty_error$/);
    });
    it('single linked with multiple--should throw an error', () => {
      field.property.limitSingleRecord = true;
      expect(() => fieldClass.validate(['rec1', 'rec2'], field)).toThrow(/^api_params_link_field_records_max_count_error$/);
    });
    it('not an array--should throw an error', () => {
      field.property.limitSingleRecord = true;
      expect(() => fieldClass.validate('rec1' as any, field)).toThrow(/^api_param_link_field_type_error$/);
    });
  });
});
