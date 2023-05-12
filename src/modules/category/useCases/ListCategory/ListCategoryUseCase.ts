import { inject, injectable } from "tsyringe";

import { Category } from "../../schemas/Category";
import { IListCategoryUseCase } from "./IListCategoryUseCase";
import { IListCategoryFilters } from "../../dtos/ICategoryDTO";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";

@injectable()
export class ListCategoryUseCase implements IListCategoryUseCase {
  constructor(
    @inject("CategoryRepository")
    private categoryRepository: ICategoryRepository
  ) {}

  public async execute(filters: IListCategoryFilters): Promise<Category[]> {
    const log = this.categoryRepository.findAllWithFilters(filters);
    return log;
  }
}
