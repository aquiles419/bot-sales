import { Router } from "express";

import { container } from "tsyringe";

// adapters
import { ExpressControllerAdapter } from "../../../shared/adapters/ExpressControllerAdapter";

// controllers
import { CreateExpensesController } from "../controllers/CreateExpenses";
import { ListExpensesController } from "../controllers/ListExpenses";

const createExpensesController = ExpressControllerAdapter(
  container.resolve(CreateExpensesController)
);

const listExpensesController = ExpressControllerAdapter(
  container.resolve(ListExpensesController)
);

const expensesRoutes = Router();

expensesRoutes
  .post("/expenses", createExpensesController) // Trocar nome da rota
  .get("/expenses", listExpensesController); // Trocar nome da rota

export default expensesRoutes;
