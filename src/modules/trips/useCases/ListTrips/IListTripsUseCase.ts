import { IListTripsFilters } from "../../dtos/ITripsDTO";
import { Trip } from "../../schemas/Trip";

export interface IListTripsUseCase {
  execute(filters: IListTripsFilters): Promise<Trip[]>;
}
