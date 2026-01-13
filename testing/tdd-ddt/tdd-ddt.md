# TDD

1. Ciclo Red-Green-Refactor

Escribes la prueba antes que el código

TDD se basa en un ciclo infinito de tres pasos


1. RED (Fallo):
Escribes una prueba para una funcionalidad que aún no has implementado. 
Al ejecutarla, la prueba debe fallar.
Esto confirma que la prueba es válida y que realmente estás probando algo nuevo.

2. GREEN (Pase):
Escribes la mínima cantidad de código necesaria para que la prueba pase
No importa si el código no es perfecto o es "sucio", el objetivo es que el test se ponga en verde.
Te enfocas en solucionar el problema actual sin distraerte con optimizaciones prematuras.

3. REFACTOR (Limpieza):
Tienes la seguridad de que el código funciona (porque el test está en verde), lo mejoras.
Eliminas duplicaciones, mejoras nombres de variables y estructuras.
Mantienes la calidad del código sin miedo a romper nada, porque el test te avisará si algo falla.


Ej: Validador de Contraseñas
Queremos una función que valide que una contraseña tenga al menos 6 caracteres.

1. Fase RED

```
it('debería retornar false si la clave tiene menos de 6 caracteres', () => {
  expect(validarClave('123')).toBe(false);
});
```

Si corres esto, Vitest dará error porque validarClave ni siquiera existe.


2. Green

Función con el código mínimo

```
export const validarClave = (clave: string) => {
  if (clave.length < 6) return false;
  return true;
};
```

Al correr el test está verde, dado que ya hicimos el caso de error


3. Refactor

```
export const validarClave = (clave: string) => clave.length >= 6;
```

Corres el test de nuevo para asegurar que el cambio no rompió la lógica


Las 3 Leyes de TDD: 

Para seguir TDD estrictamente

1. No escribirás código de producción sin antes escribir una prueba que falle.

2. No escribirás más de una prueba unitaria de lo necesario para que falle (no compilar es fallar).

3. No escribirás más código de producción que el suficiente para pasar la prueba actual.


Ventajas: 

Arquitectura limpia: Te obliga a escribir código modular (si el código es difícil de testear, es que está mal diseñado).

Miedo cero al cambio: Puedes cambiar librerías enteras o refactorizar código complejo sabiendo que tus tests te protegen



## FizzBuzz

1. Función a probar

```
export const fizzbuzz = (n: number): string => {
  if (n % 15 === 0) return 'FizzBuzz';
  if (n % 3 === 0) return 'Fizz';
  if (n % 5 === 0) return 'Buzz';
  return n.toString();
};
```

2. Test

Cubrimos cada "camino" lógico de la función 

```
import { describe, it, expect } from 'vitest';
import { fizzbuzz } from './fizzbuzz';

describe('fizzbuzz()', () => {
  it('debería retornar "Fizz" si el número es múltiplo de 3', () => {
    expect(fizzbuzz(3)).toBe('Fizz');
    expect(fizzbuzz(9)).toBe('Fizz');
  });

  it('debería retornar "Buzz" si el número es múltiplo de 5', () => {
    expect(fizzbuzz(5)).toBe('Buzz');
    expect(fizzbuzz(10)).toBe('Buzz');
  });

  it('debería retornar "FizzBuzz" si el número es múltiplo de 3 y 5', () => {
    expect(fizzbuzz(15)).toBe('FizzBuzz');
    expect(fizzbuzz(30)).toBe('FizzBuzz');
  });

  it('debería retornar el número como string si no es múltiplo de 3 ni de 5', () => {
    expect(fizzbuzz(1)).toBe('1');
    expect(fizzbuzz(7)).toBe('7');
  });
});
```

3. Características

1. Independencia:
Cada it prueba una regla de negocio por separado
Si la lógica de los múltiplos de 3 falla, el test de los múltiplos de 5 seguirá pasando, ayudándote a identificar el error rápido

2. Límites:
Probamos el número 15 específicamente porque es donde las condiciones se cruzan.

3. Simplicidad:
Una función es "pura" no usa mocks, dado que no depende de APIs externas, ni de tiempo. 
Es perfecta para 'expect(...).toBe(...)'.


### Parametrización (Test.each)

Si tienes muchos números que probar y no quieres escribir un expect por cada uno
Vitest permite hacer pruebas en serie:

```
it.each([
  [3, 'Fizz'],
  [5, 'Buzz'],
  [15, 'FizzBuzz'],
  [2, '2']
])('fizzbuzz(%i) -> %s', (input, expected) => {
  expect(fizzbuzz(input)).toBe(expected);
});
```



## Prácticas generales

Se orienta a una arquitectura es limpia y modular.
Si un código es difícil de testear, probablemente esté "acoplado" (demasiado mezclado, poco enfocado)

1. Funciones Puras

Ante la misma entrada, siempre devuelve la misma salida y no tiene efectos secundarios
No modifica variables externas ni hace logs
No Depende de una variable externa que puede cambiar
Todo lo que necesita llega por parámetros.


2. Inyección de Dependencias (DI)

En lugar de crear un objeto o llamar a una API directamente dentro de la función
Se lo 'inyecta' como un argumento, facilita el uso de Mocks

```
// Mal: 'axios' está pegado dentro de la función
import axios from 'axios';

async function obtenerDatos() {
  return await axios.get('/api'); 
}
```

Código más testeable

```
// Bien: Puedes pasarle una versión falsa (mock) de axios en el test
async function obtenerDatos(client = axios) {
  return await client.get('/api');
}
```


3. Evitar el Estado Global

Si tu función depende de una variable let declarada fuera de ella o de un window.localStorage, tus tests se volverán "frágiles".
El orden de los tests podría afectar el resultado.
Si necesitas un estado, pásalo como parámetro o encapsúlalo en una clase/objeto que puedas instanciar de cero en cada test.


4. Controlar lo "Impredecible" (Fechas y Randoms)

Funciones que usan new Date() o Math.random() son la pesadilla del testing porque el resultado cambia cada segundo.

```
// Difícil de testear: hoy siempre cambia
const esFinDeSemana = () => {
  const hoy = new Date().getDay();
  return hoy === 0 || hoy === 6;
};

// Fácil de testear: puedes enviarle cualquier fecha
const esFinDeSemanaTestenable = (fecha = new Date()) => {
  const dia = fecha.getDay();
  return dia === 0 || dia === 6;
};
```


