import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css',
})
export class PipeComponent {
  name = 'ali sayed ahmed';
  nameTwo = 'ALI SAYED AHMED';

  myDate = new Date();

  grade = 22 / 150;

  price = 22.58566555;
  asyncData = new Promise((res, rej) => {
    setTimeout(() => {
      res('data from promise');
    }, 3000);
  });
}
