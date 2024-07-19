import { BaseTextField } from './base.text.field';
import { FieldManager } from '../field.manager';
import { Injectable, OnApplicationBootstrap } from '@nestjs/common';

@Injectable()
export class CascaderField extends BaseTextField implements OnApplicationBootstrap {
  onApplicationBootstrap() {
    FieldManager.setService(CascaderField.name, this);
  }
}
