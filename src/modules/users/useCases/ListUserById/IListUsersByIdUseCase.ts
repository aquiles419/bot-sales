import { User } from "../../schemas/User";

export interface IListUsersByIdUseCase {
  execute(id: string): Promise<User | null>;
}
