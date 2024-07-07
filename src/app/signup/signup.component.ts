import { Component,OnInit } from '@angular/core';
import {SignupLoginServiceService} from './signup-login-service.service'
import {
  FormBuilder,
  FormControlName,
  FormGroup,
  Validators,
} from '@angular/forms';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor (private fb: FormBuilder,private signupLoginServiceService:SignupLoginServiceService){

  }
  userForm: any = FormGroup;
  displayBasic:boolean=false;
  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['',[ Validators.required, Validators.email]],
      
    });
  }
  submit(){
   // this.displayBasic=true;
  //  this.signupLoginServiceService.get();
console.log(this.userForm)
  }
}
