"""
Estructuras de datos en todas partes. 

Se puede crear una pila en un cualquier lugar que montone cosas. 

Una cola en otro lugar, para ordenar cosas. 

Las estructuras se usan para almacenar los objetos de cualquier app. 

"""


#Qué es una estructura de datos

"""
En la era de la información y datos, necesitamos organizar una enorme cantidad de ellos.

Una estructura de datos es una forma de organizar y almacenar información en una computadora o un
programa.

Ayudan a administrar y manipular datos de manera eficiente.


Una estructura de datos puede organizar a los usuarios de una manera que hace que sea fácil y rápido buscar entre mil millones de usuarios

Un algoritmo es una secuencia de instrucciones ordenadas para manipular los datos almacenados en una estructura.


"""


"""
#unsorted array
arr = [4, 2, 3, 1]

#algorithm
quicksort(arr)

#sorted array
1, 2, 3, 4

"""


"""
Las estructuras de datos proporcionan la organización y representación de la información (los datos).

Los algoritmos sirven como instrucciones para transformar esos datos.

Cada estructura de datos implícitamente define algoritmos para operaciones, como agregar, recuperar y eliminar sus elementos.

Describir una estructura de datos requiere explicar con precisión los algoritmos detrás de sus métodos.

Ayudan a organizar los datos, resolver problemas difíciles, mejorar la eficiencia, optimizar el uso de la memoria y evitar riesgos de seguridad.

Pero si solo sabe usar una estructura de datos, querra aplicarla en todos los casos; incluso cuando no sea oportuno.

"""


#Uso de una estructura de datos
"""
Necesitas estructuras de datos cuando debes organizar tus datos de una manera que facilite y haga eficiente su almacenamiento y recuperación de acuerdo con algunas reglas especiales. 

Si necesitamos buscar un objeto en una colección de millones, este puede tener un atributo único de identificación.

Necesitamos una mejor manera de almacenar y buscar artículos, y aprender sobre las compensaciones que se requieren para equilibrar diferentes necesidades

"""


#Problemas con las estructuras:
"""
Se necesita realizar un seguimiento de los usuarios conectados y sus direcciones IP.

Funciona bien, pero la estructura de datos que ha utilizado es demasiado lenta para soportar la cantidad de tráfico en su aplicación web, por lo que bloquea el servidor de aplicaciones.

Se aplica otra estructura que soluciona la lentitud y el bloqueo, es decir es más rapida y eficiente.

Pero ahora es insegura, un hacker ha descubierto que, con la secuencia correcta de llamadas, puede sobrecargar la estructura de datos que utilizó la empresa externa y bloquear la aplicación

Las tablas hash, si se usan correctamente, podrían resolver la mayoría de estos problemas. 

Si compra un software de terceros necesita saber qué preguntas hacer, para asegurarse de que hicieron todo bien.

"""


"""
En una red social, un seguimiento de la relación entre los usuarios. 

Se ha intentado iterar uno a uno los amigos, pero es demasiado lenta y bloquea la app.

Ha intentado hacer esto en la memoria: ¿Qué pasa si necesita añadir persistencia a estos datos

Si más tarde necesita encontrar relaciones aún más distantes como “amigo de un amigo de un amigo”

Una base de datos SQL no parece soportar todo lo que necesita

Los grafos ayudarian a controlar datos altamente relacionales y que podría usar los algoritmos de búsqueda en amplitud (breadth-first search) para explorar relaciones indirectas de amigos.

Permite ejecutar consultas rápidamente basadas en las relaciones entre diferentes piezas de datos.

"""


#Escribir y aplicar una estructura de datos
"""
A excepción de los puestos que implican algo de investigación, la mayoría de los puestos de ingeniería de software no requerirán que escriba sus propios algoritmos o estructuras de datos a diario o semanalmente. La mayor parte del tiempo, solo usará el código de otra persona. 

Estudiar las estructuras de datos lo ayudará a tomar las decisiones correctas o a conocer las mejores soluciones.

Todavía hay ciertas situaciones en las que puede necesitar arremangarse y escribir su propia implementación; por ejemplo, si está usando un lenguaje de programación completamente nuevo para el que no hay muchas bibliotecas disponibles o necesita personalizar una estructura de datos para resolver un caso especial.

El conocimiento de primera mano de las estructuras de datos le permitirá comprender mejor las compensaciones que está haciendo en su código y cómo hacer que su código sea más eficiente.
"""


