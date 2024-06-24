import { Product } from '@app/application/order/entities/product'
import { Injectable } from '@nestjs/common'
import { ProductRepository } from '../ports/product.repository'

export interface CreateProductUseCaseCommand {
  title: string
  price: number
}

@Injectable()
export class CreateProductUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute({ title, price }: CreateProductUseCaseCommand): Promise<any> {
    const product = new Product({
      title,
      price
    })

    const response = await this.productRepository.create(product)

    return response
  }
}
