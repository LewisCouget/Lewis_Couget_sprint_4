
// Parte 1
/**
 * ### Challenge sayGoodbye
 *
 * @instrucciones
 * Esta función debe tomar un nombre como argumento,
 * y devolver una cadena que diga `Adiós, {nombre}. Que tengas un buen día'.
 *
 * Por ejemplo, si invocamos sayGoodbye
 * pasando 'Andy' como argumento,
 * el valor devuelto debería parecerse a: 'Adiós, Andy. Que tengas un buen día'.
 *
 */

function sayGoodbye(name) {
  console.log('Adiós, ' + name + '. Que tengas un buen día');
}
sayGoodbye('Lewindoski');

/**
 * ### Challenge temperatureInC
 *
 * @instrucciones
 * Esta función debe tomar una temperatura y una unidad (ya sea 'F' o 'C') como argumentos,
 * y devolver la temperatura en grados Celcius, redondeada al número entero más cercano.
 *
 * Por ejemplo, si invocamos temperatureInC
 * pasando 88, 'F' como argumentos,
 * el valor devuelto debe ser: '24C'
 *
 * Si invocamos temperatureInC
 * pasando 24, 'C' como argumentos,
 * el valor devuelto debe ser: '24F'
 *
 * Sugerencia: Puedes crear otra función para convertir F a C.
 */

function temperatureInC(tem, value) {
  const formTempFah = parseInt((tem - 32) * (5 / 9));
  const formTempCel = parseInt((tem * 1.8) + (32));

  if (value === `F`) {
    console.log(`Los grados en celsius: `, parseInt(formTempFah) + `C`);
  } else if (value === `C`) {
    console.log(`Los grados en fahrenheit: `, parseInt(formTempCel) + `F`);
  }
}
temperatureInC(88, `F`);
temperatureInC(88, `C`);

/**
 * ### Challenge makePersonObject
 *
 * @instrucciones
 * Esta función debe tomar un id, un nombre y un email como argumentos,
 * y devolver un objeto con las propiedades id, name y email.
 *
 * Por ejemplo, si invocamos makePersonObject
 * pasando 1, 'Alguien' y 'alguien@alguien.com' como argumentos,
 * el valor devuelto deberia parecerse a:
 * {
 * id: 1,
 * name: Alguien,
 * email: alguien@alguien.com»,
 * }
 */

function makePersonObject(id, name, email) {
  return {
    id: id,
    name: name,
    email: email
  };
}

const person = makePersonObject(1, 'Roberto', 'Carlos@gmail.com');
console.log(person);


/**
 * ### Challenge getName
 *
 * @instrucciones
 * Esta función toma como único argumento
 * un objeto que contiene una propiedad name,
 * y devuelve una cadena que dice Hola, mi nombre es {name},
 * donde {nombre} es el nombre almacenado en el objeto.
 *
 * Por ejemplo, si invocamos a `getName
 * pasando { id: 1, name: 'Alguien', email: 'alguien@alguien.com` } como argumento,
 * el valor devuelto debería parecerse a Hola, mi nombre es Alguien.
 */

function getName(per) {
  return `Hola, mi nombre es ${per.name}!`;
}

const peopleName = {
  id: 1,
  name: `Carlitos`,
  email: `Tévez@gmail.com`,
};

console.log(getName(peopleName));


/**
 * ### Challenge appleIndex
 *
 * @instrucciones
 * Esta función toma como único argumento un array
 * que contiene cadenas,
 * y devuelve el índice en el array de la cadena manzana.
 *
 * Puedes asumir que la cadena 'manzana' aparecerá exactamente
 * una vez en la matriz.
 *
 * Por ejemplo, si invocamos a appleIndex
 * pasando [ 'naranja', 'uva', 'manzana', 'plátano', 'mango' ] como argumento,
 * el valor devuelto debería ser: 2.
 */

function appleIndex(array) {
  return array.indexOf(`manzana`);
}
const arrayFruits = ['naranja', 'uva', 'manzana', 'platano', 'mango'];
console.log(appleIndex(arrayFruits));


/**
 * ### Challenge isItAnApple
 *
 * @instrucciones
 * Esta función toma como único argumento un array
 * que contiene cadenas
 * y devuelve un array de igual longitud que contiene true
 * si la entrada correspondiente en el array original es manzana
 * y false si es cualquier otra cosa.
 *
 *
 * Por ejemplo, si invocamos a isItAnApple
 * pasando [ 'orange', 'apple', 'banana', 'apples', 'apple', 'mango' ] como argumento,
 * el valor devuelto debería ser: [ false, true, false, false, true, false ].
 */


const fruits = ['orange', 'apple', 'banana', 'apples', 'apple', 'mango'];

function isItAnApple(arr) {
  return arr.map(item => item === 'apple');
}

console.log(isItAnApple(fruits));