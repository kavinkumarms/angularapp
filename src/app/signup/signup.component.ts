import { Component } from '@angular/core';
import {SignupLoginServiceService} from './signup-login-service.service'




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor (private signupLoginServiceService:SignupLoginServiceService){

  }
  displayBasic:boolean=false;
  submit(){
   // this.displayBasic=true;
  //  this.signupLoginServiceService.get();
  }
}
