// src/app/products/products.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
import { Product } from '../models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="products-container">
      <h2>Nos Produits</h2>
      <div class="products-grid">
        <div *ngFor="let product of products$ | async" class="product-card">
          <img [src]="product.imageUrl" alt="{{ product.name }}" class="product-image">
          <div class="product-info">
            <h3>{{ product.name }}</h3>
            <p class="description">{{ product.description }}</p>
            <p class="price">{{ product.price | currency:'MAD':'symbol':'1.2-2' }}</p>
            <div class="product-actions">
              <button (click)="addToCart(product)">Ajouter au panier</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    /* General Styling */
body {
  font-family: 'Poppins', sans-serif; /* Smooth font */
  background: linear-gradient(135deg, #1c1c1c, #2a2a2a); /* Dark gradient */
  color: #f0f0f0;
  margin: 0;
  padding: 20px;
  box-sizing: border-box;
}

h2 {
  font-size: 2.5rem;
  color: #ff9800;
  text-align: center;
  margin-bottom: 40px;
}

/* Products Container */
.products-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

/* Product Card */
.product-card {
  background-color: #2a2a2a;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
  padding: 20px;
}

.product-card:hover {
  transform: translateY(-10px);
  box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.6);
}

/* Product Image */
.product-card img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
  transition: transform 0.3s ease;
}

.product-card:hover img {
  transform: scale(1.1);
}

/* Product Info */
.product-info {
  margin-top: 15px;
}

.product-info h3 {
  font-size: 1.4rem;
  color: #fff;
  margin-bottom: 10px;
}

.product-info .description {
  font-size: 0.9rem;
  color: #ccc;
  margin-bottom: 15px;
}

.product-info .price {
  font-size: 1.3rem;
  color: #ff9800;
  margin-bottom: 20px;
}

/* Product Actions */
.product-actions button {
  background-color: #ff9800;
  border: none;
  padding: 10px 20px;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.product-actions button:hover {
  background-color: #e67e00;
}

  `]
})
export class ProductsComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {
    this.products$ = this.productService.getProducts();
  }

  ngOnInit(): void {}

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
