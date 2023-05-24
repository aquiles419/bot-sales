import { IRequest } from "../../../../shared/protocols";
import { inject, injectable } from "tsyringe";
import { IUploadPhotoUseCase } from "../../useCases/UploadPhoto/IUploadPhotoUseCase";
import jwt, { JwtPayload } from "jsonwebtoken";

@injectable()
export class UploadPhotoController {
  constructor(
    @inject("UploadPhoto")
    private uploadPhotoUseCase: IUploadPhotoUseCase
  ) {}

  async handle(request: IRequest, response): Promise<any> {
    const id = request.headers.authorization;
    const { file } = request;

    if (!id || !id.startsWith("Bearer ")) {
      return response.status(401).json({ message: "Missing Token" });
    }

    const token = id.substring(7); // Remove prefix "Bearer"

    try {
      const decoded = jwt.verify(token, process.env.APP_SECRET) as JwtPayload;

      const userId = decoded.id;

      const data = {
        _id: userId,
        file,
      };

      const photo = await this.uploadPhotoUseCase.execute(data);

      response.status(200).json({ message: "Image OK" });
    } catch (error) {
      console.info(error);
      return response.status(401).json({ message: "Invalid Token" });
    }
  }
}
