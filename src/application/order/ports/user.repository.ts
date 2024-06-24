import { User } from '@app/application/order/order/user'

export abstract class UserRepository {
  abstract findById(id: string): Promise<User>
  abstract findMany(): Promise<User[]>
  abstract create(data: User): Promise<User>
  abstract appendOrder(userId: string, orderId: string): Promise<User>
}
