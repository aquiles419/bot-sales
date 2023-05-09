import { inject, injectable } from "tsyringe";

import { Trip } from "../../schemas/Trip";
import { IListTripByIdUseCase } from "./IListTripByIdUseCase";
import { AppException } from "../../../../shared/exceptions/AppException";
import { ITripsRepository } from "../../repositories/ITripsRepository";

@injectable()
export class ListTripByIdUseCase implements IListTripByIdUseCase {
  constructor(
    @inject("TripsRepository")
    private tripsRepository: ITripsRepository
  ) {}

  async execute(id: string): Promise<Trip> {
    const trip = await this.tripsRepository.findByIdAndPopulate(id);

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
