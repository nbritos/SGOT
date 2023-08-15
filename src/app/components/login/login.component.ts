import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/models/usuario.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';

  nuevo: IUser = {};
  revelar: boolean = false;//permite mostrar u ocultar formulario y mensaje de error.
  error = 0;

  constructor(private userService: UserService, private router: Router) { 
    this.nuevo.nombre = "";
    this.nuevo.password = "";
  }

  ngOnInit(): void {
  }

  ingresar() {
    console.log("Iniciando sesion");
    // this.usuariosService.setToken();
    this.router.navigate(['home']);
    this.revelar = false;
  }

  reintentar() {
    this.revelar = false;
  }

  // validarUser(nombre: string, password: string): boolean {
  //   this.userService.loginUsuario(nombre, password).subscribe(
  //     (res: any) => {
  //       if (res.login == "ok") {
  //         console.log('Login exitoso' + res.mensaje);
  //         this.userService.setToken(res.token);
  //         this.userService.setId(res.idCurrentUser);
  //         this.router.navigate(['profile'])
  //       }
  //     }
  //   );
  //   return false;
  // }

  validarCampos(): boolean {
    console.log("Validando sesion");
    console.log(this.nuevo);
    this.userService.loginUsuario(this.nuevo).subscribe(
      (res: any) => {
        console.log(res);
        if (res.login == "ok") {
          console.log("Login exitoso => " + res.mensaje);
          this.userService.setToken(res.token);
          this.userService.setId(res.idCurrentUser);
          this.router.navigate(['profile']);
        }
      }
    );
    this.revelar = true;
    return false;
  }

  limpiarUsuario() {
    this.nuevo.nombre = "";
  }

  limpiarPassword() {
    this.nuevo.password = "";
  }


}