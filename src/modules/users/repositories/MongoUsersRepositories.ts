import { getModelForClass, ReturnModelType } from "@typegoose/typegoose";

import { User } from "../schemas/User";
import { IUsersRepository } from "./IUsersRepository";
import {
  ICreateUsersDTO,
  IListUsersFilters,
  IUserPhoto,
} from "../dtos/IUsersDTO";

export class MongoUsersRepository implements IUsersRepository {
  private ormRepository: ReturnModelType<typeof User>;

  constructor() {
    this.ormRepository = getModelForClass(User);
  }

  public async create(data: ICreateUsersDTO): Promise<User> {
    return this.ormRepository.create(data);
  }

  public async findById(id: string): Promise<User | null> {
    return this.ormRepository.findOne({ _id: id });
  }

  public async findByEmail(email: string): Promise<User | null> {
    return this.ormRepository.findOne({ email: email });
  }

  public async findAll(): Promise<User[]> {
    return this.ormRepository.find();
  }

  public async save(user: User): Promise<User | null> {
    return this.ormRepository.findOneAndUpdate({ _id: user._id }, user, {
      new: true,
    });
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.deleteOne({ _id: id });
  }

  public async findAllWithFilters(filters: IListUsersFilters): Promise<User[]> {
    const skip = (filters.page - 1) * filters.per;

    return this.ormRepository.find().skip(skip).limit(filters.per);
  }

  public async updloadPhoto(id: string, file: string): Promise<User | null> {
    return this.ormRepository.findOneAndUpdate(
      { _id: id },
      { user_photo: file },
      { new: true }
    );
  }
}
