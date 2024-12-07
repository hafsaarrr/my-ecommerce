import { Component } from '@angular/core';
import { CartService } from '../cart.service'; // Adjust the path as necessary
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  checkoutData = {
    name: '',
    address: '',
    phone: '',
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  };

  constructor(public cartService: CartService , public router: Router) {}

  onSubmit() {
    console.log('Checkout form submitted:', this.checkoutData);
    this.router.navigate(['']);
  }
}
