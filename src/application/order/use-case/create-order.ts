import { Order } from '@app/application/order/entities/order'
import { Injectable } from '@nestjs/common'
import { OrderRepository } from '../ports/order.repository'
import { OrderProduct } from '@app/domain/order/order-product'

export interface CreateOrderUseCaseCommand {
  userId: string
  orderProduct: Pick<OrderProduct, 'productId' | 'price'>[]
}

@Injectable()
export class CreateOrderUseCase {
  constructor(private orderRepository: OrderRepository) {}

  async execute({
    userId,
    orderProduct
  }: CreateOrderUseCaseCommand): Promise<Order> {
    const order = new Order({
      userId
    })

    const createdOrderProduct = orderProduct.map((product) => {
      order.total += product.price

      return new OrderProduct({
        product: product.product,
        price: product.price
      })
    })

    order.orderProduct = createdOrderProduct

    const createdOrder = await this.orderRepository.create(order)
    const response = await this.orderRepository.findById(createdOrder.id)

    return response
  }
}
