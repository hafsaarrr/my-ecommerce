import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Product } from './models';
import { DEFAULT_PRODUCTS } from './data/products';

@Injectable({
  providedIn: 'root',
  
})
export class ProductService {
  private productsSubject = new BehaviorSubject<Product[]>(DEFAULT_PRODUCTS);

  products$: Observable<Product[]> = this.productsSubject.asObservable();

  constructor() {}

  getProducts(): Observable<Product[]> {
    return this.products$;
  }

  getProductById(id: number): Observable<Product | undefined> {
    const product = DEFAULT_PRODUCTS.find(p => p.id === id);
    return of(product);
  }

  addNewProduct(product: Product) {
    const currentProducts = this.productsSubject.value;
    const newProduct = {
      ...product,
      id: currentProducts.length + 1
    };
    this.productsSubject.next([...currentProducts, newProduct]);
  }
}
