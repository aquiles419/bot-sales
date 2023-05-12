import { Router } from "express";

import { container } from "tsyringe";

// adapters
import { ExpressControllerAdapter } from "../../../shared/adapters/ExpressControllerAdapter";
import { auth } from "../../../shared/middlewares/auth";

// controllers
import { CreateCategoryController } from "../controllers/CreateCategory";
import { ListCategoryController } from "../controllers/ListCategory";

const createCategoryController = ExpressControllerAdapter(
  container.resolve(CreateCategoryController)
);

const listCategoryController = ExpressControllerAdapter(
  container.resolve(ListCategoryController)
);

const categoryRoutes = Router();
categoryRoutes.use(auth);

categoryRoutes
  .post("/category", createCategoryController)
  .get("/category", listCategoryController);

export default categoryRoutes;
