import { IExpensesCreateDTO } from "../../dtos/IExpensesDTO";
import { Expense } from "../../schemas/Expense";

export interface ICreateExpensesUseCase {
  execute: (data: IExpensesCreateDTO) => Promise<Expense>;
}
