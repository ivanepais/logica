# Think Like a Programmer - V. Anton Spraul 

Resolver problemas, en parte, se debe a que la resolución de problemas es una actividad diferente de aprender la sintaxis de programación y, por lo tanto, utiliza un conjunto diferente de “músculos” mentales.

Aprender la sintaxis de programación, leer programas, memorizar elementos de una interfaz de programación de aplicaciones, son en su mayoría actividades analíticas del “cerebro izquierdo”.

Escribir un programa original utilizando herramientas y habilidades aprendidas previamente es una actividad creativa del “cerebro derecho”.

Eso es resolución de problemas y es una actividad creativa. Lo creas o no, cuando diseñas
un programa original, tu proceso mental es bastante similar al de la persona
que intenta sacar la rama de la cuneta y bastante diferente
al de una persona que depura un bucle for existente

En esencia, la mayoría de los libros de programación para principiantes enseñan a leer
un programa, no a escribirlo. Los libros que se centran en la escritura suelen ser
efectivamente "libros de cocina" en el sentido de que enseñan "recetas" específicas para usar en situaciones particulares. Estos libros pueden ser muy valiosos para ahorrar tiempo, pero no como un
camino hacia el aprendizaje de la escritura de código original.

Un gran programador entiende la sintaxis del lenguaje, los marcos de aplicación, los algoritmos y los principios de ingeniería de software y sabe cómo combinarlos para hacer programas excelentes. Déle a un gran programador una lista de especificaciones, déjelo trabajar con un entorno de programación completamente equipado y sucederán cosas grandiosas.

En general, la educación actual en programación no ofrece mucha orientación
en el área de resolución de problemas. En cambio, se supone que si a los programadores se les da
acceso a todas las herramientas de programación y se les pide que escriban suficientes
programas, eventualmente aprenderán a escribir dichos programas y a escribirlos
bien. Hay algo de verdad en esto, pero “eventualmente” puede ser un largo tiempo.

El viaje desde la iniciación hasta la iluminación puede estar lleno de frustraciones, y muchos
de los que comienzan el viaje nunca llegan al destino.

En lugar de aprender por ensayo y error, 
puedes aprender a resolver problemas de manera sistemática.

Puedes aprender técnicas para
organizar tus pensamientos, procedimientos para descubrir soluciones y estrategias para
aplicar a ciertas clases de problemas. Al estudiar estos enfoques, puedes
liberar tu creatividad.

No te equivoques: la programación, y especialmente la resolución de problemas, es una actividad creativa. La creatividad es misteriosa y nadie puede decir
exactamente cómo funciona la mente creativa

Sin embargo, si podemos aprender composición musical, recibir consejos sobre escritura creativa o que nos enseñen a pintar, también podemos
aprender a resolver problemas de programación de forma creativa. 


Temas seleccionados
Los temas tratados en este libro representan áreas en las que he visto con mayor frecuencia
que los nuevos programadores tienen dificultades. También presentan una amplia muestra representativa de diferentes áreas en la programación inicial e intermedia.

Sin embargo, debo enfatizar que este no es un “libro de recetas” de algoritmos
o patrones para resolver problemas específicos. Aunque en los capítulos posteriores se analiza
cómo emplear algoritmos o patrones conocidos, no debe utilizar este libro como una “hoja de referencia” 

Este libro no trata sobre programación de alto rendimiento ni sobre cómo ejecutar el código más compacto y eficiente. El estilo que he elegido para los ejemplos de código fuente tiene como objetivo que sea legible por encima de todas las demás consideraciones. 

El libro incluye una serie de ejercicios de programación. Este no es un libro de texto y no encontrará respuestas a ninguno de los ejercicios en la parte posterior. Los
ejercicios le brindan oportunidades para aplicar los conceptos descritos en los capítulos. Por supuesto, la decisión de probar alguno de los ejercicios depende
de usted, pero es esencial que ponga en práctica estos conceptos.

Debe pensar en este libro como una carrera de obstáculos para su cerebro. Las carreras de obstáculos desarrollan fuerza, resistencia y agilidad y le dan confianza al entrenador.
Al leer los capítulos y aplicar los conceptos a tantos ejercicios como sea posible, adquirirá confianza y desarrollará habilidades de resolución de problemas que se pueden utilizar en cualquier situación de programación. En el futuro, cuando se enfrente a un problema difícil, sabrá si debe intentar resolverlo por encima, por debajo o a través de él.

Los mejores programadores pueden “programar a mano”
soluciones cuando sea necesario y hacer uso de bibliotecas de alto nivel e interfaces de programación de aplicaciones para reducir el tiempo de desarrollo.


# 1. Strategies for problem solving

Este libro trata sobre la resolución de problemas, pero
¿qué es exactamente la resolución de problemas? 

Cuando las personas usan el término en una conversación común,
a menudo quieren decir algo muy diferente de lo que queremos decir aquí.

Los problemas incluyen restricciones, reglas inquebrantables sobre el problema o
la forma en que debe resolverse el problema.

Las restricciones también pueden incluir el costo total de las reparaciones, cuánto tiempo llevará la reparación o el requisito de que no se puedan comprar herramientas nuevas solo para esta reparación.

Al resolver un problema con un programa, también existen restricciones. Las restricciones más comunes incluyen el lenguaje de programación, la plataforma (¿se ejecuta en una PC, un iPhone o qué?), el rendimiento (un programa de juegos puede requerir que los gráficos se actualicen al menos 30 veces por segundo, una aplicación comercial puede tener un tiempo máximo de respuesta a la entrada del usuario) o el consumo de memoria.

A veces, la restricción implica qué otro código puede referenciar: tal vez
el programa no puede incluir cierto código de fuente abierta, o tal vez lo opuesto: tal vez solo puede usar código abierto.

Para los programadores, entonces, podemos definir la resolución de problemas como escribir un programa original que realiza un conjunto particular de tareas y cumple con todas las restricciones establecidas.

Los programadores principiantes a menudo están tan ansiosos por lograr la primera parte
de esa definición (escribir un programa para realizar una determinada tarea) que
fallan en la segunda parte de la definición, cumplir con las restricciones establecidas. Yo llamo a un programa como ese, uno que parece producir resultados correctos pero rompe
una o más de las reglas establecidas, un Kobayashi Maru. 

Afortunadamente, los problemas a los que te enfrentarás como programador tienen solución,
pero muchos programadores siguen recurriendo al método de Kirk (evitarlo). En algunos casos, lo hacen
accidentalmente. (“¡Oh, demonios! Mi solución sólo funciona si hay cien
elementos de datos o menos. Se supone que funciona para un conjunto de datos ilimitado. Tendré que
repensarlo”). En otros casos, la eliminación de restricciones es deliberada, una
estratagema para cumplir con una fecha límite impuesta por un jefe o un instructor.

En otros
casos, el programador simplemente no sabe cómo cumplir con todas las restricciones.
En los peores casos que he visto, el estudiante de programación ha pagado a otra
persona para que escriba el programa. Independientemente de las motivaciones, siempre debemos ser
diligentes para evitar el Kobayashi Maru.


## Rompecabezas clásicos

A medida que avance en este libro, notará que, aunque los detalles del código fuente cambian de un área problemática a la siguiente, surgirán ciertos
patrones en los enfoques que adoptemos. Esta es una gran noticia porque
es lo que finalmente nos permite abordar con confianza cualquier problema, ya sea que tengamos o no una amplia experiencia en esa área problemática

