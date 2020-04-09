import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  public filmList = []
  constructor(private route: ActivatedRoute, private filmService: FilmService) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.filmService.getFilm()
        .subscribe(data => {
          this.filmList = data.filter(o => o.genre == param.id)
        })
    })
  }

}
