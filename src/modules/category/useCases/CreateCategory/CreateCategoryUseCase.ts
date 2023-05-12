import { inject, injectable } from "tsyringe";
import { Category } from "../../schemas/Category";
import { AppException } from "../../../../shared/exceptions/AppException";
import { v4 as uuidV4 } from "uuid";
import ICategoryDTO from "../../dtos/ICategoryDTO";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";

@injectable()
export class CreateCategoryUseCase {
  constructor(
    @inject("CategoryRepository")
    private categoryRepository: ICategoryRepository
  ) {}

  async execute(data: ICategoryDTO): Promise<Category> {
    const categoryAlreadyExists = await this.categoryRepository.findById(
      data._id
    );

    if (categoryAlreadyExists) {
      throw new AppException(
        `Category with id = ${data._id} already exists`,
        400,
        "CategoryAlreadyExists"
      );
    }

    //add verification email

    const currentDate = new Date();

    const users: ICategoryDTO = {
      _id: data._id || uuidV4(),
      name: data.name,
      trip_id: data.trip_id,
      created_at: data.created_at || currentDate,
      updated_at: data.updated_at || currentDate,
    };

    const createdUsers = await this.categoryRepository.create(users);

    return createdUsers;
  }
}
