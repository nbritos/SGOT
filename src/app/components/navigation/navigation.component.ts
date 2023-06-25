import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  revelar = true;

  // constructor(private usuariosService: UserService, private router: Router) { }


  logOut() {
    console.log('log out!!');
    console.log(this.revelar);
    this.revelar=!this.revelar;
    // this.usuariosService.logOut();
    // this.router.navigate(['usuarios/principal']);
  }

  // esAdmin():boolean{
  //   return this.usuariosService.esAdmin();;
  // }

  // ngOnInit(): void {
  // }

  // muestra(){
  //   console.log("principal");
  // }
}