5. SRP

Si una función hace 5 cosas (valida, transforma, guarda en DB, envía email y loguea), necesitarás un test gigante y complejo.
Divide esa función en 5 funciones pequeñas.
Podrás hacer pruebas unitarias rápidas para cada pieza y una prueba de integración para la función principal.


Ej: Sistema que aplica un descuento si hoy es el cumpleaños del usuario.

```
function aplicarDescuento(usuario) {
  const hoy = new Date().toISOString().split('T')[0];
  if (usuario.cumple === hoy) {
    return usuario.precio * 0.8;
  }
  return usuario.precio;
}
```

##### Problema: Solo podrías testear el descuento el día real del cumpleaños del usuario.

Testeable:

```
function aplicarDescuento(usuario, fechaReferencia = new Date()) {
  const fechaStr = fechaReferencia.toISOString().split('T')[0];
  if (usuario.cumple === fechaStr) {
    return usuario.precio * 0.8;
  }
  return usuario.precio;
}
```

Puedes pasarle cualquier fecha y simular que "hoy" es el cumpleaños.



## Prácticas linea a linea

Se enfoca en la transparencia 
Una línea de código es difícil de testear cuando "esconde" algo (una fecha, una petición a internet, una variable global).
Micro-patrones técnicos para transformar código "oscuro" en código "transparente".

1. De "Hardcoded" a Parámetros (Inyección)

El mayor enemigo del test unitario es el valor fijo dentro de una función.

```
const calcularIVA = (monto) => {
  const tasa = 0.21; // <-- Valor oculto. Si la ley cambia, el test falla.
  return monto * tasa;
};
```

Testeable:

```
const calcularIVA = (monto, tasa = 0.21) => {
  return monto * tasa;
};
```

Puedes probar qué pasa si el IVA es del 10%, 15% o 0% sin cambiar el código.


2. Patrón "Guard Clause" (Retorno Temprano)

Si hay muchos if/else anidados, tendrás que crear tests muy complejos para llegar a la última línea.

Malo: Nidificado

```
function procesarUsuario(user) {
  if (user) {
    if (user.activo) {
      // Lógica principal aquí (muy difícil de alcanzar)
    }
  }
}
```

Bien (Plano):

```
function procesarUsuario(user) {
  if (!user) return null;         // Test 1: Usuario inexistente
  if (!user.activo) return null;  // Test 2: Usuario inactivo

  // Lógica principal (Test 3: El camino feliz)
}
```

Hace que cada escenario sea una prueba unitaria corta y clara


3. Evitar la "Mutación de Objetos"

Si una función modifica un objeto que viene de fuera, el test puede volverse impredecible porque el estado del objeto cambia.

Mal: Efecto secundario

```
const agregarItem = (carrito, producto) => {
  carrito.items.push(producto); // Modifica el original
};
```

Testeable: Inmutabilidad

```
const agregarItem = (carrito, producto) => {
  return { ...carrito, items: [...carrito.items, producto] }; // Retorna uno nuevo
};
```

Más fácil testear que resultado !== original que estar vigilando si el original cambió.


4. Desacoplar la "Lógica" de la "IO" (Entrada/Salida)

Nunca mezcles cálculos matemáticos o de texto con llamadas a la base de datos o al DOM en la misma línea

```
function mostrarSaludo() {
  const nombre = document.getElementById('input').value; // IO
  const saludo = `Hola ${nombre}`; // Lógica
  document.getElementById('display').innerText = saludo; // IO
}
```

Testeable: SRP

```
// Esta función es 100% testeable en Vitest (Lógica pura)
export const crearSaludo = (nombre) => `Hola ${nombre}`;

// Esta función solo maneja el DOM (Integración)
function manejarClick() {
  const nombre = document.getElementById('input').value;
  document.getElementById('display').innerText = crearSaludo(nombre);
}
```


Higiene de Código:

1. new Date():
Cámbialo por Un parámetro fecha
Para poder simular cualquier día.

2. Math.random():
Un parámetro semilla
Para que el resultado sea predecible.

3. console.log():
Un logger inyectado
Para verificar en el test que se llamó al log.

4. throw Error:
Retornar un objeto de error
Facilita el flujo de datos en el test.


Ej: Código de descuento aleatorio

Imposible de testear: 

```
function generarCupon() {
  return "DESC-" + Math.random().toString(36).substr(2, 5).toUpperCase();
}
```

Mejor:

```
// Le pasamos la función que genera el random como dependencia
export const generarCupon = (generadorRandom = () => Math.random()) => {
  const id = generadorRandom().toString(36).substr(2, 5).toUpperCase();
  return `DESC-${id}`;
};
```

Test:

```
it('debería generar el cupón correctamente con un valor fijo', () => {
  const mockRandom = () => 0.12345; // Forzamos un valor
  expect(generarCupon(mockRandom)).toBe('DESC-4F64O');
});
```



## Función callback

El secreto está en separar el "qué hacer" (lógica) del "cuándo dispararlo" (ejecución).
Si la función hace cálculos complejos y luego llama al callback
es difícil de testear porque el test depende de que el callback funcione bien.


1. Error común (Acoplamiento)
Difícil de testear porque la lógica de filtrado y la ejecución del callback están pegadas.

```
//Difícil de testear: lógica "atrapada"
function procesarUsuario(usuario, callback) {
  const nombreLimpio = usuario.nombre.trim().toUpperCase(); // Lógica
  if (nombreLimpio.length > 3) {
    callback(nombreLimpio); // Ejecución
  }
}
```


2. Aplicando SRP

Extrae la lógica a una función pura
Así puedes testear la lógica sin preocuparte por el callback
Y testear el callback sin preocuparte por la lógica.

```
// 1. Lógica pura (Testeable sin mocks)
export const transformarNombre = (nombre) => nombre.trim().toUpperCase();

// 2. Validador (Testeable por separado)
export const esNombreValido = (nombre) => nombre.length > 3;

// 3. Orquestador (La función original ahora es simple)
export function procesarUsuario(usuario, callback) {
  const nombre = transformarNombre(usuario.nombre);
  if (esNombreValido(nombre)) {
    callback(nombre);
  }
}
```


Test: 

Al haber separado las piezas, tus tests ahora son mucho más atómicos y descriptivos:

1. Test de la lógica (Sin Mocks)

