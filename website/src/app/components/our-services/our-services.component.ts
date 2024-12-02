import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.css',
})
export class OurServicesComponent implements OnInit {
  constructor(private productService: ProductsService) {}
  ngOnInit(): void {
    this.productService.getProduct().subscribe((data) => {
      this.products = data.products;
      console.log(data.products);
    });
  }
  products!: any[];
}
