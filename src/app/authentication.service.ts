import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isAuthenticated: boolean | undefined;
  login(email: string, password: string): boolean {
    // Exemple basique - vous pouvez remplacer cette logique par une API.
    if (email === 'test@example.com' && password === 'password123') {
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false; // Set the authentication status to false on logout
  }

  constructor() { }
}
