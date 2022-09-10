import { NgModule } from '@angular/core';

import { PublicRoutingModule } from './public-routing.module';
import { SharedModule } from '../core/shared/shared.module';
import { PublicComponent } from './public.component';
import { HomeComponent } from './home/containers/home.component';
import { LoginComponent } from './login/containers/login.component';
import { MenuComponent } from './menu/menu.component';
import { TiendaComponent } from './tienda/tienda.component';
import { CategoriaProductoComponent } from './categoria-producto/categoria-producto.component';
import { ProductoComponent } from './producto/producto.component';
import { MetodoPagoComponent } from './metodo-pago/metodo-pago.component';
import { VentaProductosComponent } from './venta-productos/venta-productos.component';
import { TiendaService } from './tienda/tienda.service';
import { VentaProductoService } from './venta-productos/venta-producto.service';
import { CategoriaProductoService } from './categoria-producto/categoria-producto.service';
import { MetodoPagoService } from './metodo-pago/metodo-pago.service';

@NgModule({
  imports: [
    PublicRoutingModule,
    SharedModule
  ],
  declarations: [
    PublicComponent,
    HomeComponent,
    LoginComponent,
    MenuComponent,
    TiendaComponent,
    CategoriaProductoComponent,
    ProductoComponent,
    MetodoPagoComponent,
    VentaProductosComponent
  ],
  exports: [],
  providers: [
    TiendaService,
    VentaProductoService,
    CategoriaProductoService,
    MetodoPagoService
  ]
})

export class PublicModule {
  constructor() {}
}
