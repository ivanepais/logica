# Abstracción algorítmos soluciones

|| Una introducción a la solución de problemas
	
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


	Métodos incorporados: 

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



|| Decodificando JS-CSS-HTML: 
	
	Ejecución JS: 

		De arriba hacia abajo. 

		Botones, Eventos, Funciones


	DOM: 

		Creación elemento HTML. 

		Modificación. 

		Agregación. 


	Código: 

		Unidad, unión, propósito. 



|| Decodificando frameworks

	Un Framework tiene la siguiente estructura: 

		Vista (elementos interactivos, html, etc.)

		Lógica de negocio (Componentes, controladores, dependencias)

		Base de Datos


	Para poder leerlos y comprenderlos debemos separar su estructura inalterable: 

		código estructural del fremework que necesita para funcionar, ya sea, importaciones, propiedades, etc. 

	Y debemos concentrarnos en los objetos o componetes que necesitan lógica para funcionar: 

		Objeto, grupo de objetos, variables, clases, condicionales/acciones, funciones/métodos, operaciones/cálculo, parámetros, tipo de resultado, dependencias/inyecciones.  




|| Una introducción a un plan de desarrollo

	La planificación de un software evita problemas posteriores que pueden surgir al combinar código, funciones, interfaces, etc. 

	Tendríamos que factorizar todo el código de golpe buscando que código sea más general. 


	Conceptos: 

		Interfaz: 

			Funciones que interactúan entre si. 


		Función: 

			Hace una acción determinada o fija pero podemos cambiar esto para que varie y se adapte a cualquier cosa.

			Generalización: 

				Agregar parametros que generalizen y describan una acción no determinada, 

				Se adaptará a cualquier valor le asignemos al parámetro.  

		Encapsulamiento: 

			Envolver código en una función que describan acciones y poder reutilizarlas. 


	Diseño de interfaz: 

		Cómo se utilizará la función: 

			Cuáles son sus parámetros. 

			Qué hace la función.  

			Valor de retorno. 

		Una función es "limpia" si permite a la llamada ejecutar la acción sin tener que conocer detalles innecesarios. 


	Proceso para escribir programas: 

		Encapsulamiento y generalización: 
 			
 			1. Escribir el programa sin defiinir funciones. 

 			2. Cuando funciona, identificar la parte coherente; encapsularla en una función y darle un nombre. 

 			3. Generalizarla agregando parámetros. 

 			4. Repetir paso 1 y 3 hasta tener un conjunto de funciones eficacez. 

 			5. Refactorización: 

 				Si tenemos código similar en muchos lugares, refactorizarlo dentro de una función general apropiada. 

 		Existen procesos alternativos más eficaces, pero ayuda a dividir un programa en funciones, diseñarlo y progresar. 



