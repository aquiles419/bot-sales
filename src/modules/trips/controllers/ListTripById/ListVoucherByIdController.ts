import { inject, injectable } from "tsyringe";

import { ok } from "../../../../shared/helpers/HttpResponseCodes";
import { IController, IRequest, IResponse } from "../../../../shared/protocols";
import { IListTripByIdUseCase } from "../../useCases/ListTripById/IListTripByIdUseCase";

@injectable()
export class ListTripByIdController implements IController {
  constructor(
    @inject("ListTripByIdUseCase")
    private listTripByIdUseCase: IListTripByIdUseCase
  ) {}

  async handle(request: IRequest): Promise<IResponse> {
    const { id } = request.params;

    const trip = await this.listTripByIdUseCase.execute(id);

    return ok(trip);
  }
}
