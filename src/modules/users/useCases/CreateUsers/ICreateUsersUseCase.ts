import { ICreateUsersDTO } from "../../dtos/IUsersDTO";
import { User } from "../../schemas/User";

export interface ICreateCampaignUseCase {
  execute: (data: ICreateUsersDTO) => Promise<User>;
}
