import { Product } from '@app/application/order/entities/product'

export abstract class ProductRepository {
  abstract findById(id: string): Promise<Product>
  abstract findMany(): Promise<Product[]>
  abstract create(data: Product): Promise<Product>
}
