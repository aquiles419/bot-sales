/* eslint-disable @typescript-eslint/naming-convention */
declare namespace NodeJS {
  export interface ProcessEnv {
    PORT: string;
    MONGO_URI: string;
  }
}
