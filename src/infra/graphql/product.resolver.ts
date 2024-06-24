import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CreateProductInput } from './dto/create-product.input'
import { CreateProductUseCase } from '@app/application/ecommerce/use-case/create-product'
import { Product } from './entities/product.entity'
import { GetProductsUseCase } from '@app/application/ecommerce/use-case/get-products'
import { GetProductUseCase } from '@app/application/ecommerce/use-case/get-product'

@Resolver(() => Product)
export class ProductResolver {
  constructor(
    private getProductUseCase: GetProductUseCase,
    private getProductsUseCase: GetProductsUseCase,
    private createProductUseCase: CreateProductUseCase
  ) {}

  @Query(() => Product)
  async product(@Args('id', { type: () => String }) id: string) {
    return this.getProductUseCase.execute(id)
  }

  @Query(() => [Product])
  async products() {
    return this.getProductsUseCase.execute({})
  }

  @Mutation(() => Product)
  createProduct(
    @Args('payload', { type: () => CreateProductInput })
    payload: CreateProductInput
  ) {
    return this.createProductUseCase.execute(payload)
  }
}
