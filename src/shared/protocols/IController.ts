import { IRequest, IResponse } from './IHTTP';

export interface IController {
  handle(request: IRequest): Promise<IResponse>;
}
