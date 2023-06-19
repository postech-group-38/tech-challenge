import { Controller, Logger, Get, Query } from '@nestjs/common';
import { OrderService } from '../../../../../domain/service/order/index';
import { OrderQuery } from '../../../model/request/order';
import { OrderRespose } from '../../../model/response/order';
import { Page } from '../../../../../domain/common/page';
import { Order } from '../../../../../domain/model/order';
import { OrderFilter } from '../../../../../domain/repository/order/filter';

@Controller('/order')
export class OrderSearchController {
  private readonly logger = new Logger(OrderSearchController.name);

  constructor(private readonly orderService: OrderService) {}

  @Get()
  async search(@Query() query: OrderQuery) {
    const filter = query.toFilter();
    const orderPage = await this.orderService.search(filter);
    return this.convertToResponse(orderPage, filter);
  }

  private convertToResponse(orderPage: Page<Order>, filter: OrderFilter) {
    const orders = orderPage.items.map((order) =>
      OrderRespose.fromDomain(order),
    );

    return new Page(orders, filter, orderPage.result.total);
  }
}
