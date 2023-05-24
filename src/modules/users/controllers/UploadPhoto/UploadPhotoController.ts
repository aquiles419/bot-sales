import { IRequest } from "../../../../shared/protocols";
import { inject, injectable } from "tsyringe";
import { IUploadPhotoUseCase } from "../../useCases/UploadFile/IUploadPhotoUseCase";

@injectable()
export class UploadPhotoController {
  constructor(
    @inject("UploadPhoto")
    private uploadPhotoUseCase: IUploadPhotoUseCase
  ) {}

  async handle(request: IRequest, response): Promise<any> {
    const { id } = request.params;
    const { file } = request;

    const data = {
      _id: id,
      file,
    };

    const photo = await this.uploadPhotoUseCase.execute(data);

    response.status(200).json({ message: "Image OK" });
  }
}
