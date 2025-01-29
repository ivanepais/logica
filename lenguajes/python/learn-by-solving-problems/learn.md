# Learn to code by solving problems 

Usamos computadoras para realizar tareas y
resolver problemas. 

¿Qué hacemos cuando un programa comercial no hace exactamente
lo que necesitamos?
En este libro, nuestro objetivo es aprender a tomar el control de nuestra computadora yendo más allá de lo que puede hacer un usuario final utilizando programas preexistentes.

Para dar instrucciones a una computadora, escribimos código en un lenguaje de programación. Un lenguaje de programación especifica las reglas para el código que escribimos
y dicta lo que la computadora hace en respuesta a ese código.

Los lenguajes de programación van y vienen. La forma en que resolvemos los problemas no. 

Este libro le
enseñará a pensar en la programación. Los programadores tienen formas particulares de dividir los problemas en partes manejables y expresar soluciones a esas partes en código.

En este nivel, no importa qué lenguaje de programación se esté utilizando, porque la forma en que piensan los programadores no está
ligada a un lenguaje en particular.



# Intro

Resolveremos problemas de programación competitiva
utilizando el lenguaje de programación Python.

Para cada problema, escribiremos un programa para resolverlo. 
Cada problema especifica el tipo de entrada que se le proporcionará a nuestro programa 
y el tipo de salida (o resultado) que se espera.

En general, habrá millones o miles de millones de entradas posibles. 
Cada una de esas entradas se conoce como una instancia de problema. 

Por ejemplo, en el primer problema que resolveremos, la entrada es una línea de texto, como hola o bbaabbb aa
abab. 
Nuestra tarea será generar la cantidad de palabras en la línea. 

Una de las ideas más poderosas en programación es que, a menudo, una pequeña cantidad de código de propósito general puede resolver una cantidad aparentemente infinita de instancias de problemas. No importa si la línea tiene 2 palabras, 3 o 50. Nuestro programa lo hará bien siempre.

Nuestros programas realizarán tres tareas:

1. Leer la entrada
Necesitamos determinar la instancia específica del problema
que estamos resolviendo, por lo que primero leemos la entrada proporcionada.

2. Procesar
Procesamos la entrada para determinar la salida correcta.

3. Escribir la salida
Después de resolver el problema, generamos la salida deseada.

Los límites entre estos pasos pueden no ser siempre claros (por ejemplo, es posible que tengamos que intercalar algún procesamiento con la producción de algún resultado), pero será útil tener en mente estos tres pasos generales.
Es probable que utilices programas a diario que siguen este modelo de entrada-proceso-
salida. 

Considera un programa de calculadora: escribes una fórmula (la
entrada), el programa procesa tus números (proceso) y el programa muestra la respuesta (salida).

considera un motor de búsqueda web: escribes una
consulta de búsqueda (entrada), el motor de búsqueda determina los resultados más relevantes
(proceso) y los muestra (salida).

Compara este tipo de programas con los programas interactivos, que fusionan
entrada, procesamiento y salida.

Por ejemplo, estoy escribiendo este libro usando un
editor de texto. Cuando escribo un carácter, el editor responde agregando ese carácter a mi documento. No espera a que escriba todo el documento antes de mostrármelo; lo muestra de manera interactiva a medida que lo construyo

## Problema 1: word count

Pequeño programa de recuento de palabras. 
Aprenderemos a leer la entrada del usuario, procesar la entrada para resolver el problema y generar el resultado. 
También aprenderemos a manipular texto y números en nuestros programas, 
a utilizar operaciones integradas de Python y a 
almacenar resultados intermedios en nuestro camino hacia la solución.

Este es el problema DMOJ dmopc15c7p2.

El desafío:

Contar la cantidad de palabras proporcionadas. Para este problema, una palabra es cualquier secuencia de letras minúsculas. Por ejemplo, hola es una palabra, pero también lo son las “palabras” que no están en inglés como bbaabbb.

Entrada:

