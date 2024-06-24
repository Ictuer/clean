import { ObjectType, Field } from '@nestjs/graphql'
import { Order } from './order.entity'

@ObjectType()
export class User {
  @Field(() => String)
  id: string

  @Field(() => String)
  name: string

  @Field(() => [Order])
  orders: Order[]
}
