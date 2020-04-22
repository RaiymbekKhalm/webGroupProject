import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-admin-panel-page',
  templateUrl: './admin-panel-page.component.html',
  styleUrls: ['./admin-panel-page.component.css']
})
export class AdminPanelPageComponent implements OnInit {
  toggle: boolean = false
  constructor(private panel: FilmService) { }

  panelModel = {
    name: '',
    image: '',
    description: '',
    genre: '',
    text: '',
    publisher: ''
  }

  ngOnInit(): void {
    this.panelModel.publisher = localStorage.getItem('username')
  }

  onClick(): void {
    
    let isEmpty = this.isEmpty(this.panelModel)
    if(isEmpty) {

      console.log('notempty')

      this.panel.createFilm(this.panelModel).subscribe()
      this.toggle = true
      setTimeout(() => {
        this.toggle = false
        this.panelModel = {
          name: '',
          image: '',
          description: '',
          genre: '',
          text: '',
          publisher: ''
        }
      }, 2000)
    }
    else {
      console.log('empty')
    }
  }



  isEmpty(obj) {
    for(let i in obj) {
      if(obj[i] !== null && obj[i] !== "")
        return true
    }
    return false
  }
}
