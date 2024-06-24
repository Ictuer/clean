import { User } from '@app/application/order/order/user'
import { Injectable } from '@nestjs/common'
import { UserRepository } from '../ports/user.repository'

export interface CreateUserUseCaseCommand {
  name: string
}

@Injectable()
export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({ name }: CreateUserUseCaseCommand): Promise<any> {
    const user = new User({
      name
    })

    const response = await this.userRepository.create(user)

    return response
  }
}
