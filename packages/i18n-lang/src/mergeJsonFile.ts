import * as fs from 'fs';
import * as path from 'path';

if (process.argv.length < 4) {
  throw new Error('Expected at least 3 arguments, but got ' + process.argv.length);
}

const folderNames = process.argv.slice(4);
const outputFile = process.argv[2];
const sourceFile = process.argv[3];

/**
 * The script is used for recursively merging JSON files from multiple directories and writing them to a new location.
 * @param folderNames File directory array, with higher priority given to directories listed towards the end.
 * @param outputFile The merged result will be written to this location.
 * @param sourceFile Prefix of the JSON files to be merged.
 * */
const mergeJsonFiles = (folderNames: string[], outputFile: string, sourceFile: string) => {
  const mergedData: { [key: string]: any } = {};
  const sortObjectKeys = (obj: Record<string, any>) => {
    const sortedObj = {};
    const sortedKeys = Object.keys(obj).sort();
    for (const key of sortedKeys) {
      if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
        sortedObj[key] = sortObjectKeys(obj[key]);
      } else {
        sortedObj[key] = obj[key];
      }
    }
    return sortedObj;
  };

  const mergeObjects = (target: { [key: string]: any }, source: { [key: string]: any }) => {
    for (const key in source) {
      if (source.hasOwnProperty(key)) {
        if (
          source[key] instanceof Object &&
          !(source[key] instanceof Array) &&
          target.hasOwnProperty(key) &&
          target[key] instanceof Object &&
          !(target[key] instanceof Array)
        ) {
          mergeObjects(target[key], source[key]);
        } else {
          target[key] = source[key];
        }
      }
    }
  };

  const processFolder = (index: number) => {
    if (index >= folderNames.length) {
      fs.writeFileSync(outputFile, JSON.stringify(sortObjectKeys(mergedData), null, 2), 'utf-8');
    } else {
      const folderName = folderNames[index];
      const folderPath = path.resolve(folderName);
      const files = fs.readdirSync(folderPath);
      const jsonFiles = files.filter((file) => file.endsWith('.json') && file.startsWith(sourceFile));
      const readJsonFile = (filename: string) => {
        const filePath = path.join(folderPath, filename);
        const data = fs.readFileSync(filePath, 'utf-8');
        const jsonData = JSON.parse(data);
        mergeObjects(mergedData, jsonData);

        if (jsonFiles.length > 0) {
          readJsonFile(jsonFiles.shift()!);
        } else {
          processFolder(index + 1);
        }
      };

      if (jsonFiles.length > 0) {
        readJsonFile(jsonFiles.shift()!);
      } else {
        processFolder(index + 1);
      }
    }
  };

  processFolder(0);
};

mergeJsonFiles(folderNames, outputFile, sourceFile);
