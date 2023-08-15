import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

//**USAR ESTA CLASE**//

export class NavigationComponent implements OnInit {


  constructor(private usuariosService: UserService, private router: Router) {

  }

  ngOnInit(): void {
    // this.revelar = this.usuariosService.userAdmin();
    this.usuariosService.userAdmin();
  }

  esAdmin(): boolean {
    return this.usuariosService.userAdmin();
  }

  esUser():boolean{
    return this.usuariosService.userUser();
  }

  logOut() {
    console.log('log out!!');
    // console.log(this.revelar);
    // this.revelar = !this.revelar;
    this.usuariosService.logOut();
    this.router.navigate(['home']);
  }
}
  

