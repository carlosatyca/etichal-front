import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  constructor(private ApiService: ApiService) { }
  callAPI(){
    console.log("Button clicked")
    this.ApiService.getWifi();
  }
}
