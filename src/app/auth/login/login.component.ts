import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isLoading = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  login() {
    this.isLoading = true;
    setTimeout(() => {
      this.router.navigate(['/home']);
      setTimeout(() => {
        this.isLoading = false;
      }, 2100);
    }, 2300);
  }
}
