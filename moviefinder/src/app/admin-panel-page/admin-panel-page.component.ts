import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-admin-panel-page',
  templateUrl: './admin-panel-page.component.html',
  styleUrls: ['./admin-panel-page.component.css']
})
export class AdminPanelPageComponent implements OnInit {

  constructor(private panel: FilmService) { }

  panelModel = {
    title: '',
    image: '',
    description: '',
    ganre: '',
    details: ''
  }

  ngOnInit(): void {
  }

  onClick(): void {
    this.panel.createFilm(this.panelModel)
  }
}
