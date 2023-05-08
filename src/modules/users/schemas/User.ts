import { modelOptions, prop } from "@typegoose/typegoose";
import { ITrips } from "../dtos/IUsersDTO";

@modelOptions({
  schemaOptions: {
    _id: false,
    toJSON: {
      transform(_doc, ret) {
        ret.id = ret._id;

        delete ret._id;
        delete ret.__v;
      },
    },
  },
})
export class User {
  @prop()
  public _id: string;

  @prop()
  public name: string;

  @prop()
  public email: string;

  @prop()
  public password: string;

  @prop()
  public trips: ITrips[];

  @prop()
  public created_at: Date;

  @prop()
  public updated_at: Date;
}
