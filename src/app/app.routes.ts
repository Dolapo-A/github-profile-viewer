import { Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './home-component/home-component';
import { AboutComponent } from './about-component/about-component';
import { Dashboard } from './dashboard/dashboard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: Dashboard,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
    ],
  },
];
