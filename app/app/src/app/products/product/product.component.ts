import { Component, EventEmitter, Input, Output } from '@angular/core';
import { products } from '../../models/IProduct';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  constructor(private data: DataService) {}
  delete(id: number) {
    this.data.deleteProducts(id);
    this.deleteProduct.emit();
  }
  @Input() product!: products;
  @Output() myLike: EventEmitter<string> = new EventEmitter<string>();
  @Output() deleteProduct: EventEmitter<void> = new EventEmitter<void>();
  like() {
    this.myLike.emit('I like product:' + this.product.name);
  }
  msg = '';
}
