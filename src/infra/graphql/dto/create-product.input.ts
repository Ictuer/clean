import { CreateProductUseCaseCommand } from '@app/application/ecommerce/use-case/create-product'
import { Field, InputType, Int } from '@nestjs/graphql'

@InputType()
export class CreateProductInput implements CreateProductUseCaseCommand {
  @Field(() => String)
  title: string

  @Field(() => Int)
  price: number
}
