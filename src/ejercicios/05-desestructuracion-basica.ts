/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number,
    segundo: number,
    cancion: string,
    detalles: Detalles
}

interface Detalles {
    autor: string,
    year: number
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: "Aserejé",
    detalles: {
        autor: "Las ketchup",
        year: 2006
    }
}

// const { volumen : vol, segundo, cancion, detalles :{autor,year} } = reproductor;
const { volumen: vol, segundo, cancion, detalles } = reproductor;
const { autor, year } = detalles;

// console.log('El volumen actual es: ', vol);
// console.log('El segundo actual es: ', segundo);
// console.log('La canción actual es: ', cancion);
// console.log('El autor es: ', autor);


//Desestructuración de arreglos
const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [p1, , p3] = dbz;

console.log('Personaje 1: ', p1);
// console.log('Personaje 2: ', p2);
console.log('Personaje 3: ', p3);



