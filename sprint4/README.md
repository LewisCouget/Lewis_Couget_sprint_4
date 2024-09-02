# Reglas de Código para la Entrega de Ejercicios

## 1. Uso de Constantes

- Las constantes que no cambian de valor durante la ejecución deben escribirse en mayúsculas y separadas por guiones bajos.

```javascript
const MAX_HEIGHT = 200;
const API_KEY = "your-api-key-here";
```

## 2. Nombres de Variables

- Las variables deben escribirse en formato camelCase. Los nombres deben ser descriptivos y reflejar claramente su propósito.

```javascript
let userName = "John Doe";
let totalMass = 346;
```

## 3. Nombres de Funciones

- Los nombres de las funciones deben estar en inglés, escritos en formato camelCase y describir claramente la acción que realiza la función.

```javascript
function calculateTotalHeight(characters) {
  // código aquí
}
```

## 4. Comentar el Código

- Añadir comentarios solo si es necesario para explicar secciones complejas del código o decisiones de diseño. Los comentarios deben ser claros y concisos. Pueden estar escritos en español

```javascript
// Calculate the total mass of all characters
const totalMass = characters.reduce(
  (acc, character) => acc + parseInt(character.mass),
  0
);
```

## 5. Uso de `let` y `const`

- Utilizar `const` siempre que la variable no vaya a ser reasignada. Usar `let` para variables que puedan cambiar de valor. Evitar el uso de `var`.

```javascript
const arrayOfNumbers = [1, 2, 3, 4, 5];
let currentHeight = 0;
```

## 6. Espaciado y Sangría

- Mantener una sangría consistente de 2 o 4 espacios, según las preferencias del proyecto. Asegurarse de que el código esté bien espaciado para mejorar la legibilidad.

```javascript
if (userAge > 18) {
  console.log("User is an adult");
}
```

## 7. Pruebas y Verificación

- Asegurarse de que el código funcione correctamente y pase todas las pruebas necesarias antes de la entrega.
