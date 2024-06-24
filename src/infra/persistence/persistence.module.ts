import { DynamicModule, Module } from '@nestjs/common'
import { MongooseModule } from './mongoose/mongoose.module'
import { PrismaModule } from './prisma/prisma.module'

interface DatabaseOptions {
  type: 'prisma' | 'mongoose'
  global?: boolean
}

@Module({})
export class PersistenceModule {
  static async register({
    global = false,
    type
  }: DatabaseOptions): Promise<DynamicModule> {
    const dbModule = type === 'mongoose' ? MongooseModule : PrismaModule

    return {
      global,
      module: PersistenceModule,
      imports: [dbModule],
      exports: [dbModule]
    }
  }
}
