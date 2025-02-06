import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Add Router here
import { AuthService } from '../../auth.service'; // Make sure this service is correctly set up

@Component({
  selector: 'app-loginandsignup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './loginandsignup.component.html',
  styleUrls: ['./loginandsignup.component.css']
})
export class LoginandsignupComponent {
  emailOrUsername: string = '';
  password: string = '';
  errorMessage: string = '';
  passwordFieldType: string | undefined;
  email: any;

  constructor(private authService: AuthService, private router: Router) {}  // Inject Router here

  // This method handles the login process
  async login() {
    try {
      await this.authService.login(this.emailOrUsername, this.password);
      alert('Logged in successfully!');
      this.router.navigate(['/home']);  // Navigate to home after successful login
    } catch (error: any) {
      this.errorMessage = error.message;  // Handle any error messages
    }
  }

  togglePasswordVisibility() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }
}
