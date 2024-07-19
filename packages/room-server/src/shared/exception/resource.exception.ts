import { IBaseException } from './base.exception';

/**
 * Resource Exception
 *
 * @export
 * @class ResourceException
 * @implements {IBaseException}
 */
export class ResourceException implements IBaseException {
  private static AllValues: { [name: string]: ResourceException } = {};

  // Exception Type ------------------------------
  static readonly WIDGET_NOT_EXIST = new ResourceException(401, 'Widget not found');
  static readonly FETCH_WIDGET_ERROR = new ResourceException(402, 'Get widget error');
  static readonly WIDGET_NUMBER_LIMIT = new ResourceException(462, 'The number of widget has reached the upper limit, and the creation failed');

  // Exception Type ------------------------------

  private constructor(
    public readonly code: number,
    public readonly message: string,
  ) {
    ResourceException.AllValues[message] = this;
  }

  getCode() {
    return this.code;
  }

  getMessage() {
    return this.message;
  }
}
