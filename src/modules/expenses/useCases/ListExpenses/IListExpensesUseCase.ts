import { IListExpensesFilters } from "../../dtos/IExpensesDTO";
import { Expense } from "../../schemas/Expense";

export interface IListExpensesUseCase {
  execute(filters: IListExpensesFilters): Promise<Expense[]>;
}
