/*
    ===== Código de TypeScript =====
*/

interface Pasajero {
    nombre: string,
    hijos?: string[],
}

const pasajero1: Pasajero = {
    nombre: 'Perro Sanche'
}

const pasajero2: Pasajero = {
    nombre: 'Candela Peña',
    hijos: ['Candelita', 'Peñita']
}

function imprimeHijos(pasajero: Pasajero): void {

    const cuantosHijos = pasajero.hijos?.length || 0;

    console.log(cuantosHijos);

}

imprimeHijos(pasajero2);
imprimeHijos(pasajero1);
