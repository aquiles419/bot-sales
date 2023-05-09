import { inject, injectable } from "tsyringe";

import { ok } from "../../../../shared/helpers/HttpResponseCodes";
import { IListUsersFilters } from "../../dtos/IUsersDTO";
import { IController, IRequest, IResponse } from "../../../../shared/protocols";
import { IListUsersUseCase } from "../../useCases/ListUsers";

type RequestQuery = {
  per: string;
  page: string;
};

@injectable()
export class ListUsersController implements IController {
  constructor(
    @inject("ListUsersUseCase")
    private listUsersUseCase: IListUsersUseCase
  ) {}

  async handle(request: IRequest): Promise<IResponse> {
    const { per, page }: RequestQuery = request.query || {};

    const filters: IListUsersFilters = {
      per: Number(per) || 10,
      page: Number(page) || 1,
    };

    const users = await this.listUsersUseCase.execute(filters);

    return ok(users);
  }
}
