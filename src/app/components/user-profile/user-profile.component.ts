import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-user-profile',
  templateUrl:'user-profile.component.html',
  styleUrls: ['user-profile.component.css']
})

export class UserProfileComponent implements OnInit {

  user: IUser = {};

  ngOnInit() {
    // Inicializa los datos del usuario
    this.user = {

    };
  }

  saveUser() {
    // Lógica para guardar los cambios del usuario
    console.log('Guardando los cambios del usuario:', this.user);
  }

  changeAvatar(event: any) {
    // Lógica para cambiar el avatar del usuario
    const file = event.target.files[0];
    // Código para subir el archivo y actualizar el avatar
    console.log('Nuevo avatar:', file);
  }
}
