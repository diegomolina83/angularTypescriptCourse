/*
    ===== Código de TypeScript =====
*/
class PersonaNormal {
    constructor(public nombre: string, public direccion: string) { }
}



class Heroe extends PersonaNormal {
    // alterEgo: string;
    // edad: number;
    // nombreReal: number;
    constructor(public alterEgo: string, public edad: number) {
        // this.alterEgo = alterEgo;
        super("Paco Tabaco", 'New York');
    }
}

const ironman = new Heroe('Ironman', 45,);

console.log(ironman);
