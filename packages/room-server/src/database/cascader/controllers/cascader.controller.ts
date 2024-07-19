import { UserService } from 'user/services/user.service';
import { SwaggerConstants } from 'shared/common';
import { ApiCookieAuth, ApiOkResponse, ApiOperation, ApiProduces, ApiTags } from '@nestjs/swagger';
import { Controller, Delete, Get, Headers, Param, Put, Query } from '@nestjs/common';
import { DatasheetFieldCascaderService } from '../services/datasheet.field.cascader.service';
import { CascaderParam } from '../ros/cascader.param';
import { CascaderQueryRo } from '../ros/cascader.query.ro';
import { CascaderVo } from '../vos/cascader.vo';
import { DatasheetFieldCascaderSnapshotService } from '../services/datasheet.field.cascader.snapshot.service';
import { CascaderSnapshotVo } from '../vos/cascader.snapshot.vo';
import { CascaderSnapshotQueryRo } from '../ros/cascader.snapshot.query.ro';
import { CascaderSnapshotParam, GetCascaderSnapshotParam } from '../ros/cascader.snapshot.param';
import { CascaderSnapshotPutRo } from '../ros/cascader.snapshot.put.ro';
import { NodeService } from 'node/services/node.service';

@ApiTags(SwaggerConstants.DATASHEET_TAG)
@Controller('nest/v1')
@ApiCookieAuth()
export class CascaderController {
  constructor(
    private readonly userService: UserService,
    private readonly datasheetFieldCascaderService: DatasheetFieldCascaderService,
    private readonly datasheetFieldCascaderSnapshotService: DatasheetFieldCascaderSnapshotService,
    private readonly nodeService: NodeService,
  ) {}

  @Get(['spaces/:spaceId/datasheets/:dstId/cascader'])
  @ApiOperation({
    summary: 'Get datasheet cascader data struct',
  })
  @ApiProduces('application/json')
  @ApiOkResponse({ type: CascaderVo })
  public async cascader(@Headers('cookie') cookie: string, @Param() param: CascaderParam, @Query() query: CascaderQueryRo): Promise<CascaderVo> {
    const { userId } = await this.userService.getMe({ cookie });
    return await this.datasheetFieldCascaderService.cascaderPack({ cookie, userId }, param.dstId, query.linkedViewId, query.linkedFieldIds);
  }

  @Get(['datasheets/:dstId/fields/:fieldId/cascader-snapshot'])
  @ApiOperation({
    summary: 'Get datasheet snapshot cascader data struct',
  })
  @ApiProduces('application/json')
  @ApiOkResponse({ type: CascaderSnapshotVo })
  public async cascaderSnapshot(@Param() param: GetCascaderSnapshotParam, @Query() query: CascaderSnapshotQueryRo): Promise<CascaderSnapshotVo> {
    return await this.datasheetFieldCascaderSnapshotService.getCascaderSnapshot({
      datasheetId: param.dstId,
      fieldId: param.fieldId,
      linkedFieldIds: query.linkedFieldIds,
    });
  }

  @Put(['spaces/:spaceId/datasheets/:dstId/fields/:fieldId/cascader-snapshot'])
  @ApiOperation({
    summary: 'Update datasheet snapshot cascader data',
  })
  @ApiProduces('application/json')
  @ApiOkResponse({ type: Boolean })
  public async updateCascaderSnapshot(
    @Headers('cookie') cookie: string,
    @Param() param: CascaderSnapshotParam,
    @Query() put: CascaderSnapshotPutRo,
  ): Promise<boolean> {
    const { userId } = await this.userService.getMe({ cookie });
    await this.nodeService.checkUserForNode(userId, param.dstId);
    return await this.datasheetFieldCascaderSnapshotService.updateCascaderSnapshot({ userId, cookie }, userId, {
      spaceId: param.spaceId,
      datasheetId: param.dstId,
      fieldId: param.fieldId,
      linkedDatasheetId: put.linkedDatasheetId,
      linkedViewId: put.linkedViewId,
    });
  }

  @Delete(['spaces/:spaceId/datasheets/:dstId/fields/:fieldId/cascader-snapshot'])
  @ApiOperation({
    summary: 'Update datasheet snapshot cascader data',
  })
  @ApiProduces('application/json')
  @ApiOkResponse({ type: Boolean })
  public async deleteCascaderSnapshot(@Headers('cookie') cookie: string, @Param() param: CascaderSnapshotParam): Promise<boolean> {
    const { userId } = await this.userService.getMe({ cookie });
    await this.nodeService.checkUserForNode(userId, param.dstId);
    return await this.datasheetFieldCascaderSnapshotService.deleteCascaderSnapshot({
      spaceId: param.spaceId,
      datasheetId: param.dstId,
      fieldId: param.fieldId,
    });
  }
}
