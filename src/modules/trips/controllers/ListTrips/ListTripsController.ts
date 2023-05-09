import { inject, injectable } from "tsyringe";

import { ok } from "../../../../shared/helpers/HttpResponseCodes";
import { IListTripsFilters } from "../../dtos/ITripsDTO";
import { IController, IRequest, IResponse } from "../../../../shared/protocols";
import { IListTripsUseCase } from "../../useCases/ListTrips";

type RequestQuery = {
  per: string;
  page: string;
};

@injectable()
export class ListTripsController implements IController {
  constructor(
    @inject("ListTripsUseCase")
    private listTripsUseCase: IListTripsUseCase
  ) {}

  async handle(request: IRequest): Promise<IResponse> {
    const { per, page }: RequestQuery = request.query || {};

    const filters: IListTripsFilters = {
      per: Number(per) || 10,
      page: Number(page) || 1,
    };

    const users = await this.listTripsUseCase.execute(filters);

    return ok(users);
  }
}
