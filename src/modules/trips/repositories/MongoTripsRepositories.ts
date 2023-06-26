import { getModelForClass, ReturnModelType } from "@typegoose/typegoose";

import { Trip } from "../schemas/Trip";
import { ITripsRepository } from "./ITripsRepository";
import { ICreateTripsDTO, IListTripsFilters } from "../dtos/ITripsDTO";

export class MongoTripsRepository implements ITripsRepository {
  private ormRepository: ReturnModelType<typeof Trip>;

  constructor() {
    this.ormRepository = getModelForClass(Trip);
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
          let: { travelers: "$travelers" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $in: ["$_id", "$$travelers"],
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
          as: "travelers",
        },
      },
    ]);
    return trip;
  }

  public async create(data: ICreateTripsDTO): Promise<Trip> {
    return this.ormRepository.create(data);
  }

  public async findById(id: string): Promise<Trip | null> {
    return this.ormRepository.findOne({ _id: id });
  }

  public async findAll(): Promise<Trip[]> {
    return this.ormRepository.find();
  }

  public async save(user: Trip): Promise<Trip | null> {
    return this.ormRepository.findOneAndUpdate({ _id: user._id }, user, {
      new: true,
    });
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.deleteOne({ _id: id });
  }

  public async findAllWithFilters(filters: IListTripsFilters): Promise<Trip[]> {
    const skip = (filters.page - 1) * filters.per;

    return this.ormRepository.find().skip(skip).limit(filters.per);
  }

  public async findTripByIdAndPopulateExpenses(id: string): Promise<any> {
    const trip = await this.ormRepository.aggregate([
      {
        $match: {
          _id: id,
        },
      },
      {
        $lookup: {
          from: "expenses",
          let: { expenses: "$expenses" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $in: ["$_id", "$$expenses"],
                },
              },
            },
          ],
          as: "expenses",
        },
      },
      {
        $project: {
          expenses: 1,
        },
      },
    ]);

    return trip;
  }
}
