import { GraphQLModule } from '@app/infra/graphql/graphql.module'
import { HttpModule } from '@app/infra/http/http.module'
import { Module } from '@nestjs/common'

@Module({
  imports: [HttpModule, GraphQLModule],
  controllers: [],
  providers: []
})
export class EcommerceModule {}
