import { IListCategoryFilters } from "../../dtos/ICategoryDTO";
import { Category } from "../../schemas/Category";

export interface IListCategoryUseCase {
  execute(filters: IListCategoryFilters): Promise<Category[]>;
}
