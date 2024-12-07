import { Injectable, signal } from '@angular/core';
import { Product } from './models';

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSignal = signal<CartItem[]>([]);

  cartItems = this.cartItemsSignal.asReadonly();

  addToCart(product: Product) {
    const currentCart = this.cartItemsSignal();
    const existingItem = currentCart.find(item => item.product.id === product.id);

    if (existingItem) {
      this.cartItemsSignal.update(cart =>
        cart.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      this.cartItemsSignal.update(cart => [...cart, { product, quantity: 1 }]);
    }
  }

  decreaseQuantity(productId: number) {
    const currentCart = this.cartItemsSignal();
    const existingItem = currentCart.find(item => item.product.id === productId);

    if (existingItem) {
      if (existingItem.quantity > 1) {
        this.cartItemsSignal.update(cart =>
          cart.map(item =>
            item.product.id === productId
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
        );
      } else {
        // Remove the item if quantity is 1
        this.removeFromCart(productId);
      }
    }
  }

  removeFromCart(productId: number) {
    this.cartItemsSignal.update(cart =>
      cart.filter(item => item.product.id !== productId)
    );
  }

  clearCart() {
    this.cartItemsSignal.set([]);
  }

  getTotalPrice(): number {
    return this.cartItemsSignal().reduce((total, item) =>
      total + (item.product.price * item.quantity), 0
    );
  }
  
}
