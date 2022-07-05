/*
    ===== Código de TypeScript =====
*/

export interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Nokia A1',
    precio: 150
}

const tablet: Producto = {
    desc: 'Ipad Air',
    precio: 600
}


export function calculaIVA(productos: Producto[]): [number, number] {

    let total = 0;
    productos.forEach(({ precio }) => {
        total += precio;
    })

    return [total, total * 0.21];
}

const articulos = [telefono, tablet];

const IVA = calculaIVA(articulos);

console.log('Precio sin IVA', IVA[0]);
console.log('IVA', IVA[1]);
console.log('Total:', IVA[0] + IVA[1]);


