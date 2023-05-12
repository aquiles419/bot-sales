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
import {
  IListTripByIdUseCase,
  ListTripByIdUseCase,
} from "../useCases/ListTripById";
import {
  IListExpensesByTripId,
  ListExpensesByTripId,
} from "../useCases/ListExpensesByTripId";

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

container.registerSingleton<IListTripByIdUseCase>(
  "ListTripByIdUseCase",
  ListTripByIdUseCase
);

container.registerSingleton<IListExpensesByTripId>(
  "ListExpensesByTripId",
  ListExpensesByTripId
);
