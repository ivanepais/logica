# Abstracción algorítmos soluciones

|| Herramientas
	
	En los problemas hay una lógica implicita que debemos descrubrir y resolver con distintos elementos, estructuras y combinaciones entre operaciones con estas. 

	Si tomamos un objeto real debemos conocer como funciona, lo desarmamos de a poco y quitamos su esencia o idea general para transformarla en fórmulas. 

	O al revés, buscamos soluciones en el mundo de las ideas para resolver un problema del mundo real.

	Definimos los elementos, variables que interactúan, cada línea de código tiene una interpretación, le ordena a la máquina que haga algo.

	Para leer e interpretar el código línea por línea tenemos que separalo por partes: declaración/asignación, bloque de código/acción y retorno o resultado final. 

	La declaración de un objeto no hace más que reservar un espacio en la memoria para él, no tiene efectos en la ejecución (solo vemos su nombre), pero una asignación le da un valor que se puede imprimir.

	El objeto elegido y las operaciones o fórmula deben representar la lógica que necesita cada parte del programa. 

	En el bloque de código se declaran o asignan las variables o constantes que van a operar allí. 

	El conjunto de nombres de variables, funciones y bloque de código debe describir la operación que efectúa así puede ser leída y mejorada por humanos.

	La operación puede ser una fórmula integradas por otras variables que está guardada en su variable o en bloque de código de función correspondiente. 

	El retorno es el resultado final que produce las operaciones del bloque de código. También es posible asignar una operación con variables a la palabra clave return. 

	Además de intentar entender lógicamente qué hace cada función o bloque de código, podemos testearlo y debbugearlo para ver paso a paso qué es lo que hace efectivamente. 

	Podemos empezar un programa escribiendo las instrucciones en lenguaje natural paso a paso (elementos, variables, funciones, estructuras de control, datos, etc.). 

	Después con el lenguaje de programación podemos crear elementos con variables que funcionen individualmente, sin funciones. 

	El siguiente paso es definir funciones simples que hagan una sola cosa y con los argumentos que le pasamos, podemos generalizar todos los elementos anteriores.

	Al final, en la llamada a la función podemos pasarle cualquir valor o inclusive encadenar funciones para que cada tarea simple que realiza cada una, termine creando el programa.
 
	Frente a un problema muy grande podemos descomponerlo en partes más simples con funciones simples, generalizadoras, estructuras, etc. Debemos conocer como funciona o hacerce una idea de como debería funcionar sin programación.

	El programa final debe tener un diseño de producto en todos sus aspectos.  


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

		mutables e inmutables


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


|| Funciones

	Es un bloque de código que realiza una tarea específica y se puede invocar desde cualquier parte del programa.

    Se definen utilizando la palabra clave def, seguida del nombre de la función y paréntesis que pueden contener argumentos.

    Los argumentos son valores que se pasan a la función para realizar operaciones específicas que se escriben dentro del cuerpo de la función. 

    Las operaciones deben tener el nombre del argumento para que se efectúen. 

    Las funciones pueden devolver un valor utilizando la palabra clave return.

    Una vez definida una función, se puede llamar (o invocar) utilizando su nombre y pasando los argumentos necesarios.

	Recursión: Las funciones pueden llamarse a sí mismas, lo que permite la implementación de algoritmos recursivos para problemas que se resuelven de manera iterativa.


	Necesitan una serie de cuidados: 

		encapsular: 

			Meter el código que crea los objetos en las definiciones de función.


		generalizar:

			Crear variables genericas en el cuerpo de la función, sin valores determinados para pasarles valores en la llamada.

			Así los objetos son diferentes en dimensiones, formas, aspecto, etc.


		diseño de interfaz:

			Explica como se utiliza la función: 

			¿cuáles son los parámetros? 

			¿Qué hace la función? 

			¿Y cuál es el valor de retorno? 

			Una interfaz es “limpia” si permite a la sentencia llamadora hacer lo que quiere sin lidiar con detalles innecesarios.		

		refactorización:

			Reorganizar un programa para mejorar las interfaces y facilitar la reutilización de código.

	
	Podemos poner en práctica: 

		“encapsulamiento y generalización”.

		1. Comenzar escribiendo un programa pequeño sin definiciones de función.

		2. Una vez que el programa funciona, identifica una parte coherente, encapsula la parte en una función y dale un nombre.

		3. Generaliza la función agregando parámetros apropiados.
	
		4. Repite los pasos 1–3 hasta que tengas un conjunto de funciones eficaces. Copia y pega código que funcione para evitar repetir (y volver a depurar).

		5. Busca oportunidades para mejorar el programa refactorizando. Por ejemplo, si tienes código similar en muchos lugares, considera factorizarlo dentro de una función general apropiada.



