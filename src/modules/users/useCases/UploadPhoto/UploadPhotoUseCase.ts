import { inject, injectable } from "tsyringe";
import S3Storage from "../../../../utils/S3Storage";
import { IUserPhoto } from "../../dtos/IUsersDTO";
import { IUploadPhotoUseCase } from "./IUploadPhotoUseCase";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
export class UploadPhotoUseCase implements IUploadPhotoUseCase {
  constructor(
    @inject("UserRepository")
    private userRespository: IUsersRepository
  ) {}

  async execute(data: IUserPhoto): Promise<any> {
    const s3Storage = new S3Storage();

    await s3Storage.saveFile(data.file.filename);
    const fileUrl = await s3Storage.getFileUrl(data.file.filename);

    const dataPhoto = {
      _id: data._id,
      file: fileUrl,
    };

    const photoSaved = await this.userRespository.updloadPhoto(
      dataPhoto._id,
      dataPhoto.file
    );

    return photoSaved;
  }
}
