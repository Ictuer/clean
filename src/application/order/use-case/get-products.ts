import { Injectable } from '@nestjs/common'
import { ProductRepository } from '../ports/product.repository'

interface GetProductUseCaseCommand {}

@Injectable()
export class GetProductsUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute({}: GetProductUseCaseCommand): Promise<any> {
    const response = await this.productRepository.findMany()

    return response
  }
}
