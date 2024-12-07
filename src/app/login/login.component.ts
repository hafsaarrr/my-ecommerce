import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service'; // Import the AuthenticationService

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule, CommonModule],
})
export class LoginComponent {
  credentials = {
    email: '',
    password: '',
  };

  constructor(
    private router: Router,
    private authService: AuthenticationService // Inject AuthenticationService
  ) {}

  onSubmit() {
    // Use AuthenticationService to attempt login
    const { email, password } = this.credentials;
    if (this.authService.login(email, password)) {
      console.log('Login successful');
      // After successful login, navigate to the checkout page
      this.router.navigate(['/checkout']);
    } else {
      console.log('Login failed');
      // Optionally, you can show an error message here if login fails
    }
  }
}
