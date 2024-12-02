import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private router: Router, private service: AuthService) {}
  loginForm: FormGroup = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  });
  // login() {
  //   const { userName, password } = this.loginForm.value;
  //   // if (userName === 'admin' && password === 'admin') {
  //   //   this.router.navigate(['/dashboard']);
  //   // }
  //   this.service.postLogin(userName, password).subscribe();
  //   console.log('login');
  // }
  msg = '';
  login() {
    const { userName, password } = this.loginForm.value;
    console.log('Form values:', { userName, password });
    this.service.postLogin(userName, password).subscribe({
      next: () => {
        console.log('Navigating to dashboard');
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        this.msg = error.error.message;
        console.error('Error during login:', error);
      },
    });
  }
}
