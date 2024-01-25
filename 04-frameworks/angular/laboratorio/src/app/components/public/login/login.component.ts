import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  errorLogin: boolean;

  constructor(private service: AuthService, private router: Router) {
    this.username = '';
    this.password = '';
    this.errorLogin = false;
  }

  ngOnInit(): void {}

  login() {
    if (this.service.login(this.username, this.password)) {
      this.username = '';
      this.password = '';
      this.router.navigate(['/dashboard']);
    } else {
      this.errorLogin = true;
    }
  }

  focus() {
    this.errorLogin = false;
  }
}
