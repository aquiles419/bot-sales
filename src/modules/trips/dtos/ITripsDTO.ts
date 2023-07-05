import IExpensesDTO from "../../expenses/dtos/IExpensesDTO";
import { IUserTripDTO } from "../../users/dtos/IUsersDTO";

export interface ITrips {
  name: string;
  description: string;
  state: string;
  lat?: string;
  long?: string;
  travelers?: IUserTripDTO[];
  expenses?: IExpensesDTO[];
  start_trip?: Date;
  end_trip?: Date;
  created_at: Date;
  updated_at: Date;
}

export default interface ITripsDTO {
  _id: string;
  name: string;
  description: string;
  lat?: string;
  long?: string;
  start_trip?: Date;
  end_trip?: Date;
  travelers?: IUserTripDTO[];
  expenses?: IExpensesDTO[];
  created_at: Date;
  updated_at: Date;
}

export interface ICreateTripsDTO {
  _id: string;
  name: string;
  description: string;
  lat?: string;
  long?: string;
  start_trip?: Date;
  end_trip?: Date;
  travelers?: IUserTripDTO[];
  expenses?: IExpensesDTO[];
  created_at: Date;
  updated_at: Date;
}

export type IUpdateTripsDTO = Partial<ICreateTripsDTO> & { _id: string };

export interface IListTripsFilters {
  per: number;
  page: number;
}
