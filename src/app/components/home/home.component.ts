import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoggedIn: boolean = false;

  constructor(private userService: UserService, private router: Router) {
    
  }

  ngOnInit() {
    if (this.userService.isLoggedIn()) {
      this.isLoggedIn = true;
    } else {
      this.router.navigate(['login']);
    }
  }

}
