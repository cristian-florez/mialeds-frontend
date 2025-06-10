import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';
import { ProductoDto } from '../models/dtos/producto/productoDto';
import { MovimientoDto } from '../models/dtos/producto/movimientoDto';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ProductoService {

  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/producto`;

  listarProducto(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.apiUrl}/listar`);
  }

  productosEscasos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.apiUrl}/productos-escasos`);
  }

  buscarProducto(nombre:string): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.apiUrl}/buscar`,{params: { nombre }});
  }

  listarProductosBusqueda(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.apiUrl}/listar-buscador`);
  }

  crearProducto(producto:ProductoDto): Observable<Producto> {
    return this.http.post<Producto>(`${this.apiUrl}/nuevo`, producto);
  }

  editarProducto(id:number, producto: ProductoDto): Observable<any> {
    return this.http.put<Producto>(`${this.apiUrl}/editar/${id}`, producto);
  }

  eliminarProducto(id: number): Observable<any> {
    return this.http.delete<Producto>(`${this.apiUrl}/eliminar/${id}`);
  }

  movimientoProducto(id:number, movimiento: MovimientoDto): Observable<any> {
    return this.http.post<Producto>(`${this.apiUrl}/movimiento-producto/${id}`, movimiento);
  }



  constructor() { }
}
