

import {
  ITextEllipsisProps,
} from 'pc/components/konva_grid';

import { getTextWidth } from 'pc/components/konva_grid/utils/get_text_width';
import { DEFAULT_FONT_FAMILY } from 'pc/utils';

export class TextEllipsisEngine {
  public static textEllipsis(props: ITextEllipsisProps, ctx: CanvasRenderingContext2D) {
    const { text, maxWidth, fontSize = 13, fontWeight = 'normal' } = props;

    if (text == null)
      return {
        text: '',
        textWidth: 0,
        isEllipsis: false,
      };
    const fontStyle = `${fontWeight} ${fontSize}px ${DEFAULT_FONT_FAMILY}`;

    if (!maxWidth) {
      return {
        text,
        textWidth: getTextWidth(ctx, text, fontStyle),
        isEllipsis: false,
      };
    }

    const ellipsis = '…';
    const textSize = text.length;
    // Predetermine the threshold width of the incoming text
    let guessSize = Math.ceil(maxWidth / fontSize);
    let guessText = text.substr(0, guessSize);
    let guessWidth = getTextWidth(ctx, guessText, fontStyle);

    while (guessWidth <= maxWidth) {
      if (textSize <= guessSize) {
        return {
          text,
          textWidth: guessWidth,
          isEllipsis: false,
        };
      }
      guessSize++;
      guessText = text.substr(0, guessSize);
      guessWidth = getTextWidth(ctx, guessText, fontStyle);
    }

    const ellipsisWidth = getTextWidth(ctx, ellipsis, fontStyle);
    while (guessSize >= 0 && guessWidth + ellipsisWidth > maxWidth) {
      guessSize--;
      guessText = text.substr(0, guessSize);
      guessWidth = getTextWidth(ctx, guessText, fontStyle);
    }

    return {
      text: `${guessText || text[0]}${ellipsis}`,
      textWidth: maxWidth,
      isEllipsis: true,
    };
  }
}
