import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()

export class CategoriaProductoService {

  URL_SERVICIOSBACK = 'http://localhost:9999/';
  constructor(private http: HttpClient) { }

  getCatProd(): Observable<any> {
    let url = this.URL_SERVICIOSBACK + 'api/categoriaproducto/list';
    return this.http.get(url).pipe(
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
