# Abstracción algorítmos soluciones

|| Herramientas
	
	En los problemas hay una lógica implicita que debemos descrubrir y resolver con distintos elementos, estructuras y combinaciones entre operaciones con estas. 

	Tomamos un objeto real, debemos conocer como funciona lo desarmamos de a poco y quitamos su esencia o idea general para transformarla en fórmulas. 

	O al revés, buscamos soluciones en el mundo de las ideas para resolver un problema del mundo real.

	Definimos los elementos, variables que interactúan, cada línea de código tiene una interpretación, le ordena a la máquina que haga algo. 

	Frente a un problema muy grande, descomponerlo en partes más simples.


	Definición, asignación, valor: 

		cons, var, return


	Operaciones:

		+ - * / ^ [] log func lim derv intr

		y o == === null 

		(var[]) -acceder elemento-


	Entrada y salida: 

		true false

		input() print() 


	Instrucciones: 	

		return, for, not, in 

		None, pass, del (eliminar elemento)  


	Métodos: 

		.sort() -ordenar- .copy() .append() -agregar- add()

		.lower() .upper() .decode() .replace() -reemplazar elemento- .split() . insert()

		.union() .intersection() .difference() -op.conjuntos/sets-

		.keys() .values() .items()


	Funciones nativas: 

		print() len()/length() int() float() str() range() hex()

		list() super() map()


	Estructuras de control: 

		if (condición) else

		for (elemento) in (tipo de secuencia)

		while (condición)

		break 

		continue


	Estructuras de datos: 

		array([]), list[], tupla() set{}, dict{}, tree, graph

		mutables e inmutables (python)


	Llamadas:

		function, methods, class



|| Soluciones 
	
	Pensar más allá: 

		Problema mundo real -> Buscar soluciones en el mundo de las ideas -> Formulaciones/Metodos

		Mundo de las ideas -> herramientas para el mundo real/Metodos


		Abstracción: 

			Generalización: 

				Caso particular -> Caso general

				Fórmula particular | Fórmula general


		Solución: 

			Inicio/nada -> Final/solución 

				Transformaciones


		Idea-creación: 

			Idea  ->  Creación 

				Código 

			Inicio -> Fin


|| Algoritmos
	
	Lectura: 
	
	encapsular




|| Ing inversa 
	
	Abstracción: 

		Pensar más allá: 

			Cómo se llego a/pensó la solución

		Pensar en cómo se pudo implementar 

		-> Metodo -> reimplementación 


|| UI/UX 
	 
	Display: 

		normal flow: margin, border ,padding, content

		flex: 

		grid: 

		box-alignment: 


	Soporte: 

		Viejo: 

		Moderno: 


	
	Metodos: 



