import { Component, OnInit, ViewChild } from '@angular/core';
import { products } from '../models/IProduct';
import { ProductComponent } from './product/product.component';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  // providers: [DataService],
})
export class ProductsComponent implements OnInit {
  constructor(private data: DataService) {}
  ngOnInit(): void {
    // const myData = new DataService();
    // this.products = myData.products;
    this.products = this.data.getData();
  }
  products: products[] = [];
  @ViewChild(ProductComponent) mychild!: ProductsComponent;
  change() {
    this.products[0].name = 'new name';
    this.mychild.msg = 'Hello';
    this.products = this.data.getData();
  }
  msg = '';
  onLike(message: string) {
    this.msg = message;
  }
  deleteProduct() {
    this.products = this.data.getData();
  }
}
