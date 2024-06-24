import { OrderProductRepository } from '@app/application/ecommerce/ports/order-product.repository'
import { OrderRepository } from '@app/application/ecommerce/ports/order.repository'
import { ProductRepository } from '@app/application/ecommerce/ports/product.repository'
import { UserRepository } from '@app/application/ecommerce/ports/user.repository'
import { EnvModule, EnvService } from '@app/infra/env'
import { Module } from '@nestjs/common'
import { MongooseModule as MongooseModuleLib } from '@nestjs/mongoose'
import {
  OrderProduct,
  OrderProductSchema
} from './entities/order-product.entity'
import { Order, OrderSchema } from './entities/order.entity'
import { Product, ProductSchema } from './entities/product.entity'
import { User, UserSchema } from './entities/user.entity'

// Non exported
import { MongooseOrderProductRepository } from './repositories/mongoose-order-product.repository'
import { MongooseOrderRepository } from './repositories/mongoose-order.repository'
import { MongooseProductRepository } from './repositories/mongoose-product.repository'
import { MongooseUserRepository } from './repositories/mongoose-user.repository'

@Module({
  imports: [
    MongooseModuleLib.forRootAsync({
      imports: [EnvModule],
      useFactory: (envService: EnvService) => ({
        uri: envService.get('MONGODB_URL')
      }),
      inject: [EnvService]
    }),
    MongooseModuleLib.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Product.name, schema: ProductSchema },
      { name: Order.name, schema: OrderSchema },
      { name: OrderProduct.name, schema: OrderProductSchema }
    ])
  ],
  providers: [
    {
      provide: ProductRepository,
      useClass: MongooseProductRepository
    },
    {
      provide: UserRepository,
      useClass: MongooseUserRepository
    },
    {
      provide: OrderRepository,
      useClass: MongooseOrderRepository
    },
    {
      provide: OrderProductRepository,
      useClass: MongooseOrderProductRepository
    }
  ],
  exports: [
    ProductRepository,
    UserRepository,
    OrderRepository,
    OrderProductRepository
  ]
})
export class MongooseModule {}
