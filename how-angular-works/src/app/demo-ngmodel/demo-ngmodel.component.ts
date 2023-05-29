import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-ngmodel',
  templateUrl: './demo-ngmodel.component.html',
  styleUrls: ['./demo-ngmodel.component.css'],
})
export class DemoNgmodelComponent {
  productName: string;

  constructor() {
    this.productName = 'ng-book: The Complete Guide to Angular';
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }
}
