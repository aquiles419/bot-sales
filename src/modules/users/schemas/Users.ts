import {
  prop,
  modelOptions,
  setGlobalOptions,
  Severity,
} from "@typegoose/typegoose";

setGlobalOptions({ options: { allowMixed: Severity.ALLOW } });

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
export default class Points {
  @prop()
  public _id: string;

  @prop()
  public inhabitant_id: string;

  @prop()
  public expiration: Date;

  @prop()
  public amount: number;

  @prop()
  public pointeable_type: string;

  @prop()
  public pointeable_id: string;

  @prop()
  public created_at: Date;

  @prop()
  public updated_at: Date;
}
