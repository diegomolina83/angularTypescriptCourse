/*
    ===== Código de TypeScript =====
*/
import { Personaje } from "../ejercicios/02-arr-obj-interface";

function sumar(a: number, b: number): number {
    return a + b;
}

const sumarFlecha = (a: number, b: number): number => {
    return a + b;
}

function multiplicar(numero: number, otronumero?: number, base: number = 2) {
    return numero * base;
}



function curar(personaje: Personaje, curarX): void {
    personaje.hp += curarX;
}


const personajePrincipal: Personaje = {
    nombre: 'Diego',
    hp: 100,
    habilidades: ['Comer', 'Dormir', 'Estudiar'],
    puebloNatal: "Albacetux",
    mostrarHp() {
        console.log('Puntos de vida: ', this.hp);
    }
}

curar(personajePrincipal, 250);

console.log(personajePrincipal);

personajePrincipal.mostrarHp();






// const resultado = sumar(15, 45);
// const resultado2 = sumarFlecha(15, 45);
// const resultado3 = multiplicar(15, 45, 10);
// const resultado4 = multiplicar(15, 45);



// console.log(resultado);
// console.log(resultado2);
// console.log(resultado3);
// console.log(resultado4);


