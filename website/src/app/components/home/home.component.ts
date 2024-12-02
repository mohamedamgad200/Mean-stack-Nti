import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  onFileChange(event: Event) {
    // if (event.target.files.length > 0) {
    // }
  }
  productForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    describtion: new FormControl(''),
  });
  addProduct() {
    let myFormData = new FormData();
    // myFormData.append({});
  }
}
