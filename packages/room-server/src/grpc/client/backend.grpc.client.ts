

import { Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { BasicResult } from 'grpc/generated/common/Core';
import { ApiServingService, DocumentOperateRo, NodeBrowsingRo } from 'grpc/generated/serving/BackendServingService';
import { lastValueFrom } from 'rxjs';
import { BACKEND_GRPC_CLIENT } from 'shared/common';

export class BackendGrpcClient implements OnModuleInit {
  private backendService!: ApiServingService;

  constructor(
    // @ts-ignore
    @Inject(BACKEND_GRPC_CLIENT) private readonly client: ClientGrpc,
  ) {}

  onModuleInit(): any {
    this.backendService = this.client.getService<ApiServingService>('ApiServingService');
  }

  async recordNodeBrowsing(message: NodeBrowsingRo): Promise<BasicResult> {
    return await lastValueFrom(this.backendService.recordNodeBrowsing(message));
  }

  async documentOperate(message: DocumentOperateRo): Promise<BasicResult> {
    return await lastValueFrom(this.backendService.documentOperate(message));
  }
}
