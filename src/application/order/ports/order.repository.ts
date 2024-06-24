import { Order } from '@app/application/order/entities/order'

export abstract class OrderRepository {
  abstract findMany(): Promise<Order[]>
  abstract findById(id: string): Promise<Order>
  abstract create(data: Order): Promise<Order>
  abstract update(id: string, data: Order): Promise<Order>
}
