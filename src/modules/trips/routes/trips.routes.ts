import { Router } from "express";

import { container } from "tsyringe";

// adapters
import { ExpressControllerAdapter } from "../../../shared/adapters/ExpressControllerAdapter";

// controllers
import { CreateTripsController } from "../controllers/CreateTrips";

const createTripsController = ExpressControllerAdapter(
  container.resolve(CreateTripsController)
);

const tripsRoutes = Router();

tripsRoutes.post("/trips", createTripsController);

export default tripsRoutes;
