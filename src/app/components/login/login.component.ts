import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string='';
  password: string='';
  error: boolean = false;

  constructor(private router: Router) {}

  onSubmit() {
    // Validar campos de entrada aquí
    if (this.username === 'Fernando' && this.password === 'pp3') {
      // Si las credenciales son correctas, navegar a la página de inicio
      this.router.navigate(['orders']);
    } else {
      // Si las credenciales son incorrectas, mostrar un mensaje de error
      this.error = true;
    }
  }
}