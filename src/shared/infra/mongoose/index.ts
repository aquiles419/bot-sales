import mongoose from "mongoose";

import { databaseConfig } from "../../../config/database";

const { uri } = databaseConfig.mongo;

mongoose.connect(uri, (error: any) => {
  if (error) {
    console.error(`[Mongoose] ${error}`);
    process.exit(1);
  }
});
