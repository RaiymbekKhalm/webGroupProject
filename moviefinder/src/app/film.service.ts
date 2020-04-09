import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFilm } from 'src/assets/interfaces/film';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private _url: string = "assets/data/film.json"
  private httpheaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }

  getFilm(): Observable<IFilm[]> {
    return this.http.get<IFilm[]>(this._url)
  }

  createFilm(film): Observable<IFilm> {
    return this.http.post<IFilm>(this._url, film, this.httpheaders)
  }
}