|| Operadores
	

	Relacionales:

    	==: Comprueba si dos valores son iguales.

    	!=: Comprueba si dos valores son diferentes.

	    <: Comprueba si el valor de la izquierda es menor que el valor de la derecha.

	    >: Comprueba si el valor de la izquierda es mayor que el valor de la derecha.

	    <=: Comprueba si el valor de la izquierda es menor o igual que el valor de la derecha.

	    >=: Comprueba si el valor de la izquierda es mayor o igual que el valor de la derecha. 


	Lógicos:

	    and: Devuelve True si ambas condiciones son verdaderas.
	    
	    or: Devuelve True si al menos una de las condiciones es verdadera.

	    not: Devuelve la negación de la condición.


	"in": 

		Se utiliza para comprobar si un elemento está presente en una secuencia (como una lista, tupla, cadena o conjunto). 

		Si el elemento está presente, el operador devuelve True; de lo contrario, devuelve False.


	"not in": 

		Es la negación del operador "in". Se utiliza para comprobar si un elemento NO está presente en una secuencia. Si el elemento NO está presente, el operador devuelve True; de lo contrario, devuelve False.


|| Instrucciones
	
	Son declaraciones que componen el código fuente del programa y le indican a Python qué acciones realizar.

	1. Asignación (=): 

		Permiten asignar un valor a una variable. Se utilizan para crear y actualizar variables en Python.


	2. Control de flujo: 

		Permiten controlar el flujo de ejecución del programa y tomar decisiones basadas en condiciones.

		"if": 

			Se utiliza para ejecutar un bloque de código si se cumple una condición.

		"else": 

			Se utiliza junto con "if" para ejecutar un bloque de código si la condición no se cumple.

		"elif": 

			Se utiliza para evaluar múltiples condiciones.

		"while": 

			Se utiliza para crear un bucle que se ejecuta mientras se cumpla una condición.

		"for": 

			Se utiliza para iterar sobre una secuencia (por ejemplo, listas, tuplas, diccionarios).


	3. Funciones (def): 

		Permiten definir funciones, que son bloques de código que pueden ser llamados varias veces en el programa.


	4. "try-except": 

		Se utiliza para manejar excepciones (errores) que puedan ocurrir durante la ejecución del programa.


	5. "import": 

		Se utiliza para importar módulos y bibliotecas en Python.


	6. "return": 

		Se utiliza para devolver un valor desde una función.