|| Un Planteo más efectivo: Debug

	Código:
	
		Data 

		Control 

		Return

		Func

		Obj

		Design Patt

		Abs e Interf

		Excepciones

		Concurrencia

		Lectura y Escritura

		Cierre


	Debug:

		Print

		Incremental

		Guardián

		Tipos Errores

		Contaminación Ámbiente

		Empezar por el error, no por el flujo

		Breakpoints

		Logging

		Stack Trace

		Test

		Qué debería hacer

		Qué programar

	
	Algoritmos:

		Entrada, operación, salida

			param, oper. param, var temp, return

		Finito, definido, efectividad


	Mat:
		
		Representación de problemas


	Log:

		T, F


	Tipos de Errores: 
	
	Errores Sintácticos: 

		Son errores en la estructura del código que impiden que el programa se compile o se ejecute. 

		Ejemplo: falta de un punto y coma en lenguajes como C++ o Java.
	

	Errores de Ejecución: 

		Ocurren durante la ejecución del programa y pueden causar su detención inesperada. 

		Ejemplo: división por cero.
	

	Errores Lógicos: 

		El programa se ejecuta, pero no produce el resultado esperado debido a un fallo en la lógica del código.


	Herramientas de Debugging:

	Depuradores (Debuggers): 

		Son herramientas que permiten al programador ejecutar el código paso a paso, inspeccionar variables y controlar el flujo del programa. 

		Ejemplos: GDB para C/C++, pdb para Python.
	

	Impresiones de Log (Logging):	

		Añadir mensajes en el código para imprimir el estado de variables o la ejecución de ciertas partes del código.
	

	Entornos de Desarrollo Integrados (IDEs): 

		Muchos IDEs como Visual Studio, Eclipse o PyCharm tienen herramientas integradas de debugging.


	Proceso para Debuggear: 

		Reproducción del Error:

			Primero, se debe ser capaz de reproducir el error consistentemente.
		

		Diagnóstico: 

			Utilizar herramientas y técnicas para identificar dónde y por qué ocurre el error.
		

		Corrección: 

			Modificar el código para corregir el error.
		

		Prueba: 

			Verificar que la corrección resuelve el problema y no introduce nuevos errores.


	Técnicas de Debugging:

		Breakpoint (Punto de Interrupción): 

			Detener la ejecución del programa en una línea específica para inspeccionar el estado.
		

		Step Into / Step Over / Step Out: 

			Controlar el flujo del programa entrando en funciones (Step Into), ejecutando una línea completa sin entrar en funciones (Step Over) o saliendo de una función (Step Out).
		

		Watch Variables: 

			Monitorear el valor de las variables mientras se ejecuta el programa.
		

		Stack Trace: 

			Ver el historial de llamadas a funciones en el punto en que ocurrió un error.


	Buenas Prácticas:

		Código Limpio: 

			Escribir código legible y bien estructurado facilita el debugging.


		Comentarios y Documentación:

			Documentar el código ayuda a entender mejor su funcionamiento.


		Pruebas Unitarias: 

			Ayudan a detectar errores temprano en el proceso de desarrollo.


		Versionado de Código:

			Utilizar sistemas de control de versiones (como Git) permite revertir cambios y comparar versiones del código


	Manejo de errores: 

		Excepción: 

			Un evento anómalo que puede ocurrir durante la ejecución de un programa.
		

		Lanzar (Throw): 

			Generar una excepción cuando ocurre un error.
		

		Capturar (Catch): 

			Procesar una excepción cuando es lanzada.
		

		Bloque try: 

			Contiene el código que puede generar una excepción.
		

		Bloque except (o catch):

			Contiene el código para manejar la excepción.
		

		Bloque finally: 

			Contiene el código que se ejecutará siempre, ocurra o no una excepción, típicamente utilizado para liberar recursos.


	Pruebas Unitarias: 

		Ayuda a asegurar que las diferentes partes de un programa funcionen correctamente de manera aislada. 

		Son pruebas automatizadas que validan el comportamiento de una "unidad" individual de código.

		Una unidad puede ser una función, un método o una clase. 

		El objetivo es verificar que cada unidad de código funcione correctamente de manera independiente.


		Automatizadas: 

			Se ejecutan automáticamente, generalmente como parte de un proceso de integración continua.


		Aisladas: 

			Prueban unidades de código en aislamiento, sin depender de otros componentes del sistema.


		Repetibles: 

			Deben producir los mismos resultados cada vez que se ejecutan.


		Rápidas: 

			Deberían ser rápidas de ejecutar para no retrasar el ciclo de desarrollo.


		pytest: 

		Herramienta poderosa y flexible que simplifica la escritura de pruebas unitarias y ofrece características adicionales como fixtures, parametrización y una sintaxis más sencilla.

		```python

		# Archivo de pruebas (test_math_operations.py)
		import pytest
		from math_operations import add

		def test_add():
		    assert add(1, 2) == 3
		    assert add(-1, 1) == 0
		    assert add(-1, -1) == -2
		    assert add(0, 0) == 0

		```

		Ejecutar las pruebas con pytest:

		```python

		pytest test_math_operations.py

		```


	Parametrización:
	
		Técnica utilizada para aumentar la eficiencia y la cobertura de los casos de prueba al permitir que un solo script de prueba se ejecute con múltiples conjuntos de datos diferentes. 

		Esto es especialmente útil en pruebas automatizadas, donde puede ser necesario verificar la funcionalidad del software con una variedad de entradas sin tener que escribir un script separado para cada conjunto de datos.

		Define parámetros variables dentro de un caso de prueba y luego ejecutar ese caso de prueba varias veces con diferentes valores para esos parámetros.

		Esto permite probar diferentes escenarios y entradas utilizando el mismo caso de prueba base.

		
		Reusabilidad: 

			Permite reutilizar los mismos casos de prueba con diferentes datos, reduciendo la redundancia en los scripts de prueba.


		Cobertura: 

			Aumenta la cobertura de prueba al permitir la ejecución de casos de prueba con múltiples conjuntos de datos.


		Eficiencia: 

			Reduce el esfuerzo manual requerido para crear y mantener numerosos casos de prueba.


		Flexibilidad: 

			Facilita la adaptación de casos de prueba a diferentes escenarios sin modificar el código de prueba.	


		Ejemplo con pytest: 


			```python

			pip install pytest

			```

			Crear Script de Prueba: 

				Usando la función 'add' que queremos probar con diferentes conjuntos de datos.

				```python

				# math_operations.py
				def add(a, b):
				    return a + b

				```

				Script de prueba parametrizado para 'add'. 

				```python

				# test_math_operations.py
				import pytest
				from math_operations import add

				# Parametrización de casos de prueba con pytest
				@pytest.mark.parametrize("a, b, expected", [
				    (1, 2, 3),
				    (4, 5, 9),
				    (-1, 1, 0),
				    (0, 0, 0),
				    (1.5, 2.5, 4.0)
				])
				def test_add(a, b, expected):
				    assert add(a, b) == expected

				```


			Ejecutar Pruebas: 

				Ejecutar el archivo de prueba desde la línea de comandos.

				```python

				pytest test_math_operations.py

				```

				Función add: 

					Una simple función que suma dos números.


				Decorador @pytest.mark.parametrize: 

					Este decorador se utiliza para definir los parámetros de la prueba. 

					Se especifican los nombres de los parámetros y una lista de tuplas con los valores para cada ejecución.


				Caso de Prueba test_add: El caso de prueba toma tres argumentos: 

					a, b, y expected.

					Estos argumentos se sustituyen con los valores definidos en la lista del decorador, y la prueba se ejecuta para cada conjunto de valores.


	Stack Trace: 

		Herramienta de diagnóstico para rastrear la secuencia de llamadas a funciones o métodos que llevaron a un error o excepción en un programa.

		Proporciona una lista detallada de los puntos del programa (normalmente líneas de código) que fueron ejecutados antes de que ocurriera el fallo. 

		Esta información es crucial para identificar y solucionar problemas en el código.

		Es una lista que muestra las llamadas de funciones o métodos que están activas en la pila de ejecución en el momento en que ocurre un error. 

		Cada entrada en el stack trace incluye:

			Nombre del archivo de código fuente.
			
			Número de línea en el archivo.
			
			Nombre de la función o método que fue llamado.
			
			(Opcionalmente) Información adicional, como variables locales y sus valores.


		Funcionamiento: 

			Cuando un programa se ejecuta, las llamadas a funciones se almacenan en una estructura de datos llamada "pila de llamadas" (call stack). 

			Cada vez que una función se llama, se agrega un marco de pila (stack frame) a la pila. 

			Este marco contiene la información sobre la función, incluyendo sus parámetros y la ubicación en el código. 

			Cuando la función termina, su marco de pila se elimina (o "desapila").

			Si ocurre un error o una excepción, el programa puede generar un stack trace, que muestra el estado actual de la pila de llamadas. 

			Esto permite a los desarrolladores ver exactamente qué funciones estaban en ejecución y en qué orden cuando se produjo el problema.


		Ejemplo de Stack Trace: 


			Código: 

			```python

			def function_a():
			    function_b()

			def function_b():
			    function_c()

			def function_c():
			    raise Exception("Something went wrong")

			try:
			    function_a()
			except Exception as e:
			    import traceback
			    print("An error occurred:")
			    traceback.print_exc()

			```


			Salida: 

			```
			An error occurred:
			Traceback (most recent call last):
			  File "example.py", line 11, in <module>
			    function_a()
			  File "example.py", line 2, in function_a
			    function_b()
			  File "example.py", line 5, in function_b
			    function_c()
			  File "example.py", line 8, in function_c
			    raise Exception("Something went wrong")
			Exception: Something went wrong

			```

			El stack trace anterior muestra la secuencia de llamadas que llevó a la excepción:

			    Línea 11: function_a() fue llamada desde el módulo principal.

			    Línea 2: Dentro de function_a, se llamó a function_b.

			    Línea 5: Dentro de function_b, se llamó a function_c.

			    Línea 8: En function_c, se levantó una excepción con el mensaje "Something went wrong"



