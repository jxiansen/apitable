

import fs from 'fs';
import path from 'path';

if (process.argv.length < 5) {
  throw new Error('Expected at least 4 arguments, but got ' + process.argv.length);
}

const sourceFolders = process.argv.slice(5);
const sourceName = process.argv[2];
const generateType = process.argv[3];
const outputFolder = process.argv[4];

const readFolder = (folderPath: string): Record<string, any> => {
  const files = fs.readdirSync(folderPath);
  const result: Record<string, any> = {};
  const fallbackLocale = JSON.parse(fs.readFileSync(path.join(folderPath, 'strings.en-US.json'), 'utf-8'));
  const keys = Object.keys(fallbackLocale);
  for (const file of files) {
    if (file.endsWith('.json') && file.startsWith(sourceName)) {
      const filePath = path.join(folderPath, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      try {
        JSON.parse(fileContent);
      } catch (error) {
        console.log(error);
      }
      const fileJson = JSON.parse(fileContent);
      const locale = file.replace(sourceName, '')
        .replace('.', '')
        .replace('.json', '');

      if (generateType === 'json') {
        keys.forEach(key => {
          if (!fileJson[key]) {
            if (locale === 'zh-CN') console.warn(`Missing key ${key} in ${filePath}`);
            fileJson[key] = fallbackLocale[key];
          }
        });
      }
      result[locale] = fileJson;
    }
  }
  return result;
};

const mergeFolders = (folders: string[]): Record<string, any> => {
  const mergedContent: Record<string, any> = {};

  for (const folder of folders) {
    if (!folder){
      continue;
    }
    const folderContent = readFolder(folder);
    for (const locale in folderContent) {
      mergedContent[locale] = {
        ...(mergedContent[locale] || {}),
        ...(folderContent[locale] || {}),
      };
    }
  }

  return mergedContent;
};

const writeMergedContent = (outputFolder: string, mergedContent: Record<string, any>) => {
  if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder, { recursive: true });
  }
  const sortObjectKeysRecursively = (obj: Record<string, any>) => {
    const sortedObj = {};
    const sortedKeys = Object.keys(obj).sort();
    for (const key of sortedKeys) {
      if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
        sortedObj[key] = sortObjectKeysRecursively(obj[key]);
      } else {
        sortedObj[key] = obj[key];
      }
    }
    return sortedObj;
  };

  const sortedMergedContent = sortObjectKeysRecursively(mergedContent);
  if (generateType === 'json') {
    // generate stringkeys.interface.ts
    fs.writeFileSync(
      path.join(outputFolder, 'stringkeys.interface.ts'),
      '/* eslint-disable max-len */\nexport type StringKeysMapType = {\n  ' +
        Object.keys(sortedMergedContent['en-US']).map(k => `'${k}': '${k}'`).join(',\n  ') +
        '\n};\n\n' +
        `export type StringKeysType = {
          [K in keyof StringKeysMapType]: K;
        } & { [key: string]: unknown };`
    );
    Object.keys(sortedMergedContent).forEach(key => {
      fs.writeFileSync(path.join(outputFolder, `strings.${key}.json`), JSON.stringify(sortedMergedContent[key], null, 2), 'utf-8');
    });
    fs.writeFileSync(path.join(outputFolder, 'strings.json'), JSON.stringify(sortedMergedContent, null, 2), 'utf-8');
  }
  if (generateType === 'properties') {
    for (const locale in sortedMergedContent) {
      const fileName = `messages_${locale.replace('-', '_')}.properties`;
      const filePath = path.join(outputFolder, fileName);
      const fileContent = Object.entries(sortedMergedContent[locale])
        .map(([key, value]) => `${key}=${value}`)
        .join('\n');
      if (locale.startsWith('zh') && locale.endsWith('CN')) {
        fs.writeFileSync(path.join(outputFolder, 'messages.properties'), fileContent, 'utf-8');
      }
      fs.writeFileSync(filePath, fileContent, 'utf-8');
    }
  }
};
const mergedContent = mergeFolders(sourceFolders);
writeMergedContent(outputFolder, mergedContent);

