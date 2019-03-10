
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { HotelComponent } from 'src/app/hotel/hotel.component';
import { HotelService } from 'src/app/hotel/services/hotel/hotel.service';
import { HotelListComponent } from 'src/app/hotel/hotel-list/hotel-list.component';
import { HotelInfoComponent } from 'src/app/hotel/hotel-info/hotel-info.component';
import { HotelBookingComponent } from 'src/app/hotel/hotel-booking/hotel-booking.component';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatButtonModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatSnackBarModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HotelComponent,
    HotelListComponent,
    HotelInfoComponent,
    HotelBookingComponent
  ],
  exports: [
    HotelComponent,
    HotelInfoComponent,
    HotelBookingComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [
    HotelService
  ]
})
export class HotelModule { }

