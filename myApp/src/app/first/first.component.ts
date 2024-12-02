import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrl: './first.component.css',
})
export class FirstComponent {
  name = 'amgad';
  imgsrc =
    'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  isActive = true;
  fontSize = '50px';
  sayHello(event: any): void {
    this.isActive = !this.isActive;
    this.fontSize = '100px';
    event.target.innerText = 'Hello mohamed';
    console.log(event.target.innerText);
  }
  names = ['ahmed', 'ibrahim', 'morsy'];
  myTech: tec[] = [
    {
      id: 1,
      name: 'MongoDB',
      desc: 'A NoSQL database known for its flexibility and scalability, often used for storing JSON-like documents.',
      logoUrl:
        'https://webassets.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png',
    },
    {
      id: 2,
      name: 'Express',
      desc: 'A lightweight and fast web application framework for Node.js, ideal for building REST APIs.',
      logoUrl:
        'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png',
    },
    {
      id: 3,
      name: 'Angular',
      desc: 'A robust front-end framework for building dynamic web applications, developed by Google.',
      logoUrl: 'https://angular.io/assets/images/logos/angular/angular.svg',
    },
    {
      id: 4,
      name: 'Node.js',
      desc: "A JavaScript runtime built on Chrome's V8 JavaScript engine, commonly used for building scalable network applications.",
      logoUrl: 'https://nodejs.org/static/images/logo.svg',
    },
  ];
  delete(id: number): void {
    this.myTech = this.myTech.filter((element) => element.id !== id);
  }
}
interface tec {
  id: number;
  name: string;
  desc: string;
  logoUrl: string;
}
