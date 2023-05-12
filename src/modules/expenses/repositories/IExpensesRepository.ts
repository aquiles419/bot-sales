import {
  IExpensesCreateDTO,
  IListExpensesFilters,
  IUpdateExpensesDTO,
} from "../dtos/IExpensesDTO";
import { Expense } from "../schemas/Expense";

export interface IExpensesRepository {
  create(data: IExpensesCreateDTO): Promise<Expense>;
  findById(id: string): Promise<Expense | null>;
  findByIdAndPopulate(id: string): Promise<any | null>;
  findAllWithFilters(filters: IListExpensesFilters): Promise<Expense[]>;
  save(trips: IUpdateExpensesDTO): Promise<Expense | null>;
  delete(id: string): Promise<void>;
}
