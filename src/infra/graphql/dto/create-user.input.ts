import { CreateUserUseCaseCommand } from '@app/application/ecommerce/use-case/create-user'
import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class CreateUserInput implements CreateUserUseCaseCommand {
  @Field(() => String)
  name: string
}
