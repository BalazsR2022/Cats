import { Component } from '@angular/core';
import { AuthService } from '../auth.service'; // AuthService importálása
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  constructor(private authService: AuthService, private router: Router) {}

  onLoginSubmit(logInForm: any): void {
    const username = logInForm.value.logInUserName;
    const password = logInForm.value.logInUserPassword;

    if (this.authService.login(username, password)) {
      this.router.navigate(['/home']);
    } else {
      alert('Hibás felhasználónév vagy jelszó!');
    }
  }
}
