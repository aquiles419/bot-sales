import {
  Severity,
  modelOptions,
  prop,
  setGlobalOptions,
} from "@typegoose/typegoose";

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
export class Category {
  @prop()
  public _id: string;

  @prop()
  public name: string;

  @prop()
  public trip_id: string;

  @prop()
  public created_at: Date;

  @prop()
  public updated_at: Date;
}
