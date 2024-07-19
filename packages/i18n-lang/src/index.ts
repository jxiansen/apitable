import languageManifest from './config/language.manifest.json';

declare const window: any;
declare const global: any;

function loadAllLang() {
  let strings = {};
  if (typeof window !== 'undefined') {
    strings = (window as any).apitable_i18n || {};
  } else {
    strings = (global as any).apitable_i18n || {};
  }
  // console.log('language package keys: ', Object.keys(strings));
  const newStrings = {};
  for (const key in strings) {
    newStrings[key] = strings[key];
  }
  if (typeof window !== 'undefined') {
    (window as any).apitable_i18n = newStrings;
    (window as any).languageManifest = languageManifest;
  } else {
    (global as any).apitable_i18n = newStrings;
    (global as any).languageManifest = languageManifest;
  }
}

loadAllLang();
