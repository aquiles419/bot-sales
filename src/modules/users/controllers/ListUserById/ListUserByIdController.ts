import { inject, injectable } from "tsyringe";

import { ok } from "../../../../shared/helpers/HttpResponseCodes";
import { IController, IRequest, IResponse } from "../../../../shared/protocols";
import { IListUsersByIdUseCase } from "../../useCases/ListUserById";

@injectable()
export class ListUserByIdController implements IController {
  constructor(
    @inject("ListUserByIdUseCase")
    private listUserByIdUseCase: IListUsersByIdUseCase
  ) {}

  async handle(request: IRequest): Promise<IResponse> {
    const { id } = request.params;
    const user = await this.listUserByIdUseCase.execute(id);

    return ok(user);
  }
}
