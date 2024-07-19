import { Span } from '@metinseylan/nestjs-opentelemetry';
import { Injectable } from '@nestjs/common';
import type { IPermissions } from '@apitable/core';
import { DatasheetException } from '../../../shared/exception';
import type { IFetchDataOriginOptions, IAuthHeader } from '../../../shared/interfaces';
import { omit } from 'lodash';
import type { DatasheetPack, MirrorInfo } from '../../interfaces';
import { DatasheetService } from 'database/datasheet/services/datasheet.service';
import { NodeService } from 'node/services/node.service';
import { ResourceMetaRepository } from 'database/resource/repositories/resource.meta.repository';

@Injectable()
export class MirrorService {
  constructor(
    private readonly nodeService: NodeService,
    private readonly datasheetService: DatasheetService,
    private readonly resourceMetaRepository: ResourceMetaRepository,
  ) {}

  async getMirrorInfo(mirrorId: string, auth: IAuthHeader, origin: IFetchDataOriginOptions): Promise<MirrorInfo> {
    const { node } = await this.nodeService.getNodeDetailInfo(mirrorId, auth, origin);
    this.rewriteMirrorPermission(node.permissions);
    // Query info of referenced database and view
    const nodeRelInfo = await this.nodeService.getNodeRelInfo(mirrorId);
    // Check if referenced datasheet exists
    await this.nodeService.checkNodeIfExist(nodeRelInfo.datasheetId, DatasheetException.DATASHEET_NOT_EXIST);
    const meta = await this.resourceMetaRepository.selectMetaByResourceId(mirrorId);
    return {
      mirror: omit(node, ['extra']),
      sourceInfo: nodeRelInfo,
      snapshot: meta,
    };
  }

  @Span()
  async fetchDataPack(mirrorId: string, auth: IAuthHeader, origin: IFetchDataOriginOptions, recordIds?: string[]): Promise<DatasheetPack> {
    // Query info of referenced database and view
    const datasheetId = await this.nodeService.getMainNodeId(mirrorId);

    return this.datasheetService.fetchCommonDataPack('mirror', datasheetId, auth, origin, true, {
      recordIds,
      metadataException: DatasheetException.DATASHEET_NOT_EXIST,
    });
  }

  public rewriteMirrorPermission(permissions: IPermissions) {
    if (permissions.editable === false) {
      return;
    }
    // View operation limits
    permissions.viewCreatable = false;
    permissions.viewRemovable = false;
    permissions.viewMovable = false;
    permissions.viewRenamable = false;

    // View configuration limits
    permissions.columnHideable = false;
    permissions.viewFilterable = false;
    permissions.fieldGroupable = false;
    permissions.columnSortable = false;
    permissions.rowHighEditable = false;
    permissions.viewLayoutEditable = false;
    permissions.viewStyleEditable = false;
    permissions.viewKeyFieldEditable = false;
    permissions.viewColorOptionEditable = false;

    // Field operation limits
    permissions.fieldCreatable = false;
    permissions.fieldRenamable = false;
    permissions.fieldPropertyEditable = false;
    permissions.fieldRemovable = false;

    // Field order, width and statistics bar limits
    permissions.fieldSortable = false;
    permissions.columnWidthEditable = false;
    permissions.columnCountEditable = true;

    // Node description limits
    permissions.descriptionEditable = false;

    // Field permission settings limits
    permissions.fieldPermissionManageable = false;
  }
}
