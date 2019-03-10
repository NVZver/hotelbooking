import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/hotel/services/hotel/hotel.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent implements OnInit {

  hotels: any[] = [];

  constructor(
    private hotelService: HotelService
  ) { }

  ngOnInit() {
    this.hotelService.getHotels()
      .subscribe({
        next: hotels => {
          this.hotels = hotels;
        },
        error: err => {
          console.log(err);
        }
      });
  }

}
