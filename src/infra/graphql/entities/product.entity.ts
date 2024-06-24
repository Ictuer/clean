import { ObjectType, Field, Int } from '@nestjs/graphql'

@ObjectType()
export class Product {
  @Field(() => String)
  id: string

  @Field(() => String)
  title: string

  @Field(() => Int)
  price: number
}