La entrada es una línea de texto, que consta de letras minúsculas y espacios.
Hay exactamente un espacio entre cada par de palabras y no hay espacios antes de la primera palabra ni después de la última.
La longitud máxima de la línea es de 80 caracteres.

Salida:

Imprime la cantidad de palabras en la línea de entrada.


## Strings

Cada valor tiene un tipo, y el tipo determina las operaciones que se pueden realizar en el
valor. En el problema de recuento de palabras, trabajamos con una línea de texto. El texto
se almacena como un valor de cadena en Python


```
'' * 3
```

'' es la cadena vacía, una cadena de cero caracteres. ¡Repetir una cadena vacía tres veces sigue siendo una cadena vacía!


## String Methods

Un método es una operación específica para un tipo de valor. Las cadenas tienen una gran cantidad de métodos. 

La información que obtenemos de un método se conoce como el valor de retorno del método. 

devolvió la cadena 'HOLA'.
La ejecución de un método sobre un valor se conoce como llamar al método. Llamar a un método implica colocar el operador de punto (.) entre el valor y
el nombre del método. También requiere paréntesis después del nombre del método. Para algunos métodos, dejamos esos paréntesis vacíos, como cuando llamamos a upper.
Para otros métodos, podemos incluir información allí de manera opcional.

Aún así, otros métodos requieren información y no funcionarán en absoluto sin ella. La información que incluimos cuando llamamos a un método se conoce como los
argumentos del método.

Por ejemplo, las cadenas tienen un método strip. Si se llama sin argumentos,
strip elimina todos los espacios iniciales y finales de una cadena:

```
'hello'.upper()

'  abc'.strip()

```

Pero también podemos llamarlo con una cadena como argumento. Si lo hacemos, ese argumento determina qué caracteres se eliminan del principio y
del final:

Hablemos de otro método de cadena: count. Le pasamos un argumento de cadena y nos dice cuántas ocurrencias de ese argumento se encuentran en
nuestra cadena:

Si las ocurrencias del argumento se superponen, solo cuenta la primera:

```
'abc'.strip('a')

'abc'.count('a')

```


A diferencia de los otros métodos que he descrito, count es directamente útil para nuestro
problema de recuento de palabras.
Piense en una cadena como 'esta es una cadena con algunas palabras'. Observe que
un espacio viene después de cada palabra. De hecho, si tuviera que contar la cantidad de
palabras a mano, podría usar los espacios para saber dónde termina cada palabra.

¿Qué pasa si contamos la cantidad de espacios en una cadena? Para hacer eso, podemos pasar una cadena que consiste en un solo carácter de espacio para contar. Parece así:

```
'this is a string with a few words'.count(' ')
7
```

Obtenemos un valor de 7. No es exactamente la cantidad de palabras (la cadena tiene
ocho palabras), pero estamos cerca. ¿Por qué obtenemos 7 en lugar de 8?
La razón es que cada palabra tiene un espacio después, excepto la última palabra.
Por lo tanto, contar los espacios no tiene en cuenta la palabra final. 

Para remediarlo, necesitamos aprender a manejar números.


## Integer and Floating-Point Numbers

Una expresión se compone de valores y operadores. 

Hay dos tipos diferentes de Python que representan números: números enteros
(sin parte decimal) y números de punto flotante (con una parte decimal).

Tenemos + para suma, - para resta y * para multiplicación. 

¡Python tiene dos operadores de división, no uno! 

El operador // realiza la división de enteros
descarta cualquier resto y redondea el resultado
hacia abajo:

Si desea el resto de la división, use el operador mod, escrito como %. Por ejemplo, dividir 8 por 2 no deja resto:

El operador /, a diferencia de //, no realiza ningún redondeo:

¡Estos valores de resultado no son números enteros! Tienen un punto decimal y pertenecen a un tipo de Python diferente llamado float (por “números de punto flotante”).
Puedes escribir valores float incluyendo un punto decimal:

Nos centraremos en los números enteros por ahora y volveremos a los números de punto flotante
cuando resolvamos el Volumen del cono más adelante en este capítulo.