|| Planteo Matemático

	Texto: 

		ideas, unidad, unión, lógica. 


	Lenguage Matemático: 

		Variables: 

			simbolos


		asignación: 

			expresión matemática


		R3: 

			Siempre y cuando las variables se relacionan directa o indirectamente al plantear los datos.

			Directa o inversa.

			Se aplican a reglas simples y compuestas.

			Ejemplos:

				Relación entre dias y trabajo (unidades/metros).

				Dias 		Trabajo
				  + 			+

				Entre más dias trabajados, más producimos.


			1. Simples: 

			Tienen dos variables.

			Directas:

			Velocidad: distancia y tiempo: 

				50 km/h

				Distancia (km) 	Tiempo (hr)
					50 			  1h
					100 		  2h

				Entre más distancia más tiempo se tarda en recorrer.

			Inversas:

  				Si resolvemos usando la multiplicación y división, la incognita debe quedar en el numerador, invirtiendo la fracción; el denominador pasa a dividir.

  			Ej: relación pintar/trabajar

  				personas 	horas
  					2 		 36
  					6 		 x

  						x/36

  				x = 2*36/6 = 12


  			2. Compuestas:

			Tienen más de dos variables, suelen estar después del número.

			Con la incognita o pregunta podemos clasificar la relación con las variables restantes. 

			Comparamos la relación de cada variables con la incognita.

			Dejamos a un lado la x y multiplicamos las otras proporciones. Al final despejamos x, usando la regla proporcional.

			Directa: 

			Resolvemos las fracciones como aparecen.

			Indirecta: 

			Invertimos las fracciones de las variables, menos la incognita.


			Ej: cuánto gastan los grifos?

			grifos 		horas 		litros
			  9 		 40 		 200
			  15 		 9 			  x

			  g+, l+  y  h-, l-: es una relación directa.

			  200/x = 9*40/15*9

			  200/x = 8/3

			  200*3 = x*8

			  200*3/8 = x 

			  75 = x


			Ej: cuántos dias para construir un muro?

			obreros     horas 		dias
			  4 		 7			 3
			  2 		 6 			 x

			  o-, d+  y  h-, d+: es una relación indirecta.

			  3/x = 2*6/4*7

			  3/x = 3/7

			  3*7 = x*3

			  3*7/3 = x 

			  21/3 = x

			  7 = x


		Proporcionalidad: 

			Razón:

				Cociente entre dos numeros o cantidades o cosas comparables y/o relacionadas.

				herramientas: 16
				trabajadores: 8

				Ej: 8/16 -> 1/2 (simplificado)

				16/8 = 2

				Comparamos el numerador contra un denominador, se lee la cantidad que constrasta uno contra el otro.

				"los trabajadores son la mitad que las herramientas"

				"Las herramientas son el doble que los trabajadores"


			Proporción:

				Igualdad entre dos razones.

				Su cociente se mantiene constante. 

				razón 1: empleados/lapiceras

				razón 2: debe ser equivalente.

				1/4 = 2/8 

				"Si cada 1 empleado hay 4 lapiceras, cada 2 empleados habrá 8 lapiceras"

				a/b = c/d

				a*d = b*c 


			45.000 espectadores, por cada 2 aficionados del equipo visitante hay 7 aficionados del equipo local. 

				Proporcionalidad: 

				locales/visitantes: x/y
				espectadores: 45.000 = 2/7 

				Total: x+y = 45.000

				De cada equipo: x/y = 2/7 


		Caso particular, formula particular:

			Caso particular: 

			Una tienda hace un descuento del 15% para los productos con un precio de $2000. 
	
			Fórmula particular:

				Descuento = 15%*2000 

					0.15*2000 = 300


		Generalización: caso general, formula general

			El descuento de un producto, sea x el valor del porcentaje de descuento multiplicado por el precio de un producto. 

				Descuento = %descuento*precio 

			Fórmula general: 

				Descuento = x*precio

				D = x*p 


		Idea general del objeto para transformarla en fórmulas, principios, propiedades o definiciones.


		Lógica implícita que debemos descubrir. 


	Pseudo Código: 

		Planteno general


	Código: 

		Funciones, estructuras, etc. 