|| Problemas: 

	1. Conceptos claves -> Conceptos relacionados 

		Pueden ser objetos, entidades, operaciones o relaciones relevantes.

		Pueden agruparse en una misma entidad o clase, deben tener características y comportamientos similares.


	2. Usar clases (POO) o estructuras de datos para representar los conceptos identificados. 

		Define atributos y métodos que describan las características y comportamientos de cada clase.


	3. Definir interfaces: 	

		Que especifiquen cómo interactuar con ellas, claramente. 

		Oculta los detalles internos y expón solo los métodos y atributos necesarios para el uso externo.

			Interfaces: 

				Define un conjunto de métodos y/o atributos que especifican cómo interactuar con un objeto o una clase.

				Establece un contrato que debe cumplirse por cualquier clase que la implemente. 

				Define qué métodos deben estar disponibles y cómo deben utilizarse, pero no proporciona su implementación concreta.

				Promueven la abstracción, el encapsulamiento y proporcionan una forma de comunicarse con los objetos sin preocuparse por su implementación interna. 

				Se puede usar clases abstractas o interfaces en sí mismas y luego implementarlas en diferentes clases. 

				Facilita la sustitución de una implementación con otra y promueve la modularidad y la reutilización de código.


	4. Herencia o composición: 

		Cuando sea apropiado, para establecer relaciones entre las clases y reutilizar código. 

		Herencia: 

			Permite crear nuevas clases basadas en una clase existente

		Composición: 

			Combina múltiples clases para formar una nueva clase.


	5. Abstracción lógica en común: 

		Identificar la lógica común entre diferentes clases o métodos y encapsúlala en funciones o clases separadas.

		Promueve la reutilización de código y evita la duplicación.


	6. Revisa y mejora la abstracción: 	

		Las clases y estructuras de datos deben representar de manera precisa y eficiente los conceptos y relaciones del problema.


	7. Pruebas: 

		Verificar que tu abstracción funcione correctamente y resuelva el problema de manera esperada.

		Realiza ajustes y mejoras según sea necesario.


	8. Modularidad: 

		Componentes pequeños y bien definidos puedan ser entendidos y modificados de forma independiente, facilitando el mantenimiento. 

			Código modular: 

				Dividir un programa en módulos más pequeños y bien definidos que realizan tareas específicas. 

				Cada módulo tiene una responsabilidad clara y se puede desarrollar, probar y mantener de forma independiente.

				Los módulos se pueden componer para construir el programa completo.

				Cada módulo se centra en una tarea o funcionalidad específica, lo que facilita la lectura, el mantenimiento y la depuración del código.

				Se pueden reutilizar en diferentes proyectos o contextos, lo que ahorra tiempo y esfuerzo

				Se pueden implementar utilizando clases, funciones, paquetes o cualquier otro mecanismo proporcionado por el lenguaje de programación.

				Es importante definir interfaces claras entre los módulos para establecer cómo interactúan y se comunican entre sí. Esto permite que los módulos sean independientes unos de otros y se puedan modificar o reemplazar sin afectar a otros módulos.

	9. Revisa y refactoriza: 

		Cuando las necesidades cambian, Asegúrate que la abstracción siga siendo eficaz y cumpla con los requisitos actuales.



|| Estructuras de control: 

	1. if-else (si, entonces): 

		Se usa para tomar decisiones en base a condiciones y ejecutar diferentes bloques de código en función de los resultados. 

		La estructura "if-else" es una herramienta poderosa para implementar lógica condicional en un programa y permitir que el programa tome diferentes caminos según las condiciones evaluadas.
		

	2. for (para): 

		Esta estructura es muy útil para iterar sobre secuencias de elementos como listas, cadenas, rangos, entre otros. 

		Puedes utilizarla para realizar operaciones en cada elemento de una secuencia, procesar datos, buscar elementos, generar secuencias numéricas y mucho más.


	3. while (mientras): 

		Es útil cuando se necesita repetir un bloque de código mientras se cumpla una condición. 

		Puedes usarla para realizar operaciones iterativas, contar o decrementar valores, buscar elementos en una lista, validar entradas de usuario y mucho más. 

		Recuerda asegurarte de que la condición cambie en algún momento para evitar bucles infinitos.


	4. break: 

		Es utilizada para salir de un bucle de manera prematura. 

		Se puede utilizar en cualquier estructura de control de bucle (como "for" y "while") para detener la ejecución del bucle y continuar con el código que sigue después del bucle. 

		La principal utilidad de "break" es evitar que el bucle continúe ejecutándose una vez que se ha cumplido una condición o se ha alcanzado un resultado deseado.


	5. continue: 

		Se utiliza para saltar la ejecución de una iteración en un bucle y pasar a la siguiente iteración. 

		Puede ser útil cuando se desea omitir ciertas iteraciones según una condición específica, evitando que se ejecuten ciertas líneas de código en esas iteraciones particulares.