Los expertos en la resolución de problemas reconocen rápidamente una analogía, una similitud explotable
entre un problema resuelto y un problema sin resolver. 

Si reconocemos que una característica
del problema A es análoga a una característica del problema B y ya hemos
resuelto el problema B, tenemos una valiosa perspectiva para resolver el problema A.

Analizaremos problemas clásicos ajenos al mundo de la
programación que tienen lecciones que podemos aplicar a los problemas de programación.


### El zorro, el ganso y el maíz

El primer problema clásico que analizaremos es un acertijo sobre un granjero que
tiene que cruzar un río. 


### Problema: cómo cruzar el río?

Un granjero con un zorro, un ganso y un saco de maíz necesita cruzar un río. El granjero
tiene un bote de remos, pero solo hay espacio para el granjero y uno de sus tres objetos.

Desafortunadamente, tanto el zorro como el ganso tienen hambre. El zorro no puede quedarse solo con el ganso, o el zorro se comerá al ganso. Del mismo modo, el ganso no puede quedarse solo con el
saco de maíz, o el ganso se comerá el maíz. ¿Cómo hace el granjero para cruzar todo el río?

Figura 1-1: El zorro, el ganso y el saco de maíz. El bote puede
llevar un objeto a la vez. El zorro no puede dejarse en la misma orilla que
el ganso, y el ganso no puede dejarse en la misma orilla que el saco
de maíz.

Pocas personas son capaces de resolver este acertijo, al menos sin una pista. Yo sé que
no lo fui. Así es como suele funcionar el razonamiento. Dado que el granjero solo puede llevar
una cosa a la vez, necesitará varios viajes para llevar todo a la otra
orilla.

En el primer viaje, si el granjero lleva al zorro, el ganso se quedaría
con el saco de maíz y el ganso se comería el maíz. De la misma manera, si el granjero
llevó el saco de maíz en el primer viaje, el zorro se quedaría con el ganso,
y el zorro se comería al ganso. Por lo tanto, el granjero debe llevarse al ganso
en el primer viaje, lo que da como resultado la configuración que se muestra en la Figura 1-2.

Figura 1-2: El primer paso necesario para resolver el problema del zorro, el
ganso y el saco de maíz. A partir de este paso, sin embargo, todos los pasos posteriores
parecen terminar en fracaso.

Hasta aquí, todo bien. Pero en el segundo viaje, el granjero debe llevarse al zorro o
el maíz. Sin embargo, lo que el granjero se lleve, debe dejarlo en la orilla opuesta
con el ganso mientras el granjero regresa a la orilla cercana por el artículo restante.

Esto significa que o bien el zorro y el ganso se quedarán juntos o bien el ganso y el maíz se dejarán juntos. Como ninguna de estas situaciones es
aceptable, el problema parece irresoluble.

Nuevamente, si ya ha visto este problema antes, probablemente recuerde el
elemento clave de la solución. 

El granjero tiene que llevarse al ganso en el primer viaje, como se explicó antes. 
En el segundo viaje, supongamos que el granjero lleva al zorro. 
Sin embargo, en lugar de dejar al zorro con el ganso, 
el granjero lleva al ganso de regreso a la orilla cercana. 
Luego, el granjero lleva el saco de maíz al otro lado,
dejando al zorro y el maíz en la orilla opuesta, mientras regresa para un cuarto
viaje con el ganso. La solución completa se muestra en la Figura 1-3.

Este rompecabezas es difícil porque la mayoría de las personas nunca consideran llevar uno de
los objetos de vuelta desde la orilla lejana a la orilla cercana. Algunas personas incluso
sugieren que el problema es injusto, diciendo algo como: "¡No dijiste que
pueda llevar algo de vuelta!" Esto es cierto, pero también es cierto que nada en la
descripción del problema sugiere que esté prohibido llevar algo de vuelta.

Piense en lo mucho más fácil que sería resolver el rompecabezas si se hiciera explícita la posibilidad de llevar uno de los objetos a la orilla cercana:

El granjero tiene un bote de remos que puede usarse para transferir objetos en cualquier dirección, pero
solo hay espacio para el granjero y uno de sus tres objetos. 

Con esa sugerencia a la vista, más personas resolverían el problema. Esto ilustra un
principio importante de la resolución de problemas: si no conoce todas las posibles
acciones que podría realizar, es posible que no pueda resolver el problema.

Podemos referirnos a estas acciones como operaciones. 
Al enumerar todas las posibles operaciones, podemos resolver muchos problemas probando cada combinación de operaciones hasta que encontremos una que funcione. 

De manera más general, al reformular un problema en términos más formales, a menudo podemos descubrir soluciones que de otra manera se nos habrían escapado.

Olvidemos que ya conocemos la solución e intentemos enunciar este rompecabezas en particular de manera más formal. 


Primero, enumeraremos nuestras restricciones. Las restricciones clave
aquí son:

1. El granjero puede llevar solo un objeto a la vez en el bote.
2. El zorro y el ganso no pueden quedarse solos en la misma orilla.
3. El ganso y el maíz no pueden quedarse solos en la misma orilla.

Este problema es un buen ejemplo de la importancia de las restricciones. Si
eliminamos cualquiera de estas restricciones, el rompecabezas es fácil. Si eliminamos la primera restricción, podemos simplemente llevar los tres objetos al otro lado en un solo viaje. Incluso si podemos
llevar solo dos objetos en el bote, podemos llevar al zorro y el maíz al otro lado y luego
regresar por el ganso.

Si eliminamos la segunda restricción (pero dejamos las otras restricciones en su lugar), solo tenemos que ser cuidadosos, llevar al ganso al otro lado primero,
luego al zorro y finalmente al maíz. Por lo tanto, si olvidamos o ignoramos alguna de las restricciones, terminaremos con un Kobayashi Maru.

A continuación, enumeremos las operaciones. Hay varias maneras de enunciar las operaciones para este rompecabezas.

Podríamos hacer una lista específica de las acciones que creemos que podemos
realizar:

1. Operación: llevar al zorro al otro lado del río.
2. Operación: llevar al ganso al otro lado del río.
3. Operación: llevar el maíz al otro lado del río.

Recuerde, sin embargo, que el objetivo de reformular formalmente el problema es
obtener información para una solución. A menos que ya hayamos resuelto el problema y
descubierto la posible operación “oculta”, llevar al ganso de regreso al
otro lado del río, no la descubriremos al hacer nuestra lista de
acciones. 

En cambio, deberíamos tratar de hacer que las operaciones sean genéricas o parametrizadas.

1. Operación: remar el bote de una orilla a la otra.
2. Operación: si el bote está vacío, cargar un objeto de la orilla.
3. Operación: Si el bote no está vacío, descargue el objeto en la orilla.

Al pensar en el problema en términos más generales, esta segunda lista de
operaciones nos permitirá resolver el problema sin necesidad de un momento de sorpresa
con respecto al viaje de regreso a la orilla cercana con el ganso.

Si generamos todas las posibles secuencias de movimientos, terminando cada secuencia una vez que viole
una de nuestras restricciones o alcance una configuración que hayamos visto antes, finalmente llegaremos a la secuencia de la Figura 1-3 y resolveremos el rompecabezas.


## Lecciones aprendidas

Reformular el problema de una manera más formal es una gran técnica para
obtener una visión más clara de un problema. Muchos programadores buscan a otros programadores para discutir un problema, no solo porque otros programadores pueden tener la
respuesta, sino también porque articular el problema en voz alta a menudo desencadena pensamientos nuevos y útiles. 

