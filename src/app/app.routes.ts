import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'register', loadComponent: () => import('./registration/registration.component').then(mod => mod.RegistrationComponent)},
    {path: 'user-details', loadComponent: () => import('./user-details/user-details.component').then(mod => mod.UserDetailsComponent)},
    { path: '',   redirectTo: '/register', pathMatch: 'full' }, 
];