|| Matemáticas

	Conjunto de herramientas como cualquier otra de la vida real. Una suma o resta, una ecuación, una derivada o una integral, se usan en determinadas situaciones. 

	Son creadas mediante la abstracción, tomando un objeto de la vida real, llevándolo al mundo de las ideas o conceptos; quitandoles su esencia o idea general del objeto para transformarla en fórmulas, principios, propiedades o definiciones.  

	O al revés, buscamos soluciones en el mundo de las ideas para resolver un problema del mundo real. 

	La tecnica consiste en tomar un problema o caso individual con variables determinadas y llevarlo a un caso general para crear una fórmula que acepte cualquier variable.	

	Usamos símbolos (números, letras) para referirnos de manera abstracta a los objetos reales. Las generalizaciones o fórmulas deben ser intuitivas, usando letras que se ajusten a lo que haga referencia. 

	En los problemas hay una lógica implicita que debemos descrubrir y resolver con distintas herramientas matemáticas, combinaciones entre operaciones y elementos.  

		Caso particular: 

			Una tienda hace un descuento del 15% para los productos con un precio de $2000. 
	
			Fórmula particular:

				Descuento = 15%*2000 

					0.15*2000 = 300
					
		Generalización: 

			El descuento de un producto, sea x el valor del porcentaje de descuento multiplicado por el precio de un producto. 

				Descuento = %descuento*precio 

			Fórmula general: 

				Descuento = x*precio

				D = x*p 


	Planteos: 

		Implica la formulación de preguntas que requieren soluciones a través del uso de conceptos y técnicas matemáticas.


	Componentes: 

		Contexto del Problema: 

			Se refiere a la situación o escenario en el cual se presenta el problema. 

			Este contexto puede ser realista (basado en la vida real) o abstracto (puramente matemático).

		
		Condiciones y Restricciones: 

			Son las reglas y limitaciones que deben cumplirse al resolver el problema. 

			Pueden incluir ecuaciones, desigualdades, límites de variables, etc.


		Objetivos del Problema: 

			Se especifica qué se busca encontrar o demostrar. 

			Puede ser un valor numérico, una función, una prueba lógica, entre otros.


	Pasos: 

		Identificación del Problema:

		    Descripción: 

		    	Determinar qué se quiere resolver o investigar.

		    Ejemplo: 

		    	"¿Cómo se puede determinar el área de una figura geométrica irregular?"


		Formulación del Problema:

		    Descripción: 

		    	Expresar el problema de manera clara y precisa, utilizando lenguaje matemático cuando sea posible.

		    Ejemplo: 

		    	"Dada una figura geométrica irregular definida por las coordenadas de sus vértices, calcular el área total."


		Definición de Variables:

		    Descripción: 

		    	Identificar y definir las variables relevantes del problema.

		    Ejemplo: 

		    	"Sea (xi,yi) para i=1,2,...,n las coordenadas de los vértices de la figura."


		Establecimiento de Condiciones y Restricciones:

		    Descripción: 

		    	Precisar las condiciones que deben cumplirse y las restricciones que limitan las soluciones posibles.

		    Ejemplo: 

		    	"Las coordenadas deben estar en el plano cartesiano y la figura debe ser cerrada."


		Desarrollo de Estrategias y Métodos:

		    Descripción: 

		    	Seleccionar las técnicas y métodos matemáticos adecuados para abordar el problema.

		    Ejemplo: 

		    	"Usar el método del polígono simple y aplicar la fórmula del área de un polígono basada en las coordenadas de sus vértices."


		Resolución del Problema:

		    Descripción: 

		    	Aplicar las estrategias y métodos seleccionados para encontrar la solución.
		   
		    Ejemplo: 

		    	"Calcular el área usando la fórmula..
		   

		Verificación y Validación:

		    Descripción: 

		    	Revisar y comprobar la solución obtenida para asegurar su corrección y consistencia.

		    Ejemplo: 

		    	"Verificar la precisión del cálculo comprobando con un software de geometría computacional."


		Comunicación de la Solución:

		    Descripción:

		    	 Explicar y presentar la solución de manera clara y comprensible.

		    Ejemplo: 

		    	"Presentar los pasos y el resultado final del cálculo del área en un informe detallado.	


	Ejemplos: 	

		Problemas de Optimización:

		    Contexto: 

		    	"Una empresa desea minimizar los costos de producción."

		    Formulación: 

		    	"¿Cómo se pueden ajustar las variables de producción para minimizar los costos dados los costos variables y fijos?"
		    
		    Variables:

		    	 x1,x2,...,xn(unidades de productos), C(x1,x2,...,xn) (función de costo).

		    Método: 

		    	Aplicar técnicas de programación lineal o no lineal.

		Problema Geométrico:

		    Contexto: 

		    	"Se necesita determinar la distancia más corta entre dos puntos en un plano con obstáculos."

		    Formulación: 

		    	"¿Cuál es la ruta más corta entre los puntos A y B evitando los obstáculos?"
		    
		    Variables: 

		    	Coordenadas de los puntos y obstáculos.
		    
		    Método: 

		    	Usar algoritmos de búsqueda de caminos como A* o Dijkstra.


		Problema de Probabilidad:

		    Contexto: 

		    	"Determinar la probabilidad de un evento en un experimento aleatorio."

		    Formulación: 

		    	"¿Cuál es la probabilidad de obtener al menos un seis en cuatro lanzamientos de un dado?"

		    Variables: 

		    	Número de lanzamientos, número de éxitos.

		    Método: 

		    	Calcular usando la teoría de probabilidad y combinatoria.


	Consejos: 

		Usar Lenguaje Matemático Apropiado:

		    Descripción: 

		    	Emplea notación y terminología matemática correcta y apropiada para el nivel de dificultad del problema.

		    Ejemplo: 

		    	Utiliza símbolos como ∀ (para todo), ∃ (existe), ∈∈ (pertenece a), etc., cuando sea relevante.


		Contextualizar el Problema:

		    Descripción: 

		    	Ofrece un contexto o una historia que haga que el problema sea interesante y relevante. 

		    	Esto puede ayudar a motivar a los estudiantes y hacer que el problema sea más accesible.
		    
		    Ejemplo: 

		    	"Una empresa de transporte quiere minimizar el costo de enviar productos desde sus almacenes a diferentes tiendas. 

		    	¿Cómo deben asignar las rutas de envío para minimizar el costo total?"


		Proveer Ejemplos y Contraejemplos:

		    Descripción:

		    	Da ejemplos claros y específicos que ilustren el problema y contraejemplos que ayuden a entender las restricciones.

		    Ejemplo: 

		    	"Si el costo de envío es 3x+2y, un ejemplo sería enviar 10 unidades de producto A y 5 unidades de producto B, con un costo de 3(10) + 2(5) = 40."


		Incluir Diagramas y Gráficos:

		    Descripción: 

		    	Utiliza diagramas, gráficos o tablas para ilustrar el problema, especialmente si es geométrico o involucra datos complejos.

		    Ejemplo: 

		    	Un gráfico de barras que muestre los costos de producción en diferentes fábricas o un diagrama que represente la disposición de una figura geométrica.


		Formular Preguntas Desafiantes:

		    Descripción: 

		    	Asegúrate de que el problema plantee un desafío adecuado para el nivel de los estudiantes o investigadores. 

		    	No debe ser ni demasiado fácil ni imposible de resolver.

		    Ejemplo: 

		    	"Determina la intersección de dos funciones cuadráticas f(x)=x^2−4x+3y g(x)=−x^2+2x+1."


		Fomentar la Reflexión y el Análisis Crítico:

		    Descripción: 

		    	Diseña problemas que requieran que los estudiantes reflexionen y analicen críticamente, promoviendo una comprensión más profunda.

		    Ejemplo: 

		    	"¿Cómo cambiaría la solución si una de las restricciones del problema fuera diferente?".
	

		Ejemplo: 

			Un jardinero quiere cercar un jardín rectangular junto a un río. 

			El lado del jardín que está junto al río no necesita cerca. 

			Si el jardinero tiene 100 metros de cerca disponibles, ¿cuáles son las dimensiones del jardín que maximizarán el área?

		    Contexto: 

		    	Maximización del área de un jardín.

		    Variables: 

		    	Sea x el ancho del jardín (perpendicular al río) e y el largo del jardín (paralelo al río).

		    Condiciones: 

		    	Solo tres lados necesitan cerca. 

		    	El total de cerca disponible es 100 metros.

		    Ecuación: 

		    	La longitud de cerca usada es 2x+y=100

		    Función Objetivo: 

		    	Maximizar el área A=x⋅y.


		Pasos de Solución:

		    Expresar yy en términos de x: y=100−2x.

		    Área en función de x: A(x)=x(100−2x)=100x−2x^2.

		    Derivar y encontrar el máximo:
		        
		        Derivada: A′(x)=100−4x

		        Igualar a cero: 100−4x=0 → x=25


		    Calcular y: 

		    y=100−2(25)=50.
		    
		    Conclusión: 

		    	Las dimensiones que maximizan el área son 25 metros de ancho y 50 metros de largo.			


	Solución: 

		Problema: 

			Un rectángulo tiene un perímetro de 40 metros. 

			Si la longitud del rectángulo es el doble de su ancho, ¿cuáles son las dimensiones del rectángulo?
		

		Paso 1: Leer y Comprender el Problema

		    Perímetro del rectángulo: 

		    	40 metros.

		    Relación entre longitud y ancho: 

		    	longitud es el doble del ancho.


		Paso 2: 

			Identificar los Datos y las Incógnitas

		    Ancho: 

		    	w (incógnita).

		    Longitud: 

		    	l=2w (incógnita en términos de w).

		    Perímetro: 

		    	2l+2w=40.


		Paso 3: 

			Visualizar el Problema

		    Dibuja un rectángulo y etiqueta las dimensiones:
		        
		        Ancho: w.

		        Longitud: 2w.


		Paso 4: Formular un Plan

		    Utilizar la fórmula del perímetro del rectángulo para encontrar w.


		Paso 5: Ejecutar el Plan

		    Perímetro del rectángulo:
		    
		    	2l+2w=40
		    	

		    Sustituir l=2w:

		    	2(2w)+2w=40

		    	4w+2w=40

		    	6w=40

		    	w=40/6​

		    	w=20/3​

		    	w=6.6 metros


		    Calcular la longitud ll:

		    	l=2w =2×6.6‾ = 13.3‾ metros
		   

		Paso 6: Revisar y Verificar la Solución

		    Verificar el perímetro con las dimensiones obtenidas:

		    	2l+2w = 2(13.3‾) + 2(6.6‾) =26.6‾ + 13.3‾= 40 metros
		    
		    La solución es consistente con las condiciones del problema.


		Paso 7: Reflexionar sobre el Problema y la Solución

		    El proceso fue metódico y cada paso llevó lógicamente al siguiente.

		    Reflexión: 

		    	Plantear problemas similares para reforzar la comprensión de relaciones lineales y perímetros.



