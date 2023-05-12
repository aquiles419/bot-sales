import { inject, injectable } from "tsyringe";
import { Expense } from "../../schemas/Expense";
import { AppException } from "../../../../shared/exceptions/AppException";
import { v4 as uuidV4 } from "uuid";
import IExpensesDTO from "../../dtos/IExpensesDTO";
import { IExpensesRepository } from "../../repositories/IExpensesRepository";

@injectable()
export class CreateExpensesUseCase {
  constructor(
    @inject("ExpensesRepository")
    private expensesRepository: IExpensesRepository
  ) {}

  async execute(data: IExpensesDTO): Promise<Expense> {
    const expensesAlreadyExists = await this.expensesRepository.findById(
      data._id
    );

    if (expensesAlreadyExists) {
      throw new AppException(
        `Expense with id = ${data._id} already exists`,
        400,
        "ExpenseAlreadyExists"
      );
    }

    //add verification email

    const currentDate = new Date();

    const expenses: IExpensesDTO = {
      _id: data._id || uuidV4(),
      trip_id: data._id,
      description: data.description,
      value: data.value,
      payer: data.payer,
      debtors: data.debtors,
      category: data.category,
      created_at: data.created_at || currentDate,
      updated_at: data.updated_at || currentDate,
    };

    const createdExpenses = await this.expensesRepository.create(expenses);

    return createdExpenses;
  }
}
