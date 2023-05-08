import { Router } from "express";

// import InhabitantsRoutes from '@modules/inhabitants/infra/http/routes/inhabitants.routes';

const routes = Router();

routes.get("/healthcheck", (_request, response) =>
  response.send("Health checked!")
);

// routes.use('/loyalty/v3', InhabitantsRoutes);

export default routes;
