import { Component } from '@angular/core';
import { MyserviceService } from '../services/myservice.service';

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrl: './mycomponent.component.css',
})
export class MycomponentComponent {
  constructor(private service: MyserviceService) {}
  send() {
    this.service.changeMessage('hello');
  }
}
