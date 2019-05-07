import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { registerContentQuery } from '@angular/core/src/render3';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter();


  model: any = {};

  constructor(private authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  register(){
    this.authService.register(this.model).subscribe(() => {
      this.alertify.success('Registration Successful');
    }, error => {
      this.alertify.error('Error');
    });
  }

  cancel(){
    this.cancelRegister.emit(false);
  }

}
