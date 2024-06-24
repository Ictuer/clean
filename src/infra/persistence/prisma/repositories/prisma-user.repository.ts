import { UserRepository } from '@app/application/ecommerce/ports/user.repository'
import { User } from '@app/application/order/order/user'
import { Injectable } from '@nestjs/common'
import { PrismaUserMapper } from '../mapper/prisma-user-mapper'
import { PrismaService } from '../prisma.service'
import { PrismaUserDetailsMapper } from '../mapper/prisma-user-details-mapper'

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}

  async findById(id: string): Promise<User> {
    const user = await this.prisma.user.findFirst({
      where: { id }
    })

    return PrismaUserDetailsMapper.toDomain(user)
  }

  async findMany(): Promise<User[]> {
    const users = await this.prisma.user.findMany({
      include: {
        orders: true
      }
    })

    return users.map((item) => PrismaUserDetailsMapper.toDomain(item))
  }

  async create(user: User): Promise<User> {
    const data = PrismaUserMapper.toPrisma(user)
    const entity = await this.prisma.user.create({ data })

    return PrismaUserMapper.toDomain(entity)
  }

  async appendOrder(userId: string, orderId: string): Promise<User> {
    const user = await this.prisma.user.update({
      where: { id: userId },
      data: {
        orders: {
          connect: { id: orderId }
        }
      }
    })

    return PrismaUserMapper.toDomain(user)
  }
}
