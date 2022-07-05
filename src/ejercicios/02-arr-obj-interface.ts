/*
    ===== Código de TypeScript =====
*/

let habilidades: string[] = ['Bash', 'Counter', 'Healing'];

export interface Personaje {
    nombre: string,
    hp: number,
    habilidades: string[],
    puebloNatal: string,
    mostrarHp: () => void;
}

// const personaje: Personaje = {
//     nombre: 'Diego',
//     hp: 100,
//     habilidades: ['Bash', 'Counter', 'Healing'],
//     puebloNatal: "Alcala del jucar"
// }