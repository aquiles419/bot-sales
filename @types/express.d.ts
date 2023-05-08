/* eslint-disable @typescript-eslint/naming-convention */
declare namespace Express {
  export interface Request {
    accessToken: {
      tokenType: "Bearer" | "Basic";
      accessToken: string;
    };
    user?: {
      authId: string;
      travelerId: string;
      roles: string[];
    };
  }
}
