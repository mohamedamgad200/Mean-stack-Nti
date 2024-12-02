import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyserviceService {
  constructor() {}
  private messageSource = new BehaviorSubject<string>('default message');
  currentMessage = this.messageSource.asObservable();
  changeMessage(msg: string) {
    let random = Math.random().toString();
    this.messageSource.next(random);
  }
}
