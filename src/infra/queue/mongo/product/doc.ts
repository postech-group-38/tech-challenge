import { ObjectId } from 'mongodb';
export type OrderDocument = {
  _id: ObjectId;
  name: string;
};
