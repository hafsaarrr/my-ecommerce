import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { CartService } from './cart.service';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentYear = new Date().getFullYear();
  isLoggedIn: boolean | undefined = false;

  constructor(public cartService: CartService, public authService: AuthenticationService,  private router: Router) {}

  ngOnInit(): void {
    // Set the initial login status based on AuthenticationService
    this.isLoggedIn = this.authService.isAuthenticated;
  }

  login(): void {
    // Simulate login logic (you can replace it with a login form or API)
    this.router.navigate(['/login']);
  }

  logout(): void {
    this.authService.logout(); // Call the logout method from AuthenticationService
    this.isLoggedIn = false; // Update the login status
    this.router.navigate(['/']);
  }
}