Reformular un problema es como tener esa discusión con
otro programador, excepto que estás desempeñando ambos papeles.

La lección más amplia es que pensar en el problema puede ser tan productivo, o en algunos casos más productivo, que pensar en la solución. En
muchos casos, el enfoque correcto para la solución es la solución.


## Rompecabezas de fichas deslizantes

El rompecabezas de fichas deslizantes viene en diferentes tamaños, lo que, como veremos más adelante, ofrece
un mecanismo de resolución particular. La siguiente descripción es para una versión 3×3
del rompecabezas.


### Problema: ocho deslizante

Una cuadrícula de 3×3 está llena de ocho fichas, numeradas del 1 al 8, y un espacio vacío.
Inicialmente, la cuadrícula está en una configuración desordenada.
Se puede deslizar una ficha en un espacio vacío adyacente, dejando vacía la ubicación anterior de la ficha. 
El objetivo es deslizar las fichas para colocar la cuadrícula en una configuración ordenada, desde la ficha 1 en la parte superior izquierda.


El objetivo de este problema se muestra en la Figura 1-4. Si nunca has intentado un
rompecabezas como este antes, tómate el tiempo para hacerlo ahora.
En la Web se pueden encontrar muchos simuladores de rompecabezas deslizantes, pero para nuestros propósitos es mejor que utilices naipes o fichas para crear tu propio juego sobre una mesa.
En la Figura 1-5 se muestra una configuración inicial sugerida.



Figura 1-4: La configuración objetivo en la versión de ocho fichas del rompecabezas de fichas deslizantes. El cuadrado vacío
representa el espacio vacío
en el que se puede deslizar una ficha adyacente.

1 	2 	3
4 	5 	6
7 	8 	

Figura 1-5: Una configuración inicial particular para el rompecabezas de fichas deslizantes

4 	7 	2
8 	6 	1
3 	5 	

Este rompecabezas es bastante diferente del del granjero con su zorro, ganso y maíz. La dificultad en ese problema surgió al pasar por alto una de las posibles operaciones.
En este problema, eso no sucede. Desde cualquier configuración dada, hasta cuatro fichas pueden estar adyacentes al espacio vacío, y cualquiera de esas fichas
se puede deslizar en el espacio vacío. 
Eso enumera completamente todas las operaciones posibles.

La dificultad de este problema surge, en cambio, de la larga cadena de operaciones que requiere la solución.
Una serie de operaciones de deslizamiento puede mover algunas
fichas a sus posiciones finales correctas mientras mueve otras fichas fuera de su posición,
o puede mover algunas fichas más cerca de sus posiciones correctas mientras mueve otras más lejos. 

Debido a esto, es difícil decir si alguna
operación en particular haría progreso hacia el objetivo final. Sin poder
medir el progreso, es difícil formular una estrategia. 

Muchas personas que
intentan un rompecabezas de fichas deslizantes simplemente mueven las fichas al azar, con la esperanza
de dar con una configuración desde la cual se pueda ver un camino hacia la configuración objetivo.

Sin embargo, existen estrategias para rompecabezas de fichas deslizantes. Para ilustrar un
enfoque, consideremos el rompecabezas para una cuadrícula más pequeña que es rectangular pero
no cuadrada.


### Problema: cinco deslizante 


Una cuadrícula de 2×3 está llena de cinco fichas, numeradas del 4 al 8, y un espacio vacío. Inicialmente, la cuadrícula está en una configuración desordenada. Se puede deslizar una ficha en un espacio vacío adyacente, dejando vacía la ubicación anterior de la ficha.

El objetivo es deslizar las fichas para colocar la cuadrícula en una configuración ordenada, desde la ficha 4 en la esquina superior izquierda.

Es posible que haya notado que nuestras cinco fichas están numeradas del 4 al 8 en lugar del 1 al 5. La razón de esto se aclarará en breve.
Aunque este es el mismo problema básico que el ocho deslizante, es mucho más fácil con solo cinco fichas. 

Si juega con estas fichas durante unos pocos
minutos, probablemente encontrará una solución. Al jugar con rompecabezas de fichas de conteo pequeño, he
desarrollado una habilidad particular. 

Esta habilidad, junto con una observación que analizaremos en breve, es la que utilizo para resolver todos los rompecabezas de fichas deslizantes.

Llamo a mi técnica el tren. Se basa en la observación de que un circuito de posiciones de fichas que incluye el espacio vacío forma un tren de fichas que se puede girar en cualquier lugar a lo largo del circuito, conservando al mismo tiempo el orden relativo de las fichas. 

La figura 1-7 ilustra el tren más pequeño posible de cuatro posiciones. A partir de la primera configuración, el 1 puede deslizarse hacia el cuadrado vacío, el 2 puede deslizarse hacia el espacio que deja libre el 1 y, finalmente, el 3 puede deslizarse hacia el espacio que deja libre el 2.
Esto deja el espacio vacío adyacente al 1, lo que permite que el tren continúe y, por lo tanto, que las fichas giren de manera efectiva en cualquier lugar a lo largo de la trayectoria del tren.

Figura 1-6: 

6	8	
5	4	7

Figura 1-7: Un “tren”, un camino de fichas que comienza adyacente al cuadrado vacío
y puede deslizarse como un tren de vagones a través del rompecabezas

1	2	
	3
	
2	3
1

3
2	1 

	1
2	3

Usando un tren, podemos mover una serie de fichas mientras mantenemos su relación relativa. Ahora volvamos a la configuración de cuadrícula 2×3 anterior.

Aunque ninguna de las fichas en esta cuadrícula está en su posición final correcta, algunas
fichas están adyacentes a las fichas que necesitan bordear en la configuración final.

Por ejemplo, en la configuración final, el 4 estará sobre el 7, y actualmente
esas fichas están adyacentes. 

Como se muestra en la Figura 1-8, podemos usar un tren de seis posiciones
para llevar el 4 y el 7 a sus posiciones finales correctas. Cuando lo hagamos, las fichas restantes estarán casi correctas; solo necesitamos deslizar el 8.

Figura 1-8: Desde la configuración 1, dos rotaciones a lo largo del “tren” delineado nos llevan
a la configuración 2. Desde allí, un solo deslizamiento de fichas da como resultado el objetivo, la configuración 3.

6	8 
5	4	7

4	5	6
7		8

4	5	6
7	8

Entonces, ¿cómo nos permite esta técnica resolver cualquier rompecabezas de fichas deslizantes?
Consideremos nuestra configuración original de 3×3. Podemos usar un tren de seis posiciones para
mover las fichas adyacentes 1 y 2 de modo que las 2 y 3 queden adyacentes, como se muestra en
la Figura 1-9.

Figura 1-9: Desde la configuración 1, las fichas se giran
a lo largo del “tren” delineado para llegar a la configuración 2.

4	7	2
8	6	1 
3	5

4	5	6
8	1
3	2	7

Esto coloca a 1, 2 y 3 en cuadrados adyacentes. Con un tren de ocho posiciones,
podemos mover las fichas 1, 2 y 3 a sus posiciones finales correctas, como se muestra en
la Figura 1-10.

Figura 1-10: A partir de la configuración 1, las fichas se rotan para
alcanzar la configuración 2, en la que las fichas 1, 2 y 3 están en
sus posiciones finales correctas.

4	5	6
8	1
3	2	7

1	2	3
6	8
5	4	7

