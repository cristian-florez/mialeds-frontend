import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () =>
      import('./components/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'inventario',
    loadComponent: () =>
      import('./components/inventario/inventario.component').then(m => m.InventarioComponent)
  }
];
