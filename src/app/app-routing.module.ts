import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Aquí importarás tus componentes cuando los tengas creados
// import { ProductosComponent } from './componentes/productos/productos.component';

const routes: Routes = [
  // { path: 'productos', component: ProductosComponent },
  // { path: '', redirectTo: '/productos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
