import { Routes } from '@angular/router';
import { HomeComponent } from './components/public/home/home.component';
import { LoginComponent } from './components/public/login/login.component';
import { AboutComponent } from './components/public/about/about.component';
import { DashboardComponent } from './components/private/dashboard/dashboard.component';
import { GalleryComponent } from './components/private/gallery/gallery.component';
import { CrudComponent } from './components/private/crud/crud.component';
import { ProfileComponent } from './components/private/profile/profile.component';

export const routes: Routes = [
  // Public routes
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  //Private routes
  { path: 'dashboard', component: DashboardComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'crud', component: CrudComponent },
  { path: 'profile', component: ProfileComponent },

  //Default
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];
