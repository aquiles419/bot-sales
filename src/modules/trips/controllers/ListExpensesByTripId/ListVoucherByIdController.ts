import { inject, injectable } from "tsyringe";

import { ok } from "../../../../shared/helpers/HttpResponseCodes";
import { IController, IRequest, IResponse } from "../../../../shared/protocols";
import { IListExpensesByTripId } from "../../useCases/ListExpensesByTripId";

@injectable()
export class ListExpensesByTripId implements IController {
  constructor(
    @inject("ListExpensesByTripId")
    private listExpensesByTripId: IListExpensesByTripId
  ) {}

  async handle(request: IRequest): Promise<IResponse> {
    const { id } = request.params;

    const trip = await this.listExpensesByTripId.execute(id);

    return ok(trip);
  }
}