|| Métodos (=/=fx nativ ^ =/= clases)

	Son funciones que se aplican a objetos y realizan operaciones específicas en esos objetos. 

	En Python cada tipo de dato puede tener sus propios métodos que se utilizan para realizar acciones específicas relacionadas con ese tipo de dato. Los métodos se invocan utilizando la sintaxis de punto, es decir, objeto.metodo().
	
	1. listas:

        append(): Agrega un elemento al final de la lista.

        insert(): Inserta un elemento en una posición específica de la lista.

        remove(): Elimina la primera aparición de un elemento de la lista.

        pop(): Elimina y devuelve el último elemento de la lista (o un índice específico).

        sort(): Ordena la lista en orden ascendente.

        reverse(): Invierte el orden de los elementos en la lista.


    2. Cadenas (strings):

        upper(): Devuelve una copia de la cadena en mayúsculas.

        lower(): Devuelve una copia de la cadena en minúsculas.

        capitalize(): Devuelve una copia de la cadena con el primer carácter en mayúscula.

        count(): Cuenta cuántas veces aparece un subconjunto de caracteres en la cadena.

        split(): Divide la cadena en una lista de subcadenas utilizando un separador específico.


    3. Diccionarios:

        keys(): Devuelve una vista de las claves del diccionario.

        values(): Devuelve una vista de los valores del diccionario.

        items(): Devuelve una vista de los pares clave-valor del diccionario.

        get(): Devuelve el valor asociado con una clave, o un valor predeterminado si la clave no está presente.


   4. Conjuntos (sets):

        add(): Agrega un elemento al conjunto.

        remove(): Elimina un elemento del conjunto. Si el elemento no existe, se produce un error.

        discard(): Elimina un elemento del conjunto. Si el elemento no existe, no se produce un error.

        union(): Devuelve la unión de dos conjuntos.

        intersection(): Devuelve la intersección de dos conjuntos.


    5. Matemáticos:

        abs(): Devuelve el valor absoluto de un número.

        round(): Redondea un número a un número entero o con un número específico de decimales.

        max(): Devuelve el valor más grande de una secuencia.

        min(): Devuelve el valor más pequeño de una secuencia.



|| FUNCIONES NATIVAS
	
	Las funciones integradas, incorporadas, predefinidas o internas son parte del lenguaje Python y están disponibles para su uso directamente sin necesidad de importar ningún módulo adicional.

	1. Funciones de entrada/salida:

    	print(): Imprime un mensaje en la consola.

    	input(): Lee una entrada del usuario desde la consola.


    2. Funciones de conversión de tipos de datos:

    	int(): Convierte un valor a un número entero.

	    float(): Convierte un valor a un número de punto flotante (decimal).

	    str(): Convierte un valor a una cadena de texto.

	    list(): Convierte un valor a una lista.

	    tuple(): Convierte un valor a una tupla. 


	3. Funciones matemáticas:

	    abs(): Devuelve el valor absoluto de un número.

	    round(): Redondea un número a un número entero o con un número específico de decimales.

	    max(): Devuelve el valor más grande de una secuencia.

	    min(): Devuelve el valor más pequeño de una secuencia.


	4. Funciones de secuencias:

   		len(): Devuelve la longitud de una secuencia (cadena, lista, tupla, etc.).

    	range(): Genera una secuencia de números enteros.


   	5. Funciones de manejo de listas:

    	sorted(): Ordena una lista.

    	sum(): Devuelve la suma de los elementos de una lista.



|| Estructuras de control: 

	1. if-elif/else (si, entonces/sino): 

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


	4. Dictionaries (mapa, hash): 

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



|| Metodos 
	
	Son funciones que están asociadas a objetos específicos que están definidos dentro del cuerpo de una clase, por ejemplo: def nombre_del_metodo(self, otros_argumentos).

	"self" es la instancia del objeto para poder usar los metodos. 

	A diferencia de las funciones, que son independientes y se pueden invocar de manera global, los métodos están vinculados a un objeto en particular y pueden acceder y manipular los datos dentro de ese objeto.


	Los métodos son funciones que están definidas dentro de una clase. Cada instancia (objeto) de esa clase puede llamar y ejecutar los métodos asociados.

    Tienen acceso a los datos internos de un objeto a través del parámetro self, que representa la propia instancia del objeto.

    Pueden realizar acciones específicas o realizar operaciones en los datos de un objeto.

    Pueden modificar los datos internos del objeto o devolver resultados basados en esos datos.

    Se definen dentro de la clase utilizando la sintaxis def nombre_del_metodo(self, otros_argumentos).


    Usos de los metodos: 

    	1. Manipulación de datos del objeto: 

    		Los métodos pueden acceder a los atributos y datos del objeto en el que están definidos, lo que permite realizar operaciones y modificaciones específicas en esos datos.

    	2. Encapsulación y ocultamiento de datos:

    		Los métodos pueden controlar el acceso a los atributos de un objeto y garantizar que solo se modifiquen o accedan de manera controlada.

    	3. Implementación de comportamiento específico del objeto: 

    		Los métodos definen el comportamiento de un objeto y permiten que responda a diferentes acciones o eventos específicos.

    	4. Interacción entre objetos: 

    		Los métodos de un objeto pueden invocar métodos de otros objetos para lograr una interacción y comunicación entre ellos.

    	5. Reutilización de código:

    		Los métodos pueden definirse una vez en una clase y luego ser invocados por múltiples instancias de ese objeto, lo que promueve la reutilización de código y mejora la legibilidad y mantenibilidad del programa.



