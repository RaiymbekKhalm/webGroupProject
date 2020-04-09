import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-movie-detail-page',
  templateUrl: './movie-detail-page.component.html',
  styleUrls: ['./movie-detail-page.component.css']
})
export class MovieDetailPageComponent implements OnInit {
  public film
  constructor(private route: ActivatedRoute, private filmService: FilmService) { }
  public id = this.route.snapshot.paramMap.get('movie_id')
  ngOnInit(): void {
    this.filmService.getFilm()
      .subscribe(data => {
        this.film = data.find(o => o.id == this.id)
      })
  }

}
