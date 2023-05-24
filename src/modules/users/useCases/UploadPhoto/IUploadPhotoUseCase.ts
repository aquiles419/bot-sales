import { IUserPhoto } from "../../dtos/IUsersDTO";

export interface IUploadPhotoUseCase {
  execute: (data: IUserPhoto) => Promise<any>;
}