|| Investigación


	Pensamiento Científico: 

		Enfoque sistemático y estructurado para comprender y explorar el mundo natural y los fenómenos que ocurren en él. 

		Este tipo de pensamiento se basa en una serie de principios y métodos que aseguran que las conclusiones sean fiables, verificables y reproducibles.


		1. Observación: 

			Todo comienza con la observación de fenómenos naturales. 

			Estas observaciones pueden ser cualitativas (descripciones) o cuantitativas (mediciones).


		2. Pregunta: 

			A partir de las observaciones, se plantean preguntas específicas sobre los fenómenos observados. 

			Estas preguntas suelen ser claras y precisas.


		3. Hipótesis: 

			Se formula una hipótesis, que es una posible explicación o respuesta a la pregunta planteada. 

			Una buena hipótesis es falsable, lo que significa que puede ser probada y potencialmente refutada mediante experimentos o observaciones adicionales.


		4. Experimentación: 

			Para probar la hipótesis, se diseñan y realizan experimentos controlados. 

			Estos experimentos deben ser reproducibles por otros científicos para verificar los resultados.


		5. Recopilación y Análisis de Datos: 

			Durante los experimentos, se recopilan datos que luego se analizan de manera objetiva para determinar si apoyan o refutan la hipótesis.


		6. Conclusiones: 

			Basado en el análisis de los datos, se extraen conclusiones sobre la validez de la hipótesis. 

			Si la hipótesis es refutada, se formula una nueva hipótesis y se repite el proceso.


		7. Publicación y Revisión por Pares:

			Los resultados y conclusiones se publican en revistas científicas y son revisados por otros expertos en el campo. 

			Este proceso de revisión por pares es crucial para validar la investigación.


		8. Teoría Científica: 

			Con el tiempo, si una hipótesis es repetidamente confirmada y apoyada por múltiples líneas de evidencia, puede contribuir al desarrollo de una teoría científica. 

			Las teorías científicas son explicaciones robustas y bien sustentadas de aspectos del mundo natural que han sido confirmadas a través de repetidos experimentos y observaciones.	


	Métodos Científicos: 

		Se pueden emplear dependiendo del tipo de investigación y del campo de estudio. 

		Aunque todos comparten un núcleo común de pasos básicos, como observación, formulación de hipótesis, experimentación y análisis, los métodos específicos pueden variar.


		1. Método Experimental:

		    Descripción: 

		    	Implica la manipulación deliberada de una variable independiente para observar su efecto sobre una variable dependiente.
		    
		    Pasos:

		        Formulación de hipótesis
		        
		        Diseño del experimento (control de variables)
		        
		        Recolección de datos
		        
		        Análisis de resultados
		        
		        Conclusión y verificación
		    
		    Ejemplo: 

		    	Un estudio para determinar si un nuevo fármaco reduce la presión arterial comparado con un placebo.


		2. Método Observacional

		    Descripción: 

		    	Se basa en la observación de sujetos en su entorno natural sin intervención del investigador.
		    
		    Pasos:
		        
		        Planteamiento del problema
		        
		        Observación y recolección de datos
		        
		        Análisis de datos

		        Formulación de hipótesis basadas en la observación
		   
		    Ejemplo: 

		    	Estudiar el comportamiento de animales en su hábitat natural.


		3. Método Descriptivo

		    Descripción: 

		    	Busca describir las características de un fenómeno o grupo de sujetos sin investigar las relaciones causales.
		    
		    Pasos:

		        Identificación del objeto de estudio

		        Recolección de datos (encuestas, entrevistas, observaciones)

		        Análisis y presentación de los datos descriptivos
		    
		    Ejemplo: 

		    	Encuestas para describir las preferencias de los consumidores sobre un producto.


		4. Método Comparativo

		    Descripción: 

		    	Involucra la comparación de dos o más grupos en términos de una o varias variables para identificar similitudes y diferencias.
		    
		    Pasos:

		        Selección de grupos a comparar
		        
		        Medición de variables
		        Análisis comparativo de los datos
		    
		    Ejemplo: 

		    	Comparar el rendimiento académico de estudiantes de diferentes métodos de enseñanza.


		5. Método Correlacional

		    Descripción: 

		    	Busca determinar la relación entre dos o más variables, sin implicar causalidad.

		    Pasos:

		        Identificación de las variables

		        Recolección de datos
		        Cálculo de coeficientes de correlación

		        Interpretación de los resultados

		    Ejemplo: 

		    	Analizar la relación entre el tiempo de estudio y las calificaciones de los estudiantes.


		6. Método Histórico

		    Descripción: 

		    	Utiliza fuentes y registros del pasado para investigar fenómenos históricos y su desarrollo a lo largo del tiempo.
		   
		    Pasos:

		        Formulación del problema de investigación
		        
		        Revisión de fuentes primarias y secundarias
		        Análisis crítico de las fuentes

		        Interpretación y síntesis de la información histórica
		    
		    Ejemplo: 

		    	Estudiar el impacto de un evento histórico específico en la evolución de una sociedad.


		7. Método de Estudio de Caso

		    Descripción: 

		    	Implica el análisis detallado y profundo de un solo caso o un número reducido de casos.

		    Pasos:

		        Selección del caso
		        
		        Recolección de datos (observaciones, entrevistas, documentos)
		       
		        Análisis y descripción detallada del caso
		    
		    Ejemplo: 

		    	Un estudio detallado sobre la implementación de una nueva tecnología en una empresa específica.

		
		8. Método de Modelado

		    Descripción: 

		    	Usa modelos matemáticos, físicos o computacionales para simular y entender fenómenos complejos.
		    
		    Pasos:

		        Definición del modelo
		        
		        Recolección de datos para alimentar el modelo
		        
		        Simulación del fenómeno
		        Análisis y validación del modelo

		    Ejemplo: 

		    	Modelar el cambio climático utilizando simulaciones computacionales



	Aproximación: 

		Enfoque iterativo y progresivo para resolver problemas científicos y entender fenómenos complejos. 

		Este método implica la generación y refinamiento continuo de hipótesis y modelos basados en la acumulación gradual de datos y evidencia.
		

		Componentes Clave de la Aproximación

		    Iteratividad: 

		    	El proceso de aproximación es iterativo, lo que significa que se repite varias veces. 

		    	Cada iteración se basa en los resultados de la anterior, permitiendo refinamientos y ajustes continuos.


		    Refinamiento Progresivo: 

		    	En cada iteración, se realizan ajustes y mejoras a las hipótesis, modelos y métodos. 

		    	Este refinamiento progresivo permite una comprensión cada vez más precisa del fenómeno estudiado.


		    Feedback y Ajuste: 

		    	La aproximación se basa en la retroalimentación constante de los resultados obtenidos. 

		    	Se analizan los datos, se identifican errores y se realizan ajustes para mejorar la precisión y validez de los resultados.


		Pasos del Método de Aproximación

		    Identificación del Problema:

		    	Se plantea una pregunta o problema específico que necesita ser investigado.

		    	Esta pregunta puede ser amplia inicialmente y se va refinando con el tiempo.


		    Formulación de una Hipótesis Inicial: 

		    	Basado en observaciones preliminares, se formula una hipótesis inicial que proporciona una posible explicación del fenómeno.


		    Diseño de Experimentos o Modelos Iniciales: 

		    	Se diseñan experimentos o modelos para probar la hipótesis inicial. 

		    	Estos experimentos suelen ser básicos y se simplifican para obtener resultados iniciales rápidamente.

		    
		    Recolección de Datos: 

		    	Se recopilan datos a partir de los experimentos o modelos. 

		    	Estos datos proporcionan la primera retroalimentación sobre la validez de la hipótesis inicial.


		    Análisis de Datos: 

		    	Se analizan los datos obtenidos para identificar patrones, relaciones y discrepancias con la hipótesis inicial.


		    Refinamiento de la Hipótesis y del Diseño Experimental:

		    	Basado en el análisis de datos, se ajusta y refina la hipótesis. 

		    	También se mejoran los diseños experimentales para abordar mejor las preguntas de investigación.


		    Iteración del Proceso: 

		    	Se repiten los pasos de recolección de datos, análisis y refinamiento en múltiples iteraciones. Cada iteración proporciona una comprensión más profunda y precisa del fenómeno.


		    Desarrollo de Modelos Teóricos: 

		    	A medida que se acumulan datos y se refina la hipótesis, se desarrollan modelos teóricos más complejos y precisos que representan el fenómeno de manera más detallada.


		    Validación y Verificación: 

		    	Los modelos y teorías se validan mediante la comparación de predicciones con datos experimentales adicionales. 

		    	La validación puede requerir múltiples iteraciones y ajustes.


		    Publicación y Revisión por Pares: 

		    	Los resultados finales, modelos refinados y teorías se publican en revistas científicas y se someten a revisión por pares para verificar su validez y reproducibilidad.


		Ejemplos de Aproximación en la Ciencia

		    Modelado Climático: 

		    	Los científicos utilizan modelos climáticos que se refinan continuamente a medida que se recopilan más datos sobre el clima y se mejora la comprensión de los procesos climáticos.


		    Desarrollo de Medicamentos: 

		    	En la investigación farmacéutica, los compuestos se prueban en múltiples iteraciones de experimentos preclínicos y clínicos, refinando continuamente la comprensión de su eficacia y seguridad.


		    Ingeniería de Software: 

		    	En el desarrollo de software, se utilizan metodologías ágiles que implican ciclos iterativos de desarrollo, pruebas y refinamiento para crear aplicaciones robustas y eficientes.


	Refutación: 

		Filosofía del método científico propuesta por el filósofo de la ciencia Karl Popper. 

		Esta aproximación se centra en la idea de que las teorías científicas no pueden ser confirmadas definitivamente, sino que deben ser continuamente sometidas a pruebas rigurosas con el objetivo de intentar refutarlas. 
		

		Principios Clave del Refutacionismo

		    Falsabilidad: 

		    	Para que una teoría sea científica, debe ser falsable. 

		    	Esto significa que debe hacer predicciones específicas que puedan ser puestas a prueba y potencialmente refutadas por observaciones o experimentos.


		    Refutación en lugar de Verificación: 

		    	Popper argumenta que es imposible verificar una teoría de manera concluyente, ya que siempre es posible que futuras observaciones la contradigan. 

		    	En cambio, el enfoque debe estar en intentar refutar teorías.


		    Tentatividad del Conocimiento Científico: 

		    	Todo conocimiento científico es provisional y susceptible de ser refutado por nueva evidencia. 

		    	Las teorías científicas no son verdades absolutas, sino conjeturas que han resistido pruebas de refutación.


		    Proceso Crítico: 

		    	La ciencia avanza a través de un proceso crítico en el que las teorías son constantemente sometidas a pruebas rigurosas. 

		    	Las teorías que no pueden ser refutadas se consideran más robustas, pero no definitivamente verdaderas.


		Pasos del Refutacionismo en el Método Científico

		    Formulación de Hipótesis Falsables:

		    	Los científicos formulan hipótesis o teorías que hacen predicciones claras y específicas. 

		    	Estas predicciones deben ser capaces de ser probadas empíricamente y, en principio, ser refutables.


		    Diseño de Experimentos para Refutar la Teoría: 

		    	Se diseñan experimentos o estudios observacionales que tienen el potencial de refutar la teoría. 

		    	Estos experimentos deben ser rigurosos y controlados adecuadamente.


		    Realización de Pruebas Empíricas: 	

		    	Se llevan a cabo las pruebas empíricas y se recopilan datos para verificar si las predicciones de la teoría se cumplen. 

		    	Si las predicciones no se cumplen, la teoría se considera refutada.


		    Análisis de Resultados: 

		    	Se analizan los datos obtenidos de las pruebas empíricas para determinar si refutan la teoría. 

		    	Este análisis debe ser objetivo y sin sesgos.


		    Revisión y Modificación de Teorías: 

		    	Si una teoría es refutada, debe ser revisada o reemplazada por una nueva teoría que explique mejor los datos y sea igualmente falsable. 

		    	Si la teoría sobrevive a las pruebas, se considera corroborada, aunque sigue siendo provisional.


		    Publicación y Discusión Crítica: 

		    	Los resultados y las conclusiones se publican en la comunidad científica para que otros investigadores puedan revisarlos críticamente, replicar los experimentos y intentar refutar la teoría.


		Ejemplos de Refutacionismo en la Ciencia

		    Teoría de la Relatividad de Einstein: 

		    	Las predicciones de la teoría de la relatividad general de Einstein, como la curvatura de la luz alrededor del Sol durante un eclipse, fueron puestas a prueba y verificadas empíricamente. 

		    	La teoría ha sobrevivido numerosas pruebas de refutación.


		    Teoría de la Evolución de Darwin: 

		    	Las predicciones de la teoría de la evolución por selección natural han sido sometidas a pruebas rigurosas en biología, paleontología y genética.

		    	Aunque ha sido refinada y extendida, la teoría básica ha resistido la refutación.


		Ventajas del Refutacionismo

		    Promueve la Rigorosidad: 

		    	Al centrarse en la refutación, el refutacionismo fomenta el diseño de experimentos rigurosos y críticos.


		    Fomenta el Progreso Científico: 

		    	El método asegura que la ciencia avance mediante la eliminación de teorías incorrectas y el desarrollo de teorías más robustas.


		    Mantenido la Tentatividad del Conocimiento: 

		    	Reconoce que el conocimiento científico es provisional y siempre abierto a revisión.


		Críticas y Limitaciones del Refutacionismo

		    Complejidad de la Refutación:

		    	En la práctica, refutar una teoría puede ser complicado debido a la interferencia de múltiples variables y la dificultad para diseñar experimentos definitivos.


		    Evidencia Ambigua: 

		    	A veces, la evidencia puede ser ambigua y no conducir a una refutación clara de una teoría.


		    Teorías Complejas: 

		    	Las teorías complejas a menudo incluyen múltiples hipótesis interconectadas, lo que dificulta la refutación de la teoría completa.


	Método Hipotético-Deductivo: 

		Uno de los métodos más importantes en la ciencia para la construcción y prueba de teorías. 

		Este método combina la formulación de hipótesis y la deducción lógica para hacer predicciones que luego son sometidas a pruebas empíricas. 


		Principios Clave del Método Hipotético-Deductivo

		    Formulación de Hipótesis: 

		    	Se proponen hipótesis basadas en observaciones preliminares o teorías existentes. 

		    	Una hipótesis es una declaración que se puede probar mediante experimentos u observaciones adicionales.


		    Deducción de Consecuencias: 

		    	A partir de la hipótesis, se deducen consecuencias lógicas. 

		    	Estas son predicciones específicas que se pueden probar empíricamente. 

		    	La deducción implica razonar desde lo general (hipótesis) hacia lo específico (predicciones).


		    Experimentación y Observación:

		    	Se diseñan y realizan experimentos o se hacen observaciones para probar las predicciones deducidas. 

		    	Estos experimentos deben ser replicables y controlados adecuadamente.


		    Análisis de Resultados: 

		    	Los resultados obtenidos de los experimentos u observaciones se analizan para verificar si coinciden con las predicciones.

		    	Se utiliza la lógica y las estadísticas para analizar los datos.


		    Conclusión y Evaluación de la Hipótesis: 

		    	Basado en el análisis de los resultados, se evalúa la hipótesis.

		    	Si los resultados concuerdan con las predicciones, la hipótesis se corrobora. 

		    	Si los resultados no concuerdan, la hipótesis se refuta y puede ser modificada o descartada.


		    Repetición y Refinamiento: 

		    	El proceso es iterativo.

		    	Si una hipótesis es refutada, se propone una nueva hipótesis y se repite el ciclo. 

		    	Incluso si una hipótesis es corroborada, se somete a pruebas adicionales para verificar su robustez.


		Pasos Detallados del Método Hipotético-Deductivo

		    Observación Inicial: 

		    	Se observa un fenómeno o se identifica un problema.

		    	Estas observaciones iniciales inspiran la formulación de preguntas de investigación.


		    Planteamiento del Problema: 

		    	Se formula una pregunta específica basada en las observaciones iniciales.


		    Formulación de Hipótesis: 

		    	Se propone una hipótesis que ofrece una posible explicación al problema o fenómeno observado. 

		    	La hipótesis debe ser clara, específica y falsable.


		    Deducción de Predicciones: 

		    	A partir de la hipótesis, se deducen predicciones que pueden ser probadas empíricamente. 

		    	Estas predicciones deben ser específicas y medibles.


		    Diseño Experimental: 

		    	Se diseñan experimentos o se planifican observaciones para probar las predicciones. 

		    	El diseño debe incluir un grupo de control y variables controladas para asegurar la validez de los resultados.


		    Recolección de Datos: 

		    	Se llevan a cabo los experimentos o observaciones y se recopilan datos de manera sistemática.


		    Análisis de Datos: 

		    	Los datos recopilados se analizan utilizando métodos estadísticos apropiados para determinar si apoyan o refutan las predicciones.


		    Conclusión: 

		    	Se compara el análisis de datos con las predicciones deducidas de la hipótesis.

		    	Si los datos apoyan las predicciones, la hipótesis se considera corroborada. Si no, la hipótesis es refutada.


		    Revisión y Publicación: 

		    	Los resultados se revisan críticamente y se publican para la revisión por pares. 

		    	Esto permite a otros científicos replicar los experimentos y verificar los resultados.


		    Refinamiento: 

		    	Incluso si una hipótesis es corroborada, se siguen realizando pruebas adicionales para refinar y mejorar la teoría.


		Ejemplos del Método Hipotético-Deductivo

		    Investigación Médica: 

		    	Un investigador observa que un determinado fármaco parece reducir la inflamación en pacientes.

		    	Formulan la hipótesis de que el fármaco reduce la inflamación bloqueando una vía específica en el cuerpo. 

		    	Deducen que, si esta hipótesis es correcta, los pacientes que toman el fármaco deberían mostrar niveles más bajos de marcadores inflamatorios en su sangre. 

		    	Diseñan un experimento para medir estos marcadores antes y después del tratamiento y analizan los resultados para verificar la hipótesis.


		    Astronomía: 

		    	Un astrónomo observa una perturbación en la órbita de un planeta que no puede ser explicada por los planetas conocidos.

		    	Hipotetizan que hay un planeta adicional no observado que está causando la perturbación.

		    	Deducen que este planeta debería ser observable en una posición específica en el cielo en un momento determinado. 

		    	Realizan observaciones y descubren el nuevo planeta, corroborando la hipótesis.


		Ventajas del Método Hipotético-Deductivo

		    Rigor y Precisión: 

		    	Proporciona un marco estructurado y lógico para la investigación científica.


		    Falsabilidad: 

		    	Enfatiza la necesidad de hipótesis que puedan ser refutadas, lo que es esencial para el progreso científico.


		    Iteratividad: 

		    	Permite el refinamiento continuo de teorías y modelos a través de ciclos repetidos de prueba y error.


		Limitaciones del Método Hipotético-Deductivo

		    Simplicidad de las Hipótesis:

		    	Puede ser difícil formular hipótesis simples y claras para fenómenos complejos.


		    Sesgo del Investigador: 

		    	Los investigadores pueden tener sesgos que influyan en la formulación de hipótesis y el diseño de experimentos.


		    Limitaciones Prácticas: 

		    	En algunos campos, como la cosmología o la psicología, puede ser difícil diseñar experimentos controlados para probar hipótesis específicas.


	Inferencia: 

		Proceso mediante el cual se derivan conclusiones a partir de premisas o evidencias. 

		En el contexto del método científico y el razonamiento lógico, la inferencia es fundamental para interpretar datos y formular conclusiones basadas en la evidencia. 

		Existen diferentes tipos de inferencia, cada uno con su propia estructura y aplicación. 		


		Tipos de Inferencia

		    Inferencia Deductiva:

		        Descripción: 

		        	Es un proceso lógico en el que se deriva una conclusión específica a partir de premisas generales.

		        	 Si las premisas son verdaderas y el razonamiento es válido, la conclusión necesariamente será verdadera.


		        Ejemplo:

		            Premisa 1: 

		            	Todos los mamíferos tienen pulmones.


		            Premisa 2: 

		            	Un perro es un mamífero.


		            Conclusión: 

		            	Por lo tanto, un perro tiene pulmones.

		    
		    Inferencia Inductiva:

		        Descripción: 

		        	Se basa en observar patrones y generalizar a partir de casos específicos para formular una conclusión general. 

		        La conclusión inductiva es probable, pero no necesariamente verdadera.

		        Ejemplo:

		            Observación: 

		            	Todos los cisnes observados hasta ahora son blancos.
		           
		            Conclusión: 

		            	Probablemente, todos los cisnes son blancos.


		    Inferencia Abductiva:

		        Descripción: 

		        	Implica formular la mejor explicación posible a partir de un conjunto de observaciones. 

		        	Es utilizada para generar hipótesis plausibles cuando se dispone de información incompleta.

		        Ejemplo:

		            Observación: 

		            	El césped está mojado.

		            Hipótesis:

		            	Probablemente ha llovido.


		Aplicación de la Inferencia en el Método Científico

		    Formulación de Hipótesis: 

		    	La inferencia inductiva se utiliza para formular hipótesis basadas en observaciones previas. 

		    	Por ejemplo, después de observar que ciertos medicamentos reducen la presión arterial en varios pacientes, un científico puede inferir que el medicamento podría ser efectivo en general para reducir la presión arterial.


		    Deducción de Predicciones: 

		    	Una vez que se formula una hipótesis, se utiliza la inferencia deductiva para derivar predicciones específicas que pueden ser probadas experimentalmente. 

		    	Por ejemplo, si se hipotetiza que un nuevo fármaco reduce la inflamación, se deducirá que los pacientes que toman el fármaco mostrarán niveles reducidos de marcadores inflamatorios.


		    Análisis de Resultados: 

		    	La inferencia abductiva se emplea para interpretar los resultados de los experimentos y formular la mejor explicación posible para los datos observados.

		    	Si los datos confirman las predicciones, se puede inferir que la hipótesis es plausible. 

		    	Si los datos no coinciden con las predicciones, se puede inferir que la hipótesis debe ser revisada o rechazada.


		Ejemplos de Inferencia en la Ciencia

		    Inferencia Deductiva en Matemáticas:

		        Premisa: 

		        	Todos los ángulos internos de un triángulo suman 180 grados.

		        Premisa: 

		        	Este es un triángulo.

		        Conclusión: 

		        	Los ángulos internos de este triángulo suman 180 grados.

		    
		    Inferencia Inductiva en Biología:

		        Observación: 

		        	Los cuervos observados en diversas regiones son negros.

		        Conclusión: 

		        	Probablemente, todos los cuervos son negros.


		    Inferencia Abductiva en Medicina:

		        Observación: 

		        	Un paciente presenta síntomas de fiebre, tos y dificultad para respirar.

		        Hipótesis:

		        	El paciente podría tener una infección respiratoria, como neumonía.


		Importancia de la Inferencia en el Método Científico

		    Generación de Conocimiento: 

		    	La inferencia permite a los científicos derivar conclusiones a partir de datos, lo que es esencial para la generación y expansión del conocimiento científico.


		    Formulación y Prueba de Teorías: 

		    	La inferencia es crucial para la formulación de hipótesis, la deducción de predicciones y la interpretación de resultados, facilitando la prueba y refinamiento de teorías científicas.
		   

		    Desarrollo de Explicaciones:

		    	La inferencia abductiva, en particular, ayuda a los científicos a desarrollar explicaciones plausibles para observaciones y fenómenos complejos.


		Limitaciones de la Inferencia

		    Inferencia Inductiva: 

		    	La conclusión puede ser probable, pero no necesariamente verdadera.

		    	La inferencia inductiva está sujeta al problema de la inducción, es decir, que futuras observaciones pueden contradecir la conclusión generalizada.


		    Inferencia Abductiva: 

		    	Las hipótesis generadas pueden ser plausibles pero no necesariamente correctas, y pueden requerir pruebas adicionales para ser validadas.


		    Inferencia Deductiva: 

		    	La validez de las conclusiones depende de la veracidad de las premisas.

		    	Si una premisa es falsa, la conclusión puede ser incorrecta, incluso si el razonamiento es válido.		


