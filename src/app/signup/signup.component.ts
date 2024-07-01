import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  displayBasic:boolean=false;
  submit(){
   // this.displayBasic=true;
  }
}
