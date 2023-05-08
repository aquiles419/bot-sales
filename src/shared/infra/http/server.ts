import "reflect-metadata";
import express from "express";
import { config } from "dotenv";

import "../../container/index";
import cors from "cors";
import { Environment } from "../../helpers/Environment";
import "../../../shared/mongoose";
import routes from "../http/routes";

config();
const app = express();

app.use(cors());
app.use(routes);

const PORT = Environment.getEnvString("PORT") || 3333;

app.listen(PORT, () => {
  console.info(`🚀 Server is running on port ${PORT}`);
});
