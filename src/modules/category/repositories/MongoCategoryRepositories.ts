import { getModelForClass, ReturnModelType } from "@typegoose/typegoose";

import { Category } from "../schemas/Category";
import { ICategoryRepository } from "./ICategoryRepository";
import { ICreateCategoryDTO, IListCategoryFilters } from "../dtos/ICategoryDTO";

export class MongoCategoryRepository implements ICategoryRepository {
  private ormRepository: ReturnModelType<typeof Category>;

  constructor() {
    this.ormRepository = getModelForClass(Category);
  }

  public async create(data: ICreateCategoryDTO): Promise<Category> {
    return this.ormRepository.create(data);
  }

  public async findById(id: string): Promise<Category | null> {
    return this.ormRepository.findOne({ _id: id });
  }

  public async findAll(): Promise<Category[]> {
    return this.ormRepository.find();
  }

  public async save(category: Category): Promise<Category | null> {
    return this.ormRepository.findOneAndUpdate(
      { _id: category._id },
      category,
      {
        new: true,
      }
    );
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.deleteOne({ _id: id });
  }

  public async findAllWithFilters(
    filters: IListCategoryFilters
  ): Promise<Category[]> {
    const skip = (filters.page - 1) * filters.per;

    return this.ormRepository.find().skip(skip).limit(filters.per);
  }
}
