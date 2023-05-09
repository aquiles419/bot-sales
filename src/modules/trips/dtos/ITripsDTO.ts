import { IUserTripDTO } from "../../users/dtos/IUsersDTO";

export interface ITrips {
  name: string;
  description: string;
  state: string;
  travelers?: IUserTripDTO[];
  created_at: Date;
  updated_at: Date;
}

export default interface ITripsDTO {
  _id: string;
  name: string;
  description: string;
  travelers?: IUserTripDTO[];
  created_at: Date;
  updated_at: Date;
}

export interface ICreateTripsDTO {
  _id: string;
  name: string;
  description: string;
  travelers?: IUserTripDTO[];
  created_at: Date;
  updated_at: Date;
}

export type IUpdateTripsDTO = Partial<ICreateTripsDTO> & { _id: string };

export interface IListTripsFilters {
  per: number;
  page: number;
}
