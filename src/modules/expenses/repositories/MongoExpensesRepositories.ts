import { getModelForClass, ReturnModelType } from "@typegoose/typegoose";

import { Expense } from "../schemas/Expense";
import { IExpensesRepository } from "./IExpensesRepository";
import { IExpensesCreateDTO, IListExpensesFilters } from "../dtos/IExpensesDTO";

export class MongoExpensesRepository implements IExpensesRepository {
  private ormRepository: ReturnModelType<typeof Expense>;

  constructor() {
    this.ormRepository = getModelForClass(Expense);
  }
  public async findByIdAndPopulate(id: string): Promise<any> {
    const trip = await this.ormRepository.aggregate([
      {
        $match: {
          _id: id,
        },
      },
      {
        $lookup: {
          from: "users",
          let: { debtors: "$debtors" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $in: ["$_id", "$$debtors"],
                },
              },
            },
            {
              $project: {
                _id: 1,
                name: 1,
                email: 1,
              },
            },
          ],
          as: "debtors",
        },
      },
    ]);
    return trip;
  }

  public async create(data: IExpensesCreateDTO): Promise<Expense> {
    return this.ormRepository.create(data);
  }

  public async findById(id: string): Promise<Expense | null> {
    return this.ormRepository.findOne({ _id: id });
  }

  public async findAll(): Promise<Expense[]> {
    return this.ormRepository.find();
  }

  public async save(user: Expense): Promise<Expense | null> {
    return this.ormRepository.findOneAndUpdate({ _id: user._id }, user, {
      new: true,
    });
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.deleteOne({ _id: id });
  }

  public async findAllWithFilters(
    filters: IListExpensesFilters
  ): Promise<Expense[]> {
    const skip = (filters.page - 1) * filters.per;

    return this.ormRepository.find().skip(skip).limit(filters.per);
  }
}
