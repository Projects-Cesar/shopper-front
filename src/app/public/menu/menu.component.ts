import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  newIcon = 'bi bi-box-arrow-left';
  nameSection = '/ Menu';
  nameRuta = '/home'
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  showTienda() {
    this.router.navigateByUrl('/tienda');
  }

  showProducto() {
    this.router.navigateByUrl('/categoria_producto');
  }

  showMetodoPago() {
    this.router.navigateByUrl('/metodo_pago');
  }

}
