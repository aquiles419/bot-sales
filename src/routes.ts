import { Router } from "express";
import BotController from "./controllers/BotController";

const routes = Router();

routes.get("/", (req, res) => {
  return res.send("Hello World");
});

routes.post("/bot", BotController.index);

export default routes;
