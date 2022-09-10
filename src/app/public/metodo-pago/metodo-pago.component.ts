import { Component, OnInit } from '@angular/core';
import { MetodoPagoService } from './metodo-pago.service';

@Component({
  selector: 'app-metodo-pago',
  templateUrl: './metodo-pago.component.html',
  styleUrls: ['./metodo-pago.component.scss']
})
export class MetodoPagoComponent implements OnInit {

  nameSection = '/ Método Pago';
  nameRuta = '/menu';

  metodPagos: Array<any> = [];

  constructor(
    private metodPagoService: MetodoPagoService
  ) { }

  ngOnInit(): void {
    this.getMetodPagos();
  }

  getMetodPagos() {
    this.metodPagoService.getMetodPago().subscribe(
      response => {
        this.metodPagos = response
      },
      error => console.log(error)
    );
  }

}
