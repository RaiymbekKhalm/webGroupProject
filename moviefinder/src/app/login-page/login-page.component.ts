import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  @Input() login: boolean = true
  constructor() { }

  ngOnInit(): void {
  }

}
