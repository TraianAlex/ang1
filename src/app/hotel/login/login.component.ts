import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email!: string;
  password!: string;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  login() {
    if (this.email === 'traian.alexandru@ge.com' && this.password === 'admin') {
      // alert('Login successful!');
      // this.router.navigate(['/rooms', 'add']);
      this.router.navigateByUrl('/rooms/add');
    }
  }
}
