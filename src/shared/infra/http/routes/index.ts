import { Router } from "express";

import usersRoutes from "../../../../modules/users/routes/users.routes";

const routes = Router();

routes.get("/healthcheck", (_request, response) =>
  response.send("Health checked!")
);

routes.use("/trip/v1", usersRoutes);

export default routes;
