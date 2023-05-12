import { inject, injectable } from "tsyringe";

import { ok } from "../../../../shared/helpers/HttpResponseCodes";
import { IListExpensesFilters } from "../../dtos/IExpensesDTO";
import { IController, IRequest, IResponse } from "../../../../shared/protocols";
import { IListExpensesUseCase } from "../../useCases/ListExpenses";

type RequestQuery = {
  per: string;
  page: string;
};

@injectable()
export class ListExpensesController implements IController {
  constructor(
    @inject("ListExpensesUseCase")
    private listExpensesUseCase: IListExpensesUseCase
  ) {}

  async handle(request: IRequest): Promise<IResponse> {
    const { per, page }: RequestQuery = request.query || {};

    const filters: IListExpensesFilters = {
      per: Number(per) || 10,
      page: Number(page) || 1,
    };

    const expenses = await this.listExpensesUseCase.execute(filters);

    return ok(expenses);
  }
}
