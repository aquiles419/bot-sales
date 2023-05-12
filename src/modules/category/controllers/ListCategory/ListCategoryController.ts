import { inject, injectable } from "tsyringe";

import { ok } from "../../../../shared/helpers/HttpResponseCodes";
import { IController, IRequest, IResponse } from "../../../../shared/protocols";
import { IListCategoryFilters } from "../../dtos/ICategoryDTO";
import { IListCategoryUseCase } from "../../useCases/ListCategory/IListCategoryUseCase";

type RequestQuery = {
  per: string;
  page: string;
};

@injectable()
export class ListCategoryController implements IController {
  constructor(
    @inject("ListCategoryUseCase")
    private listCategoryUseCase: IListCategoryUseCase
  ) {}

  async handle(request: IRequest): Promise<IResponse> {
    const { per, page }: RequestQuery = request.query || {};

    const filters: IListCategoryFilters = {
      per: Number(per) || 10,
      page: Number(page) || 1,
    };

    const category = await this.listCategoryUseCase.execute(filters);

    return ok(category);
  }
}
