import { Injectable } from '@nestjs/common'
import { ProductRepository } from '../ports/product.repository'

@Injectable()
export class GetProductUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute(id: string): Promise<any> {
    const response = await this.productRepository.findById(id)

    return response
  }
}
