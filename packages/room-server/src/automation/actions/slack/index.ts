import fetch from 'node-fetch';
import { ResponseStatusCodeEnums } from '../enum/response.status.code.enums';
import { IActionResponse, IErrorResponse } from '../interface/action.response';

interface ISlackMessageRequest {
  type: 'text' | 'markdown';
  content: string;
  webhookUrl: string;
}

export async function sendSlackMessage(request: ISlackMessageRequest): Promise<IActionResponse<string>> {
  const { type, content, webhookUrl } = request;
  const body = JSON.stringify({
    text: content,
    mrkdwn: type === 'markdown',
  });
  try {
    const response = await fetch(webhookUrl.trim(), {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body,
    });
    const responseBody = response.clone();
    const result = await responseBody.text();
    if (result === 'ok') {
      return {
        success: true,
        code: ResponseStatusCodeEnums.Success,
        data: {
          data: result,
        },
      };
    }
    return {
      success: false,
      data: {
        errors: [
          {
            message: result,
          },
        ],
      },
      code: ResponseStatusCodeEnums.ServerError,
    };
  } catch (error: any) {
    // network error
    const res: IErrorResponse = {
      errors: [
        {
          message: error.message,
        },
      ],
    };
    return {
      success: false,
      data: res,
      code: ResponseStatusCodeEnums.ServerError,
    };
  }
}
