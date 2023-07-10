import { Router } from "express";

import { container } from "tsyringe";
import multer from "multer";

// adapters
import { ExpressControllerAdapter } from "../../../shared/adapters/ExpressControllerAdapter";

// controllers
import { CreateUserController } from "../controllers/CreateUsers/CreateUsersController";
import { ListUsersController } from "../controllers/ListUsers";
import { auth } from "../../../shared/middlewares/auth";
import { UpdateUsersController } from "../controllers/UpdateUsers/UpdateUsersController";
import multerConfig from "../../../config/multerConfig";
import { LoginController } from "../controllers/LoginController/LoginController";
import { UploadPhotoController } from "../controllers/UploadPhoto/UploadPhotoController";
import { ListUserByIdController } from "../controllers/ListUserById";

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

const listUserById = ExpressControllerAdapter(
  container.resolve(ListUserByIdController)
);

const usersRoutes = Router();
const upload = multer(multerConfig);

usersRoutes.post("/login", loginController);
usersRoutes.post("/users", createUsersController);

usersRoutes.use(auth);

usersRoutes.get("/users", listUsersController);
usersRoutes.put("/users/:id", updatedUsers);
usersRoutes.get("/users/:id", listUserById);

usersRoutes.post(
  "/users/photo",
  upload.single("user_photo"),
  (request, response) => {
    const uploadPhotoController = container.resolve(UploadPhotoController);
    return uploadPhotoController.handle(request, response);
  }
);

export default usersRoutes;
