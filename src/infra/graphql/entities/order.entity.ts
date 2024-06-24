import { ObjectType, Field, Int } from '@nestjs/graphql'
import { OrderProduct } from './order-product'

@ObjectType()
export class Order {
  @Field(() => String)
  id: string

  @Field(() => String)
  userId: string

  @Field(() => Int)
  total: number

  @Field(() => [OrderProduct])
  orderProduct: OrderProduct[]

  @Field(() => String)
  status: string

  @Field(() => String, { nullable: true })
  paymentId: string

  @Field(() => String, { nullable: true })
  paymentMethod: string
}
