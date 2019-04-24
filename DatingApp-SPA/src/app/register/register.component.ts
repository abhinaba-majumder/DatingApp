import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { registerContentQuery } from '@angular/core/src/render3';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter();


  model: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  register(){
    this.authService.register(this.model).subscribe(() => {
      console.log('Registration Successful');
    }, error => {
      console.log('Error');
    });
  }

  cancel(){
    this.cancelRegister.emit(false);
    console.log('Cancelled');
  }

}
