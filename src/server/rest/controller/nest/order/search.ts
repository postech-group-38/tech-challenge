import { Controller, Logger, Get, Query } from '@nestjs/common';
import { OrderService } from '../../../../../domain/service/order/index';
import { OrderQuery } from '../../../model/request/order';

@Controller('/order')
export class OrderSearchController {
  private readonly logger = new Logger(OrderSearchController.name);

  constructor(private readonly orderService: OrderService) {}

  @Get()
  async search(@Query() query: OrderQuery) {
    return this.orderService.search(query.toFilter());
  }
}
