import { Router } from "express";

import { container } from "tsyringe";

// adapters
import { ExpressControllerAdapter } from "../../../shared/adapters/ExpressControllerAdapter";

// controllers
import { CreateTripsController } from "../controllers/CreateTrips";
import { ListTripsController } from "../controllers/ListTrips/ListTripsController";
import { ListTripByIdController } from "../controllers/ListTripById";
import { ListExpensesByTripId } from "../controllers/ListExpensesByTripId";

const createTripsController = ExpressControllerAdapter(
  container.resolve(CreateTripsController)
);

const listTripsController = ExpressControllerAdapter(
  container.resolve(ListTripsController)
);

const listTripsByIdController = ExpressControllerAdapter(
  container.resolve(ListTripByIdController)
);

const listExpensesByTripId = ExpressControllerAdapter(
  container.resolve(ListExpensesByTripId)
);

const tripsRoutes = Router();

tripsRoutes
  .post("/trips", createTripsController)
  .get("/trips", listTripsController);

tripsRoutes.get("/trips/:id", listTripsByIdController);

tripsRoutes.get("/trips/:id/expenses", listExpensesByTripId);

export default tripsRoutes;
