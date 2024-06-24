import { UserRepository } from '@app/application/ecommerce/ports/user.repository'
import { User } from '@app/application/order/order/user'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import mongoose, { Model } from 'mongoose'
import { User as UserMongoose } from '../entities/user.entity'
import { MongooseUserMapper } from '../mapper/mongoose-user-mapper'
import { MongooseUserDetailsMapper } from '../mapper/mongoose-user-details-mapper'

@Injectable()
export class MongooseUserRepository implements UserRepository {
  constructor(
    @InjectModel(UserMongoose.name)
    private readonly userModel: Model<UserMongoose>
  ) {}

  async findById(id: string): Promise<User> {
    const user = await this.userModel.findById(id)
    return MongooseUserDetailsMapper.toDomain(user)
  }

  async findMany(): Promise<User[]> {
    const findQuery = await this.userModel.find().populate(['orders'])

    return findQuery.map((item) => MongooseUserDetailsMapper.toDomain(item))
  }

  async create(user: User): Promise<User> {
    const data = MongooseUserMapper.toMongoose(user)
    const entity = new this.userModel({ ...data })
    await entity.save()

    return MongooseUserMapper.toDomain(entity)
  }

  async appendOrder(id: string, order: string): Promise<User> {
    const updatedUser = await this.userModel.findByIdAndUpdate(
      id,
      {
        $push: { orders: new mongoose.Types.ObjectId(order) }
      },
      { new: true }
    )

    return MongooseUserMapper.toDomain(updatedUser)
  }
}