```
it('transformarNombre debería limpiar y poner en mayúsculas', () => {
  expect(transformarNombre('  juan  ')).toBe('JUAN');
});
```

2. Test de la orquestación (Con Mocks)
Usas vi.fn() para ver si el callback se llamó solo cuando debía.

```
it('debería llamar al callback si el nombre es válido', () => {
  const miMock = vi.fn();
  const usuarioValido = { nombre: 'Alberto' };

  procesarUsuario(usuarioValido, miMock);

  expect(miMock).toHaveBeenCalledWith('ALBERTO');
});

it('NO debería llamar al callback si el nombre es corto', () => {
  const miMock = vi.fn();
  const usuarioInvalido = { nombre: 'Jo' };

  procesarUsuario(usuarioInvalido, miMock);

  expect(miMock).not.toHaveBeenCalled();
});
```

Prácticas: 

1. Parámetros por defecto para el callback:
Evita errores si alguien olvida pasar el callback.

```
function procesar(data, callback = () => {})
```

2. Hacerla asíncrona si es necesario:
Si el callback hace algo pesado, considera usar async/await para que Vitest pueda esperar el resultado

3. Inyectar la lógica: 
Si quieres llevar el SRP al extremo, puedes pasar las funciones de transformación como parámetros.

```
function procesarUsuario(usuario, callback, transformador = transformarNombre) {
  const nombre = transformador(usuario.nombre);
  // ...
}
```



## Edge Cases

##### Es el arte de pensar: "¿Cómo puedo romper mi propio código?"
Convertirte en un "detective" de errores antes de que lleguen a producción.

1. Técnica del "Cero, Uno, Muchos" (ZOM)
Es una regla de oro para cualquier colección de datos (arrays, strings, listas).

Zero (Cero): ¿Qué pasa si el input está vacío? 
`(Array vacío [], string vacío "", objeto {})`.

One (Uno): ¿Qué pasa si solo hay un elemento? 
(A veces los bucles fallan si no hay un segundo elemento).

Many (Muchos): ¿Qué pasa si hay 1,000,000 de elementos?
¿Se bloquea la memoria?


2. Análisis de Valores Límite (Boundary Value Analysis)
La mayoría de los errores ocurren en las fronteras de una condición

Si tu código dice if (edad >= 18), tus edge cases automáticos son:
Límite exacto: 18.
Justo por debajo: 17.9 o 17.
Justo por encima: 19.


3. Cheat Sheet de Tipos de Datos
Cuando estés frente a una función, revisa esta lista según el tipo de parámetro:

Números:
0: Siempre genera problemas (división por cero, falsy en JS).
Números negativos: ¿Tiene sentido una edad: -5?
Decimales vs Enteros: ¿Tu código maneja 0.1+0.2 correctamente?
Límites técnicos: Number.MAX_SAFE_INTEGER o Infinity.

Strings (Cadenas):
Espacios en blanco: " ", "\n" (saltos de línea), "\t" (tabulaciones).
Strings muy largos: ¿Qué pasa si alguien pega el Quijote en el campo "nombre"?
Caracteres especiales: Emojis (🚀), tildes, o caracteres de otros idiomas (Ñ, Ç).

Objetos y Arrays:
null y undefined: El clásico "Cannot read property of undefined".
Referencia circular: Un objeto que se contiene a sí mismo.
Propiedades faltantes: ¿Qué pasa si el objeto no trae la clave que esperas?


4. Factor Tiempo y Entorno
A veces el edge case no está en el dato, sino en el contexto:

Latencia: ¿Qué pasa si la API tarda 30 segundos en responder?
Orden: Si el usuario hace clic en "Guardar" dos veces muy rápido (Double Submit).
Zonas horarias: ¿Tu código funciona a las 11:59 PM del 31 de diciembre?


5. Aplicarlo edge cases con Test.each
Una vez detectados, agrúpalos.
No hagas un test por cada uno, usa DDT (Data-Driven Testing):

```
describe('Validador de búsqueda', () => {
  test.each([
    ['', false],                // Caso: Vacío
    ['   ', false],             // Caso: Solo espacios
    ['a'.repeat(1000), false],  // Caso: Demasiado largo
    ['js', true],               // Caso: Límite inferior válido
    ['javascript', true],       // Caso: Camino feliz
    [null, false],              // Caso: Tipo incorrecto
  ])('Validar "%s" debería resultar en %s', (input, esperado) => {
    expect(validarBusqueda(input)).toBe(esperado);
  });
});
```


6. Práctica recomendada: "Testing Adversario"
Cuando termines una función, tómate 2 minutos para jugar a ser el "hacker":

"¿Qué pasa si paso un String donde espero un Número?" (JS lo permite).
"¿Qué pasa si el callback nunca se ejecuta?"
"¿Qué pasa si el servidor devuelve un error 500?"

Si encuentras un bug en producción que no viste en tus tests, no lo arregles de inmediato. 
Primero escribe un test que recree ese bug (el edge case que olvidaste), y luego arréglalo.
Esto se llama Regression Testing.



## Números

En JavaScript todos los numeros son de tipo 64-bit float (IEEE 754).
Significa que no hay distinción real entre enteros y decimales a nivel de motor
Abre la puerta a bugs silenciosos

1. Cero (0) y los valores "Falsy"
En JS, el 0 se evalúa como false
Muchos bugs ocurren al intentar poner valores por defecto.

Mal: const cantidad = stock || 10
Si el stock es 0, ¡cantidad será 10!.

Bien: operador de Nullish Coalescing (??) o comparaciones explícitas.

```
// ✅ Solo usa 10 si stock es null o undefined, permitiendo el 0
const cantidad = stock ?? 10;

// ✅ Solo usa 10 si stock es null o undefined, permitiendo el 0
const cantidad = stock ?? 10;
```

2. Blindaje contra Negativos
Si tu función procesa edades, precios o distancias, un número negativo romperá la lógica de negocio.
Usa Math.abs() si quieres forzar positividad, o una cláusula de guarda para validar.

```
function calcularDescuento(precio) {
  // Evita que el precio sea negativo o cero
  if (precio <= 0) return 0; 
  
  // Opcional: convertir a positivo si el signo no importa
  const precioSeguro = Math.abs(precio); 
}
```

3. Enteros vs. Decimales (problema de precisión)
El bug más famoso es 0.1+0.2 =/= 0.3.
En JS, 0.1+0.2 = 0.30000000000000004

