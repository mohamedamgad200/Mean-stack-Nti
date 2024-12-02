import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../services/myservice.service';

@Component({
  selector: 'app-yourcomponent',
  templateUrl: './yourcomponent.component.html',
  styleUrl: './yourcomponent.component.css',
})
export class YourcomponentComponent implements OnInit {
  constructor(private service: MyserviceService) {}
  ngOnInit(): void {
    this.service.currentMessage.subscribe((message) => (this.mymsg = message));
  }
  mymsg = '';
}
