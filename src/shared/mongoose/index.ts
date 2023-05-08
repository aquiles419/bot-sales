import mongoose from "mongoose";
import locks from "mongo-locks";

import { databaseConfig } from "../../config/database/database";

const { uri } = databaseConfig.mongo;

mongoose.connect(uri);

mongoose.connection.on("error", (error) => {
  console.log("error connecting to MongoDB:", error.message);
});

locks.init(mongoose.connection);
