import { Router } from "express";

import { container } from "tsyringe";

// adapters
import { ExpressControllerAdapter } from "../../../shared/adapters/ExpressControllerAdapter";

// controllers
import { CreateTripsController } from "../controllers/CreateTrips";
import { ListTripsController } from "../controllers/ListTrips/ListTripsController";

const createTripsController = ExpressControllerAdapter(
  container.resolve(CreateTripsController)
);

const listTripsController = ExpressControllerAdapter(
  container.resolve(ListTripsController)
);

const tripsRoutes = Router();

tripsRoutes
  .post("/trips", createTripsController)
  .get("/trips", listTripsController);

export default tripsRoutes;
