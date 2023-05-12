import { IController, IRequest, IResponse } from "../../../../shared/protocols";
import { inject, injectable } from "tsyringe";
import { AppException } from "../../../../shared/exceptions";
import { IExpensesCreateDTO } from "../../dtos/IExpensesDTO";
import { created } from "../../../../shared/helpers/HttpResponseCodes";
import IUsersDTO from "../../../users/dtos/IUsersDTO";
import { ICreateExpensesUseCase } from "../../useCases/CreateExpenses";

type RequestType = {
  body: {
    id?: string;
    trip_id?: string;
    description?: string;
    value?: number;
    payer?: string;
    debtors?: IUsersDTO[];
    created_at?: Date;
    updated_at?: Date;
  };
};

@injectable()
export class CreateExpensesController implements IController {
  constructor(
    @inject("CreateExpenseUseCase")
    private createExpenseUseCase: ICreateExpensesUseCase
  ) {}

  async handle(request: IRequest<RequestType>): Promise<IResponse> {
    const {
      id,
      trip_id,
      description,
      value,
      payer,
      debtors,
      created_at,
      updated_at,
    } = request.body;

    if (!trip_id || !value || !payer) {
      throw new AppException("Expenses body is empty", 400, "MissingBody");
    }

    const data: IExpensesCreateDTO = {
      _id: id,
      trip_id,
      description,
      value,
      payer,
      debtors,
      created_at,
      updated_at,
    };

    const expenses = await this.createExpenseUseCase.execute(data);

    return created(expenses);
  }
}