Práctica para dinero: Trabaja siempre con céntimos (enteros) y divide al final, o usa toFixed().
Práctica para validación: Usa Number.isInteger().

```
// Validación: ¿Necesitas un entero para un ID o índice?
if (!Number.isInteger(id)) throw new Error('El ID debe ser un número entero');

// Manejo de dinero:
const total = (precio * 100 + impuesto * 100) / 100; // Evita decimales flotantes
const totalLegible = Number(total.toFixed(2)); // Redondeo final a 2 decimales
```


4. Límites Técnicos: MAX_SAFE_INTEGER y Infinity
JS deja de ser preciso después de 2^53 - 1 (9.007.199.254.740.991)
Más allá de eso, los números empiezan a "redondearse" solos.

Usa Number.isSafeInteger() para números muy grandes (como IDs de bases de datos) o cambia a BigInt.

```
// Línea de seguridad para IDs gigantes
if (!Number.isSafeInteger(idGrande)) {
  console.warn('Cuidado: Perdiendo precisión numérica');
}

// Uso de BigInt para seguridad total (añade una 'n' al final)
const idSuperSeguro = 9007199254740995n;
```


5. Detectando el infinito (Infinity)
Una división por cero en JS no lanza un error, devuelve Infinity
Usa Number.isFinite() para descartar Infinity, -Infinity y NaN de un solo golpe.

```
function dividir(a, b) {
  const resultado = a / b;

  //Blindaje total: ¿Es un número real con el que podemos trabajar?
  if (!Number.isFinite(resultado)) {
    return 0; // O maneja el error según tu lógica
  }
  return resultado;
}
```


Rs validación:
Si quieres una función que sea un "tanque" contra bugs numéricos, empieza así:

```
function procesarPago(monto) {
  // 1. ¿Es un número y no es NaN?
  // 2. ¿Es finito (no Infinity)?
  // 3. ¿Es positivo y mayor a cero?
  if (typeof monto !== 'number' || !Number.isFinite(monto) || monto <= 0) {
    throw new Error('Monto inválido para el pago');
  }

  // 4. Si es dinero, ¿está dentro de los límites de precisión?
  if (!Number.isSafeInteger(monto * 100)) {
     // Manejar caso de monto astronómico
  }

  // ... lógica de la función
}
```



## Strings

Los "caracteres invisibles" y la forma en que se miden los caracteres especiales (como emojis) pueden romper tu lógica de negocio.

1. Espacios en blanco
En JS, un string con un espacio (" ") es truthy.

Usa siempre .trim() al inicio para limpiar los extremos
Para detectar si un string solo tiene espacios o está vacío, usa una validación de longitud post-limpieza.

```
function procesarNombre(nombre) {
  // Línea de blindaje: Elimina espacios, saltos de línea (\n) y tabs (\t)
  const limpio = nombre?.trim() ?? '';

  if (limpio.length === 0) {
    throw new Error('El nombre no puede estar vacío');
  }
  
  return limpio;
}
```


2. Strings muy largos (Límites y Memoria)
Un string excesivamente largo puede causar problemas en la base de datos
o incluso congelar el hilo principal de ejecución si intentas procesarlo
por ejemplo, con un split o un regex complejo

```
const MAX_COMENTARIO = 5000;

function guardarComentario(texto) {
  // Blindaje: Validar antes de hacer operaciones pesadas
  if (texto.length > MAX_COMENTARIO) {
    throw new Error('Texto demasiado largo');
  }
  
  // Opcional: Recortar automáticamente
  const textoSeguro = texto.slice(0, MAX_COMENTARIO);
}
```


3. Caracteres Especiales y Emojis ("Surrogate Pair")
JS usa codificación UTF-16
Muchos emojis cuentan como 2 caracteres en la propiedad .length

Si necesitas contar caracteres reales (lo que el usuario ve)
usa el iterador de strings o la API de Intl.Segmenter.

```
const emoji = "🚀";
console.log(emoji.length); // 2 (Malo para validar límites)

// ✅ Forma correcta de contar caracteres "reales"
const longitudReal = [...emoji].length; // 1
```

Sanitización: Si el string se va a mostrar en HTML, debes limpiar caracteres como < o >.

```
const sanitizar = (str) => str.replace(/[<>]/g, '');
```


4. Edge Cases en String
Valores que siempre deberías pasarle a tus funciones para ver si "explotan":

Vacío	""	Si maneja la ausencia de datos
Espacios	" " o "\n\t"	Si el trim() funciona
Emojis	"Hola 🌍"	Si el contador de longitud o el sistema de BD falla.
Inyección	"<script>"	Si tu código es vulnerable a XSS
Nulos	null o undefined	Si la función rompe por no ser un string


5. Implementación con Test.each
Aplicando estos criterios para un "Validador de Usuarios":

```
import { describe, it, expect } from 'vitest';

const validarUsuario = (nombre) => {
  if (typeof nombre !== 'string') return false;
  const limpio = nombre.trim();
  const longitudReal = [...limpio].length;
  return longitudReal >= 3 && longitudReal <= 10;
};

describe('validarUsuario() - String Edge Cases', () => {
  it.each([
    ['Juan', true],              // Caso feliz
    ['  Ana  ', true],           // Espacios extremos (debería limpiar)
    ['Jo', false],               // Muy corto
    ['', false],                 // Vacío
    ['   ', false],              // Solo espacios
    ['🚀🚀🚀', true],            // Emojis (3 caracteres reales)
    ['A'.repeat(11), false],     // Muy largo (límite técnico)
    [null, false],               // Tipo erróneo
  ])('Validando "%s" resulta en %s', (input, esperado) => {
    expect(validarUsuario(input)).toBe(esperado);
  });
});
```



## Arrays

Es una fuente de errores de referencia y mutación
No solo importa qué hay dentro, sino cómo se accede a ello.

1. Peligro de la referencia (Mutación)
En JS, los arrays se pasan por referencia
Si tu función modifica el array original con .push() o .splice()
podrías estar rompiendo otras partes de tu app sin saberlo.

Mal: push()

```
function agregarId(lista, id) {
  lista.push(id); // Modifica el array original que vive fuera de la función
  return lista;
}
```

Inmutabilidad:

