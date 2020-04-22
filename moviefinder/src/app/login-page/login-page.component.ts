import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  @Input() login: boolean = true
  constructor(private user: UserService, private router: Router) { }

  loginModel = {
    username: '',
    password: ''
  }
  registerModel = {
    username: '',
    password: '',
    password2:''
  }
  ngOnInit(): void {
  }

  
  register(): void {
    this.user.Register(this.registerModel)
  }

  onLogin(): void {
    this.user.Login(this.loginModel).subscribe(
      res => {
        localStorage.setItem('token', res.token)
        localStorage.setItem('username', this.loginModel.username)

        this.loginModel.password = '',
        this.loginModel.username = ''
        this.router.navigate(['home'])
      }
    )
  }

}
