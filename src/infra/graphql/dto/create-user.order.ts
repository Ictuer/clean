import { CreateOrderUseCaseCommand } from '@app/application/ecommerce/use-case/create-order'
import { Field, InputType, Int } from '@nestjs/graphql'

@InputType()
export class OrderProductInput {
  @Field(() => String)
  productId: string

  @Field(() => Int)
  price: number
}

@InputType()
export class CreateOrderInput implements CreateOrderUseCaseCommand {
  @Field(() => String)
  userId: string

  @Field(() => [OrderProductInput])
  orderProduct: OrderProductInput[]
}
