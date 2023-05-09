import { getModelForClass, ReturnModelType } from "@typegoose/typegoose";

import { Trip } from "../schemas/User";
import { ITripsRepository } from "./ITripsRepository";
import { ICreateTripsDTO, IListTripsFilters } from "../dtos/ITripsDTO";

export class MongoTripsRepository implements ITripsRepository {
  private ormRepository: ReturnModelType<typeof Trip>;

  constructor() {
    this.ormRepository = getModelForClass(Trip);
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
}
