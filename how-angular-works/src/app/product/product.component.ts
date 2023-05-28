import { Component, HostBinding, Input } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'product-row',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
@Input() product!:Product;
@HostBinding('attr.class') cssClass = 'item';
}
