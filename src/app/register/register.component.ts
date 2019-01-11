import { Component, OnInit } from '@angular/core'; 
import { AuthService } from '../auth/auth.service';
import { SignUpInfo } from '../auth/signup-info';
import { FormControl, FormGroup } from '@angular/forms'
import { Validators } from '@angular/forms';

 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerModel = new FormGroup({
    name : new FormControl('',[Validators.required, Validators.maxLength(15)]),
    username: new FormControl('',[Validators.required, Validators.maxLength(15)]),
    mail: new FormControl('',[Validators.required, Validators.pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}")]),
    password: new FormControl('',Validators.required)   
    
    });  
  signupInfo: SignUpInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';
 
  constructor(private authService: AuthService) { }
 
  ngOnInit() { }
  get f() { return this.registerModel.controls; }
  onSubmit() {
    console.log(this.registerModel);
   
    this.signupInfo = new SignUpInfo(
      this.registerModel.get('name').value,
      this.registerModel.get('username').value,
      this.registerModel.get('mail').value,
      this.registerModel.get('password').value
      
      );
 
    this.authService.signUp(this.signupInfo).subscribe(
      data => {
        console.log(data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}