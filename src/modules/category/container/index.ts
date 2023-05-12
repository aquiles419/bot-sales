/* eslint-disable import-helpers/order-imports */
import { container } from "tsyringe";

// Repository
import { ICategoryRepository } from "../repositories/ICategoryRepository";
import { MongoCategoryRepository } from "../repositories/MongoCategoryRepositories";

// UseCases
import {
  ICreateCategoryUseCase,
  CreateCategoryUseCase,
} from "../useCases/CreateCategory";
import {
  IListCategoryUseCase,
  ListCategoryUseCase,
} from "../useCases/ListCategory";

// Repositories
container.registerSingleton<ICategoryRepository>(
  "CategoryRepository",
  MongoCategoryRepository
);

// useCases
container.registerSingleton<ICreateCategoryUseCase>(
  "CreateCategoryUseCase",
  CreateCategoryUseCase
);

container.registerSingleton<IListCategoryUseCase>(
  "ListCategoryUseCase",
  ListCategoryUseCase
);
