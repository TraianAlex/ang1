import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({ selector: 'app-login', templateUrl: './login.component.html', standalone: false })
export class LoginComponent implements OnInit {
  email!: string;
  password!: string;

  constructor(private router: Router, private logginService: LoginService) {}

  ngOnInit(): void {}

  login() {
    if (this.logginService.login(this.email, this.password)) {
      this.router.navigate(['/hotel/rooms', 'add']);
    }
  }

  // login() {
  //   if (this.email === 'traian.alexandru@ge.com' && this.password === 'admin') {
  //     // alert('Login successful!');
  //     // this.router.navigate(['/rooms', 'add']);
  //     this.router.navigateByUrl('/rooms/add');
  //   }
  // }
}
