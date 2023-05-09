import { Trip } from "../../schemas/Trip";

export interface IListTripByIdUseCase {
  execute(id: string): Promise<Trip>;
}
