import { Component, OnInit } from '@angular/core';
import { inject } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProductService, Product } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})

export class ProductComponent implements OnInit {
  products$: Observable<Product[]>

  constructor(private formBuilder: FormBuilder ,private service: ProductService) {}

  formGroup = this.formBuilder.group({
    name: ['', Validators.required],
    quantity: [, Validators.required]
  })

  ngOnInit(): void {
      this.products$ = this.service.getProducts()
  }

  onSubmit() {
    this.service.addProduct(this.formToValue(this.formGroup))
  }

  formToValue(form: typeof this.formGroup): Product {
    return {
      name: form.value.name!,
      quantity: form.value.quantity!
    }
  }
}


