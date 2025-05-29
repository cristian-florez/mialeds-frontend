import { Producto } from "./producto";
import { usuario } from "./usuario";

export interface kardex {
    id: number;
    producto: Producto;
    usuario: usuario;
    movimiento: string;
    fecha: string;
    cantidad: number;
}