#Elegir una estructura de datos
"""
Elegir las estructuras de datos de forma inteligente es importante.

No se trata de elegir la estructura de datos perfecta.

No siempre tienes que elegir la mejor posible; la mayoría de las veces, puedes salirte con la tuya con una alternativa casi óptima.

Lo fundamental es evitar la elección incorrecta, que sería una estructura de datos que bloquearía tu aplicación o causaría un problema de seguridad.

Con conocimiento e intuición mostrándote los peligros a los que podrías enfrentarte, cómo identificarlos sistemáticamente evaluando la complejidad de los algoritmos, qué aspectos equilibrar y qué compensaciones considerar.

"""


#Aplicar estructuras al código
"""
Se trata de desarrollar un proceso que te permitirá tomar decisiones conscientes e informadas sobre las estructuras de datos que utilizas y expandir tu conocimiento de las estructuras de datos para que cuando te enfrentes a un problema, recuerdes las posibles alternativas.

A un alto nivel, el proceso de pasar de un problema a una solución utilizando algoritmos y estructuras de datos se puede describir en unos pocos pasos:


1. Comprender el problema.

2. Identificar una solución.

3. Identificar las estructuras de datos necesarias.

4. Preguntarse: ¿Funciona la solución?

    Si funciona, nos puntamos: ¿Es la solución eficiente?

    Si no funciona, volvemos a identificar o buscar una solución.

5. Si la solución es eficiente, resolvimos el problema.


Las partes clave para nosotros son los pasos 3 y 6:

Pensamos en las estructuras de datos que podemos usar en nuestra solución (paso 3).

Evaluamos si nuestra solución (que funciona) es demasiado lenta, utiliza demasiada memoria

o rompe nuestros requisitos de alguna otra manera (paso 6).

El paso de implementación también es relevante si estamos implementando las estructuras de datos desde cero.

En ese caso, también debemos probar exhaustivamente el código de la estructura de datos para comprobar su corrección y rendimiento. 

Para simplificar, asumiremos que hay una biblioteca de terceros que podemos usar.
    
"""


"""
Ahora es momento de pensar en lo que necesita para crear esa solución. Aquí es donde pasa de una idea de alto nivel de lo que necesita para resolver un problema a un plan más concreto que incluye lo que usará para resolverlo

Solución de alto nivel: ideas o plan para resolver el problema

Solución concreta: identificar las herramientas que puede usar


Comprueba si tu solución es lo suficientemente buena, identificar una forma posible de resolver tu problema puede no ser suficiente.

También debes ser capaz de resolverlo en un tiempo razonable con los recursos que tienes disponibles.

Por otra parte, no quieres sobrediseñar o sobreconstruir tu aplicación.

Al igual que no necesitas una estructura de datos demasiado complicada para algo que se puede resolver de manera eficiente con una matriz.


Para evitar una optimización prematura, normalmente querrás empezar de a poco y probar estructuras de datos más complicadas solo si ya sabes, o descubres en este paso, que tienes un cuello de botella.

Probar su código, limpiarlo y asegurarse de que, por ejemplo, los nombres de las variables y los métodos no sean confusos son todas fases importantes del desarrollo de software.

"""


#Estructura de datos adecuada
"""
Ej, sala de emergencias para mascotas, esperando su turno en el vestíbulo hasta que los admiten.

Clasificar a los pacientes, decidir quién ingresa y cuándo, e intentar que todo funcione sin problemas.


Entender el problema y esbozar una solución.

Lo más importante en cualquier proyecto es comprender los requisitos de su cliente; cuanto antes los aclare, menos doloroso será el proyecto. 

Aquí, la definición del problema es lo suficientemente vaga como para permitir múltiples interpretaciones


¿Debemos preocuparnos por quién está en la sala? ¿Pueden estar gatos, perros, caimanes y conejos en la misma habitación? ¿Hay un límite de capacidad (para el vestíbulo o en términos de visitas por día)?

Estas (y muchas más) son todas preguntas que debería hacerse cuando se enfrenta a una tarea similar.


Hagámoslo simple: solo queremos gestionar el registro y la admisión de los pacientes, y suponemos que el vestíbulo tiene capacidad infinita y no hay otras restricciones.

Necesitamos es un dispositivo, un software, que registre a los pacientes y luego los admita en un orden determinado.

Debemos iterar los requisitos hasta encontrar una buena solución. 

"""


