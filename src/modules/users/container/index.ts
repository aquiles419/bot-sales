/* eslint-disable import-helpers/order-imports */
import { container } from "tsyringe";

// Repository
import { IUsersRepository } from "../repositories/IUsersRepository";
import { MongoUsersRepository } from "../repositories/MongoUsersRepositories";

// UseCases
import {
  ICreateUserUseCase,
  CreateUsersUseCase,
} from "../useCases/CreateUsers";
import { IListUsersUseCase, ListUsersUseCase } from "../useCases/ListUsers";
import { IUpdateUsersUseCase } from "../useCases/UpdateUsers/IUpdateUsersUseCase";
import { UpdateUsersUseCase } from "../useCases/UpdateUsers/UpdateUsersUseCase";
import { IUploadPhotoUseCase } from "../useCases/UploadFile/IUploadPhotoUseCase";
import { UploadPhotoUseCase } from "../useCases/UploadFile/UploadPhotoUseCase";

// Repositories
container.registerSingleton<IUsersRepository>(
  "UserRepository",
  MongoUsersRepository
);

// useCases
container.registerSingleton<ICreateUserUseCase>(
  "CreateUsersUseCase",
  CreateUsersUseCase
);

container.registerSingleton<IListUsersUseCase>(
  "ListUsersUseCase",
  ListUsersUseCase
);

container.registerSingleton<IUpdateUsersUseCase>(
  "UpdateUsersUseCase",
  UpdateUsersUseCase
);

container.registerSingleton<IUploadPhotoUseCase>(
  "UploadPhoto",
  UploadPhotoUseCase
);
