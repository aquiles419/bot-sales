import { Router } from "express";

import { container } from "tsyringe";

// adapters
import { ExpressControllerAdapter } from "../../../shared/adapters/ExpressControllerAdapter";

// controllers
import { CreateUserController } from "../controllers/CreateUsers/CreateUsersController";

const createUsersController = ExpressControllerAdapter(
  container.resolve(CreateUserController)
);

const usersRoutes = Router();

usersRoutes.post("/users", createUsersController);

export default usersRoutes;
