import { Document, Schema, model } from "mongoose";

export interface ITrip {
  location: string;
  startDate: Date;
  endDate: Date;
}

export interface IUser extends Document {
  _id: string;
  name: string;
  email: string;
  trips: ITrip[];
  created_at: Date;
  updated_at: Date;
}

const TripSchema = new Schema({
  location: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
});

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  trips: [TripSchema],
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

export default model<IUser>("User", UserSchema);
