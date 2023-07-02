import { Filter } from '../filter';

export class OrderFilter extends Filter {
  constructor(
    status: string,
    orderId: string,
    customerId: string,
    offset?: number,
    limit?: number,
  ) {
    super({ status, orderId, customerId }, offset, limit);
  }
}
