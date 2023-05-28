import { Injectable } from "@angular/core";
import { Order } from "../models/order.model";


@Injectable({
    providedIn: 'root'
})

export class OrderService {
    private orders: Order[] = [];

    constructor() { }

    getOrders(): Order[] {
        return this.orders;
    }

    createOrder(order: Order): void {
        this.orders.push(order);
    }

    updateOrderStatus(orderId: number, newStatus: string): void {

        const order=this.orders.find(o=> o.id===orderId);
        //si encuentra la orden..
        if (order){
            //cambia al nuevo estado pasado por parámetro
            order.status=newStatus;
        } 
    }

}
