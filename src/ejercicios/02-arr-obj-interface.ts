/*
    ===== Código de TypeScript =====
*/

let habilidades: string[] = ['Bash', 'Counter', 'Healing'];

interface Personaje {
    nombre: string,
    hp: number,
    habilidades: string[],
    puebloNatal: string
}

const personaje: Personaje = {
    nombre: 'Diego',
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Healing'],
    puebloNatal: "Alcala del jucar"
}

console.log(personaje)
console.table(personaje);
