import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupLoginServiceService {

  constructor(private http: HttpClient) { }
  
  getEmployees() {
    // return this.svc.get();
  }
  get() {
     this.http.get('https://localhost:7012/WeatherForecast').subscribe(data=>{
      console.log(data)
    })
  }
}