Observe las posiciones de las fichas 4 a 8. Las fichas están en la configuración que di
para la cuadrícula de 2×3. Esta es la observación clave

Una vez que hayamos colocado las fichas 1 a 3 en sus
posiciones correctas, podemos resolver el resto de la cuadrícula como un rompecabezas separado, más pequeño y más fácil.

Tenga en cuenta que tenemos que resolver una fila o columna completa para que este
método funcione; si colocamos las fichas 1 y 2 en las posiciones correctas pero la ficha 3 sigue
fuera de lugar, no hay forma de mover algo a la esquina superior derecha sin mover una o ambas fichas de la fila superior fuera de su lugar.

Esta misma técnica se puede utilizar para resolver rompecabezas de fichas deslizantes aún más grandes.
El tamaño común más grande es un rompecabezas de 15 fichas, una cuadrícula de 4×4.
Esto se puede resolver por partes, primero moviendo las fichas 1 a 4 a su posición correcta, dejando una cuadrícula de 3×4, y luego moviendo las fichas de la columna más a la izquierda, dejando una cuadrícula de 3×3. 
En ese punto, el problema se ha reducido a un rompecabezas de 8 fichas.


## Lecciones aprendidas

¿Qué lecciones podemos aprender de los rompecabezas de fichas deslizantes?

La cantidad de movimientos de fichas es lo suficientemente grande como para que sea difícil o
imposible planificar una solución completa para un rompecabezas de fichas deslizantes a partir de la
configuración inicial. 

Sin embargo, nuestra incapacidad para planificar una solución completa no nos impide
elaborar estrategias o emplear técnicas para resolver el rompecabezas sistemáticamente.
(para resolver una parte más pequeña)

Al resolver problemas de programación, a veces nos enfrentamos a situaciones en las que no podemos ver un camino claro para codificar la solución, pero nunca debemos permitir que esto sea una excusa para renunciar a la planificación y los enfoques
sistemáticos. Es mejor desarrollar una estrategia que atacar el problema a través de
prueba y error.

Desarrollé mi técnica del "tren" jugando con un pequeño
rompecabezas. A menudo, uso una técnica similar en programación. Cuando me enfrento a un problema oneroso, experimento con una versión reducida del problema.
Estos experimentos con frecuencia producen información valiosa.

La otra lección es que a veces los problemas son divisibles de maneras que no son inmediatamente obvias. Dado que mover una ficha no solo afecta a esa ficha, sino también a los posibles movimientos que se pueden realizar a continuación, se podría pensar que un rompecabezas de fichas
deslizantes debe resolverse en un solo paso, no en etapas.

Buscar una forma de dividir un problema suele ser tiempo bien invertido. Incluso si no puede encontrar una división clara, puede aprender algo sobre el problema que lo ayude a resolverlo. 

Al resolver problemas, trabajar con un objetivo específico en mente siempre es
mejor que el esfuerzo aleatorio, ya sea que logre ese objetivo específico o no.


## Soduku

Analizaremos brevemente la versión tradicional.


## Problema: completar el cuadrado 

Una cuadrícula de 9×9 está parcialmente llena con dígitos individuales (del 1 al 9), y el jugador debe completar
los cuadrados vacíos cumpliendo ciertas restricciones: en cada fila y columna, cada dígito debe aparecer exactamente una vez y, además, en cada área marcada de 3×3, cada dígito
debe aparecer exactamente una vez.

Centrémonos en la
estrategia inicial clave observando el cuadrado de muestra que se muestra en la Figura 1-11.

Los rompecabezas de sudoku varían en dificultad, su dificultad está determinada por la
cantidad de cuadrados que quedan por completar. Según esta medida, este es un rompecabezas muy fácil.
Como ya hay 36 cuadrados numerados, solo hay 45 que deben llenarse para
completar el rompecabezas. La pregunta es, ¿qué cuadrados debemos intentar llenar
primero?


Recuerde las restricciones del rompecabezas. Cada uno de los nueve dígitos debe aparecer
una vez en cada fila, en cada columna y en cada área de 3 × 3 marcada por los
bordes gruesos.

Estas reglas dictan dónde debemos comenzar nuestros esfuerzos. El
área de 3 × 3 en el medio del rompecabezas ya tiene números en ocho de sus nueve
cuadrados.

Por lo tanto, el cuadrado en el centro solo puede tener un valor posible, el único valor que no esté representado en otro cuadrado en esa área de 3 × 3.
Ahí es donde debemos comenzar a resolver este rompecabezas. 

El número que falta en esa
área es 7, por lo que lo colocaríamos en el cuadrado del medio.
Con ese valor en su lugar, observe que la columna más central ahora tiene valores
en siete de sus nueve cuadrados, lo que deja solo dos cuadrados restantes, cada uno
de los cuales debe tener un valor que no esté ya en la columna: los dos números que faltan son 3 y 9.

La restricción en esta columna nos permitiría poner cualquier
número en cualquier lugar, pero observe que 3 ya está presente en la tercera fila
y 9 ya está presente en la séptima fila. Por lo tanto, las restricciones de fila
dictan que 9 vaya en la tercera fila de la columna del medio y 3 en la séptima fila de la columna del medio. Estos pasos se resumen en la Figura 1-12.


No resolveremos todo el rompecabezas aquí, pero estos primeros pasos hacen hincapié en el punto importante de que buscamos cuadrados que tengan el menor número de
valores posibles, idealmente, solo uno.
(gauss/matrices por partes)


## Lección aprendida 

La principal lección del sudoku es que debemos buscar la parte más
restringida del problema. Si bien las restricciones son a menudo lo que hace que un problema sea difícil al principio (recuerde el zorro, el ganso y el maíz), también pueden
simplificar nuestro pensamiento sobre la solución porque eliminan opciones.

Aunque no analizaremos específicamente la inteligencia artificial en este libro,
existe una regla para resolver ciertos tipos de problemas en inteligencia artificial llamada la “variable más restringida”.

Significa que en un problema en el que
se intenta asignar diferentes valores a diferentes variables para cumplir con las restricciones,
se debe comenzar con la variable que tiene más restricciones o, dicho de otra manera, la variable que tiene el menor número de valores posibles.

A continuación se muestra un ejemplo de este tipo de pensamiento. Supongamos que un grupo de compañeros de trabajo
quiere ir a almorzar juntos y le han pedido que encuentre un restaurante que le guste a todos

El problema es que cada uno de los compañeros impone algún tipo de
restricción a la decisión del grupo: Pam es vegetariana, a Todd no le gusta
la comida china, etc

Si su objetivo es minimizar la cantidad de tiempo que se
toma para encontrar un restaurante, debe comenzar por hablar con el compañero de trabajo que tiene las restricciones más
gravosas. 

Si Bob tiene varias alergias alimentarias, por
ejemplo, tendría sentido comenzar por encontrar una lista de restaurantes donde
sabe que puede comer, en lugar de comenzar con Todd, cuya aversión a la comida china se puede mitigar fácilmente.

La misma técnica se puede aplicar a menudo a los problemas de programación. Si
una parte del problema está muy restringida, ese es un buen lugar para comenzar
porque puede avanzar sin preocuparse de estar perdiendo tiempo
en trabajo que luego se deshará

Un corolario relacionado es que debe comenzar
con la parte que es obvia. Si puede resolver parte del problema, siga adelante
y haga lo que pueda. Podrás aprender algo al ver tu propio código
que estimulará tu imaginación para resolver el resto.


## Quarrasi Lock 