```
function agregarId(lista, id) {
  // Línea de blindaje: Crea una copia nueva
  return [...lista, id]; 
}
```

Te permite asegurar que originalArray !== result


2. Validación 'Es un Array'
Nunca asumas que el parámetro es un array
Alguien podría pasar un objeto o un string
tu código lanzaría un error al intentar usar .map() o .length.

```
function procesarLista(items) {
  // Blindaje: Array.isArray es la única forma segura
  if (!Array.isArray(items)) {
    return []; // O lanzar un error
  }
  
  // Opcional: ¿Necesitas que no esté vacío?
  if (items.length === 0) return "Sin datos";
}
```


3. Edge Cases para Arrays
Para test.each son los escenarios obligatorios:

Vacío `[]` Es la causa más común de errores de lógica.
Un solo elemento `[1]`	Prueba que los bucles y reducers funcionen con un solo ítem.
Duplicados `[1, 1, 2]`	¿Tu función debería unificar o permitir duplicados?
Nulos dentro `[1, null, 2]`	¿Qué pasa si la lista trae "huecos"?
Orden `[2, 1, 3]` ¿Tu función depende de que la lista esté ordenada?


4. Matchers especificos de Vitest
Para testear arrays, no uses solo .toBe().
Vitest tiene herramientas diseñadas para inspeccionar colecciones

toEqual(): Compara el contenido, no la referencia (imprescindible para arrays).
toContain(): Verifica si un elemento existe dentro.
toHaveLength(n): Verifica el tamaño exacto.
expect.arrayContaining`([...])`: Verifica si el array contiene ciertos elementos, sin importar el orden o si hay más.

```
it('debería procesar la lista correctamente', () => {
  const resultado = miFuncion(['a', 'b']);
  
  expect(resultado).toHaveLength(2);
  expect(resultado).toContain('A'); // Si la función los pasa a mayúsculas
  expect(resultado).toEqual(['A', 'B']); // Comparación profunda
});
```


Ej: Filtro de Productos
Aplicar SRP y DDT para una función que filtra productos caros

```
export const obtenerProductosCaros = (productos, umbral = 100) => {
  if (!Array.isArray(productos)) return [];
  
  // Usamos filter (inmutable por naturaleza)
  return productos.filter(p => p.precio > umbral);
};
```

Suite de Test:

```
describe('obtenerProductosCaros', () => {
  test.each([
    { desc: 'lista vacía', input: [], esperado: [] },
    { desc: 'productos baratos', input: [{precio: 10}, {precio: 50}], esperado: [] },
    { desc: 'productos caros', input: [{precio: 150}], esperado: [{precio: 150}] },
    { desc: 'mezcla', input: [{precio: 50}, {precio: 200}], esperado: [{precio: 200}] },
    { desc: 'no es array', input: null, esperado: [] },
  ])('$desc', ({ input, esperado }) => {
    expect(obtenerProductosCaros(input)).toEqual(esperado);
  });
});
```


Prácticas linea a linea: 

Línea 1: Verifica Array.isArray().
Línea 2: Si necesitas modificar, haz `const copia = [...original]`.
Línea 3: Si buscas un solo elemento, usa .find() (más rápido que filtrar toda la lista).
Línea 4: Si vas a retornar un array vacío, que siempre sea el mismo tipo de dato (evita retornar `null` a veces y `[]` otras).



## Objetos

Forma principal de estructurar datos
En testing debemos tener en cuenta: la comparación por referencia, las propiedades anidadas (deep nesting) y las claves faltantes.

1. Referencia vs. Valor
Al igual que con los arrays, si comparas dos objetos con toBe(), Vitest fallará aunque tengan el mismo contenido, porque busca que sean el mismo espacio en memoria.

expect(obj1).toBe(obj2): Falla si no son el mismo objeto exacto.
expect(obj1).toEqual(obj2): Compara las propiedades una por una.


2. Desestructuración y Valores por Defecto
Un error común es intentar acceder a intentar acceder a usuario.direccion.calle cuando direccion es undefined.

La desestructuración con valores por defecto en los parámetros de la función para asegurar una "forma" mínima del objeto.

```
// Si no viene 'rol', por defecto será 'usuario'
function procesarPerfil({ nombre, rol = 'usuario' } = {}) {
  // El '= {}' al final evita errores si el objeto entero es null/undefined
  return `${nombre} es ${rol}`;
}
```


3. Acceso Seguro: Optional Chaining
Si trabajas con objetos que vienen de una API (anidados)
El operador ?. es tu mejor amigo para que el código sea testeable y no "explote"

```
function obtenerCiudad(usuario) {
  // Si 'direccion' no existe, devuelve undefined en lugar de romper
  return usuario?.direccion?.ciudad?.nombre ?? 'Ciudad desconocida';
}
```


4. Edge Cases
Con test.each

Objeto vacío {}	¿La función sabe manejar la falta de claves?
Nulo/Indefinido	null El famoso error "Cannot read property of...".
Claves extra {id: 1, basura: 'X'} ¿La función ignora lo que no necesita?
Valores falsy	{activo: false}	¿Confunde un false o 0 con un valor faltante?
Anidamiento	{a: {b: {c: 1}}}	¿Qué pasa si falta el nivel intermedio b?


5. Matchers de Vitest
Para no tener que comparar objetos gigantes enteros si solo te interesa una parte:

toMatchObject(subset): Verifica que el objeto tenga al menos las propiedades indicadas (ignora el resto).
toHaveProperty('path.to.prop'): Verifica si existe una propiedad en un camino específico.
toStrictEqual(): Como toEqual, pero también verifica que las clases sean las mismas (por ejemplo, que no compares un objeto literal con una instancia de una Clase).

```
it('debería actualizar el perfil correctamente', () => {
  const resultado = actualizarEmail(usuarioOriginal, 'nuevo@mail.com');
  
  // No necesitamos comparar todo el objeto usuario, solo el cambio
  expect(resultado).toMatchObject({
    email: 'nuevo@mail.com',
    activo: true
  });
});
```

Ej: Merge de Configuración
Función que combina la configuración del usuario con la configuración por defecto.

```
const DEFAULT_CONFIG = { theme: 'light', lang: 'es', notifications: true };

export const setupConfig = (userPrefs) => {
  // Verificamos que sea un objeto real
  if (!userPrefs || typeof userPrefs !== 'object' || Array.isArray(userPrefs)) {
    return DEFAULT_CONFIG;
  }
  
  // Creamos un nuevo objeto (Inmutabilidad)
  return { ...DEFAULT_CONFIG, ...userPrefs };
};
```

