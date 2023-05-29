import {
  Severity,
  modelOptions,
  prop,
  setGlobalOptions,
} from "@typegoose/typegoose";
import IUsersDTO from "../../users/dtos/IUsersDTO";

setGlobalOptions({ options: { allowMixed: Severity.ALLOW } });

@modelOptions({
  schemaOptions: {
    toJSON: {
      transform(_doc, ret) {
        ret.id = ret._id.toString();

        delete ret._id;
        delete ret.__v;
      },
    },
    autoCreate: true,
  },
})
export class Expense {
  @prop()
  public _id: string;

  @prop()
  public trip_id: string;

  @prop()
  public description: string;

  @prop()
  public value: number;

  @prop()
  public payer: string;

  @prop()
  public debtors: IUsersDTO[];

  @prop()
  public category_id: string;

  @prop()
  public created_at: Date;

  @prop()
  public updated_at: Date;
}
