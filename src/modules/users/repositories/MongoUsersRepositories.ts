import { getModelForClass, ReturnModelType } from "@typegoose/typegoose";

import { User } from "../schemas/User";
import { IUsersRepository } from "./IUsersRepository";
import { ICreateUsersDTO } from "../dtos/IUsersDTO";

export class MongoCampaignsRepository implements IUsersRepository {
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
}
