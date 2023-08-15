import { Injectable } from "@angular/core";
import { Order } from "../models/orden.model";
import { HttpClient } from "@angular/common/http";


@Injectable({
    providedIn: 'root'
})

//**HARDCODEADO**//
export class OrderService {

    API_URI = 'http://localhost:3000/ordenes';
    private orders: Order[] = [];


    constructor(private http: HttpClient) {
        this.orders = [{
            id: 1,
            title: 'Caldera 1 rota',
            description: 'Reparar fuga en caja de humo',
            assignedTo: 'Sabrina',
            status: 'Backorder'
        },
        {
            id: 2,
            title: 'Caldera 15 rota',
            description: 'Pérdida de aceite en compresora',
            assignedTo: 'Claudio',
            status: 'En proceso'
        },
        ]
    }

    getOrders(): Order[] {
        return this.orders;
    }

    createOrder(order: Order): void {
        this.orders.push(order);
    }

    updateOrderStatus(orderId: number, newStatus: string): void {

        const order = this.orders.find(o => o.id === orderId);
        //si encuentra la orden..
        if (order) {
            //cambia al nuevo estado pasado por parámetro
            order.status = newStatus;
        }
    }

    listarTecnicos() {
        return this.http.get(`${this.API_URI}/tecnicos`);
    }

}