|| Estructuras de datos: 

	1. List:

		Las listas en Python son estructuras de datos versátiles que permiten almacenar y manipular conjuntos ordenados de elementos. 

		Son mutables, lo que significa que se pueden modificar después de su creación.

		Las listas son útiles para almacenar colecciones de elementos que pueden cambiar en tamaño o contenido a lo largo del programa.


	2. Tuple (tupla, registros, celdas): 

		Las tuplas son secuencias inmutables en Python, lo que significa que no se pueden modificar después de su creación. 

		Sin embargo, permiten acceder a elementos individuales, realizar iteraciones y otras operaciones básicas. 

		Son útiles cuando se necesita almacenar un conjunto de valores que no cambiarán a lo largo del programa, como coordenadas, días de la semana, información de un punto de datos fijo, entre otros.


	3. Set (conjuntos):

		Los conjuntos en Python son colecciones de elementos únicos y no ordenados. Se utilizan para almacenar y operar con conjuntos de elementos distintos. 

		Los conjuntos proporcionan operaciones eficientes para realizar operaciones de conjuntos como uniones, intersecciones y diferencias.


	4. Dictionaries (mapa, hast): 

		Los diccionarios en Python son estructuras de datos que permiten almacenar pares de claves y valores.

		Son mutables y muy útiles para representar información estructurada y acceder a ella de forma eficiente utilizando las claves. L

		Son ideales cuando necesitas almacenar y manipular datos relacionados de manera más significativa que solo índices numéricos. 

		Son útiles para asociar y acceder a información de manera eficiente. Los diccionarios se utilizan ampliamente para representar estructuras de datos como bases de datos en memoria, configuraciones, datos JSON, entre otros.


	5. String (cadana):

		Las cadenas de caracteres en Python son secuencias de caracteres inmutables. Se utilizan para almacenar y manipular texto en un programa.

		Son ampliamente utilizadas en la manipulación de texto, la entrada y salida de datos, el formateo de cadenas y muchas otras tareas relacionadas con el procesamiento de texto.


	6. Stack (pila): 

		La pila es una estructura de datos que sigue el principio LIFO (Last In, First Out), lo que significa que el último elemento que se apila es el primero en ser desapilado. 

		Se utiliza ampliamente en diferentes áreas de la programación, como la evaluación de expresiones matemáticas, el manejo de llamadas a funciones y la inversión de cadenas.


	7. Queues (cola): 

		La cola es una estructura de datos que sigue el principio FIFO (First In, First Out), lo que significa que el primer elemento que se encola es el primero en ser desencolado. 

		Se utiliza ampliamente en diferentes áreas de la programación, como el manejo de tareas pendientes, la implementación de algoritmos de búsqueda y el procesamiento de mensajes en sistemas distribuidos.


	8. Tree: 

		Se utilizan ampliamente en algoritmos de búsqueda, ordenamiento, estructuras de datos más complejas y muchas otras aplicaciones.

	
	9. Graph: 

		Son estructuras de datos utilizadas para representar relaciones entre elementos. 

		Se utilizan en una variedad de aplicaciones, como redes sociales, algoritmos de búsqueda y rutas, sistemas de recomendación, y muchos otros problemas que involucran conexiones y relaciones entre entidades.


	10. bytes: 

		El tipo de dato bytes en Python se utiliza para representar secuencias de bytes inmutables. 

		Se utilizan en situaciones donde se requiere un manejo preciso de datos binarios, como en la lectura y escritura de archivos binarios, el cifrado de datos y la comunicación de datos a través de redes.


	11. bytearray:

		El tipo de dato bytearray en Python es similar a bytes, pero a diferencia de bytes, es mutable. 

		Esto significa que se pueden modificar los elementos individuales del bytearray. Se utilizan en situaciones donde se requiere un manejo y manipulación de datos binarios mutable, como en la manipulación de imágenes, el procesamiento de archivos binarios y la comunicación de datos a través de redes


	12. frozenset: 

		Los frozensets se utilizan cuando se necesita un conjunto inmutable, especialmente en casos donde se requiere que un conjunto sea una clave en un diccionario o un elemento en otro conjunto. 

		A diferencia de los conjuntos normales, los frozensets se pueden utilizar como claves en diccionarios debido a su inmutabilidad.