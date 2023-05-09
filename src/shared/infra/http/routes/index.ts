import { Router } from "express";

import usersRoutes from "../../../../modules/users/routes/users.routes";
import tripsRoutes from "../../../../modules/trips/routes/trips.routes";

const routes = Router();

routes.get("/healthcheck", (_request, response) =>
  response.send("Health checked!")
);

routes.use("/trip/v1", usersRoutes);
routes.use("/trip/v1", tripsRoutes);

export default routes;
