

import { supportedLanguages } from 'app.environment';
import { I18nJsonLoader, I18nTranslation } from 'nestjs-i18n';
import { util } from 'protobufjs';
import { Observable } from 'rxjs';
import global = util.global;

export class I18nJsonParser extends I18nJsonLoader {
  override languages(): Promise<string[]> {
    return Promise.resolve(supportedLanguages);
  }

  override load(): Promise<I18nTranslation | Observable<I18nTranslation>> {
    return Promise.resolve(global['apitable_i18n']);
  }
}
