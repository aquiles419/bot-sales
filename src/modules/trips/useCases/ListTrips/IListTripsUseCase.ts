import { IListTripsFilters } from "../../dtos/ITripsDTO";
import { Trip } from "../../schemas/User";

export interface IListTripsUseCase {
  execute(filters: IListTripsFilters): Promise<Trip[]>;
}
