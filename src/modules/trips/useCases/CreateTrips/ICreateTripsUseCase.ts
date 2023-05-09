import { ICreateTripsDTO } from "../../dtos/ITripsDTO";
import { Trip } from "../../schemas/Trip";

export interface ICreateTripsUseCase {
  execute: (data: ICreateTripsDTO) => Promise<Trip>;
}
