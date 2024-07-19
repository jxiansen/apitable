

import { getLanguage } from './language';

export interface IString {
  /** Chinese */
  zh_CN?: string;
  /** English */
  en_US?: string;
}

const ERROR_STR = '[ERROR STR]';

/**
 * @hidden
 * t function for solving the internationalization scheme of the widget.
 *
 * @param string String object.
 * @returns String
 *
 * ## Example
 * ``` js
 * import { t } from '@apitable/widget-sdk';
 *
 * const strings = {
 *   total: {
 *     en_US: 'Total'
 *   }
 * };
 *
 * // The current system is English, then the console output "Total".
 * console.log(t(strings.total));
 *
 * ```
 */
export function t(string: IString) {
  if (!string) {
    return ERROR_STR;
  }
  const lang = getLanguage().replace(/-/g, '_');
  const defaultLang = window.__initialization_data__?.envVars?.IS_APITABLE ? 'en_US' : 'zh_CN';
  const text = lang in string ? string[lang] : string[defaultLang] || ERROR_STR;
  return text;
}