Puede que hayas visto todos los acertijos anteriores, pero no deberías haber visto el último de este capítulo a menos que hayas leído este libro anteriormente, porque yo mismo lo he inventado. Lee con atención porque la redacción
de este problema es un poco complicada.


## Problema: abrir la cerradura alienígena

Una raza alienígena hostil, los Quarrasi, ha aterrizado en la Tierra y te han capturado.
Has logrado dominar a tus guardias, a pesar de que son enormes y tienen tentáculos, pero para escapar de la nave espacial (aún en tierra), tienes que abrir la enorme
puerta. 

Las instrucciones para abrir la puerta están, curiosamente, impresas en inglés, pero
no es nada fácil.

Para abrir la puerta, tienes que deslizar los tres Kratzz en forma de barra por las pistas que van desde el receptor derecho al receptor izquierdo, que se encuentra al final de la puerta, a 10 pies de distancia.

Eso es bastante fácil, pero tienes que evitar activar las alarmas, que funcionan de la
siguiente manera. 

En cada Kratzz hay una o más gemas de poder de cristal con forma de estrella conocidas como
Quinicrys

Cada receptor tiene cuatro sensores que se encienden si el número de Quinicrys en
la columna de arriba es par. 

Suena una alarma si el número de sensores encendidos es exactamente
uno

Ten en cuenta que la alarma de cada receptor es independiente: nunca puedes tener exactamente un sensor encendido para el receptor izquierdo o para el receptor derecho.
 
La buena noticia es que cada
alarma está equipada con un supresor, que evita que suene mientras
el botón esté presionado

Si pudieras presionar ambos supresores a la vez, el problema sería
fácil, pero no puedes, ya que tienes brazos humanos cortos en lugar de largos tentáculos Quarassi.

Con todo esto, ¿cómo deslizas el Kratzz para abrir la puerta sin activar ninguna alarma?

La configuración inicial se muestra en la Figura 1-13, con los tres Kratzz en
el receptor derecho. 
Para mayor claridad, la Figura 1-14 muestra una mala idea: deslizar el Kratzz superior hacia el receptor izquierdo provoca un estado de alarma en el receptor derecho.

Puede pensar que podríamos evitar la alarma con el supresor, pero
recuerde que acabamos de mover el Kratzz superior al receptor izquierdo, por lo que estamos a 10 pies del supresor del receptor derecho.

Figura 1-13: Configuración inicial para el problema de bloqueo de Quarrasi. 
Debe deslizar las tres barras de Kratzz, actualmente en el receptor derecho, hacia el receptor izquierdo sin activar ninguna
alarma. 
Un sensor se enciende cuando aparece un número par de Quinicrys en forma de estrella en la columna
de arriba, y suena una alarma si se enciende exactamente un sensor conectado.
Los supresores pueden
evitar que suene una alarma, pero solo para el receptor en el que te encuentras.

Figura 1-14: La cerradura Quarrasi en estado de alarma. Acabas de deslizar el Kratzz superior hacia el receptor
izquierdo, por lo que el receptor derecho está fuera de alcance. El segundo sensor para la alarma derecha se enciende
porque aparece un número par de Quinicrys en la columna de arriba, y suena una alarma
cuando se enciende exactamente uno de sus sensores.

Antes de continuar, tómate un tiempo para estudiar este problema e intenta desarrollar
una solución. Dependiendo de tu punto de vista, este problema no es tan difícil como parece. En serio, ¡piensa en ello antes de continuar!


¿Lo has pensado? ¿Pudiste encontrar una solución?
Hay dos caminos posibles para encontrar una respuesta aquí.

El primer camino es el de prueba y error: intentar varios movimientos de Kratzz de manera metódica y volver a los pasos anteriores cuando se llega a un estado de alarma hasta que se encuentra una serie de movimientos que dan resultado.

El segundo camino es darse cuenta de que el rompecabezas es un truco. Si aún no has visto el truco, aquí está:

Este es solo el problema del zorro, el ganso y el maíz en un
elaborado disfraz. Aunque las reglas para la alarma están escritas de manera general,
solo hay un número limitado de combinaciones para esta cerradura específica. 

Con solo tres Kratzz, solo tenemos que saber qué combinaciones de Kratzz en un receptor son
aceptables. 

Si etiquetamos los tres Kratzz como superior, medio e inferior, entonces las combinaciones que crean alarmas son “superior y medio” y “medio e inferior”.

Si renombramos superior como zorro, medio como ganso y inferior como maíz, entonces las combinaciones problemáticas son las mismas que en el otro problema, “zorro y ganso”
y “ganso y maíz”.

Por lo tanto, este problema se resuelve de la misma manera que el problema del zorro, el ganso y el
maíz. Deslizamos el Kratzz (ganso) del medio hacia el receptáculo izquierdo.

Luego, deslizamos la parte superior (zorro) hacia la izquierda, sosteniendo el supresor de alarma izquierdo mientras
colocamos la parte superior (zorro) en su lugar.

A continuación, comenzamos a deslizar el medio (ganso) de nuevo
hacia el receptáculo derecho

Luego, deslizamos la parte inferior (maíz) hacia la izquierda y,
por último, deslizamos el medio (ganso) hacia la izquierda una vez más, abriendo la cerradura.


## Lecciones aprendidas

La lección principal aquí es la importancia de reconocer analogías. 

Aquí, podemos ver que el problema de la esclusa de Quarrasi es análogo al problema del zorro, el ganso y el maíz. 

Si descubrimos esa analogía lo suficientemente temprano, podemos evitar la mayor parte
del trabajo del problema traduciendo nuestra solución del primer problema
en lugar de crear una nueva solución. La mayoría de las analogías en la resolución de problemas no serán
tan directas, pero ocurrirán con mayor frecuencia.

Si tuvo problemas para ver la conexión entre este problema y el
problema del zorro, el ganso y el maíz, es porque incluí deliberadamente tantos
detalles extraños como fuera posible. La historia que establece el problema de Quarrasi es
irrelevante, al igual que los nombres de toda la tecnología alienígena, que sirven para
aumentar la sensación de desconocimiento.

Además, el mecanismo de pares/impares
de la alarma hace que el problema parezca más complicado de lo que es.

Si observas
la posición real de los Quinicrys, puedes ver que los Kratzz de arriba y
los de abajo son opuestos, por lo que no interactúan en el sistema de alarma.
Sin embargo, el Kratzz del medio interactúa con los otros dos.


## Técnicas generales de resolución de problemas

Los ejemplos que hemos analizado demuestran muchas de las técnicas clave
que se emplean en la resolución de problemas.

En el resto de este libro, analizaremos
problemas de programación específicos y descubriremos formas de resolverlos, pero primero
necesitamos un conjunto general de técnicas y principios. 

Algunas áreas problemáticas tienen técnicas específicas, como veremos, pero las reglas que se indican a continuación se aplican a casi cualquier
situación. Si las convierte en una parte habitual de su enfoque de resolución de problemas,
siempre tendrá un método para abordar un problema.


### Tenga siempre un plan

Esta es quizás la regla más importante. Siempre debe tener un plan, en lugar de
emprender una actividad sin rumbo.

En este punto, debe comprender que siempre es posible tener un plan.

Es cierto que si aún no ha resuelto el problema en su cabeza, entonces
no puede tener un plan para implementar una solución en código.

Eso vendrá más tarde. Sin embargo, incluso al principio, debe tener un plan sobre cómo va a encontrar la solución.

