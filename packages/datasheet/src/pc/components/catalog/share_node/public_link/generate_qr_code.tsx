

import { useMount } from 'ahooks';
import QRCode from 'qrcode';
import { FC } from 'react';

import { Message } from 'pc/components/common';

export interface IGenerateQrCodeProps {
  url: string;
  color: string;
  width: number;
  id: string;
}

export const GenerateQrCode: FC<React.PropsWithChildren<IGenerateQrCodeProps>> = ({ url, color, width = 128, id }) => {
  useMount(() => {
    QRCode.toCanvas(
      url,
      {
        errorCorrectionLevel: 'H',
        margin: 0,
        width,
        color: {
          dark: color,
        },
      },
      (err, canvas) => {
        if (err) {
          Message.error({ content: 'generation QrCode failed' });
          return;
        }
        const container = document.getElementById(id);
        container?.appendChild(canvas);
      },
    );
  });

  return <div id={id} style={{ width, height: width }} />;
};
