import { NgModule } from '@angular/core';
import { HomeComponent } from 'src/app/home/home.component';
import { HotelModule } from 'src/app/hotel/hotel.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    HotelModule
  ],
  providers: [
  ]
})
export class HomeModule { }