|| Clases

	Son una parte fundamental de la programación orientada a objetos (POO). 

	Una clase es una plantilla o un plano que define la estructura, los atributos y los comportamientos de los objetos que se crean a partir de ella.

	Una clase es una estructura de programación que encapsula datos (atributos) y funciones (métodos) relacionadas en un solo objeto.

    Los objetos son instancias de una clase. Cada objeto creado a partir de una clase tiene sus propios atributos y puede ejecutar los métodos definidos en esa clase.

    Las clases se definen utilizando la palabra clave class, seguida del nombre de la clase y dos puntos. El cuerpo de la clase contiene la definición de atributos y métodos.

    Los atributos son variables que almacenan datos asociados a un objeto específico.
    Los métodos son funciones que están definidas dentro de una clase y se aplican a los objetos creados a partir de esa clase.

    Los objetos creados a partir de una clase tienen acceso a los métodos y atributos de esa clase utilizando la sintaxis de punto (objeto.metodo() o objeto.atributo).


    Usos de los metodos:

    	1. Modelado de objetos del mundo real: 

    		Las clases permiten crear objetos que representan entidades del mundo real y encapsulan sus atributos y comportamientos. Por ejemplo, una clase Persona puede tener atributos como nombre, edad y métodos como saludar.

    	2. Reutilización de código: 

    		Las clases permiten definir una estructura común y crear múltiples objetos basados en esa estructura. Esto promueve la reutilización de código y evita la repetición innecesaria.

    	3. Abstracción y modularidad: 

    		Las clases proporcionan una abstracción de datos y comportamientos complejos, lo que facilita la comprensión y el manejo del código.

    	4. Encapsulación y ocultamiento de datos: 

    		Las clases permiten controlar el acceso a los datos y protegerlos mediante la ocultación de información interna. Esto ayuda a mantener la integridad y la consistencia de los datos.

    	5. Herencia y polimorfismo: 

    		Las clases pueden heredar atributos y métodos de otras clases, lo que permite la creación de jerarquías y relaciones entre objetos. Además, el polimorfismo permite que diferentes objetos respondan de manera diferente a los mismos métodos. 


    Herencia: 

    	Permite que una clase (llamada clase derivada o subclase) herede atributos y métodos de otra clase (llamada clase base o superclase).

    	La clase derivada adquiere todas las características de la clase base y puede agregar sus propios atributos y métodos específicos.

    	Permite establecer relaciones jerárquicas entre las clases, donde las clases más especializadas (subclases) pueden heredar comportamientos y características de clases más generales (superclases).

    	Facilita la reutilización de código y la organización de las clases de manera más coherente.


    Polimorfismo: 

    	Se refiere a la capacidad de diferentes clases de responder a un mismo mensaje o llamada de método de manera diferente.

    	Esto significa que objetos de diferentes clases pueden usar el mismo nombre de método y realizar acciones distintas según su propia implementación.

    	Permite que un mismo código funcione con diferentes clases sin tener que preocuparse por la implementación específica de cada clase. Esto mejora la flexibilidad y la modularidad del código.






