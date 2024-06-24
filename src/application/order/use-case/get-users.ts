import { Injectable } from '@nestjs/common'
import { UserRepository } from '../ports/user.repository'

interface GetUserUseCaseCommand {}

@Injectable()
export class GetUsersUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({}: GetUserUseCaseCommand): Promise<any> {
    const response = await this.userRepository.findMany()

    return response
  }
}
