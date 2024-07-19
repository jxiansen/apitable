

import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { SPACE_ID_HTTP_DECORATE, USER_HTTP_DECORATE } from '../../../shared/common';
import { ApiException } from '../../../shared/exception';
import { ApiTipConstant } from '@apitable/core';
import { UnitMemberService } from 'unit/services/unit.member.service';

/**
 * Guards are executed after each middleware, but before any interceptor or pipe.
 * space info validate guard
 * the path start with: /fusion/v1/spaces
 */
@Injectable()
export class ApiSpaceGuard implements CanActivate {

  constructor( private readonly memberService: UnitMemberService) {
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const user = request[USER_HTTP_DECORATE];
    const spaceId = request[SPACE_ID_HTTP_DECORATE];
    const spaceIds = await this.memberService.selectSpaceIdsByUserId(user.id);
    // no permission of the space
    if (!spaceIds.includes(spaceId)) {
      throw ApiException.tipError(ApiTipConstant.api_forbidden_because_of_not_in_space);
    }
    return true;
  }
}
