import { getEmojiIconNativeString } from '@apitable/core';
import { Inject, Injectable } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { FastifyRequest } from 'fastify';
import { getAPINodeType, getAPINodeTypeId, getApiNodePermission } from 'shared/helpers/fusion.helper';
import { IAPINodeInfo } from 'shared/interfaces/node.interface';
import { RestService } from 'shared/services/rest/rest.service';
import { NodeTypeEnum } from 'shared/enums/node.enum';

@Injectable()
export class FusionNodeApiService {
  constructor(
    private readonly restService: RestService,
    @Inject(REQUEST) private readonly request: FastifyRequest,
  ) {}

  public async getNodeList(spaceId: string, type: NodeTypeEnum, permissions: number[], query?: string): Promise<IAPINodeInfo[]> {
    const authHeader = { token: this.request.headers.authorization };
    const nodes = await this.restService.getNodesList(authHeader, spaceId, getAPINodeTypeId(type), permissions, query);
    return nodes.map((node) => {
      return {
        id: node.nodeId,
        name: node.nodeName,
        type: getAPINodeType(node.type),
        icon: getEmojiIconNativeString(node.icon)!,
        parentId: node.parentId || undefined,
        isFav: node.nodeFavorite,
        permission: getApiNodePermission(node.role)!,
      };
    });
  }
}
