import { inject, injectable } from "tsyringe";

import { User } from "../../schemas/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IListUsersByIdUseCase } from "./IListUsersByIdUseCase";

@injectable()
export class ListUsersByIdUseCase implements IListUsersByIdUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUsersRepository
  ) {}

  public async execute(id: string): Promise<User | null> {
    const user = await this.userRepository.findExpensesByUserId(id);

    if (user) {
      let totalExpenses = 0;
      const expenseDetails: any[] = [];

      user.trips.forEach((trip) => {
        trip.expenses.forEach((expense) => {
          if (expense.debtors.includes(id)) {
            const numDebtors = expense.debtors.length + 1;
            const expenseValue = expense.value / numDebtors;
            totalExpenses += expenseValue;

            const pay = expenseValue.toFixed(2);
            expenseDetails.push({
              _id: expense._id,
              description: expense.description,
              payer: expense.payer,
              pay: parseFloat(pay),
            });
          }
        });
      });

      user.expenseDetails = expenseDetails;
      user.totalExpenses = totalExpenses;
    }

    return user;
  }
}
