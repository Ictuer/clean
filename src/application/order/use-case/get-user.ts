import { Injectable } from '@nestjs/common'
import { UserRepository } from '../ports/user.repository'

@Injectable()
export class GetUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(id: string): Promise<any> {
    const response = await this.userRepository.findById(id)

    return response
  }
}
