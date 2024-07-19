import { ApiTipConstant, cellValueToImageSrc, IAttachmentValue } from '@apitable/core';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { FastifyReply, FastifyRequest } from 'fastify';
import FormData from 'form-data';
import { ApiResponse } from 'fusion/vos/api.response';
import { I18nService } from 'nestjs-i18n';
import pump from 'pump';
import { lastValueFrom } from 'rxjs';
import { InjectLogger, JavaApiPath, USER_HTTP_DECORATE } from 'shared/common';
import { AttachmentTypeEnum } from 'shared/enums/attachment.enum';
import { ApiException, CommonException, ServerException } from 'shared/exception';
import { IAuthHeader } from 'shared/interfaces';
import { JavaService } from 'shared/services/java/java.service';
import { Logger } from 'winston';

@Injectable()
export class AttachmentService {
  constructor(
    private readonly javaService: JavaService,
    // private readonly fusionApiService: FusionApiService,
    private readonly httpService: HttpService,
    @InjectLogger() private readonly logger: Logger,
    private readonly i18n: I18nService,
  ) {}

  /**
   * Save files in directory
   * @return
   * @author Zoe Zheng
   * @date 2020/9/1 4:05 pm
   */
  async getFileUploadHandler(dstId: string, req: FastifyRequest, reply: FastifyReply) {
    if (!req.headers['content-type']?.startsWith('multipart/form-data')) {
      const error = ApiException.tipError(ApiTipConstant.api_upload_invalid_file_name);
      const errMsg = await this.i18n.translate(error.getTip().id, {
        lang: req[USER_HTTP_DECORATE]?.locale,
      });
      throw new ServerException(new CommonException(error.getTip().code, errMsg as string), error.getTip().statusCode);
    }
    return async (_field: string, file: pump.Stream, filename: string, _encoding: string, mimetype: string): Promise<void> => {
      try {
        const result = await this.uploadFile({ token: req.headers.authorization }, dstId, file, filename, mimetype);
        void reply.send(ApiResponse.success(result));
      } catch (e: any) {
        const errMsg = await this.i18n.translate(e.message, {
          lang: req[USER_HTTP_DECORATE]?.locale,
          args: e.getExtra(),
        });
        void reply.send(ApiResponse.error(errMsg as string, e.getTip().statusCode));
      }
    };
  }

  async getContentDisposition(url: string): Promise<string> {
    const response = await lastValueFrom(this.httpService.head(url));
    return response!.headers['content-disposition']!;
  }

  async uploadFile(auth: IAuthHeader, dstId: string, file: pump.Stream, filename: string, mimetype: string) {
    let res;
    try {
      const form = new FormData();
      await form.append('file', file, {
        filename,
        contentType: mimetype,
      });
      await form.append('nodeId', dstId);
      await form.append('type', AttachmentTypeEnum.DATASHEET_ATTACH.toString());
      res = await this.javaService.setHeaders(auth, form.getHeaders()).post(JavaApiPath.UPLOAD_ATTACHMENT, form);
    } catch (e) {
      this.logger.error('Uploading attachment failed', { e });
      throw ApiException.tipError(ApiTipConstant.api_server_error, { value: 1 });
    }
    if (!res) throw ApiException.tipError(ApiTipConstant.api_server_error, { value: 1 });
    if (res.code && res.code === JavaService.SUCCESS_CODE) {
      return {
        token: res.data.token,
        mimeType: res.data.mimeType,
        preview: res.data.preview ? res.data.preview : undefined,
        size: res.data.size,
        height: res.data?.height,
        width: res.data?.width,
        name: res.data.name,
        url: cellValueToImageSrc(res.data as IAttachmentValue),
      };
    }
    throw ApiException.tipError(ApiTipConstant.api_upload_attachment_error, { message: res.message });
  }
}
