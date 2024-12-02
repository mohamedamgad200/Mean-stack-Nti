import { Injectable } from '@angular/core';
import { products } from '../models/IProduct';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}
  products: products[] = [
    {
      id: 1,
      name: 'Laptop',
      desc: 'High-performance laptop for all your needs',
      imageUrl: 'https://picsum.photos/seed/laptop/500/500',
    },
    {
      id: 2,
      name: 'Smartphone',
      desc: 'Latest smartphone with all the modern features',
      imageUrl: 'https://picsum.photos/seed/smartphone/500/500',
    },
    {
      id: 3,
      name: 'Headphones',
      desc: 'Noise-canceling headphones for immersive sound',
      imageUrl: 'https://picsum.photos/seed/headphones/500/500',
    },
    {
      id: 4,
      name: 'Camera',
      desc: 'DSLR camera for capturing high-quality photos',
      imageUrl: 'https://picsum.photos/seed/camera/500/500',
    },
    {
      id: 5,
      name: 'Smartwatch',
      desc: 'Stylish smartwatch with multiple features',
      imageUrl: 'https://picsum.photos/seed/smartwatch/500/500',
    },
  ];
  getData() {
    return this.products;
  }
  deleteProducts(id: number) {
    this.products = this.products.filter((product) => product.id !== id);
    console.log(this.products);
  }
}
