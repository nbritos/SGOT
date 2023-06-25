import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {

  user: Usuario = {};


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
