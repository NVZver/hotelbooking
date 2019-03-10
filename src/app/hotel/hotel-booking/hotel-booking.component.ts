import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { HotelService } from 'src/app/hotel/services/hotel/hotel.service';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hotel-booking',
  templateUrl: './hotel-booking.component.html',
  styleUrls: ['./hotel-booking.component.scss']
})
export class HotelBookingComponent implements OnInit {

  formBooking: FormGroup;
  hotel;

  constructor(
    private hotelService: HotelService,
    private snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {
    this.formBooking = new FormGroup({
      'contactName': new FormControl('', [Validators.required]),
      'contactPhone': new FormControl('', [Validators.required]),
      'dateStart': new FormControl('', [Validators.required]),
      'dateEnd': new FormControl('', [Validators.required]),
      'peopleNumber': new FormControl(1, [Validators.required])
    });

    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.getHotel(paramMap.get('id'));
    });
  }

  ngOnInit() {
  }

  getHotel(id) {
    this.hotelService.getHotel(id).subscribe({
      next: hotel => {
        this.hotel = hotel;
      },
      error: err => {
        console.log(err);
      }
    });
  }

  bookHotel() {
    console.log(this.formBooking);
    this.hotelService.bookHotel({ ...this.formBooking.value, id: this.hotel.id }).subscribe({
      next: res => {
        console.log(res);

        this.snackBar.open('Done', 'Close', {
          duration: 500,
          horizontalPosition: 'right'
        });
      },
      error: err => {
        console.log(err);
      }
    });
  }

  cancel() {
    this.location.back();
  }
}
