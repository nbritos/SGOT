import { Component } from '@angular/core';
import { Order } from 'src/app/models/orden.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {
  orders: Order[] = [];
  // user:User={};

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orders = this.orderService.getOrders();
  }
}
