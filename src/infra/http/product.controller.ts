import { CreateProductUseCase } from '@app/application/ecommerce/use-case/create-product'
import { GetProductsUseCase } from '@app/application/ecommerce/use-case/get-products'
import { CacheKey } from '@nestjs/cache-manager'
import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { HttpCacheInterceptor } from '../persistence/cache/interceptor/http-cache.interceptor'
import { CreateProductDto } from './dto/create-product.dto'

@ApiTags('Product')
@Controller('/products')
export class ProductController {
  constructor(
    private createProductUseCase: CreateProductUseCase,
    private getProductsUseCase: GetProductsUseCase
  ) {}

  @Get('')
  @CacheKey('products')
  @UseInterceptors(HttpCacheInterceptor)
  async getAll() {
    const response = this.getProductsUseCase.execute({})
    return response
  }

  @Post('')
  create(@Body() createProductDto: CreateProductDto) {
    const response = this.createProductUseCase.execute(createProductDto)
    return response
  }
}
