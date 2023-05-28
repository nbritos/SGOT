import { Component } from '@angular/core';
import { Order } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services/order.service';


@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})

export class CreateOrderComponent {

  newOrder: Order = {
    id: 0,
    title: '',
    description: '',
    assignedTo: '',
    status: 'Pending'
  };

  constructor(private orderService: OrderService) { }

  createOrder(): void {
    this.orderService.createOrder(this.newOrder);
    this.newOrder = {
      id: 0,
      title: '',
      description: '',
      assignedTo: '',
      status: 'Pending'
    }
  }
}
