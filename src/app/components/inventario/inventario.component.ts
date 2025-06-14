import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto';


@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit{

  productos: Producto[] = [];

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
      this.cargarProductos();
  }

  cargarProductos(): void{
    this.productoService.listarProducto().subscribe({
      next: (data) => this.productos = data,
      error: (err) => console.error('error al cargar los productos', err)
    })
  }
}
