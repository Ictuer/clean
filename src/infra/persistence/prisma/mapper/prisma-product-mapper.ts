import { Product } from '@app/application/order/entities/product'
import { Prisma, Product as PrismaProduct } from '@prisma/client'

export class PrismaProductMapper {
  static toDomain(entity: PrismaProduct): Product {
    const model = new Product({
      id: entity.id,
      title: entity.title,
      price: entity.price
    })
    return model
  }

  static toPrisma(product: Product): Prisma.ProductUncheckedCreateInput {
    return {
      title: product.title,
      price: product.price
    }
  }
}
