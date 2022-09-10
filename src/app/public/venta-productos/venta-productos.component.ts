import { VentaProductoService } from './venta-producto.service';
import { Component, OnInit } from '@angular/core';
import { Tienda } from 'src/app/core/models/tienda.model';

@Component({
  selector: 'app-venta-productos',
  templateUrl: './venta-productos.component.html',
  styleUrls: ['./venta-productos.component.scss']
})
export class VentaProductosComponent implements OnInit {

  newIcon = 'bi bi-box-arrow-left';
  nameSection = '/ Productos - Venta';
  nameRuta = '/home';
  nameColor = 'bg-info';

  productos: Array<any> = [];
  tienda: Tienda =  new Tienda();

  constructor(
    private ventaProductoService: VentaProductoService
  ) { }

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos() {
    this.tienda.cod_tienda = 1;
    // let cod_tienda = 1;
    this.ventaProductoService.getProductos(this.tienda).subscribe(
      response => {
        this.productos = response
      },
      error => console.log(error)
    );
  }

}