Para ser justos, el plan puede requerir modificaciones en algún momento del camino,
o puede que tengas que abandonar tu plan original y elaborar otro. ¿Por qué,
entonces, es tan importante esta regla?

El general Dwight D. Eisenhower era famoso
por decir: “Siempre he pensado que los planes son inútiles, pero la planificación es indispensable”. Quería decir que las batallas son tan caóticas que es imposible
prever todo lo que podría suceder y tener una respuesta predeterminada para cada
resultado.

En ese sentido, entonces, los planes son inútiles en el campo de batalla (otro
líder militar, el prusiano Helmuth von Moltke, dijo célebremente que “ningún
plan sobrevive al primer contacto con el enemigo”). 

Pero ningún ejército puede tener éxito sin planificación y organización.

A través de la planificación, un general aprende cuáles son las capacidades de su
ejército, cómo trabajan juntas las diferentes partes del ejército,
etc. De la misma manera, siempre debes tener un plan para resolver un problema. 

Puede que no sobreviva al primer contacto con el enemigo (puede que lo descarte en cuanto empiece a escribir código en su editor de código fuente), pero debe tener un plan.

Sin un plan, simplemente está esperando un golpe de suerte, el equivalente
a que un mono escriba al azar y produzca una de las obras de Shakespeare.

Los golpes de suerte son poco comunes y los que ocurren pueden requerir un plan.
Muchas personas han oído la historia del descubrimiento de la penicilina: un investigador
llamado Alexander Fleming olvidó cerrar una placa de Petri una noche y por la mañana descubrió que el moho había inhibido el crecimiento de las bacterias en la
placa. 

Pero Fleming no estaba sentado esperando un golpe de suerte; había estado
experimentando de manera exhaustiva y controlada y, por lo tanto, reconoció
la importancia de lo que vio en la placa de Petri. (Si encontraba moho creciendo en algo que había dejado afuera la noche anterior, esto no resultaría en una contribución importante a la ciencia).

La ​​planificación también le permite establecer metas intermedias y alcanzarlas.
Sin un plan, solo tiene un objetivo: resolver todo el problema. Hasta que no hayas
resuelto el problema, no sentirás que has logrado nada. 

Como probablemente hayas experimentado, muchos programas no hacen nada útil
hasta que están cerca de completarse. Por lo tanto, trabajar solo por el objetivo principal conduce inevitablemente a la frustración, ya que no hay un refuerzo positivo
de tus esfuerzos hasta el final.

Si, en cambio, creas un plan con una serie de objetivos menores, incluso si algunos parecen tangenciales al problema principal,
harás un progreso mensurable hacia una solución y sentirás que has invertido tu tiempo de manera útil.

Al final de cada sesión de trabajo, podrás marcar elementos de tu plan, ganando confianza en que encontrarás una solución
en lugar de frustrarte cada vez más.


## Reformular el problema

Como se demostró especialmente con el problema del zorro, el ganso y el maíz, reformular un
problema puede producir resultados valiosos. 

En algunos casos, un problema que parece
muy difícil puede parecer fácil cuando se plantea de otra manera o se utilizan otros
términos.

Reformular un problema es como rodear la base de una colina que debes
escalar; antes de comenzar a escalar, ¿por qué no observas la colina desde todos los ángulos para ver si hay una forma más fácil de subir?

La reformulación puede
ser una técnica poderosa, pero muchos programadores la pasan por alto porque no implica
directamente escribir código o incluso diseñar una solución. 

Esta es otra
razón por la que es esencial tener un plan. Sin un plan, su único objetivo es
tener un código funcional, y la reformulación le quita tiempo a la escritura del código.

Con un plan, puede poner "reformular formalmente el problema" como su primer paso;
por lo tanto, completar la reformulación oficialmente cuenta como un progreso.

Incluso si una reformulación no conduce a ninguna idea inmediata, puede ayudar
de otras maneras. Por ejemplo, si un supervisor o instructor le ha asignado un problema, puede llevar su reformulación a la persona
que le asignó el problema y confirmar su comprensión. 

Además, la reformulación
del problema puede ser un paso previo necesario para usar otras técnicas comunes, como reducir o dividir el problema.

En términos más generales, la reformulación puede transformar áreas de problemas enteras. La
técnica que empleo para las soluciones recursivas, que comparto en un capítulo posterior, es
un método para reformular problemas recursivos de modo que pueda tratarlos de la misma manera que los problemas
iterativos.


### Dividir el problema


Encontrar una forma de dividir un problema en pasos o fases puede hacer que el problema
sea mucho más fácil. Si puede dividir un problema en dos partes, podría pensar
que cada parte sería la mitad de difícil de resolver que el todo original, pero
por lo general, es incluso más fácil que eso.

A continuación, se presenta una analogía que le resultará familiar si ya ha visto algoritmos de
ordenación comunes. Suponga que tiene 100 archivos que necesita colocar en una caja en
orden alfabético, y su método básico de ordenación alfabética es efectivamente lo que
llamamos ordenación por inserción: toma uno de los archivos al azar, lo coloca en la caja, luego coloca el siguiente archivo en la caja en la relación correcta con el primer archivo,
y luego continúa, colocando siempre el nuevo archivo en su posición correcta en relación con los otros archivos, de modo que en cualquier momento dado, los archivos en la caja estén ordenados alfabéticamente. 

Supongamos que alguien separa inicialmente los archivos en 4 grupos de aproximadamente
igual tamaño, A–F, G–M, N–S y T–Z, y le dice que ordene alfabéticamente los 4
grupos individualmente y luego los coloque uno tras otro en la caja.

Si cada uno de los grupos contuviera alrededor de 25 archivos, entonces uno podría pensar
que ordenar alfabéticamente 4 grupos de 25 es aproximadamente la misma cantidad de trabajo que ordenar alfabéticamente un solo grupo de 100. 

Pero en realidad es mucho menos trabajo porque el trabajo
que implica insertar un solo archivo crece a medida que crece el número de archivos ya archivados; usted tiene que mirar cada archivo en la caja para saber dónde debe colocarse el nuevo archivo. 

(Si duda de esto, piense en una versión más extrema:
compare la idea de ordenar 50 grupos de 2 archivos, lo que probablemente podría hacer en menos de un minuto, con ordenar un solo grupo de 100 archivos).

De la misma manera, dividir un problema a menudo puede reducir la dificultad en un
orden de magnitud. Combinar técnicas de programación es mucho más complicado
que usar técnicas solas.

Por ejemplo, una sección de código que emplea una
serie de instrucciones if dentro de un bucle while que está a su vez dentro de un bucle for será
más difícil de escribir (y de leer) que una sección de código que emplea todas
esas mismas instrucciones de control secuencialmente.


## Empieza con lo que sabes

A los novelistas primerizos se les suele dar el consejo de “escribe sobre lo que sabes”. Esto
no significa que los novelistas deban intentar crear obras solo en torno a incidentes
y personas que hayan observado directamente en sus propias vidas; si este fuera el caso, nunca podríamos tener novelas de fantasía, ficción histórica o muchos otros
géneros populares. Pero significa que cuanto más se aleja un escritor de su propia
experiencia, más difícil puede resultar escribir.

De la misma manera, al programar, debes intentar comenzar con lo que ya sabes hacer y trabajar a partir de ahí. Una vez que hayas
dividido el problema en partes, por ejemplo, continúa y completa las partes que ya sabes codificar. 
Tener una solución parcial funcional puede generar ideas sobre el resto del problema. 

