import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { IDepartment } from './departments';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  private departmentUrl = 'api/departments';

  constructor(private http: HttpClient) { }


  getDepartments(): Observable<IDepartment[]> {
    return this.http.get<IDepartment[]>(this.departmentUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getDepartment(id: number): Observable<IDepartment> {
    if (id === 0) {
      return of(this.initializeDepartment());
    }
    const url = `${this.departmentUrl}/${id}`;
    return this.http.get<IDepartment>(url)
      .pipe(
        tap(data => console.log('getDepartment: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
    }
    private handleError(err: any): Observable<never> {
      // in a real world app, we may send the server to some remote logging infrastructure
      // instead of just logging it to the console
      let errorMessage: string;
      if (err.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        errorMessage = `An error occurred: ${err.error.message}`;
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
      }
      console.error(err);
      return throwError(errorMessage);
    }

    private initializeDepartment(): IDepartment {
      // Return an initialized object
      return {
        id: 0,
        departmentName: null,
        departmentManager: null,
        departmentLocation: null
      };
  }
  /*

  createProduct(product: Product): Observable<Product> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    product.id = null;
    return this.http.post<Product>(this.productsUrl, product, { headers })
      .pipe(
        tap(data => console.log('createProduct: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  deleteProduct(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.productsUrl}/${id}`;
    return this.http.delete<Product>(url, { headers })
      .pipe(
        tap(data => console.log('deleteProduct: ' + id)),
        catchError(this.handleError)
      );
  }

  updateProduct(product: Product): Observable<Product> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.productsUrl}/${product.id}`;
    return this.http.put<Product>(url, product, { headers })
      .pipe(
        tap(() => console.log('updateProduct: ' + product.id)),
        // Return the product on an update
        map(() => product),
        catchError(this.handleError)
      );
  }
*/


}
