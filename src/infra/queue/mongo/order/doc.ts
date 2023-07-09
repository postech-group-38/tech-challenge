import { ObjectId } from 'mongodb';
export type OrderDocument = {
  _id: ObjectId;
  status: string;
  products: ProductDocument[];
  customer: CustomerDocument;
  payment: PaymentDocument;
  leadtime?: Date;
  lastModifiedAt: Date;
  lastModifiedBy: string;
};
