import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  @Input() login: boolean = true
  constructor(private user: UserService) { }

  loginModel = {
    email: '',
    password: ''
  }
  registerModel = {
    email: '',
    password: '',
    password2:''
  }
  ngOnInit(): void {
  }

  
  register(): void {
    this.user.Register(this.registerModel)
  }

  onLogin(): void {
    this.user.Login(this.loginModel)
  }

}
