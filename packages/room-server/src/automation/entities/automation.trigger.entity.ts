

import { BaseEntity } from 'shared/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('automation_trigger')
export class AutomationTriggerEntity extends BaseEntity {
  @Column({
    name: 'trigger_id',
    nullable: false,
    unique: true,
    length: 50,
  })
    triggerId!: string;

  @Column({
    name: 'robot_id',
    nullable: false,
    length: 50,
  })
    robotId!: string;

  @Column({
    name: 'trigger_type_id',
    nullable: true,
    length: 255,
  })
    triggerTypeId?: string;

  @Column({
    name: 'resource_id',
    nullable: false,
    length: 50,
  })
    resourceId?: string;

  @Column({
    name: 'prev_trigger_id',
    nullable: false,
    length: 50,
  })
    prevTriggerId?: string;

  @Column('json', {
    name: 'input',
    nullable: true,
  })
    input?: object;
}