```
30

-9

8 + 10

8 // 2

-9 // 5

8 % 2

8 / 2

12.5 * 2

```

Cuando usamos múltiples operadores en una expresión, Python usa reglas de precedencia para determinar el orden en que se aplican los operadores. Cada operador tiene una precedencia. Al igual que cuando evaluamos una expresión matemática en papel, Python realiza multiplicaciones y divisiones (precedencia más alta) antes que sumas y restas (precedencia más baja):

Nuevamente, como en el papel, las operaciones dentro de paréntesis tienen la mayor
precedencia. Podemos usar esto para obligar a Python a realizar operaciones en nuestro
orden deseado:

Los programadores a menudo agregan paréntesis incluso cuando no es técnicamente necesario.
Esto se debe a que Python tiene muchos operadores, como veremos, y mantener un registro de su precedencia es propenso a errores y no es algo que los programadores hagan típicamente.

Si se pregunta si los valores enteros y los valores de punto flotante tienen métodos, al igual que las cadenas, ¡los tienen! Pero no son tan útiles. Por ejemplo,
hay un método que nos dice cuánta memoria de la computadora ocupa un entero. Cuanto mayor sea el entero, más memoria requiere:

Necesitamos los paréntesis alrededor de los enteros; de lo contrario, el operador de punto se confunde con un punto decimal y obtenemos un error de sintaxis.

```
50 + 10 * 2

(50 + 10) * 2

(5).bit_length()

(99999).bit_length()

```


## Variables

Nos resultará útil poder almacenarlos para poder acceder a ellos más tarde. En Word Count,
sería conveniente poder almacenar la línea de palabras en algún lugar y luego
contar la cantidad de palabras.


## Assignment Statement

Una variable es un nombre que hace referencia a un valor. Siempre que usemos más adelante el nombre de una variable, se sustituye por lo que hace referencia esa variable. Para hacer que una variable
haga referencia a un valor, usamos la declaración de asignación. Una declaración de asignación
consta de una variable, un signo igual (=) y una expresión

Una variable hace referencia a un solo valor a la vez. Una vez que usamos una declaración de asignación para hacer que una variable haga referencia a otro valor, ya no hace referencia al valor anterior:

Observe que he elegido nombres de variables que dan una idea de lo que almacenan. Estas dos variables, por ejemplo, tienen que ver con los precios
de dos compras. El uso de los nombres de variable p1 y p2 sería más fácil de escribir,
pero en unos días probablemente olvidaríamos lo que significan los nombres.

También podemos hacer que las variables hagan referencia a cadenas:

Al igual que con las variables que hacen referencia a números, podemos utilizarlas en expresiones más grandes:

Los nombres de variable de Python deben comenzar con una letra minúscula y luego pueden
contener letras adicionales, guiones bajos para separar palabras y números.

```
dollars = 250

dollars

dollars + 10

dollars

dollars = 250

dollars = 300

purchase_price1 = 58
purchase_price2 = 9
purchase_price1 + purchase_price2

start = 'Monday'
end = 'Friday'
start + '-' + end

```

Cambiar valores de variables
Supongamos que tenemos una variable dólares que hace referencia al valor 250:

Ahora queremos aumentar el valor para que dólares haga referencia a 251. Esto
no funcionará:

El resultado es 251, pero ese valor se ha ido, no está almacenado en ningún lugar:

Lo que necesitamos es una declaración de asignación que capture el resultado de
dólares + 1:

Es común que los estudiantes piensen en el símbolo de asignación = como igualdad. ¡Pero no lo hagas! La declaración de asignación es un comando para hacer que una
variable haga referencia al valor de una expresión, no una afirmación de que dos entidades son
iguales.

```
dollars = 250

dollars + 1

dollars

dollars = dollars + 1
dollars

dollars = dollars + 1
dollars
```

¿Cuál es el valor de y después de la ejecución del siguiente código?

```
>>> x = 37
>>> y = x + 2
>>> x = 20
```


