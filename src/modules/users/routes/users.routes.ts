import { Router } from "express";

import { container } from "tsyringe";

// adapters
import { ExpressControllerAdapter } from "../../../shared/adapters/ExpressControllerAdapter";

// controllers
import { CreateUserController } from "../controllers/CreateUsers/CreateUsersController";
import { ListUsersController } from "../controllers/ListUsers";

const createUsersController = ExpressControllerAdapter(
  container.resolve(CreateUserController)
);

const listUsersController = ExpressControllerAdapter(
  container.resolve(ListUsersController)
);

const usersRoutes = Router();

usersRoutes
  .post("/users", createUsersController)
  .get("/users", listUsersController);

export default usersRoutes;
