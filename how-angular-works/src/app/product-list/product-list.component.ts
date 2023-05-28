import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  @Input() productList!:Product[];
  @Output() onProductSelected:EventEmitter<Product>;
  private currentProduct!:Product;
  constructor(){
    this.onProductSelected = new EventEmitter();
  }
  isSelected(prod:Product){
    if(!prod || !this.currentProduct ){
      return false;
    }
    return prod.sku === this.currentProduct.sku;
  }
  clicked(prod:Product){
    this.currentProduct = prod;
    this.onProductSelected.emit(prod);
  }
}
