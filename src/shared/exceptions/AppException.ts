import { Environment } from '@shared/helpers/Environment';

export class AppException extends Error {
  public readonly message: string;

  public readonly statusCode: number;

  public readonly code: string;

  constructor(message: string, statusCode = 400, code: string) {
    super(code);

    Object.setPrototypeOf(this, new.target.prototype);

    this.message = message;
    this.statusCode = statusCode;
    this.code = code;
    if (Environment.isLocalEnvironment()) {
      Error.captureStackTrace(this);
    } else {
      delete this.stack;
    }
  }
}
