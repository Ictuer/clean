import { Module } from '@nestjs/common'
import { GraphQLModule as GraphQL } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { join } from 'path'
import { OrderResolver } from './order.resolver'
import { GetOrderUseCase } from '@app/application/ecommerce/use-case/get-order'
import { GetOrdersUseCase } from '@app/application/ecommerce/use-case/get-orders'
import { GetUserUseCase } from '@app/application/ecommerce/use-case/get-user'
import { GetUsersUseCase } from '@app/application/ecommerce/use-case/get-users'
import { UserResolver } from './user.resolver'
import { CreateProductUseCase } from '@app/application/ecommerce/use-case/create-product'
import { CreateOrderUseCase } from '@app/application/ecommerce/use-case/create-order'
import { CreateUserUseCase } from '@app/application/ecommerce/use-case/create-user'
import { ProductResolver } from './product.resolver'
import { GetProductsUseCase } from '@app/application/ecommerce/use-case/get-products'
import { GetProductUseCase } from '@app/application/ecommerce/use-case/get-product'

@Module({
  imports: [
    GraphQL.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      playground: true
    })
  ],
  providers: [
    GetOrderUseCase,
    GetOrdersUseCase,
    CreateUserUseCase,
    GetUserUseCase,
    GetUsersUseCase,
    CreateProductUseCase,
    CreateOrderUseCase,
    CreateUserUseCase,
    GetProductUseCase,
    GetProductsUseCase,
    OrderResolver,
    UserResolver,
    ProductResolver
  ]
})
export class GraphQLModule {}
