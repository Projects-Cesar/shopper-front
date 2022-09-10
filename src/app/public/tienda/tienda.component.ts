import { Component, OnInit } from '@angular/core';
import { TiendaService } from './tienda.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.scss']
})
export class TiendaComponent implements OnInit {

  nameSection = '/ Tienda';
  nameRuta = '/menu';

  tiendas: Array<any> = [];

  constructor(
    private tiendaService: TiendaService
  ) { }

  ngOnInit(): void {
    this.getTienda();
  }

  getTienda() {
    this.tiendaService.getTiendas().subscribe(
      response => {
        this.tiendas = response
      },
      error => console.log(error)
    );
  }

}
