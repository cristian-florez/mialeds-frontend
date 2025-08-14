import { Injectable } from '@angular/core';
import { Login } from '../models/dtos/login/login'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credenciales: Login):Observable<any> {
    return this.http.get('data.json').pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error:HttpErrorResponse) {
    if(error.status===0) {
      alert('Error de conexión: ' + error.error);
    } else {
      alert('Error en la solicitud: código ' + error.status);
    }
    return throwError(() => new Error('Error en la solicitud'));
  }
}
