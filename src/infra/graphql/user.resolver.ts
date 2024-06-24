import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { User } from './entities/user.entity'
import { GetUserUseCase } from '@app/application/ecommerce/use-case/get-user'
import { GetUsersUseCase } from '@app/application/ecommerce/use-case/get-users'
import { CreateUserUseCase } from '@app/application/ecommerce/use-case/create-user'
import { CreateUserInput } from './dto/create-user.input'

@Resolver(() => User)
export class UserResolver {
  constructor(
    private getUserUseCase: GetUserUseCase,
    private getUsersUseCase: GetUsersUseCase,
    private createUserUseCase: CreateUserUseCase
  ) {}

  @Query(() => User)
  async user(@Args('id') id: string) {
    return this.getUserUseCase.execute(id)
  }

  @Query(() => [User])
  async users() {
    return this.getUsersUseCase.execute({})
  }

  @Mutation(() => User)
  createUser(
    @Args('payload', { type: () => CreateUserInput }) payload: CreateUserInput
  ) {
    return this.createUserUseCase.execute(payload)
  }
}
