import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private service: AuthService) {}

  ngOnInit(): void {}

  goHome() {
    this.router.navigate(['/home']);
  }

  isLogged() {
    return this.service.isLogged();
  }

  getUsername() {
    return this.service.getUsername();
  }

  logout() {
    this.service.logout();
    this.router.navigate(['/login']);
  }
}
