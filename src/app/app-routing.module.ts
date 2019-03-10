import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from 'src/app/auth/auth.component';
import { HomeComponent } from 'src/app/home/home.component';
import { HotelComponent } from 'src/app/hotel/hotel.component';
import { HotelInfoComponent } from 'src/app/hotel/hotel-info/hotel-info.component';
import { HotelBookingComponent } from 'src/app/hotel/hotel-booking/hotel-booking.component';
import { HotelListComponent } from 'src/app/hotel/hotel-list/hotel-list.component';
import { CanBookGuard } from 'src/app/guards/can-book.guard';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent
  }, {
    path: 'home',
    component: HomeComponent,
  },
  { path: 'hotel', component: HotelComponent, },
  { path: 'hotel/:id', component: HotelInfoComponent },
  { path: 'hotel/:id/book', component: HotelBookingComponent, canActivate: [CanBookGuard] },
  {
    path: '',
    redirectTo: 'hotel',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