Test:

```
describe('setupConfig', () => {
  it('debería sobreescribir solo las propiedades enviadas', () => {
    const prefs = { theme: 'dark' };
    const result = setupConfig(prefs);
    
    expect(result).toEqual({ theme: 'dark', lang: 'es', notifications: true });
    expect(result).not.toBe(DEFAULT_CONFIG); // Verifica que sea una copia nueva
  });

  it('debería manejar inputs inválidos devolviendo el default', () => {
    expect(setupConfig(null)).toEqual(DEFAULT_CONFIG);
    expect(setupConfig(42)).toEqual(DEFAULT_CONFIG);
  });
});
```



## Factor Tiempo

Por definición, es variable e impredecible
Si tu test depende de la hora actual (new Date()) o de esperar a que pase el tiempo (setTimeout)
El test será inestable (flaky) o extremadamente lento.

1. Tiempo Real
Si tienes una función que saluda de forma distinta según la hora
no puedes testearla de forma fiable porque el test dará un resultado diferente al mediodía que a las 3 AM.

Intesteable:

```
const obtenerMensaje = () => {
  const hora = new Date().getHours();
  return hora < 12 ? 'Buenos días' : 'Buenas tardes';
};
```


2. Congelar el Reloj (vi.setSystemTime)
Permite secuestrar el reloj del sistema y fijarlo en una fecha específica

```
import { vi, it, expect, describe, beforeEach, afterEach } from 'vitest';

describe('obtenerMensaje', () => {
  beforeEach(() => {
    // 1. Activamos los "tiempos falsos"
    vi.useFakeTimers();
  });

  afterEach(() => {
    // 2. Volvemos al tiempo real después de cada test
    vi.useRealTimers();
  });

  it('debería decir Buenos días a las 10:00 AM', () => {
    const fechaFija = new Date(2025, 0, 1, 10, 0); // 1 de Enero, 10:00 AM
    vi.setSystemTime(fechaFija);

    expect(obtenerMensaje()).toBe('Buenos días');
  });
});
```


3. Viajar en el tiempo (vi.advanceTimersByTime)
Si tienes un setTimeout o un setInterval
no quieres que tu test espere 5 segundos reales
Puedes "adelantar" el reloj de golpe.

Código: 

```
function notificarDespues(callback) {
  setTimeout(() => {
    callback('Tiempo agotado');
  }, 5000); // 5 segundos
}
```

Test: 

```
it('debería ejecutar el callback tras 5 segundos', () => {
  vi.useFakeTimers();
  const spy = vi.fn();

  notificarDespues(spy);

  // En lugar de esperar 5s reales, saltamos en el tiempo
  vi.advanceTimersByTime(5000);

  expect(spy).toHaveBeenCalledWith('Tiempo agotado');
});
```


4. Edge Cases

Cambio de día	23:59:59 -> 00:00:01	¿La lógica aguanta el cambio de fecha?
Años bisiestos	29 de Febrero	¿Cálculos de "hace un año" fallan?
Zonas horarias	UTC vs Local	¿El servidor y el cliente ven la misma hora?
Tiempo Cero	setTimeout(cb, 0)	¿Se ejecuta en el orden correcto?
Race Conditions	Dos timers que terminan casi igual	¿Cuál se ejecuta primero?


5. Prácticas para evitar bugs de tiempo

1. Inyecta la fecha como dependencia
Si no quieres usar vi.setSystemTime, pasa la fecha como parámetro opcional.

```
// Fácil de testear sin herramientas especiales
const esTarde = (fecha = new Date()) => fecha.getHours() > 18;
```

2. No uses Date.now() directamente:
Úsalo dentro de una función o clase que puedas mockear.

3. Limpia siempre los timers:
En tu código de producción, asegúrate de hacer clearTimeout.
En tu test, asegúrate de hacer vi.useRealTimers() para no afectar a otros archivos de test.

4. Usa vi.runAllTimers() con precaución:
Esta función ejecuta todos los timers pendientes.
Es útil, pero si tienes un setInterval infinito, el test entrará en un bucle eterno
Es mejor usar vi.advanceTimersByTime(ms).

Ej: Debounce (Retardo)
Esperas a que el usuario deje de escribir para lanzar una búsqueda.

```
it('debería disparar la búsqueda solo después de que pare el tecleo', () => {
  vi.useFakeTimers();
  const buscar = vi.fn();
  const funcionConDebounce = debounce(buscar, 500);

  funcionConDebounce();
  funcionConDebounce();
  funcionConDebounce(); // Tres llamadas rápidas

  // Adelantamos 499ms (aún no debería haberse llamado)
  vi.advanceTimersByTime(499);
  expect(buscar).not.toHaveBeenCalled();

  // Pasamos el ms restante
  vi.advanceTimersByTime(1);
  expect(buscar).toHaveBeenCalledTimes(1);
});
```



## Factor Entorno

Variables externas que tu código no controla pero de las que depende para funcionar
Variables de entorno (.env), el objeto window, la ubicación (navigator), o el almacenamiento (localStorage).

Si no controlas el entorno en tus tests, estos serán frágiles y fallarán dependiendo de dónde o cómo se ejecuten
Vitest tiene herramientas específicas para "falsear" el entorno de manera segura.

1. Variables de Entorno (.env)
En Vite se suele usar import.meta.env.VITE_API_URL.
Si cambias este valor en tu archivo .env, podrías romper los tests que esperan una URL específica.
Solución: vi.stubEnv Vitest permite "clavar" un valor para una variable de entorno solo durante el test.

```
import { vi, it, expect } from 'vitest';

it('debería usar la URL de la API de desarrollo', () => {
  // Forzamos el valor del entorno
  vi.stubEnv('VITE_API_URL', 'https://dev.api.com');

  const url = obtenerUrlConfigurada(); // Función que lee el env
  expect(url).toBe('https://dev.api.com');

  // Al terminar, Vitest limpia esto automáticamente si usas vi.unstubAllEnvs()
});
```


2. Globales del Navegador (window, location, document)
A veces necesitas testear qué pasa si el usuario está en una URL específica o si el idioma del navegador es inglés.
Solución: vi.stubGlobal Esto reemplaza cualquier objeto global por un "doble".

