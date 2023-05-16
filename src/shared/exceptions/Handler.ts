import { Request, Response, NextFunction } from "express";

import { AppException } from "./AppException";

export class Handler {
  async handleError(
    error: Error,
    _request: Request,
    response: Response,
    _: NextFunction
  ): Promise<Response> {
    if (error instanceof AppException) {
      const formattedError = {
        message: error.message,
        statusCode: error.statusCode,
        internal_message: error.code,
      };

      return response.status(error.statusCode).json(formattedError);
    }

    console.log(error);

    return response.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
}
