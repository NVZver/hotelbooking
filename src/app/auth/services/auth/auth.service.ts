import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  backUrl = 'hotel';

  get isAuthorized(): boolean {
    return localStorage.getItem('isAuthorized') === 'true';
  }

  set isAuthorized(value: boolean) {
    localStorage.setItem('isAuthorized', value.toString());
  }

  constructor(
    private http: HttpClient
  ) {
    this.isAuthorized = false;
  }

  login(username: string, password: string): Observable<any> {
    const url = 'http://5c505db9ee97f600140480dd.mockapi.io/auth';
    const data = { username, password };
    return this.http.post(url, data).pipe(
      map(res => {
        console.log(res);
        localStorage.setItem('username', username);
        this.isAuthorized = true;
        return res;
      })
    );
  }

}
