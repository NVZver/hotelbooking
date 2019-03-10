import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { AuthService } from './services/auth/auth.service';
import { AuthFormComponent } from 'src/app/auth/auth-form/auth-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AuthComponent,
    AuthFormComponent
  ],
  exports: [
    AuthComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
