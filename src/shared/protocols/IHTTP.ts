export type IResponse = {
  statusCode: number;
  body: any;
};

interface IRequestUser {
  user?: {
    travelerId: string;
  };
}

interface IAnyRequest extends IRequestUser {
  file?: Express.Multer.File;
  body?: any;
  headers?: any;
  params?: any;
  query?: any;
  user?: any;
}

type IResponseType<T> = IRequestUser & T;

export type IRequest<T = void> = T extends void
  ? IAnyRequest
  : IResponseType<T>;
