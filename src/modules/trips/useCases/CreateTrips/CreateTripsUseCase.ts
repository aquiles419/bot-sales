import { inject, injectable } from "tsyringe";
import { Trip } from "../../schemas/Trip";
import { AppException } from "../../../../shared/exceptions/AppException";
import { v4 as uuidV4 } from "uuid";
import ITripsDTO from "../../dtos/ITripsDTO";
import { ITripsRepository } from "../../repositories/ITripsRepository";

@injectable()
export class CreateTripsUseCase {
  constructor(
    @inject("TripsRepository")
    private tripsRepository: ITripsRepository
  ) {}

  async execute(data: ITripsDTO): Promise<Trip> {
    const tripsAlreadyExists = await this.tripsRepository.findById(data._id);

    if (tripsAlreadyExists) {
      throw new AppException(
        `Trip with id = ${data._id} already exists`,
        400,
        "TripAlreadyExists"
      );
    }

    //add verification email

    const currentDate = new Date();

    const users: ITripsDTO = {
      _id: data._id || uuidV4(),
      name: data.name,
      description: data.description,
      travelers: data.travelers,
      expenses: data.expenses,
      lat: data.lat || null,
      long: data.long || null,
      start_trip: data.start_trip || null,
      end_trip: data.end_trip || null,
      created_at: data.created_at || currentDate,
      updated_at: data.updated_at || currentDate,
    };

    const createdUsers = await this.tripsRepository.create(users);

    return createdUsers;
  }
}
