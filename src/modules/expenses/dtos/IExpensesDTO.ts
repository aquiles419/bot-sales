import IUsersDTO from "../../users/dtos/IUsersDTO";

export interface IExpenses {
  trip_id: string;
  description: string;
  value: number;
  payer: string;
  debtors: IUsersDTO[];
  category_id: string;
  created_at: Date;
  updated_at: Date;
}

export default interface IExpensesDTO {
  _id: string;
  trip_id: string;
  description: string;
  value: number;
  payer: string;
  debtors: IUsersDTO[];
  category_id: string;
  created_at: Date;
  updated_at: Date;
}

export interface IExpensesCreateDTO {
  _id: string;
  trip_id: string;
  description: string;
  value: number;
  payer: string;
  debtors: IUsersDTO[];
  category_id: string;
  created_at: Date;
  updated_at: Date;
}

export type IUpdateExpensesDTO = Partial<IExpensesCreateDTO> & { _id: string };

export interface IListExpensesFilters {
  per: number;
  page: number;
}
