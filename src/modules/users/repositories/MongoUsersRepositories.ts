import { IUsersRepository } from "./ICreateUsersRepository";
import { ICreateUsersDTO, IUpdateUsersDTO } from "../dtos/IUsersDTO";
import { User } from "../schemas/User";
import mongoose, { Document } from "mongoose";

export class UsersRepository implements IUsersRepository {
  private readonly userModel: mongoose.Model<Document>;

  constructor() {
    this.userModel = mongoose.model("User");
  }

  async create(data: ICreateUsersDTO): Promise<User> {
    const user = await this.userModel.create(data);
    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  }

  async findById(id: string): Promise<User | null> {
    const user = await this.userModel.findById(id);
    if (!user) {
      return null;
    }
    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  }

  async findUsers(data: any): Promise<User[]> {
    const users = await this.userModel.find(data);
    return users.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
    }));
  }

  async save(data: IUpdateUsersDTO): Promise<User | null> {
    const user = await this.userModel.findByIdAndUpdate(
      data.id,
      { $set: data },
      { new: true }
    );
    if (!user) {
      return null;
    }
    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  }

  async delete(id: string): Promise<void> {
    await this.userModel.findByIdAndDelete(id);
  }
}
