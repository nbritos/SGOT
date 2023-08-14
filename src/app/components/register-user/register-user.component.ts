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
    for (let i = 0; i < this.roles.length; i++) {
      if (this.id_select == this.roles[i].id_rol) {
        this.indice = i;
        break;
      }
    }
    console.log(this.indice);
  }

  guardarUsuario() {
    const usuarioAAgregar: IUser = {};
    usuarioAAgregar.nombre = this.usuarioNuevo.nombre;
    usuarioAAgregar.apellido = this.usuarioNuevo.apellido;
    usuarioAAgregar.rol = this.id_select;
    usuarioAAgregar.email = this.usuarioNuevo.email;
    usuarioAAgregar.dni = this.usuarioNuevo.dni;
    usuarioAAgregar.password = this.usuarioNuevo.password;
    this.userService.guardarUsuario(usuarioAAgregar);
    this.ngOnInit();
    // console.log(usuarioAAgregar);
  }

  changeAvatar(event: any) {
    // Lógica para cambiar el avatar del usuario
    const file = event.target.files[0];
    console.log('Nuevo avatar:', file);
  }

  validarCampos(): boolean {
    return true;
  }
}
