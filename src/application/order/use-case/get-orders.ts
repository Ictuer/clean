import { Injectable } from '@nestjs/common'
import { OrderRepository } from '../ports/order.repository'

interface GetOrderUseCaseCommand {}

@Injectable()
export class GetOrdersUseCase {
  constructor(private orderRepository: OrderRepository) {}

  async execute({}: GetOrderUseCaseCommand): Promise<any> {
    const response = await this.orderRepository.findMany()

    return response
  }
}
