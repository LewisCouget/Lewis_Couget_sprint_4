// Parte 2
//  Array de objetos de ejemplo
const characters = [
    {
        name: "Luke Skywalker",
        height: "172",
        mass: "77",
        eye_color: "blue",
        gender: "male",
    },
    {
        name: "Darth Vader",
        height: "202",
        mass: "136",
        eye_color: "yellow",
        gender: "male",
    },
    {
        name: "Leia Organa",
        height: "150",
        mass: "49",
        eye_color: "brown",
        gender: "female",
    },
    {
        name: "Anakin Skywalker",
        height: "188",
        mass: "84",
        eye_color: "blue",
        gender: "male",
    },
];

/**
 * ### Challenge getCharacterNameByIndex
 *
 * @instrucciones
 * getCharacterNameByIndex toma dos argumentos:
 * (1) un array de personajes como el de la vista previa de arriba
 * (2) un número que es el índice deseado en el array.
 * getCharacterNameByIndex devuelve una cadena con el formato El personaje es: {name}
 *
 * Por ejemplo, si getCharacterNameByIndex se invoca con el inventario y el número 0. * devolverá
 * devolverá «El personaje es Luke Skywalker».
 */
console.log(`El personbaje es ${characters[0].name}!`);
/**
 * Filter
 * 1 Obtener caracteres con masa superior a 100
 * 2 Obtener personajes con altura inferior a 200
 * 3 Obtener una matriz con todos los nombres
 * 4 Obtener un array de objetos con sólo las propiedades nombre y altura
 * 5 Encontrar el primer personaje con ojos marrones.
 * 6 Obtener todos los personajes masculinos
 * 7 Obtener todos los personajes femeninos
 * 8 Obtener una matriz con todas las alturas
 * 9 Imprimir en la consola los nombres de todos los personajes.
 * 10 Encontrar el primer personaje que tenga ojos de color azul y que su peso sea mayor a 80
 * 11 Verificar si todos los personajes con ojos azules tienen una altura mayor a 170.
 * En este ejercicio no es necesario escribir función, pueden resolverse los ejercicios
 * en forma simultánea con un comentario previo indicando el número. Ejemplo abajo:
 */


/* 1 */function massGreaterThan100(characters) {
    return characters
        .filter(character => Number(character.mass) > 100)
        .map(character => character.name);
}
const Than100 = massGreaterThan100(characters);
console.log(Than100);

/* 2 */function heightLessThan100(characters) {
    return characters
        .filter(character => Number(character.height) < 200)
        .map(character => character.name);
}
const heightLess200 = heightLessThan100(characters);
console.log(heightLess200);

/* 3 */function allNames(characters) {
    for (let i = 0; i < characters.length; i++) {
        console.log(characters[i].name);
    };
} allNames(characters);

/* 4 */function detailsNameHeight(characters) {
    for (let i = 0; i < characters.length; i++) {
        console.log(characters[i].name);
        console.log(characters[i].height);
    };
} detailsNameHeight(characters);

/* 5 */ function findFirstBrownEyedCharacter(characters) {
    return characters.find(character => character.eye_color === "brown");
}
const firstBrownEyedCharacter = findFirstBrownEyedCharacter(characters);
console.log(firstBrownEyedCharacter);

/* 6 */ function getMale(characters) {
    return characters.filter(character => character.gender === "male");
}
const maleGetChar = getMale(characters);
console.log(maleGetChar);

/* 7 */ function getFemale(characters) {
    return characters.filter(character => character.gender === "female");
}
const femaleGetChar = getFemale(characters);
console.log(femaleGetChar);

/* 8 */ function getHeights(characters) {
    return characters.map(character => (character.height));
}
const allHeights = getHeights(characters);
console.log(allHeights);

/* 9 */ function allNames(characters) {
    for (let i = 0; i < characters.length; i++) {
        console.log(characters[i].name);
    };
} (allNames(characters));

/* 10 */ function eyesAndMass(characters) {
    return characters.find(character => character.eye_color === "blue" && Number(character.mass) > 80);
}
const personage = eyesAndMass(characters);
console.log(personage);

/* 11 */ function blueAndHeight(characters) {
    return characters
        .filter(character => character.eye_color === "blue")
        .every(character => Number(character.height) > 170);
}
const eyesHeights = blueAndHeight(characters);
console.log(eyesHeights);