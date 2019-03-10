import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(username: string, password: string): Observable<any> {
    const url = 'http://5c505db9ee97f600140480dd.mockapi.io/auth';
    const data = { username, password };
    return this.http.post(url, data);
  }

}
