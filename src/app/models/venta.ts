import { Producto } from "./producto";
import { usuario } from "./usuario";

export interface venta {
    id: number;
    usuario: usuario;
    producto: Producto;
    fecha: string;
    cantidad: number;
    totalVenta: number;
}