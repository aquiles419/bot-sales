import dotenv from "dotenv";
dotenv.config();

import express from "express";
import routes from "./routes";
import cors from "cors";
import "./services/botService";

const app = express();

app.use(express.json());

app.use(routes);
app.use(cors());

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.info(`🚀 Server is running on port ${PORT}`);
});
