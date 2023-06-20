import {
  BadRequestException,
  Body,
  Controller,
  HttpStatus,
  Logger,
  Post,
  Res,
} from '@nestjs/common';
import { Order } from 'src/domain/model/order';
import { OrderService } from '../../../../../domain/service/order/index';
import { OrderRequest } from '../../../model/request/order';

@Controller('/order')
export class OrderCreateController {
  private readonly logger = new Logger(OrderCreateController.name);

  constructor(private readonly orderService: OrderService) {}

  @Post()
  async create(@Body() dto: OrderRequest, @Res() res) {
    let order: Order;

    try {
      order = dto.toDomain();
    } catch (error) {
      throw new BadRequestException(error.message);
    }

    const createdId = await this.orderService.create(order);

    this.logger.log(`The order with id ${createdId} was created`);

    res
      .status(HttpStatus.CREATED)
      .location('/order/' + createdId)
      .json(createdId);
  }
}