```
it('debería detectar si el usuario está en modo oscuro', () => {
  // Simulamos que el navegador dice que prefiere el modo oscuro
  vi.stubGlobal('matchMedia', vi.fn().mockReturnValue({
    matches: true,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  }));

  expect(estaEnModoOscuro()).toBe(true);
});
```


3. Almacenamiento Local (localStorage / sessionStorage)
localStorage es persistente
Si un test guarda algo, el siguiente test lo leerá, creando un acoplamiento lateral peligroso.
Práctica: Limpia siempre el almacenamiento antes o después de cada test.

```
import { beforeEach, it, expect } from 'vitest';

beforeEach(() => {
  localStorage.clear();
  vi.clearAllMocks();
});

it('debería guardar el token de sesión', () => {
  guardarToken('abc-123');
  expect(localStorage.getItem('token')).toBe('abc-123');
});
```


4. Entorno de Ejecución (Node vs JSDOM)
Vitest corre por defecto en Node.js
Si intentas acceder a document.querySelector, tu test explotará porque Node no tiene DOM

Tienes dos opciones para configurar el entorno en tu vite.config.ts:

node: (Por defecto) Muy rápido, ideal para lógica pura, APIs y utilidades.
jsdom o happy-dom: Simulan un navegador en memoria. Necesario para React, Vue o Vanilla JS que toque el HTML.

```
// vite.config.ts
export default defineConfig({
  test: {
    environment: 'jsdom', // Configura el simulador de navegador
  },
});
```


5. Edge Cases
Cuando pienses en el entorno, intenta romper el código con estos casos

Env Vars	Variable no definida (undefined)	¿La app explota si falta una clave en el .env?
Navigator	navigator.onLine = false	¿Tu app sabe que no hay internet?
Pantalla	Ancho de pantalla de 320px	¿La lógica de "es móvil" funciona?
Permisos	Geolocalización denegada	¿Manejas el error cuando el usuario dice "No"?
Storage	localStorage lleno	¿Qué pasa si no hay más espacio en el disco del usuario?


Ej: Wrapper de Configuración
En lugar de usar import.meta.env directamente en 50 archivos, crea un archivo de configuración centralizado

Intesteable:

```
// En cualquier componente...
const api = import.meta.env.VITE_API_URL;
```

Testeable:
 
```
// config.ts
export const config = {
  apiUrl: import.meta.env.VITE_API_URL,
  isDev: import.meta.env.DEV
};

// En tu test:
it('test', () => {
  vi.mock('./config', () => ({
    config: { apiUrl: 'mock-url', isDev: true }
  }));
});
```



## Asíncronia

Es el que más "falsos positivos" genera en los tests
Pasan cuando no deberían o que fallan aleatoriamente
La clave para que sea testeable es eliminar la incertidumbre y tomar el control total sobre el tiempo y la respuesta.
 
1. De "Fetch" oculto a Inyección de Dependencias
Si tu función llama a fetch o axios directamente dentro de su cuerpo
No puedes testearla sin internet o sin mocks globales complejos.

Intesteable:

```
async function cargarDatos() {
  const res = await fetch('/api/datos'); // Hardcoded
  return res.json();
}
```

Testeable:
Pasa el servicio o la función de llamada como parámetro

```
// Ahora puedes pasar una función falsa en el test
async function cargarDatos(apiCall = fetch) {
  const res = await apiCall('/api/datos');
  return res.json();
}
```


2. Evitar el "Silencio" de Errores: Try-Catch estratégico
Un error común es poner un try-catch que solo hace un console.log.
En el test, esto hará que la función parezca exitosa aunque haya fallado.

Práctica: Asegúrate de que tu función re-lance el error
o devuelva un estado de error claro para que Vitest pueda detectarlo con .rejects.

```
async function obtenerUsuario(id, api) {
  try {
    return await api.get(id);
  } catch (error) {
    // No te limites a loguear, lanza un error con contexto
    throw new Error(`Error al obtener usuario ${id}: ${error.message}`);
  }
}
```

 
3. Retornar la Promesa
Si olvidas el return o el await en una función interna, el test terminará antes de que la lógica asíncrona se complete
ignorando posibles fallos.

Intesteable: 

```
// Peligro: El test no esperará a que el log termine
async function operacion(data) {
  await guardarEnDB(data);
  enviarLog(data); // <-- Sin await ni return, es una "promesa flotante"
}
```

Testeable: 

```
Correcto: Todo el flujo queda atado al ciclo de vida del test
async function operacion(data) {
  await guardarEnDB(data);
  return await enviarLog(data); 
}
```


4. Controlar la resolución en Vitest
Para testear estos flujos línea a línea, usamos los métodos de resolución de mocks de Vitest.

mockResolvedValue(val)	Simula una respuesta exitosa instantánea
mockRejectedValue(error)	Simula un fallo de red o servidor.
mockResolvedValueOnce(val)	Útil si tu función hace varias llamadas seguidas.

```
it('debería manejar el flujo de éxito', async () => {
  const apiMock = vi.fn().mockResolvedValue({ name: 'Gemini' });
  
  const resultado = await cargarDatos(apiMock);
  
  expect(resultado.name).toBe('Gemini');
});
```


5. Race Conditions para datos
Si tienes dos llamadas asíncronas, ¿qué pasa si la segunda termina antes que la primera?

prácticas: En lugar de Promise.all a ciegas, si el orden importa, asegúrate de que tu código gestione el estado.
test: Puedes usar promesas que controlas manualmente para simular retrasos.

```
it('debería mostrar el último dato solicitado aunque llegue primero', async () => {
  // Creamos una promesa que podemos resolver cuando queramos
  let resolverPrimera;
  const primeraPeticion = new Promise(res => resolverPrimera = res);
  
  const apiMock = vi.fn()
    .mockReturnValueOnce(primeraPeticion) // La primera tarda
    .mockResolvedValueOnce('Segundo Dato'); // La segunda es instantánea

  // ... lógica de test para verificar que el 'Segundo Dato' no es pisado
});
```


6. Validaciones

¿Hay await en todas las llamadas? No dejes promesas "sueltas".
¿El error es descriptivo? Evita catch (e) {} (comerse el error).
¿Puedo inyectar el "timer"? Si usas retardos, recuerda lo que vimos de vi.useFakeTimers().
¿He testeado el fallo? Siempre escribe un test donde la promesa falle (.mockRejectedValue).