|| Una aproximación a la abstracción:  
	
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

	
	Abstracción: 

		Pensar más allá: 

			Cómo se llego a/pensó la solución

		Pensar en cómo se pudo implementar 

		-> Metodo -> reimplementación 



|| Análisis de problemas: 

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



|| Métodos nativos o incorporados

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

		Son mutables y muy útiles para representar información estructurada y acceder a ella de forma eficiente utilizando las claves. 

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


|| RS

	Matemática: 

		1. Problema: 

			Qué se quiere resolver, investigar. 

		2. Formulación: 

			Lenguaje matemático. 

		3. Definición de variables: 

			Identificación de las relevantes. 

		4. Condiciones y restricciones. 

		5. Observación: 

			Cualitativas/Descriptivas, Cuantitativas/Medibles. 

		6. Hipótesis: 

			Explica, responde las preguntas. 

		6. Experimentación: 

			Prueba hipótesis.

		7. Recopilación y análisis de Datos: 

			Datos objetivos que apoyan o refutan la hipótesis. 

		8. Conclusiones: 

			Basadas en los datos extraídos. 

		9. Publicación y Revisión: 

			Los pares validan o refutan la investigación. 

		10. Teoría Científica: 

			Hipótesis repetida y validada entre pares por multiples líneas de evidencia. 

		.....

		1. Texto: 

			Ideas, unión, lógica. 

		2. Lenguaje Matemático: 

			Variables: 	

				Simbolos. 

			Asignación: 

				Expresiones matemáticas. 

		3. Regla de 3: 

			Solo cuando variables tienen relación directa (+, +) o inversa (-, -).

			Compuesta: 

				Multiples incognitas. 

				Directa: fracción directa. 
				Inversa: fracción inversa. 

				Despejamos incognitas y aplicamos proporcionalidad. 


		4. Proporcionalidad: 

			Razón: 

				Cociente entre dos cantidades comparables 

			Proporción: 

				Igualdad entre dos razones. 

				a/b = c/d

				a*d = b*c 

		5. Formula: 

			Caso particular y general: 

				Descubrir la lógica implícita, extrear las ideas de su escencia. 

				Elementos, operaciones, combinaciones.

		6. Pseudo código. 

		7. Código. 

		8. Verificación/ Testing. 


	Código: 

		Algoritmo: 

			Finito, definido, efectivo. 

			entrada -> operaciones, cálculos -> salida

		Data, contro, return, func, obj, design patt, abs e interfac, excepciones, concurrencia, lect y escrit, close. 


	Debug: 

		Print. 
		Incremental. 
		Guardián. 
		Tipos de errores. 
		Contaminación Scope. 
		Iniciar en el error. 
		Breackpoints. 
		Logging. 
		Stack Trace. 
		Test. 
		Qué debería hacer, Qué programar .

		Proceso: 

			1. Reproducción del error. 

			2. Diagnóstico. 

			3. Corrección

			4. Pruebas. 

			Breackpoints. 

			Steps: 

				Flujo del programa. 

			Watch Vars. 

			Stack Traces: 

				Pila de llamadas. 






