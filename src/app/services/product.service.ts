import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore, addDoc, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private db: Firestore) {}

  getProducts() {
    const productCollection = collection(this.db, 'products')
    return collectionData(productCollection) as Observable<Product[]>
  }
  
  addProduct(product: Product) {
    const productCollection = collection(this.db, 'products')

    addDoc(productCollection, <Product> product)
  }
}

export interface Product {
  name: string
  quantity: number
}
