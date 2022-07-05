/*
    ===== Código de TypeScript =====
*/
import { Producto } from "./06-desestructuracion-funcion";
import { calculaIVA } from "./06-desestructuracion-funcion";

const carritoCompra: Producto[] = [
    {
        desc: 'Telefono1',
        precio: 200
    },
    {
        desc: 'Tablet1',
        precio: 650
    }
];

const [total, IVA] = calculaIVA(carritoCompra);

console.log('Total', total);
console.log('IVA', IVA);


