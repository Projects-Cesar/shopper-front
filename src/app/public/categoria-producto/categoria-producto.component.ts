import { Component, OnInit } from '@angular/core';
import { CategoriaProductoService } from './categoria-producto.service';

@Component({
  selector: 'app-categoria-producto',
  templateUrl: './categoria-producto.component.html',
  styleUrls: ['./categoria-producto.component.scss']
})
export class CategoriaProductoComponent implements OnInit {

  nameSection = '/ Categoria Producto';
  nameRuta = '/menu';

  catProds: Array<any> = [];

  constructor(
    private catProdService: CategoriaProductoService
  ) { }

  ngOnInit(): void {
    this.getCatPrdos();
  }

  getCatPrdos() {
    this.catProdService.getCatProd().subscribe(
      response => {
        this.catProds = response
      },
      error => console.log(error)
    );
  }

}
