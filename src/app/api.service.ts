import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  getWifi(){
    return this.http.get('https://back-eth.onrender.com/wifi').subscribe((data) => {
      console.log(data)
      });
}
}
