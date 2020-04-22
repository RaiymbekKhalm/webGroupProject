import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IGenre } from 'src/assets/interfaces/genre';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  private _url: string = "http://localhost:8000/api/genres/"
  constructor(private http: HttpClient) { }

  getGenres(): Observable<IGenre[]> {
    return this.http.get<IGenre[]>(this._url)
  }
}
