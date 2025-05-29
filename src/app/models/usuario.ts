import { role } from "./role";


export interface usuario {
    id: number;
    nombre: string;
    cedula: string;
    contrasena: string;
    correoElectronico: string;
    telefono: string;
    isEnabled: boolean;
    accountNoExpired: boolean;
    accountNoLocked: boolean;
    credentialNoExpired: boolean;
    role: role;
}