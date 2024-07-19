

// import { PickerLocale } from 'antd/es/date-picker/generatePicker';
import deDE from 'antd/es/date-picker/locale/de_DE';
import esES from 'antd/es/date-picker/locale/es_ES';
import frFR from 'antd/es/date-picker/locale/fr_FR';
import itIT from 'antd/es/date-picker/locale/it_IT';
import jaJP from 'antd/es/date-picker/locale/ja_JP';
import koKR from 'antd/es/date-picker/locale/ko_KR';
import ruRU from 'antd/es/date-picker/locale/ru_RU';
import local from 'antd/es/date-picker/locale/zh_CN';
import 'dayjs/locale/zh-cn';

class LocalHelper {
  getLocal(language: string) {
    if (!language || language.startsWith('en')) {
      return undefined;
    } else if (language.startsWith('zh')) {
      return this.getDefinedChineseLocal();
    }
    return {
      'fr-FR': frFR,
      'de-DE': deDE,
      'it-IT': itIT,
      'ja-JP': jaJP,
      'ko-KR': koKR,
      'ru-RU': ruRU,
      'es-ES': esES,
    }[language];
  }

  private getDefinedChineseLocal() {
    const definedChineseLocal: any = {
      ...local,
      lang: {
        ...local.lang,
        monthFormat: 'M月',
        shortWeekDays: ['日', '一', '二', '三', '四', '五', '六'],
      },
    };
    return definedChineseLocal;
  }
}

export const LocalFormat = new LocalHelper();
