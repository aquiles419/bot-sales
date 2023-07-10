import { inject, injectable } from "tsyringe";
import { IListExpensesByTripId } from "./IListExpensesByTripId";
import { AppException } from "../../../../shared/exceptions/AppException";
import { ITripsRepository } from "../../repositories/ITripsRepository";

@injectable()
export class ListExpensesByTripId implements IListExpensesByTripId {
  constructor(
    @inject("TripsRepository")
    private tripsRepository: ITripsRepository
  ) {}

  async execute(id: string): Promise<any> {
    const trip = await this.tripsRepository.findTripByIdAndPopulateExpenses(id);

    if (
      !trip ||
      !Array.isArray(trip) ||
      trip.length === 0 ||
      !trip[0].expenses ||
      !Array.isArray(trip[0].expenses)
    ) {
      throw new AppException(
        "Expenses not found for the trip",
        404,
        "TRIP_EXPENSES_NOT_FOUND"
      );
    }

    const total_value = trip[0].expenses.reduce((accumulator, expense) => {
      return accumulator + expense.value;
    }, 0);

    return {
      trip: trip,
      total_value: total_value,
    };
  }
}
