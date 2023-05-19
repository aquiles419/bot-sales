import { Router } from "express";

import { container } from "tsyringe";

// adapters
import { ExpressControllerAdapter } from "../../../shared/adapters/ExpressControllerAdapter";

// controllers
import { CreateUserController } from "../controllers/CreateUsers/CreateUsersController";
import { ListUsersController } from "../controllers/ListUsers";
import { LoginController } from "../controllers/loginController/LoginController";
import { auth } from "../../../shared/middlewares/auth";
import { UpdateUsersController } from "../controllers/UpdateUsers/UpdateUsersController";

const createUsersController = ExpressControllerAdapter(
  container.resolve(CreateUserController)
);

const listUsersController = ExpressControllerAdapter(
  container.resolve(ListUsersController)
);

const loginController = ExpressControllerAdapter(
  container.resolve(LoginController)
);

const updatedUsers = ExpressControllerAdapter(
  container.resolve(UpdateUsersController)
);

const usersRoutes = Router();

usersRoutes.post("/login", loginController);
usersRoutes.post("/users", createUsersController);

usersRoutes.use(auth);

usersRoutes.get("/users", listUsersController);
usersRoutes.put("/users/:id", updatedUsers);

export default usersRoutes;
