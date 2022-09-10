import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Tienda } from 'src/app/core/models/tienda.model';

@Injectable()

export class VentaProductoService {

  URL_SERVICIOSBACK = 'http://localhost:9999/';
  constructor(private http: HttpClient) { }

  getProductos(tienda: Tienda): Observable<any> {
    let url = this.URL_SERVICIOSBACK + 'api/producto/list';
    return this.http.post(url, tienda).pipe(
      tap(console.log),
      catchError(this.handleError)
    );
  }

  private handleError(error: Response) {
    console.log(error);
    const msg = 'Error status code' + error.status + 'status' + error.statusText;
    return throwError(msg);
  }

}
