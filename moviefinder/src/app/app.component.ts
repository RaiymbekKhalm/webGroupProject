import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'moviefinder';
  logged: boolean = false

  ngOnInit() {
    console.log('hello')
    let token = localStorage.getItem('token')
    if(token) {
      this.logged = true
    }
  }

  onLogout() {
    this.logged = false
    localStorage.clear()
  }
}