## Counting the Words Using a Variable

Hagamos un balance de nuestro progreso hacia la solución del problema de contar palabras:

1. Sabemos sobre cadenas y podemos usar una cadena para almacenar la línea de
palabras.

2. Sabemos sobre el método de conteo de cadenas, que podemos usar para contar
la cantidad de espacios en la línea de palabras. Eso nos da uno menos
que el valor de salida que necesitamos.

3. Sabemos sobre números enteros, cuyo operador + podemos usar para sumar 1 a un
número.

4. Sabemos sobre variables y la declaración de asignación, que nos ayudan
a conservar los valores para no perderlos.

Al poner todo esto junto, podemos hacer que una variable haga referencia a una cadena y
luego contar la cantidad de palabras:

```
line = 'esta es una cadena con algunas palabras'
total_words = line.count(' ') + 1
total_words

```
8

Las variables line y total_words no son necesarias aquí; Así es como
podríamos hacerlo sin ellas:

```
'esta es una cadena con algunas palabras'.count(' ') + 1

```
8

Pero usar variables para capturar resultados intermedios es una buena práctica
para mantener el código legible. Una vez que nuestros programas tengan más de unas pocas líneas,
las variables serán indispensables.


## Reading input 


Un problema con el código que hemos escrito es que sólo funciona en la cadena
en particular que hemos escrito. Nos dice que hay ocho palabras
en 'esta es una cadena con algunas palabras', pero eso es todo lo que puede hacer. Si queremos
saber cuántas palabras hay en una cadena diferente, tendremos que reemplazar la cadena actual por una nueva. 

Sin embargo, para resolver Word Count, necesitamos que nuestro programa funcione en cualquier cadena proporcionada como entrada a nuestro programa.
Para leer una línea de entrada, usamos la función de entrada. Una función es similar a un método: lo llamamos, tal vez con algunos argumentos, y nos devuelve un valor. 


## Functions vs Method

Una diferencia entre un método y una función es que una función no usa el operador de punto. 

Aquí hay un ejemplo de llamar a la función de entrada y luego escribir algo
de entrada, en este caso, la palabra testing:

```
input()

```

Debemos escribir algo como: testing

Responderá: 'testing'


Cuando escribes input() y presionas ENTER, no obtienes un mensaje >>> de vuelta. En cambio, Python espera a que escribas algo en el teclado y
presiones ENTER. La función de entrada luego devuelve la cadena que escribiste. Como es habitual,
si no almacenamos esa cadena en ningún lugar, se pierde. Usemos una declaración de asignación para almacenar lo que escribimos:

```
 result = input()

```

Si escribimos: testing. 

Lo captura input y lo almacenamos en result 

```
result

```
'testing'

```
result.upper()

```
'TESTING'

Observa en la última línea que usé el método upper en el valor devuelto por input. Esto está permitido porque input devuelve una cadena y upper es un método de cadena.


## Writing Output

Has visto que escribir expresiones en el shell de Python hace que se muestren sus valores:

Esa es solo una comodidad que ofrece el shell de Python. Supone que
si escribes una expresión, probablemente quieras ver su valor. Pero cuando
ejecutas un programa Python fuera del shell de Python, esta comodidad desaparece

En su lugar, debemos usar explícitamente la función print siempre que queramos
mostrar algo. La función print también funciona desde el shell:

```
print('abc')
print('abc'.upper())
print(45 + 9)

```
abc
ABC
54

Observa que las cadenas que se muestran con print no tienen comillas.
Eso es bueno, ¡de todas formas probablemente no queramos incluir comillas cuando nos comunicamos con los usuarios de nuestros programas!
Una característica interesante de print es que puedes proporcionar tantos argumentos como quieras, y todos se imprimen con espacios de separación:

```
print('abc', 45 + 9)

```
abc 54


### Solving the Problem:

Con el editor de texto cargado, puedes escribir el código de nuestro programa Python.

```
line = input()
total_words = line.count(' ') + 1
print(total_words)

```
