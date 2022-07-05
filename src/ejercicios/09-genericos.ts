/*
    ===== Código de TypeScript =====
*/
function queTipoSoy<T>(argumento: T) {
    return argumento;
}

let soyString = queTipoSoy('Hola Mundo');
let soyNumero = queTipoSoy(100);
let soyArray = queTipoSoy(['Hola Mundo']);

let soyExplicito = queTipoSoy<string>('Hola Mundo');


