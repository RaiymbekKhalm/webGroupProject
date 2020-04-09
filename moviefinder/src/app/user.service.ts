import { Injectable } from '@angular/core';
import { HttpHeaders, HttpUrlEncodingCodec, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../assets/interfaces/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private httpheaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  private url = 'api/'
  constructor(private http: HttpClient) { }

  Register(user): Observable<IUser> {
    return this.http.post<IUser>(this.url+'register', user, this.httpheaders)
  }

  Login(user): Observable<IUser> {
    return this.http.post<IUser>(this.url + 'login', user, this.httpheaders)
  }
}
