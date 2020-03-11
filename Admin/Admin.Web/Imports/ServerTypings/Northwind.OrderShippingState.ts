namespace Admin.Northwind {
    export enum OrderShippingState {
        NotShipped = 0,
        Shipped = 1
    }
    Serenity.Decorators.registerEnumType(OrderShippingState, 'Admin.Northwind.OrderShippingState', 'Northwind.OrderShippingState');
}
