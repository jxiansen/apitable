import { Body, Controller, Post } from '@nestjs/common';
import { AttachmentService } from 'database/attachment/services/attachment.service';

@Controller('nest/v1')
export class AttachmentController {
  constructor(private readonly attachService: AttachmentService) {}

  @Post('attach/getContentDisposition')
  // @UseInterceptors(ResourceDataInterceptor)
  async getContentDisposition(@Body() data: { url: string }): Promise<string> {
    const response = await this.attachService.getContentDisposition(data.url);
    return response;
  }
}
