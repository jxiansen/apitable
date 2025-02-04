import { ContextKeyEvaluate } from '../context_key';

const testEvaluate = (tests: any[]) => {
  tests.forEach((test) => {
    const [expression, context, expectedResult] = test;
    for (const key in context) {
      const value = context[key];
      context[key] = () => value;
    }
    const result = ContextKeyEvaluate(expression, context);
    expect(result).toEqual(expectedResult);
  });
};

describe('ContextKeyEvaluate', () => {
  it('should evaluate boolean-only expressions', () => {
    const tests = [
      ['true', null, true],
      ['false', null, false],
      ['true && false', null, false],
      ['true && true', null, true],
    ];

    testEvaluate(tests);
  });

  it('should evaluate using standard JavaScript truthy and falsy rules', () => {
    const tests = [
      ['a', { a: null }, false],
      ['a', { a: undefined }, false],
      ['a', { a: false }, false],
      ['a', { a: true }, true],
      ['a', { a: NaN }, false],
      ['a', { a: 0 }, false],
      ['a', { a: 1 }, true],
      ['a', { a: '' }, false],
      ['a', { a: ' ' }, true],
    ];

    testEvaluate(tests);
  });

  it('should evaluate "and" expressions', () => {
    const tests = [
      ['a && b', { a: true, b: false }, false],
      ['a && b', { a: false, b: false }, false],
      ['a && b', { a: true, b: true }, true],
    ];

    testEvaluate(tests);
  });

  it('should evaluate "and-or" expressions', () => {
    const tests = [
      ['a && b || c', { a: false, b: false, c: true }, true],
      ['(a && b) || c', { a: false, b: false, c: true }, true],
      ['a || b && c', { a: false, b: false, c: true }, false],
      ['a || (b && c)', { a: false, b: false, c: true }, false],
      ['(a || b) && c', { a: false, b: false, c: true }, false],
    ];

    testEvaluate(tests);
  });

  it('should evaluate "not" expressions', () => {
    const tests = [
      ['!a', { a: false }, true],
      ['!a && !b', { a: false, b: false }, true],
      ['!a && b', { a: false, b: false }, false],
      ['a && !b', { a: false, b: false }, false],
      ['!(a && b)', { a: false, b: false }, true],
      ['a || !b', { a: false, b: false }, true],
      ['!a || !b', { a: true, b: true }, false],
      ['!(a || b)', { a: false, b: false }, true],
    ];

    testEvaluate(tests);
  });

  it('should treat question marks as a valid part of a value token', () => {
    const tests = [
      ['a?', { 'a?': true }, true],
      ['!a?', { 'a?': true }, false],
      ['a? && b?', { 'a?': true, 'b?': true }, true],
      ['a && b?', { a: true, 'b?': true }, true],
    ];

    testEvaluate(tests);
  });

  it('should throw error', () => {
    const tests = ['a & b', 'a | b', 'a ^ b'];
    tests.forEach((test) => {
      expect(() => ContextKeyEvaluate(test, null)).toThrow('Invalid Boolean Expression');
    });
  });
});
