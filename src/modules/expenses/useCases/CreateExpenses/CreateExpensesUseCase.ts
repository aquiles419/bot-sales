import { inject, injectable } from "tsyringe";
import { Expense } from "../../schemas/Expense";
import { AppException } from "../../../../shared/exceptions/AppException";
import { v4 as uuidV4 } from "uuid";
import IExpensesDTO from "../../dtos/IExpensesDTO";
import { IExpensesRepository } from "../../repositories/IExpensesRepository";
import { ITripsRepository } from "../../../trips/repositories/ITripsRepository";

@injectable()
export class CreateExpensesUseCase {
  constructor(
    @inject("ExpensesRepository")
    private expensesRepository: IExpensesRepository,
    @inject("TripsRepository")
    private tripsRepository: ITripsRepository
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

    const currentDate = new Date();

    const expenses: IExpensesDTO = {
      _id: data._id || uuidV4(),
      trip_id: data.trip_id,
      description: data.description,
      value: data.value,
      payer: data.payer,
      debtors: data.debtors,
      category_id: data.category_id,
      created_at: data.created_at || currentDate,
      updated_at: data.updated_at || currentDate,
    };

    const createdExpenses = await this.expensesRepository.create(expenses);

    const trip: any = await this.tripsRepository.findById(data.trip_id);
    if (trip) {
      trip.expenses.push(expenses._id);
      await this.tripsRepository.save(trip);
    }

    return createdExpenses;
  }
}
