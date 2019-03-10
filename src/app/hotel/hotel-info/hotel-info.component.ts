import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelService } from 'src/app/hotel/services/hotel/hotel.service';

@Component({
  selector: 'app-hotel-info',
  templateUrl: './hotel-info.component.html',
  styleUrls: ['./hotel-info.component.scss']
})
export class HotelInfoComponent implements OnInit {

  hotel: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private hotelService: HotelService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (paramMap.has('id')) {
        this.getHotel(paramMap.get('id'));
      }
    });
  }

  getHotel(id) {
    this.hotelService.getHotel(id).subscribe({
      next: hotel => {
        console.log('hotel: ', hotel);
        this.hotel = hotel;
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
