import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginError: string = "";
  loginForm: FormGroup;
  constructor( private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required,Validators.minLength(6)])
    });
  }

  onSubmit() {
    this.loginError=""
    if(this.loginForm.valid) {
      let userDetails=this.loginForm.value;
      if((userDetails.email=="meera@gmail.com")&&(userDetails.password=="123456")) {
        this.router.navigate(["/teacher"])
      }
      else if((userDetails.email=="student@gmail.com")&&(userDetails.password=="qwerty")) {
        this.router.navigate(["/students"])
      }
      else {
        alert("invalid email or password")
      }
      console.log(this._v());
    }
    else if(this.loginForm.get('email').hasError('required')) {
      this.loginError="Enter your email!"
    }
    else if(this.loginForm.get('password').hasError('minLength')) {
      this.loginError="minimum length of the password should be 6!"
    }
    else if(this.loginForm.get('password').hasError('required')) {
      this.loginError="password required!"
    }

  }
  _v() {
    return this.loginForm.value;
  }

  ngOnInit(){ }

}

