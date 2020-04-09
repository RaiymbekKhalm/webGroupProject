import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public filmList = []
  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
    this.filmService.getFilm()
      .subscribe(data => {
        this.filmList = data
      })
  }

}
