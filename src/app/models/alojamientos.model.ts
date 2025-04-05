import { Timestamp } from 'firebase/firestore';

export interface Alojamientos{
    id: string,
    descripcion: string,
    ubicacion: string,
    precio: number,
    disponible: boolean,
    fecha: Timestamp
}