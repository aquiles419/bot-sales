import {
  ICreateTripsDTO,
  IListTripsFilters,
  IUpdateTripsDTO,
} from "../dtos/ITripsDTO";
import { Trip } from "../schemas/Trip";

export interface ITripsRepository {
  create(data: ICreateTripsDTO): Promise<Trip>;
  findById(id: string): Promise<Trip | null>;
  findByIdAndPopulate(id: string): Promise<any | null>;
  findTripByIdAndPopulateExpenses(id: string): Promise<any>;
  findAllWithFilters(filters: IListTripsFilters): Promise<Trip[]>;
  save(trips: IUpdateTripsDTO): Promise<Trip | null>;
  delete(id: string): Promise<void>;
}