Además, como habrás notado, un tema común en la resolución de problemas es hacer un progreso útil para generar confianza en que finalmente completarás la tarea. Al comenzar con lo que sabes, generas confianza y impulso hacia el objetivo.
Al comenzar con lo que sabes, generas confianza y impulso hacia el objetivo.

La máxima de “empieza con lo que sabes” también se aplica en los casos en los que no has
dividido el problema. Imagina que alguien hiciera una lista completa de todas las
habilidades de programación: escribir una clase de C++, ordenar una lista de números, encontrar el valor más grande en una lista
enlazada, etc.

En cada punto de tu desarrollo como programador, habrá muchas habilidades en esta lista que puedes hacer
bien, otras habilidades que puedes usar con esfuerzo y luego otras habilidades que aún no conoces. Un problema en particular puede ser totalmente solucionable con las habilidades
que ya tienes o puede que no, pero debes investigarlo a fondo
utilizando las habilidades que ya tienes en tu cabeza antes de buscar en otra parte.

Si pensamos en las habilidades de programación como herramientas y en un problema de programación como un proyecto de reparación
doméstica, debes intentar hacer la reparación utilizando las herramientas que ya tienes en tu garaje antes de dirigirte a la ferretería.

Esta técnica sigue los principios que ya hemos discutido. Sigue un plan y da orden a nuestros esfuerzos. Cuando comenzamos nuestra investigación de un
problema aplicando las habilidades que ya tenemos, podemos aprender más
sobre el problema y su solución final.


## Reducir el problema

Con esta técnica, cuando se enfrenta a un problema que no puede resolver,
reduce el alcance del problema, ya sea agregando o eliminando restricciones,
para producir un problema que sí sabe cómo resolver. 

Veremos esta técnica
en acción en capítulos posteriores, pero aquí hay un ejemplo básico. Suponga que le dan
una serie de coordenadas en un espacio tridimensional y debe encontrar las
coordenadas que están más cercanas entre sí. Si no sabe inmediatamente
cómo resolver esto, hay diferentes formas de reducir el problema para
buscar una solución.

Por ejemplo, ¿qué sucede si las coordenadas están en un espacio bidimensional, en lugar de en un espacio tridimensional? Si eso no ayuda, ¿qué sucede si los
puntos se encuentran a lo largo de una sola línea de modo que las coordenadas son solo números individuales (por ejemplo, dobles de C++)? Ahora la pregunta se convierte esencialmente en, en una lista
de números, encontrar los dos números con la diferencia absoluta mínima.

O se podría reducir el problema manteniendo las coordenadas en un espacio tridimensional pero teniendo sólo tres valores, en lugar de una serie de
tamaño arbitrario.

 Así que en lugar de un algoritmo para encontrar la distancia más pequeña entre dos
coordenadas, es sólo una cuestión de comparar la coordenada A con la coordenada
B, luego B con C, y luego A con C.

Estas reducciones simplifican el problema de diferentes maneras. La primera reducción elimina la necesidad de calcular la distancia entre puntos tridimensionales.
Quizás no sepamos cómo hacerlo todavía, pero hasta que lo averigüemos,
podemos avanzar hacia una solución.

La segunda reducción, por el contrario, se centra casi por completo en calcular la distancia entre puntos tridimensionales, pero elimina el problema de encontrar un valor mínimo en una serie de
valores de tamaño arbitrario.

Por supuesto, para resolver el problema original, eventualmente necesitaremos las
habilidades involucradas en ambas reducciones.

Aun así, la reducción nos permite trabajar en un
problema más simple incluso cuando no podemos encontrar una manera de dividir el problema en
pasos.

En efecto, es como un Kobayashi Maru deliberado, pero temporal. Sabemos
que no estamos trabajando en el problema completo, pero el problema reducido tiene suficiente
en común con el problema completo como para que avancemos hacia la solución definitiva.

Muchas veces, los programadores descubren que tienen todas las habilidades
individuales necesarias para resolver el problema y, al escribir código para resolver cada aspecto individual del problema, ven cómo combinar las diversas piezas de
código en un todo unificado.

Reducir el problema también nos permite señalar exactamente dónde se encuentra la dificultad restante

Los programadores principiantes a menudo necesitan buscar la ayuda de programadores
experimentados, pero esto puede ser una experiencia frustrante para todos los involucrados si el programador con dificultades no puede describir con precisión
la ayuda que necesita.

Uno nunca quiere verse reducido a decir: "Aquí está mi programa y no funciona. ¿Por qué no?" Utilizando la técnica de reducción de problemas, uno puede identificar la ayuda necesaria, diciendo algo como: “Aquí hay
un código que escribí. Como puede ver, sé cómo encontrar la distancia entre
dos coordenadas tridimensionales y sé cómo comprobar si una
distancia es menor que otra. 

Pero no puedo encontrar una solución general para
encontrar el par de coordenadas con la distancia mínima”.


## Busque analogías

Una analogía, para nuestros propósitos, es una similitud entre un problema actual y un
problema ya resuelto que puede aprovecharse para ayudar a resolver el problema actual.

La similitud puede adoptar muchas formas. A veces significa que los dos problemas
son realmente el mismo problema. Esta es la situación que tuvimos con el problema del zorro, el ganso y el maíz y el problema de la cerradura de Quarrasi.

La similitud puede adoptar muchas formas. A veces significa que los dos problemas
son realmente el mismo problema. Esta es la situación que tuvimos con el problema del zorro, el ganso y el maíz y el problema de la cerradura de Quarrasi.
La mayoría de las analogías no son tan directas. A veces la similitud se refiere
solo a una parte de los problemas.

Por ejemplo, dos problemas de procesamiento de números
pueden ser diferentes en todos los aspectos, excepto que ambos trabajan con números
que requieren más precisión que la que brindan los tipos de datos de punto flotante integrados;
no podrá usar esta analogía para resolver todo el problema, pero si ya descubrió una forma de manejar el problema de precisión adicional, puede manejar ese mismo problema de la misma manera nuevamente.

Aquí es donde los programadores en desarrollo a menudo intentan tomar un atajo, encontrando código que sea similar al código necesario y modificando a partir de ahí. Sin embargo, por varias razones, esto es un error. 
En primer lugar, si no completas una solución tú mismo, no la habrás entendido ni interiorizado por completo. 

En pocas palabras,
es muy difícil modificar correctamente un programa que no entiendes por completo. No necesitas haber escrito el código para entenderlo por completo, pero si no pudiste haberlo escrito, tu comprensión será necesariamente limitada. 

En segundo lugar, cada programa exitoso que escribes es más que una solución a un problema actual; es una fuente potencial de analogías para resolver problemas futuros. Cuanto más dependas ahora del código de otros programadores, más tendrás que depender de él en el futuro. Hablaremos en profundidad sobre la “buena reutilización” y
la “mala reutilización” en el Capítulo 7.


### Experimento

A veces, la mejor manera de avanzar es probar cosas y observar los
resultados. Tenga en cuenta que la experimentación no es lo mismo que adivinar. Cuando
adivina, escribe un código y espera que funcione, sin tener una creencia firme de que así será. 

Un experimento es un proceso controlado. Usted formula una hipótesis sobre lo que
ocurrirá cuando se ejecute cierto código, lo prueba y ve si su hipótesis es correcta. A partir de estas observaciones, obtiene información que lo ayudará
a resolver el problema original.

