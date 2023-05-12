import { inject, injectable } from "tsyringe";

import { Expense } from "../../schemas/Expense";
import { IListExpensesFilters } from "../../dtos/IExpensesDTO";
import { IListExpensesUseCase } from "./IListExpensesUseCase";
import { IExpensesRepository } from "../../repositories/IExpensesRepository";

@injectable()
export class ListExpensesUseCase implements IListExpensesUseCase {
  constructor(
    @inject("ExpensesRepository")
    private expensesRepository: IExpensesRepository
  ) {}

  public async execute(filters: IListExpensesFilters): Promise<Expense[]> {
    return this.expensesRepository.findAllWithFilters(filters);
  }
}
