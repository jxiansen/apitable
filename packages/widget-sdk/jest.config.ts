

import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  roots: ['<rootDir>/src'],
  verbose: true,
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      useESM: true
    }
  },
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest'
  },
  transformIgnorePatterns: [
    'node_modules/(?!nanoid/.*)'
  ],
  coverageDirectory: '../coverage',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  modulePaths: ['<rootDir>/src'],
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': '<rootDir>/assets-jest.js'
  },
  setupFiles: [
    '@apitable/i18n-lang',
  ],
  setupFilesAfterEnv: [
    '<rootDir>/setup-jest.js'
  ],
  testRegex: '.spec.'
};

export default config;
