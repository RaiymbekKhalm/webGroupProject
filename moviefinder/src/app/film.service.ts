import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFilm } from 'src/assets/interfaces/film';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private _url: string = "assets/data/film.json"
  constructor(private http: HttpClient) { }

  getFilm(): Observable<IFilm[]> {
    return this.http.get<IFilm[]>(this._url)
  }
}
