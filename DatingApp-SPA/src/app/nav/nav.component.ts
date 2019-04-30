import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  // empty object to store our username and password as an object from the form,
  // which we can then use to send the credentials to the server

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.model).subscribe(next => {
      console.log('Logged in successfully.')
    }, error => {
      console.log(error);
    });
  }

  loggedIn(){
    const token = localStorage.getItem("token");
    return !!token;
  }

  logOut(){
    localStorage.removeItem("token");
    console.log('logged out');
  }

}
