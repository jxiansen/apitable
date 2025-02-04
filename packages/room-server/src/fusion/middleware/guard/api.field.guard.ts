import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { DATASHEET_FIELD_MAP_HTTP_DECORATE, DATASHEET_HTTP_DECORATE, USER_HTTP_DECORATE } from '../../../shared/common';
import { ApiException } from '../../../shared/exception';
import { ApiTipConstant } from '@apitable/core';
import { UnitMemberService } from 'unit/services/unit.member.service';
import { DatasheetMetaService } from 'database/datasheet/services/datasheet.meta.service';
import { Reflector } from '@nestjs/core';

export interface IApiFieldOptions {
  requireFieldMap?: boolean;
}

export const FIELD_OPTIONS = 'field';

/**
 * Guards are executed after each middleware, but before any interceptor or pipe.
 * datasheet info validate
 * the path start with:/fusion/v1/datasheets
 */
@Injectable()
export class ApiFieldGuard implements CanActivate {
  constructor(
    private readonly memberService: UnitMemberService,
    private readonly reflector: Reflector,
    private readonly metaService: DatasheetMetaService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    // check if the datasheet exists
    if (!request.params || !request.params.dstId) {
      throw ApiException.tipError(ApiTipConstant.api_datasheet_not_exist);
    }
    const spaceId = request.params.spaceId;
    if (!spaceId) {
      throw ApiException.tipError(ApiTipConstant.api_params_instance_space_id_error);
    }
    // works for datasheet related APIs
    const datasheet = request[DATASHEET_HTTP_DECORATE];
    if (!datasheet) {
      throw ApiException.tipError(ApiTipConstant.api_datasheet_not_exist);
    }
    const user = request[USER_HTTP_DECORATE];
    const spaceIds = await this.memberService.selectSpaceIdsByUserId(user.id);
    // no permission of the space
    if (!spaceIds.includes(spaceId)) {
      throw ApiException.tipError(ApiTipConstant.api_forbidden_because_of_not_in_space);
    }
    // datasheet is not in the space
    if (datasheet.spaceId !== spaceId) {
      throw ApiException.tipError(ApiTipConstant.api_datasheet_not_visible);
    }
    const options = this.reflector.get<IApiFieldOptions>(FIELD_OPTIONS, context.getHandler());
    if (options?.requireFieldMap) {
      const dstId = (request.params as any).dstId;
      request[DATASHEET_FIELD_MAP_HTTP_DECORATE] = await this.metaService.getFieldMapByDstId(dstId);
    }
    return true;
  }
}
