import { inject, injectable } from "tsyringe";
import { ok } from "../../../../shared/helpers/HttpResponseCodes";
import { IController, IRequest, IResponse } from "../../../../shared/protocols";
import { IUpdateUsersUseCase } from "../../useCases/UpdateUsers/IUpdateUsersUseCase";

@injectable()
export class UpdateUsersController implements IController {
  constructor(
    @inject("UpdateUsersUseCase")
    private updateUsersUseCase: IUpdateUsersUseCase
  ) {}

  async handle(request: IRequest): Promise<IResponse> {
    const { id } = request.params;
    const { name, email, trips, user_photo, password } = request.body;

    const updatedUser = await this.updateUsersUseCase.execute({
      _id: id,
      name,
      email,
      trips,
      user_photo,
      password,
    });

    return ok(updatedUser);
  }
}
