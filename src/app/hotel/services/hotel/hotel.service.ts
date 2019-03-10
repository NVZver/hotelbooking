import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

const URL__HOTELS = 'http://5c505db9ee97f600140480dd.mockapi.io/hotels';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(
    private http: HttpClient
  ) { }

  getHotels(): Observable<any> {
    const options = {};
    return this.http.get(URL__HOTELS, options);
  }

  getHotel(id): Observable<any> {
    return this.getHotels().pipe(
      map((hotels: any[]) => {
        return hotels.find(hotel => hotel.id === id);
      })
    );
  }

  bookHotel(data): Observable<any> {
    const url = 'http://5c505db9ee97f600140480dd.mockapi.io/booking';
    return this.http.post(url, data, {});
  }
}
