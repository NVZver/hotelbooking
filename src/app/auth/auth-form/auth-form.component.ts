import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth/auth.service';

export class ImmediateErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {
  formLogin: FormGroup;
  inputUserName: FormControl;
  inputPassword: FormControl;
  errorMatcher = new ImmediateErrorStateMatcher();

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    this.inputUserName = new FormControl('', [
      Validators.required
    ]);
    this.inputPassword = new FormControl('', [
      Validators.required
    ]);
    this.formLogin = new FormGroup({
      'userName': this.inputUserName,
      'password': this.inputPassword
    });
  }

  ngOnInit() {
  }

  submit() {
    if (this.formLogin.valid) {
      this.authService.login(this.inputUserName.value, this.inputPassword.value)
        .subscribe({
          next: res => {
            this.router.navigate(['home']);
          },
          error: err => {
            console.log(err);
          }
        });
    }
  }

}
