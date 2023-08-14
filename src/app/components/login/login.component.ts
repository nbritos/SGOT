import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/models/usuario.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  ingreso: IUser = {};
  revelar: boolean = false;//permite mostrar u ocultar formulario y mensaje de error.
  error=0;
  
  constructor(private userService: UserService, private router: Router) { }


  ingresar() {
    console.log("Iniciando sesion");
    // this.usuariosService.setToken();
    this.router.navigate(['usuarios/home']);
    this.revelar = false;
  }

  validarUser(nombre: string, password: string) : boolean{
    this.userService.loginUsuario(nombre, password).subscribe(
      (res:any) => {
        if (res.login == 'ok'){
          console.log('Login exitoso');
          this.userService.setToken(res.token);
          this.userService.setId(res.idCurrentUser);
          this.router.navigate(['usuarios/home'])
        }
      }
    );
    return false;
  }

  reintentar() {
    this.revelar = false;
  }
}