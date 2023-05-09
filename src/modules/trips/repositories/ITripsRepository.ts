import {
  ICreateTripsDTO,
  IListTripsFilters,
  IUpdateTripsDTO,
} from "../dtos/ITripsDTO";
import { Trip } from "../schemas/User";

export interface ITripsRepository {
  create(data: ICreateTripsDTO): Promise<Trip>;
  findById(id: string): Promise<Trip | null>;
  findAllWithFilters(filters: IListTripsFilters): Promise<Trip[]>;
  save(trips: IUpdateTripsDTO): Promise<Trip | null>;
  delete(id: string): Promise<void>;
}
