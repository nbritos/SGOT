import { Component, OnInit } from '@angular/core';
import { IRol } from 'src/app/models/rol.model';
import { IUser } from 'src/app/models/usuario.model';
import { RolService } from 'src/app/services/rol.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  user: IUser = {};
  roles: IRol[] = [];
  id_select: number = 1;
  indice: number = 0;
  usuarioNuevo: IUser = {};

  constructor(private rolService: RolService, private userService: UserService) {
    this.roles = [];
  }

  ngOnInit(): void {
    this.rolService.listarRoles().subscribe(
      (res: any) => {
        console.log(res)
        this.roles = (res);
      }
    );
  }

  seleccionaValor($event: any) {
    console.log("Elige: " + this.id_select)
    console.log("indice: ",this.indice);
    for (let i = 0; i < this.roles.length; i++) {
      if (this.id_select == this.roles[i].id_rol) {
        this.indice = i;
        break;
      }
    }
    console.log("indice: ",this.indice);
    console.log("idSelect: ",this.id_select);
  }

  // guardarUsuario() {
  //   const usuarioAAgregar: IUser = {};
  //   usuarioAAgregar.nombre = this.usuarioNuevo.nombre;
  //   usuarioAAgregar.apellido = this.usuarioNuevo.apellido;
  //   usuarioAAgregar.rol = this.id_select;
  //   usuarioAAgregar.email = this.usuarioNuevo.email;
  //   usuarioAAgregar.dni = this.usuarioNuevo.dni;
  //   usuarioAAgregar.password = this.usuarioNuevo.password;
  //   console.log("usuario a agregar: ", usuarioAAgregar);
  //   this.userService.guardarUsuario(usuarioAAgregar);
  //   this.ngOnInit();
  // }

  guardarUsuario() {
    this.usuarioNuevo.rol = this.indice;
    console.log(this.usuarioNuevo);
    this.userService.guardarUsuario(this.usuarioNuevo).subscribe(
      (res: any) => {
        console.log(res);
        this.ngOnInit();
        console.log(this.usuarioNuevo);
        this.usuarioNuevo = {};
      });
  }


  changeAvatar(event: any) {
    // Lógica para cambiar el avatar del usuario
    const file = event.target.files[0];
    console.log('Nuevo avatar:', file);
  }

  //seguir desarrollando las validaciones con sugerencias debajo
  validarCampos(): boolean {
    return true;
  }

  /**************************/

  //  validarCampos(): Boolean {
  //   console.log("Validando los campos del formulario!!!");
  //   this.errorDescripcion = this.verificarDescripcion(this.nuevo.descripcion);
  //   this.errorPrecio = this.verificarPrecio(this.nuevo.precio);
  //   if ((this.errorDescripcion + this.errorPrecio) > 0) {
  //     return false;
  //   }
  //   return true;
  // }

  // private verificarDescripcion(palabra: any): number {
  //   const patron = /^[A-Z][A-Za-z0-9áéíóúüñÑ\s.,\/-]{3,39}$/;
  //   if (palabra === undefined)
  //     return 1;
  //   if (palabra.length > 40)
  //     return 2;
  //   if (!patron.test(palabra))
  //     return 3;
  //   return 0;
  // }

  // private verificarPrecio(precio: any): number {
  //   const patron: RegExp = /^\d{1,4}(.\d{1,2})?$/;
  //   if (precio === undefined)
  //     return 1;
  //   // if (precio.length > 4)
  //   //   return 2;
  //   if (!patron.test(precio))
  //     return 3;
  //   return 0;
  // }


  //*******************************//

}
