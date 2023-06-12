import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/orden.model';
import { OrderService } from 'src/app/services/order.service';


@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})

export class CreateOrderComponent implements OnInit {

  newOrder: Order = {
    id: 0,
    title: '',
    description: '',
    assignedTo: '',
    status: ''
  };

  availableUsers: string[] = []; // Obtén esta lista de usuarios desde tu base de datos
  isFileSelected: boolean = false;

  constructor(private orderService: OrderService) {
  }

  ngOnInit() {
    console.log("En este instante el componente ha cargado");
    this.availableUsers = ['User 1', 'User 2', 'User 3'];//llamar al servicio
  }

  createOrder(): void {
    this.orderService.createOrder(this.newOrder);
    this.newOrder = {
      id: 0,
      title: '',
      description: '',
      assignedTo: '',
      status: ''
    };
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      this.isFileSelected = true;
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.newOrder.fotoCaldera = reader.result as string;
      };
    } else {
      this.isFileSelected = false;
    }
  }

  removeFile(): void {
    this.newOrder.fotoCaldera = '';
    this.isFileSelected = false;
  }

}
