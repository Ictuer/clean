import { Injectable } from '@nestjs/common'
import { OrderRepository } from '../ports/order.repository'

@Injectable()
export class GetOrderUseCase {
  constructor(private orderRepository: OrderRepository) {}

  async execute(id: string): Promise<any> {
    const response = await this.orderRepository.findById(id)

    return response
  }
}
