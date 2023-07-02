import { Order } from 'src/domain/model/order';
import { OrderRepository } from 'src/domain/repository/order';
import { OrderFilter } from 'src/domain/repository/order/filter';
import { MongoCRUD } from '../../../../util/lib/mongodb/mongo-crud';
import converter from './converter';
import { MongoDriver } from '../../../../util/lib/mongodb/driver';
import { Injectable } from '@nestjs/common';

const COLLECTION = 'order';

@Injectable()
export class OrderMongoRepository implements OrderRepository {
  private readonly crud: MongoCRUD<Order>;

  constructor(db: MongoDriver) {
    this.crud = new MongoCRUD(db.collection(COLLECTION), converter);
  }

  findById(orderId: string) {
    return this.crud.findById(orderId);
  }

  count(filter: OrderFilter) {
    return this.crud.count(filter);
  }

  find(filter: OrderFilter) {
    return this.crud.find(filter);
  }

  create(order: Order) {
    return this.crud.insertOne(order);
  }

  update(order: Order) {
    return this.crud.update(order.id, order);
  }
}
