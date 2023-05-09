import { ICreateTripsDTO } from "../../dtos/ITripsDTO";
import { Trip } from "../../schemas/User";

export interface ICreateTripsUseCase {
  execute: (data: ICreateTripsDTO) => Promise<Trip>;
}
