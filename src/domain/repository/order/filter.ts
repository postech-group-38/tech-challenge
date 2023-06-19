import { Filter } from '../filter';

export class OrderFilter extends Filter {
  constructor(
    readonly orderId: string,
    readonly customerId: string,
    offset?: number,
    limit?: number,
  ) {
    super(offset, limit);
  }
}
