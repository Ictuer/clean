import { ProductRepository } from '@app/application/ecommerce/ports/product.repository'
import { Module } from '@nestjs/common'
import { PrismaService } from './prisma.service'
import { EnvModule } from '@app/infra/env'
import { OrderProductRepository } from '@app/application/ecommerce/ports/order-product.repository'
import { UserRepository } from '@app/application/ecommerce/ports/user.repository'
import { OrderRepository } from '@app/application/ecommerce/ports/order.repository'

// Non exported
import { PrismaProductRepository } from './repositories/prisma-product.repository'
import { PrismaUserRepository } from './repositories/prisma-user.repository'
import { PrismaOrderRepository } from './repositories/prisma-order.repository'
import { PrismaOrderProductRepository } from './repositories/prisma-order-product.repository'

@Module({
  imports: [EnvModule],
  providers: [
    PrismaService,
    {
      provide: ProductRepository,
      useClass: PrismaProductRepository
    },
    {
      provide: UserRepository,
      useClass: PrismaUserRepository
    },
    {
      provide: OrderRepository,
      useClass: PrismaOrderRepository
    },
    {
      provide: OrderProductRepository,
      useClass: PrismaOrderProductRepository
    }
  ],
  exports: [
    PrismaService,
    ProductRepository,
    UserRepository,
    OrderRepository,
    OrderProductRepository
  ]
})
export class PrismaModule {}
