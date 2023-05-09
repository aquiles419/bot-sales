/* eslint-disable import-helpers/order-imports */
import { container } from "tsyringe";

// Repository
import { ITripsRepository } from "../repositories/ITripsRepository";
import { MongoTripsRepository } from "../repositories/MongoTripsRepositories";

// UseCases
import {
  ICreateTripsUseCase,
  CreateTripsUseCase,
} from "../useCases/CreateTrips";
import { IListTripsUseCase, ListTripsUseCase } from "../useCases/ListTrips";

// Repositories
container.registerSingleton<ITripsRepository>(
  "TripsRepository",
  MongoTripsRepository
);

// useCases
container.registerSingleton<ICreateTripsUseCase>(
  "CreateTripsUseCase",
  CreateTripsUseCase
);

container.registerSingleton<IListTripsUseCase>(
  "ListTripsUseCase",
  ListTripsUseCase
);
