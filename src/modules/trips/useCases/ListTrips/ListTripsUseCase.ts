import { inject, injectable } from "tsyringe";

import { Trip } from "../../schemas/User";
import { IListTripsFilters } from "../../dtos/ITripsDTO";
import { IListTripsUseCase } from "./IListTripsUseCase";
import { ITripsRepository } from "../../repositories/ITripsRepository";

@injectable()
export class ListTripsUseCase implements IListTripsUseCase {
  constructor(
    @inject("TripsRepository")
    private tripsRepository: ITripsRepository
  ) {}

  public async execute(filters: IListTripsFilters): Promise<Trip[]> {
    return this.tripsRepository.findAllWithFilters(filters);
  }
}
