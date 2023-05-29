import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo-form-sku',
  templateUrl: './demo-form-sku.component.html',
  styleUrls: ['./demo-form-sku.component.css'],
})
export class DemoFormSkuComponent {
  // template driven form
  //  dog = new FormControl('spot');
  sku: AbstractControl;
  myForm: FormGroup;
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      sku: ['ABC123', Validators.compose([

        Validators.required, this.skuValidator
      ])],
    });
    this.sku = this.myForm.controls['sku'];
  }

  ngOnInit() {}

  onSubmit(form: any): void {
    console.log('you submitted value:', form);
    console.log('local sku:', this.sku);
  }
  skuValidator(control: FormControl): { [s: string]: boolean } | null {
    if (!control.value.match(/^123/)) {
      return { invalidSku: true };
    }
    return null;
  }
}
