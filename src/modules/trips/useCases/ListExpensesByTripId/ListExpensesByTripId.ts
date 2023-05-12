import { inject, injectable } from "tsyringe";

import { Trip } from "../../schemas/Trip";
import { IListExpensesByTripId } from "./IListExpensesByTripId";
import { AppException } from "../../../../shared/exceptions/AppException";
import { ITripsRepository } from "../../repositories/ITripsRepository";

@injectable()
export class ListExpensesByTripId implements IListExpensesByTripId {
  constructor(
    @inject("TripsRepository")
    private tripsRepository: ITripsRepository
  ) {}

  async execute(id: string): Promise<Trip> {
    const trip = await this.tripsRepository.findTripByIdAndPopulateExpenses(id);

    if (!trip) {
      throw new AppException(
        `trip with id ${id} not found`,
        404,
        "trip not found"
      );
    }

    return trip;
  }
}
