export interface ITrips {
  name: string;
  country: string;
  state: string;
  travelers: IUsersDTO[];
  created_at: Date;
  updated_at: Date;
}

export default interface IUsersDTO {
  _id: string;
  name: string;
  email: string;
  password: string;
  trips?: ITrips[];
  created_at: Date;
  updated_at: Date;
}

export interface ICreateUsersDTO {
  _id: string;
  name: string;
  email: string;
  password: string;
  trips?: ITrips[];
  created_at: Date;
  updated_at: Date;
}

export type IUpdateUsersDTO = Partial<ICreateUsersDTO> & { _id: string };
