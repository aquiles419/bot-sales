/* eslint-disable import-helpers/order-imports */
import { container } from "tsyringe";

// Repository
import { IExpensesRepository } from "../repositories/IExpensesRepository";
import { MongoExpensesRepository } from "../repositories/MongoExpensesRepositories";

// UseCases
import {
  CreateExpensesUseCase,
  ICreateExpensesUseCase,
} from "../useCases/CreateExpenses";
import {
  IListExpensesUseCase,
  ListExpensesUseCase,
} from "../useCases/ListExpenses";

// Repositories
container.registerSingleton<IExpensesRepository>(
  "ExpensesRepository",
  MongoExpensesRepository
);

// useCases
container.registerSingleton<ICreateExpensesUseCase>(
  "CreateExpenseUseCase",
  CreateExpensesUseCase
);

container.registerSingleton<IListExpensesUseCase>(
  "ListExpensesUseCase",
  ListExpensesUseCase
);
