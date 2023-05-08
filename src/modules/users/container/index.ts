/* eslint-disable import-helpers/order-imports */
import { container } from "tsyringe";

// Repository
import { IUsersRepository } from "../repositories/IUsersRepository";
import { MongoUsersRepository } from "../repositories/MongoUsersRepositories";

// UseCases
import { ListUsersUseCase, ICreateUserUseCase } from "../useCases/CreateUsers";

// Repositories
container.registerSingleton<IUsersRepository>(
  "UserRepository",
  MongoUsersRepository
);

// useCases
container.registerSingleton<ICreateUserUseCase>(
  "CreateUsersUseCase",
  ListUsersUseCase
);
