import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { Order } from './entities/order.entity'
import { GetOrderUseCase } from '@app/application/ecommerce/use-case/get-order'
import { GetOrdersUseCase } from '@app/application/ecommerce/use-case/get-orders'
import { CreateOrderInput } from './dto/create-user.order'
import { CreateOrderUseCase } from '@app/application/ecommerce/use-case/create-order'

@Resolver(() => Order)
export class OrderResolver {
  constructor(
    private getOrderUseCase: GetOrderUseCase,
    private getOrdersUseCase: GetOrdersUseCase,
    private createOrderUseCase: CreateOrderUseCase
  ) {}

  @Query(() => Order)
  order(@Args('id') id: string) {
    return this.getOrderUseCase.execute(id)
  }

  @Query(() => [Order])
  orders() {
    return this.getOrdersUseCase.execute({})
  }

  @Mutation(() => Order)
  createOrder(
    @Args('payload', { type: () => CreateOrderInput }) payload: CreateOrderInput
  ) {
    return this.createOrderUseCase.execute(payload)
  }
}
