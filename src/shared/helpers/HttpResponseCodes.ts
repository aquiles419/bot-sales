import { AppException } from "../exceptions";
import { IResponse } from "../protocols";

type CustomResponse = Record<string, unknown> | undefined;

export const badRequest = (error: AppException): IResponse => ({
  statusCode: 400,
  body: error,
});

export const forbidden = (error: AppException): IResponse => ({
  statusCode: 403,
  body: error,
});

export const notFound = (error: AppException | CustomResponse): IResponse => ({
  statusCode: 404,
  body: error,
});

export const unauthorized = (error: AppException): IResponse => ({
  statusCode: 401,
  body: error,
});

export const serverAppException = (error: AppException): IResponse => ({
  statusCode: 500,
  body: error,
});

export const created = (data: any): IResponse => ({
  statusCode: 201,
  body: data,
});

export const ok = (data: any): IResponse => ({
  statusCode: 200,
  body: data,
});

export const noContent = (): IResponse => ({
  statusCode: 204,
  body: null,
});
