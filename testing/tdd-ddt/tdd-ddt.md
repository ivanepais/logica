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