La experimentación puede ser especialmente útil cuando se trabaja con interfaces de programación de aplicaciones o bibliotecas de clases. Suponga que está escribiendo un programa
que utiliza una clase de biblioteca que representa un vector (en este contexto, una matriz
unidimensional que crece automáticamente a medida que se agregan más elementos), pero nunca ha
utilizado esta clase de vector antes y no está seguro de lo que sucede cuando se elimina un elemento del vector. 

En lugar de seguir adelante con la solución del
problema original mientras las incertidumbres se arremolinan en tu cabeza, puedes crear un programa corto
separado solo para jugar con la clase vector y probar específicamente
las situaciones que te preocupan.
Si dedicas un poco de tiempo al programa “demostrador de vectores”, puede convertirse en una referencia para el trabajo futuro
con la clase.

Otras formas de experimentación son similares a la depuración. Supón que un
cierto programa está produciendo un resultado que está al revés de lo esperado;
por ejemplo, si el resultado es numérico, los números son los esperados, pero en
el orden inverso. 

Si no ves por qué ocurre esto después de revisar tu
código, como experimento, puedes intentar modificar el código para hacer deliberadamente que el resultado sea al revés (ejecutar un bucle en la dirección inversa, tal vez).

El cambio resultante, o la falta de cambio, en el resultado puede revelar el problema en tu código fuente original o puede revelar una brecha en tu comprensión.
De cualquier manera, estás más cerca de una solución.


### No te frustres

La última técnica no es tanto una técnica, sino una máxima: no te frustres. Cuando estás frustrado, no pensarás con tanta claridad, no trabajarás con tanta
eficiencia y todo te llevará más tiempo y te parecerá más difícil. Peor aún,
la frustración tiende a alimentarse a sí misma, de modo que lo que comienza como una leve irritación termina
como un enojo absoluto.

El programador no está en el mismo barco. A riesgo de sonar como un gurú de la autoayuda, un programador frustrado no está respondiendo a un estímulo externo. El programador frustrado no está enojado con el código fuente en el
monitor, aunque el programador puede expresar la frustración en esos
términos. En cambio, el programador frustrado está enojado consigo mismo.

 La
fuente de la frustración es también el destino, la mente del programador.
Cuando te permites frustrarte -y uso la palabra “permitir”
deliberadamente-, en realidad te estás dando una excusa para seguir fallando.
Supón que estás trabajando en un problema difícil y sientes que tu frustración
aumenta. Horas después, recuerdas una tarde de dientes apretados y lápices
quebrados por la ira y te dices a ti mismo que habrías logrado un progreso real si
hubieras podido calmarte. En verdad, es posible que hayas decidido que ceder a tu ira era más fácil que enfrentar el problema difícil.

En última instancia, entonces, evitar la frustración es una decisión que debes tomar.
Sin embargo, hay algunas ideas que puedes emplear que te ayudarán. En primer lugar, nunca olvides la primera regla, que siempre debes tener un plan, y que si bien escribir
código que resuelva el problema original es el objetivo de ese plan, no es el único
paso de ese plan.

Por lo tanto, si tienes un plan y lo estás siguiendo, entonces
estás logrando un progreso y debes creerlo. Si has seguido todos los
pasos de tu plan original y aún no estás listo para comenzar a codificar, entonces es
momento de hacer otro plan.

Además, cuando se trata de frustrarte o tomar un descanso, debes tomar un descanso. Un truco es tener más de un problema en el que trabajar
de modo que si este problema te deja bloqueado, puedas centrar tus esfuerzos en otra cosa.

centrar tus esfuerzos en otra cosa.
Ten en cuenta que si divides el problema con éxito, puedes utilizar esta técnica
en un solo problema; simplemente bloquea la parte del problema que te tiene
atascado y trabaja en otra cosa. Si no tienes otro problema que puedas abordar, levántate de la silla y haz otra cosa, algo que mantenga
tu sangre fluyendo pero que no te haga doler el cerebro: sal a caminar, lava la ropa, haz tu rutina de estiramiento (si te estás inscribiendo para ser programador y te sientas frente a una computadora todo el día, ¡te recomiendo encarecidamente que desarrolles una rutina de estiramiento!). No pienses en el problema hasta que termine tu descanso.



# Cap 2: puzzles

Eso no significa que todos estos problemas serán fáciles, solo que usted debe poder concentrarse en la resolución de problemas y no en la sintaxis de programación.
Esto es resolución de problemas en su forma más pura. Una vez que descubra lo que quiere hacer, traducir sus pensamientos en código C++ será sencillo. Recuerde que leer este libro, en sí mismo, proporciona un beneficio limitado. Debe resolver cualquier problema que le parezca no trivial a medida que lo discutimos, tratando de resolverlo usted mismo antes de leer sobre mi enfoque.


## c++


Este capítulo utiliza el C++ básico con el que ya debería estar familiarizado,
incluidas las instrucciones de control if, for, while y do-while, y switch.
Es posible que aún no se sienta cómodo escribiendo código para resolver problemas originales con estas instrucciones; después de todo, de eso trata este libro. Sin embargo, debe comprender la sintaxis de cómo se escriben estas instrucciones o tener a mano una
buena referencia de C++.
También debe saber cómo escribir y llamar funciones. Para simplificar las cosas, utilizaremos los flujos estándar cin y cout para la entrada y la salida.

Para utilizar estos flujos, incluya el archivo de encabezado necesario, iostream, en su código y agregue instrucciones using para los dos objetos de flujo estándar:

```
#include <iostream>
using std::cin;
using std::cout;

```
Para abreviar, estas instrucciones no se mostrarán en las listas de código. Se asume su inclusión en cualquier programa que las utilice.
Enviar comentarios


## Patrones de salida

En este capítulo, trabajaremos con tres problemas principales. Debido a que haremos un uso extensivo de las técnicas de división y reducción de problemas,
cada uno de estos problemas principales generará varios subproblemas.

En esta primera sección, probaremos una serie de programas que producen una salida con patrones en una forma regular. 
Programas como estos desarrollan habilidades de escritura de bucles.


### Problema: la mitad de un cuadrado 

Escriba un programa que utilice solo dos instrucciones de salida, cout << "#" y cout << "\n",
para producir un patrón de símbolos de almohadilla con la forma de la mitad de un cuadrado perfecto de 5 x 5 (o un triángulo rectángulo):

```
#####
####
###
##
#

```

Aquí hay otro gran ejemplo de la importancia de las restricciones. Si
ignoramos el requisito de que podemos usar solo dos instrucciones de salida, una que
produce un solo símbolo de almohadilla y otra que produce un final de línea, podemos
escribir un Kobayashi Maru y resolver este problema de manera trivial.

Sin embargo, con esa restricción
en su lugar, tendremos que usar bucles para resolver este problema.
Es posible que ya vea la solución en su cabeza, pero supongamos que no.

Una buena primera arma es la reducción. ¿Cómo podemos reducir este problema a
un punto en el que sea fácil de resolver? ¿Qué sucedería si el patrón fuera un cuadrado completo en lugar de la mitad de un cuadrado?


### Problema: un cuadrado (Reducción de la mitad de un cuadrado)

Escriba un programa que utilice solo dos instrucciones de salida, cout << "#" y cout << "\n",
para producir un patrón de símbolos almohadilla con la forma de un cuadrado perfecto de 5x5:

Esto puede ser suficiente para empezar, pero supongamos que tampoco sabemos cómo
abordar esto. Podríamos reducir el problema aún más, haciendo una sola línea
de símbolos almohadilla en lugar del cuadrado.


### 


















