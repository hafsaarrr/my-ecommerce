import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { CartService, CartItem } from '../cart.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="cart-container">
      <h2>Votre Panier</h2>
      <div *ngIf="cartService.cartItems().length === 0" class="empty-cart">
        Votre panier est vide
      </div>
      <div *ngIf="cartService.cartItems().length > 0" class="cart-items">
        <div *ngFor="let item of cartService.cartItems()" class="cart-item">
          <img [src]="item.product.imageUrl" [alt]="item.product.name">
          <div class="item-details">
            <h3>{{ item.product.name }}</h3>
            <p>{{ item.product.price | currency:'MAD':'symbol':'1.2-2' }}</p>
            <div class="quantity-control">
              <button (click)="cartService.decreaseQuantity(item.product.id)">-</button>
              <span>Quantité : {{ item.quantity }}</span>
              <button (click)="cartService.addToCart(item.product)">+</button>
            </div>
            <button (click)="cartService.removeFromCart(item.product.id)">Supprimer</button>
          </div>
        </div>
        <div class="cart-summary">
          <h3>Total : {{ cartService.getTotalPrice() | currency:'MAD':'symbol':'1.2-2' }}</h3>
          <button (click)="proceedToCheckout()">Procéder au paiement</button>
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

/* Cart Container */
.cart-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

/* Empty Cart */
.empty-cart {
  text-align: center;
  font-size: 1.5rem;
  color: #ccc;
  margin-top: 50px;
}

/* Cart Items */
.cart-items {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Cart Item */
.cart-item {
  background-color: #2a2a2a;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  gap: 20px;
  align-items: center;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.cart-item:hover {
  transform: translateY(-10px);
  box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.6);
}

.cart-item img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 10px;
}

/* Item Details */
.item-details {
  flex-grow: 1;
}

.item-details h3 {
  font-size: 1.5rem;
  color: #fff;
}

.item-details p {
  font-size: 1.2rem;
  color: #ff9800;
}

/* Quantity Control */
.quantity-control {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
}

.quantity-control button {
  background-color: #ff9800;
  border: none;
  padding: 5px 10px;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.quantity-control button:hover {
  background-color: #e67e00;
}

.quantity-control span {
  font-size: 1.1rem;
  color: #fff;
}

/* Remove Button */
.item-details button {
  background-color: #ff4c4c;
  border: none;
  padding: 8px 15px;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  margin-top: 15px;
}

.item-details button:hover {
  background-color: #e60000;
}

/* Cart Summary */
.cart-summary {
  text-align: right;
  margin-top: 30px;
}

.cart-summary h3 {
  font-size: 1.8rem;
}

.cart-summary button {
  background-color: #ff9800;
  border: none;
  padding: 10px 20px;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  margin-top: 10px;
}

.cart-summary button:hover {
  background-color: #e67e00;
}


  `]
})
export class CartComponent {
  constructor(
    public cartService: CartService,
    private authService: AuthenticationService,
    private router: Router
  ) {}

  proceedToCheckout() {
    if (this.authService.isAuthenticated) {
      // If authenticated, navigate to checkout page
      this.router.navigate(['/checkout']);
    } else {
      // If not authenticated, navigate to login page
      this.router.navigate(['/login']);
    }
  }
}
