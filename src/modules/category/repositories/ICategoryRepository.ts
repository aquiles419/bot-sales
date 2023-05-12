import {
  ICreateCategoryDTO,
  IListCategoryFilters,
  IUpdateCategoryDTO,
} from "../dtos/ICategoryDTO";
import { Category } from "../schemas/Category";

export interface ICategoryRepository {
  create(data: ICreateCategoryDTO): Promise<Category>;
  findById(id: string): Promise<Category | null>;
  findAllWithFilters(filters: IListCategoryFilters): Promise<Category[]>;
  save(category: IUpdateCategoryDTO): Promise<Category | null>;
  delete(id: string): Promise<void>;
}
