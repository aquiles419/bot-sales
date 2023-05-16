import "reflect-metadata";
import express from "express";
import "express-async-errors";

import "../../container/index";
import cors from "cors";
import { Environment } from "../../helpers/Environment";
import "../../../shared/mongoose";
import routes from "../http/routes";
import { Handler } from "../../exceptions/Handler";

// config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);

app.use(new Handler().handleError);

const PORT = Environment.getEnvString("PORT") || 3333;

app.listen(PORT, () => {
  console.info(`🚀 Server is running on port ${PORT}`);
});
