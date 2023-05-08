import express from "express";
import { config } from "dotenv";

import cors from "cors";
import { Environment } from "../../helpers/Environment";
import "../../../shared/mongoose";

config();
const app = express();

app.use(cors());

const PORT = Environment.getEnvString("PORT") || 3333;

app.listen(PORT, () => {
  console.info(`🚀 Server is running on port ${PORT}`);
});
