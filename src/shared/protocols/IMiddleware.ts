import { Response, NextFunction } from 'express';

import { IRequest, IResponse } from './IHTTP';

export interface IMiddleware {
  handle: (request: IRequest) => Promise<IResponse>;
}

export interface IMiddlewareNext {
  handle: (request: IRequest, _response: Response, next: NextFunction) => Promise<void>;
}
