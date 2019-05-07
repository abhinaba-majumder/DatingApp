import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = "http://localhost:5000/api/auth/";
  jwtHelper = new JwtHelperService();
  decodedToken: any;

constructor(private http: HttpClient) { }

  // in the func we are making the api request with the model object in the API body
  // and storing the response(token) locally so as to get an easy access
  // in order to do something with an observable when it comes from the server, we need to use RXJS operator
  // pipe enables us to chain rxjs operator
  login(model: any){
  return this.http.post(this.baseUrl + 'login', model)
    .pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem('token', user.token);
          this.decodedToken = this.jwtHelper.decodeToken(user.token);
          console.log(this.decodedToken);
        }
      })
    );
  }

  register(model: any){
    return this.http.post(this.baseUrl + 'register', model);
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }
}