7. Matchers Asíncronos en Vitest
Cuando el test es asíncrono, los expect cambian ligeramente:

```
// Para verificar que una función LANZA un error asíncrono
await expect(funcionAsincrona()).rejects.toThrow('Error esperado');

// Para verificar que una función RESUELVE correctamente
await expect(funcionAsincrona()).resolves.toBe('Éxito');
```


# DDT


Pruebas basadas en datos.
Los datos de entrada y los resultados esperados se separan del script de prueba.

TDD es sobre cuándo escribir las pruebas
DDT es sobre cómo estructurar esas pruebas para que sean ultra eficientes y fáciles de escalar

1. Separación de Poderes
En una prueba tradicional, los datos están "hardcodeados" (escritos a mano dentro del código).
El código del test es una plantilla vacía y los datos viven en una tabla o archivo externo.

Componentes: 

1. La Fuente de Datos: Una lista (array, JSON, CSV) con entradas y salidas.
2. Script de Prueba: Un único bloque de código que sabe cómo procesar una fila de esa lista.
3. Motor de Ejecución: Como Vitest que permite o se encarga de iterar sobre los datos.

Ej: Calculadora de Costos de Envío
Reglas complejas de envío como: 

Nacional: $5
Internacional: $15
VIP: Gratis ($0)
Paquetes pesados (>10kg): +$10 extra.

Sin DDT (Código repetitivo):
Escribir un it() para cada combinación
Si las tarifas cambian, tienes que buscar en 10 sitios distintos.

```
import { describe, it, expect } from 'vitest';

// 1. LA FUENTE DE DATOS (Centralizada)
const casosEnvio = [
  { tipo: 'nacional', peso: 5, esperado: 5 },
  { tipo: 'nacional', peso: 15, esperado: 15 }, // +10 por peso
  { tipo: 'internacional', peso: 2, esperado: 15 },
  { tipo: 'vip', peso: 20, esperado: 0 },
];

describe('Calculadora de Envío', () => {
  // 2. EL SCRIPT DE PRUEBA (Único y reutilizable)
  it.each(casosEnvio)(
    'Para un envío $tipo con peso $peso kg, el costo debe ser $$$esperado', 
    ({ tipo, peso, esperado }) => {
      const resultado = calcularEnvio(tipo, peso);
      expect(resultado).toBe(esperado);
    }
  );
});
```

Mantenibilidad: 
Si el costo del envío internacional sube a $20, solo cambias una línea en tu array de datos, no tocas el código del test.

Legibilidad: 
Cualquiera puede leer la tabla de datos y entender qué escenarios se están cubriendo.

Cobertura Masiva: 
Puedes probar cientos de combinaciones (como testear un validador de formularios con 50 tipos de errores).


### DDT con archivos externos

En proyectos grandes, los datos no se ponen en el mismo archivo .test.ts, sino en un JSON aparte
Permite que incluso alguien que no sabe programar (como un QA manual o un analista de negocio) pueda añadir casos de prueba simplemente editando un archivo de texto.

Ej: data.json

```
[
  { "input": "abc", "isValid": false },
  { "input": "abc@mail.com", "isValid": true }
]
```

app.test.ts

```
import data from './data.json';

it.each(data)('Validando email: $input', ({ input, isValid }) => {
  expect(validate(input)).toBe(isValid);
});
```


Test-Driven:
Diseño.
Ayuda a escribir código más limpio escribiendo el test primero.

Data-Driven:
Escalabilidad.
Ayuda a probar múltiples escenarios sin repetir código.

Combinación: 
Usar TDD para diseñar tu función, una vez que la lógica base funciona.
Aplicar DDT para cubrir todos los casos borde posibles.



## Test/it.each

Se utiliza para aplicar "Data-Driven Testing" (Pruebas basadas en datos).
En lugar de escribir 10 tests casi idénticos para probar diferentes entradas, escribes un solo test
Le pasas una tabla con todos los datos que quieres probar.

1. Antipatrón: Repetir código

Ej: probar una función esPar(n)

```
it('debería retornar true para 2', () => expect(esPar(2)).toBe(true));
it('debería retornar true para 4', () => expect(esPar(4)).toBe(true));
it('debería retornar true para 10', () => expect(esPar(10)).toBe(true));
```

Difícil de mantener: Si cambias el nombre de la función, tienes que cambiarlo en todos los tests.


2. test.each con Arrays
Defines una lista de casos y Vitest genera un test por cada uno.

```
import { test, expect } from 'vitest';

test.each([
  [2, true],
  [4, true],
  [3, false],
  [11, false]
])('esPar(%i) debería ser %s', (numero, resultadoEsperado) => {
  expect(esPar(numero)).toBe(resultadoEsperado);
});
```


Símbolo: %
En el título del test, puedes usar marcadores de posición para que los reportes de Vitest sean legibles:

%i: Número entero (integer).
%s: String.
%d: Número decimal.
%o: Objeto.
'#': El índice del caso de prueba


### Template Strings

Se usan backticks (`):

```
test.each`
  a    | b    | resultado
  ${1} | ${1} | ${2}
  ${2} | ${3} | ${5}
  ${10}| ${5} | ${15}
`('sumar($a, $b) -> $resultado', ({ a, b, resultado }) => {
  expect(a + b).toBe(resultado);
});
```

No se usa %i: Usas el nombre de la columna con un signo de dólar ($a, $b).
Es mucho más descriptivo


#### Objeto y array

Arrays `[[a, b]]`:
pocos datos o valores simples

Objetos `[{a: 1}]`:
Muchos parámetros y claridad en el test


Ventajas de Test.each:

1. Reportes claros:
Si falla el caso con el número 11, Vitest te dirá exactamente: ✕ esPar(11) debería ser false

2. Facilidad para añadir casos: Si descubres un nuevo "edge case", solo añades una línea más al array o a la tabla.

3. Código DRY: Don't Repeat Yourself. Menos líneas de código significan menos errores


Ej: Validador de Email

```
test.each([
  ['test@gmail.com', true],
  ['admin@empresa.es', true],
  ['email-invalido', false],
  ['@falta-usuario.com', false],
  ['usuario@.com', false],
])('Validar email: %s debe ser %s', (email, esValido) => {
  expect(validador.check(email)).toBe(esValido);
});
```













