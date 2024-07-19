import { Injectable } from '@nestjs/common';
import { DocumentAssetStatisticRo, DocumentAssetStatisticResult_DocumentAssetStatisticData } from 'grpc/generated/serving/RoomServingService';

@Injectable()
export abstract class DocumentBaseService {
  async updateRecordIdProps(_resourceId: string, _documentNames: string[], _recordId: string) {
    await Promise.resolve([]);
  }

  async documentAssetStatistic(_ro: DocumentAssetStatisticRo): Promise<DocumentAssetStatisticResult_DocumentAssetStatisticData> {
    return { infos: [] };
  }
}
