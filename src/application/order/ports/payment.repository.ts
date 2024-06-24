import { Order } from '@app/application/order/entities/order'

export abstract class PaymentRepository {
  abstract generateUrl(orderId: string): Promise<string>
  abstract complete(paymentInput: any): Promise<Order>
}