#1. orden agnóstico

"""
Entradas y salidas.

Entender cómo vamos a hacer el soft o dispositivo.

Una solución significa escribir tu propio algoritmo para transformar una entrada y llegar a tu objetivo.

Es el momento de empezar a pensar en los detalles.

Necesitamos un contenedor, una estructura de datos que pueda contener los registros de pacientes y devolver el siguiente paciente que será admitido cada vez que lo solicitemos.

Primer intento, colocamos los formularios en un buzón de sugerencias en el momento del registro y, cuando un médico queda libre, simplemente sacamos a ciegas uno de estos formularios de papel

El contenedor que usamos es una bolsa, que es perfecto si no te importa el orden en el que lees los elementos almacenados.

Asumimos que la fase de implementación produjo código sin errores.

Pasamos directamente a las preguntas: ¿Funciona esta solución y funciona bien?

Alguien que llegó después de ellos se cuela en la fila, especialmente cuando hay pocos pacientes. Comienzan las peleas


Resultado:

Positivo/beneficio/ventaja: Facil de implementar

Desventaja: No hay control sobre el orden.

"""


#2. orden inverso
"""
Iteramos/cambiamos soluciones, estructuras.

Esta vez, los formularios se almacenan en orden, en una pila con el más antiguo en la parte inferior y el más nuevo en la parte superior. 

Los operadores de triage toman el siguiente formulario de la parte superior de la pila: están implementando una pila, por lo que el último
paciente registrado es el primero en ser admitido.

Una pila es buena cuando necesitamos procesar primero las entradas más recientes, pero es terrible gestionar una fila de espera.

(lifo, last in, first out)


Resultado:

Ventaja: Es bueno para procesar las entradas a medida que son recibidas. 

Desventaja: no son buenas para filas de espera. 

"""


#3. primero en llegar, primero en ser antendido
"""
Esta vez, la corrección es conceptualmente más simple: tomamos los siguientes formularios de la parte inferior de la pila, de modo que el primer paciente en llegar sea el primero en ser atendido por un médico

Utilizamos una cola, una estructura de datos que nos permite iterar a través de los elementos en el mismo orden en que fueron agregados.

Los médicos se dieron cuenta de que en algunos casos, algunas complicaciones podrían haberse evitado si los pacientes hubieran sido vistos inmediatamente en lugar de esperar su turno.

Significa que se puede hacer mejor.

Es hora de iterar.


Resultado: 

Ventaja: Primero que llega tiene prioridad. 

Desventaja: Las entradas urgentes deberían esperar

"""


#4. Primero las urgencias
"""
Necesitamos es una estructura de datos que nos permita tener en cuenta algo más que la hora de llegada

Los operadores de triage tienen los formularios, pueden estimar la urgencia de un caso y reordenar los formularios según la emergencia de cada caso. 

Si añadimos todos nuestros casos a una cola de prioridad, podemos pedirle que nos devuelva el caso más urgente, seguido del siguiente más urgente, y así sucesivamente.


Resultado:

Ventaja: Las urgencias tiene prioridad

Desventaja: Lento y más complicado de implementrar.

"""


"""
RS:

Como entendemos cómo elegir la estructura de datos correcta.

Podemos encontramos una solución que funciona perfectamente para nuestras necesidades


Una estructura de datos es una forma de organizar y almacenar datos en una computadora o un lenguaje de programación al definir la relación entre los datos, las operaciones
que se pueden realizar y las reglas o restricciones para acceder a los datos y modificarlos.

Las estructuras de datos son fundamentales para organizar y almacenar datos de manera eficiente.

Un algoritmo es un conjunto de instrucciones bien definidas, un procedimiento paso a paso
diseñado para resolver un problema específico o realizar una tarea en particular.

Los algoritmos y las estructuras de datos se complementan entre sí de la misma manera que los sustantivos y los verbos se complementan entre sí en una oración.

Elegir la estructura de datos incorrecta puede tener consecuencias nefastas, como bloquear su sitio web o causar riesgos de seguridad.

Existe un proceso paso a paso que puede ayudarlo a decidir qué estructuras de datos usar en un proyecto.

El proceso es iterativo y requiere verificar la calidad de su solución hasta que cumpla con todos sus requisitos.

"""


#arrays estáticos
"""

"""















