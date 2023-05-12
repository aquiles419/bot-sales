import { Trip } from "../../schemas/Trip";

export interface IListExpensesByTripId {
  execute(id: string): Promise<Trip>;
}
