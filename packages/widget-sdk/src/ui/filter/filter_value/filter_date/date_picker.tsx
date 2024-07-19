

import generatePicker from 'antd/es/date-picker/generatePicker';
import dayjs, { Dayjs } from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import weekday from 'dayjs/plugin/weekday';
import dayjsGenerateConfig from 'rc-picker/es/generate/dayjs';
import local from 'antd/es/date-picker/locale/zh_CN';
import 'dayjs/locale/zh-cn';
import frFR from 'antd/es/date-picker/locale/fr_FR';
import deDE from 'antd/es/date-picker/locale/de_DE';
import itIT from 'antd/es/date-picker/locale/it_IT';
import jaJP from 'antd/es/date-picker/locale/ja_JP';
import koKR from 'antd/es/date-picker/locale/ko_KR';
import ruRU from 'antd/es/date-picker/locale/ru_RU';
import esES from 'antd/es/date-picker/locale/es_ES';
import { getLanguage } from '@apitable/core';

dayjs.extend(weekday);
dayjs.extend(localeData);

export const DatePicker = generatePicker<Dayjs>(dayjsGenerateConfig as any);

class LocalHelper {
  getLocal() {
    const language = getLanguage();
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

  getDefinedChineseLocal() {
    const definedChineseLocal: any = {
      ...local,
      lang: {
        ...local.lang,
        monthFormat: 'M月',
        shortWeekDays: ['日', '一', '二', '三', '四', '五', '六']
      }
    };
    return definedChineseLocal;
  }
}

export const LocalFormat = new LocalHelper();

