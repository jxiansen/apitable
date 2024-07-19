

import * as fs from 'fs';

if (process.argv.length < 4) {
  throw new Error('Expected at least 3 arguments, but got ' + process.argv.length);
}

const envFilePath = process.argv[2];
const outputFilePath = process.argv[3];

const jsonData = fs.readFileSync(envFilePath, 'utf-8');
const parsedData = JSON.parse(jsonData);

fs.writeFileSync(outputFilePath, '', 'utf-8');

const keys = Object.keys(parsedData).sort();

for (const key of keys) {
  if (parsedData.hasOwnProperty(key)) {
    if (parsedData[key].description) {
      fs.appendFileSync(outputFilePath, `# ${parsedData[key].description
        .replaceAll('\n', '\n# ')} \n`, 'utf-8');
    }
    let envLine = '';
    if (typeof parsedData[key].value === 'string') {
      envLine = `${key}=${parsedData[key].value}`;
    }else {
      envLine = `${key}=${JSON.stringify(parsedData[key].value)}`;
    }
    fs.appendFileSync(outputFilePath, envLine + '\n\n', 'utf-8');
  }
}
