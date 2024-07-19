// custom decorators only
import { Inject, SetMetadata } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { NODE_PERMISSION_REFLECTOR_KEY } from 'shared/common/constants';

// inject logger
export const InjectLogger = () => Inject(WINSTON_MODULE_PROVIDER);

export const NodePermissions = (...permissions: string[]) => SetMetadata(NODE_PERMISSION_REFLECTOR_KEY, permissions);

export class ExtraModel {}
