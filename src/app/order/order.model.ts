class Order {
  constructor(
    public address: string,
    public number: number,
    public optionalAddress: string,
    public paymentOption: string,
    public OrderItems: OrderItem[] = []
  ){}
}

class OrderItem {
    constructor(public quantity: number, public memuId: string) {}
}

export {Order, OrderItem}
