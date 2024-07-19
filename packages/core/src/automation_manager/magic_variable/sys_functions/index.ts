

import { and, concatParagraph, newArray, newObject, or, concatString, getObjectProperty } from './base';
import {
  equal, getNodeOutput, greaterThan, greaterThanOrEqual,
  includes, isNotNull, isNull, lessThan,
  lessThanOrEqual, notEqual, notIncludes
} from './context_base';

export * from './base';
export * from './context_base';

export const TRIGGER_INPUT_FILTER_FUNCTIONS = [
  greaterThan,
  greaterThanOrEqual,
  lessThan,
  lessThanOrEqual,
  equal,
  notEqual,
  isNull,
  isNotNull,
  includes,
  notIncludes,
  and,
  or,
];

const makeFunction = (func: any, funcName: string) => {
  Object.defineProperty(func, 'name', { writable: false, value: funcName });
  return func;
};

// we must redefine the name of function, otherwise the name will be random after building
// this will be fine in local development, but will cause some strange bugs in production

export const TRIGGER_INPUT_PARSER_FUNCTIONS = [
  makeFunction(newObject, 'newObject'),
  makeFunction(newArray, 'newArray'),
];

// This is for front-end validation
export const ACTION_INPUT_PARSER_BASE_FUNCTIONS = [
  makeFunction(and, 'and'),
  makeFunction(or, 'or'),
  makeFunction(concatString, 'concatString'),
  makeFunction(concatParagraph, 'concatParagraph'),
  makeFunction(newObject, 'newObject'),
  makeFunction(newArray, 'newArray'),
  makeFunction(getObjectProperty, 'getObjectProperty'),
  makeFunction(getNodeOutput, 'getNodeOutput'),
];

// It is also used for the front end, without parsing dynamic parameters without knowing the context
export const ACTION_INPUT_PARSER_PASS_THROUGH_FUNCTIONS = [
  makeFunction(getNodeOutput, 'getNodeOutput')
];