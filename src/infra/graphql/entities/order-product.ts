import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class OrderProduct {
  @Field(() => String)
  id: string

  @Field(() => String)
  product: string

  @Field(() => String)
  orderId: string

  @Field(() => Int)
  price: number
}
