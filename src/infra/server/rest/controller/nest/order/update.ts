import {
  BadRequestException,
  Body,
  Controller,
  Put,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { Order } from 'src/domain/model/order';
import { OrderService } from '../../../../../../domain/service/order/index';
import { OrderRequest } from '../../../model/request/order';

@Controller('/order')
export class OrderUpdateController {
  constructor(private readonly orderService: OrderService) {}

  @Put()
  @HttpCode(HttpStatus.NO_CONTENT)
  update(@Body() dto: OrderRequest) {
    let order: Order;

    try {
      order = dto.toDomain();
    } catch (error) {
      throw new BadRequestException(error.message);
    }

    return this.orderService.update(order);
  }
}
