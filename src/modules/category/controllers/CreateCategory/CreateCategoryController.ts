import { IController, IRequest, IResponse } from "../../../../shared/protocols";
import { inject, injectable } from "tsyringe";
import { AppException } from "../../../../shared/exceptions";
import { created } from "../../../../shared/helpers/HttpResponseCodes";
import ICategoryDTO from "../../dtos/ICategoryDTO";
import { ICreateCategoryUseCase } from "../../useCases/CreateCategory";

type RequestType = {
  body: {
    id?: string;
    name?: string;
    trip_id?: string;
    created_at?: Date;
    updated_at?: Date;
  };
};

@injectable()
export class CreateCategoryController implements IController {
  constructor(
    @inject("CreateCategoryUseCase")
    private createCategoryUseCase: ICreateCategoryUseCase
  ) {}

  async handle(request: IRequest<RequestType>): Promise<IResponse> {
    const { id, name, trip_id, created_at, updated_at } = request.body;

    if (!name || !trip_id) {
      throw new AppException("User body is empty", 400, "MissingBody");
    }

    const data: ICategoryDTO = {
      _id: id,
      name,
      trip_id,
      created_at,
      updated_at,
    };

    const category = await this.createCategoryUseCase.execute(data);

    return created(category);
  }
}
