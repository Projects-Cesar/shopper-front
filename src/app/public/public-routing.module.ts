import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PublicComponent } from './public.component';
import { HomeComponent } from './home/containers/home.component';
import { LoginComponent } from './login/containers/login.component';
import { MenuComponent } from './menu/menu.component';
import { TiendaComponent } from './tienda/tienda.component';
import { ProductoComponent } from './producto/producto.component';
import { MetodoPagoComponent } from './metodo-pago/metodo-pago.component';
import { VentaProductosComponent } from './venta-productos/venta-productos.component';
import { CategoriaProductoComponent } from './categoria-producto/categoria-producto.component';

const routes: Routes = [
  { path: '', component: PublicComponent, children:
    [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'menu', component: MenuComponent },
      { path: 'tienda', component: TiendaComponent },
      { path: 'producto', component: ProductoComponent },
      { path: 'categoria_producto', component: CategoriaProductoComponent },
      { path: 'metodo_pago', component: MetodoPagoComponent },
      { path: 'venta-productos', component: VentaProductosComponent }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})

export class PublicRoutingModule {}
