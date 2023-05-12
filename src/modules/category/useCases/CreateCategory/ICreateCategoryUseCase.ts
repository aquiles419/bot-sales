import { ICreateCategoryDTO } from "../../dtos/ICategoryDTO";
import { Category } from "../../schemas/Category";

export interface ICreateCategoryUseCase {
  execute: (data: ICreateCategoryDTO) => Promise<Category>;
}
