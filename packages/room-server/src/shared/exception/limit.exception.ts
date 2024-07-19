import { IBaseException } from './base.exception';

/**
 * Limit Exception
 */
export class LimitException implements IBaseException {
  private static AllValues: { [name: string]: LimitException } = {};

  // Exception Type =================================================================
  // 1501 is a public code. This code can be used when the front end does not require specific prompts.
  static readonly OVER_LIMIT = new LimitException(1501, 'exceed over limit');

  static readonly CREDIT_OVER_LIMIT = new LimitException(1504, 'credit over limit');

  // Exception Type =================================================================

  private constructor(
    public readonly code: number,
    public readonly message: string,
  ) {
    LimitException.AllValues[message] = this;
  }

  getCode() {
    return this.code;
  }

  getMessage() {
    return this.message;
  }
}
