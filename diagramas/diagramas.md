Diagrama de flujo: 
	
	Representa el flujo de datos, el camino que va haciendo
	los datos de un programa pasando por cada una de las 
	instrucciones. 

	Se ejecuta desde arriba hacia abajo de manera secuencial
	y ordenada. 

	inicio
	 pide dato (caja input)
	 cálcula (procesa, funcion)
	 muestra (print)
	fin

	ingreso
	proceso
	egreso
 
	dato
	proceso
	información



|| Variables:
	
	Dato o información guardado en memoria. 
	contenedore, guardan un solo dato a la vez. 
	
	Puede cambiar, tiene un nombre signficativo que repre senta lo que tiene adentro

	Tambien es un espacio en memoria dado que cada variable va a ocupar.

	Un programa puede necesitar una cantidad x de variables
	para funcionar. El procesador le asignará lo que corres
	ponde a la ram. 

	Simplificando: una variable, un espacio en memoria. 

	Si tenemos un programa que necesita dos numeros, necesi
	tamos crear dos variables. 


	Flujo: 

	inicio
	num1, num2

	o

	inicio
	n1
	n2


	Procesador: 

		instrucción de ingreso con dos variables. 
		El procesador toma el número lo asigna o lo guarda en 
		un espacio de memoria correspondiente. 

		matriz de memoria en la RAM: 
		especie de planilla en el que figura la dirección
		de memoria. 

	Nuestro (variable) espacio de memoria tiene una dirección
	de memoria y un nombre asignado. 
	Se lo llama escribir en memoria. 

	La memoria de acceso aleatorio se escribe y se lee 
	aleatoriamente a partir de direcciones de memoria
	gestionadas por el SO


	Flujo: 
	procesamiento: 
	suma: 
	1. leer: 
	n1, n2

	
	Procesador: 
		
		Va a la direcciones de memoria de la variable con nombre
		
		n1, lee el valor y lo trae. lo mismo con n2. 
		lo suma. 


		Operadores: 
		aritméticos: 
		+ - * /

		Guardar operación entre variables: 
		lo hacemos en otra variable, ej r. 

		Operador de asignación = 
		dar un valor a una variable

	r = n1 + n2

	leemos el contenido de n1 y n2 y lo sumamos. 


	flujo: 
	inicio
	n1, n2
	r = n1+n2

	Mostrar en pantalla: 
	el contenido de la variable r. 


	i
	n1,n2
	r = n1+n2
	r
	f

	ej: 
	resta

	n1, n2
	r = n1-n2
	r


	ej: 
	productos

	inicio

	entrada: variables //1
	precio, cantidad 

	Proceso: cálculo //2
	monto = precio * cantidad

	Salida: pantalla //3 
	monto

	fin


	pre, can
	mon = pre*cant
	mon


	Diagrama de flujos: 
		
		figuras: 
		ingreso 
		proceso
		egreso
		variable
		operadores



|| Condicionales: 


	Conocimiento acumulativo: 
	En programación, los conceptos básicos son siempre requieridos


	Repaso: 

	Programa que pide dos datos, los suma y lo muestra en 
	pantalla. 


	diagrama: 

	inicio

	ingreso: // 1
	var a, b

	proceso: //2
	lectura de dos variables que se operan, combinan
	seran igual a otra o se guardarán en otra variable 
	c = a+b

	Impresión/pantalla/salida: //3 
	Mostrar cálculo u operación que está guardado en la
	tercera variable 
 
	Fin


	entrada + cálculo + salida = algoritmo

     finito, definido y efectivo. 


	Ejercicio: 
	Hacer un programa para solicitar por teclado un numero
	y luego devolver su valor elevado al cubo. 
	nota: usando las cuatro operaciones básicas: 
	suma, resta, multiplicación y división. 
	No existe operador que eleva al cubo. 

	diagrama:

	inicio

	ingreso: 
	num

	calculo: guardar resultado
	cubo = n*n*n
	o
	r = n*n*n

	salida: 
	cubo
	o
	r 

	fin


	Ejercicio: 
	Una casa de computación pagá a sus empleados un sueldo
	fijo de $15.000 más una comisión del 5% sobre el total 
	facturado por cada empleado. 
	hacer un programa para ingresar el total facturado por 
	un empleado y que luego cálcule y emita por pantalla
	el sueldo a cobrar por el mismo. 

	diagrama: 

	//sueldo = 15.000 + 5% (total facturado por cada emplea)
	//mostrar

	//comision = 5%total //facturacion 
	//1. 5/100=0,05
	//2. 0,05*total

	//error:
	//cantidad*porcentaje/100

	//error: 5%de15000
	//15000*5/100= 750

	//sueldo:
	//15.000+0,05

	//sueldo + comision:
	//variables, entidades, objetos separados por el 
	operador + o dentro de otras. 
	Cada uno con sus propios calculo. 


	//facturacionTotalEmpleado o empleado o total, etc
	//ingresar


	inicio

	ingreso: 
	factTotalEmpleado

	calculo: 
	comisión = factTotalEmpleado*0,05
	sueldo = 15.000 + comisión

	salida: 
	sueldo


	//variable temporal/local dentro del proceso o calculo. 
	//alternativa: 
	sueldo = total*0,05+1500

	fin


	Constantes:
	Datos dados o fijados por el problema o lógica en si. 
	Son datos pensados para no cambiar o cambiarlos a lo 
	largo del programa.  



	IF:

	Los condicionales son acciones que dependen de otra cosa
	para que sucedan. 
	Sirven para que los datos o el flujo de datos del 
	programa tomen distintos caminos. 

	Son como preguntas que le hacemos a la computadora
	que responderá por verdadero o falso para activar 
	las diferentes acciones. 

	figura de rombo con ramas o aristas a los lados
	uno verdadero y otro falso. 
	Dentro irá la pregunta. 

	El procesador, además de sumar, restar, multiplicar 
	y dividir, sabe responder por si/no o verdadero/falso
	ante distintos escenarios que son estas preguntas/condi
	cionales. 

	Un escenario puede requerir comparar por igual, mayor, 
	menor, mayor o igual, menor o igual. 

	El procesador dar una respuesta lógica: si o no. 


	Crear condición lógica: 
	necesitamos un par de valores y un operador lógico 
	para comparar. 

	igual (==), mayor (>), menor (<), mayor o igual (>=), 
	menor o igual (<=), distint (!=)

	ej:
	v-- a>10 --F

	ej: 
	n1= 10
	n2= 5

	v-- n1>n2 --F


	Diagrama: 
	inicio
	  
	ingreso: 
	n1, n2

	calculo: 
	v-- n1>n2 --F //pregunta
	|           |

	salida:
	n1          n2 //mostrar 

	fin


	Ejercicio: 
	Imprimir la edad de la persona y que nos muestre si la
	persona es  mayor de edad o no.

	ingreso: 
	edad

	calculo: 
	v-- edad>18 --F //pregunta
	|           |

	salida:
	n1          n2 //mostrar 
	es mayor    no es mayor de edad
	edad



	Ejercicio: 
	Hacer un programa con dos numeros distintos y luego 
	mostrar el resultado de restar el mayor de ellos con 
	el menor de ellos. 

	 
	ingreso: 
	a, b

	calculo: 
	v-- a-b --F //pregunta
	|           |
	r=a-b      r=b-a

	salida:
	r          //mostrar 



	|| Ejercicios

	1. Hacer un programa que permite ingresar el año actual
	y el año de la fecha de nacimiento de una persona. 
	luego calcule y muestre su edad. 
	nota: no se tiene en cuenta si cumplió años. 

	ingreso: 
	añoActual, fechaNacimiento

	calculo: 
	edad = fechaNacimiento - añoActual

	salida: 
	edad


	2.Hacer un programa que permite ingresar los km existentes
	entre dos ciudades y la velocidad promedio de un vehículo
	calcular y emitir en pantalla el tiempo aproximado que 
	demandará en llegar de un punto a otro teniendo en cuenta
	los datos ingresados. 


	ingreso: 
	kmCiudad1, kmCiudad2, velProm

	cálculo: 
	tiempo = (kmCiudad2 - kmCiudad1)/velProm

	salida: 
	tiempo



	3. Hacer un programa para ingresar las tres notas de 
	examen de un alumno y luego cálcule y emita por pantalla
	el promedio final. 

	ingreso: 
	nota1, nota2, nota3

	cálculo: 
	promedioNotas = (nota1 + nota2 + nota3)/3

	salida: 
	promedioNotas



	4. Hacer un programa para ingresar por teclado los m2
	totales de un predio y los m2 cubiertos, calcular y mostrar
	el porcentaje de metros cuadrados cubiertos y descubiertos


	ingreso: 
	m2Total, m2Cubierto

	cálculo: 
	m2Descubierto = m2Total-m2Cubierto
	porcCubierto = (m2Cubierto*100)/m2Total
	porceDescubierto = (M2descubierto*100)/m2Total

	salida: 
	porcCubierto
	porceDescubierto



	5. Una importante cadena de delivery cuenta con una 
	promo por tiempo limitado en la que otorga un 15% 
	de descuento en sobre el total del valor de la compra  
	realizada. Hacer un programa para solicitar el monto 
	total y que calcule y muestre el total a cobrar con el 
	descuento aplicado. 

	//descuento: 15%
	//total compra
	//calculos: 
	//porc:15/100 = 0,15
	//total-desc: compra*0,15
	//obtenemos el monto total con descuento 
	//u obtener la cantidad de porcentaje 85%


	ingreso: 
	totalCompra

	cálculo:
	descuento = totalCompra * 0,15
	totalCobrar = totalCompra - descuento

	salida: 
	totalCobrar


	alternativa:

	ingreso: 
	totalCompra

	cálculo:
	descuento = totalCompra * 0,15
	totalCobrar = totalCompra - descuento

	salida: 
	totalCobrar



	6. Una universidad desea conocer los porcentajes de
	mujeres y hombres en las carreras de ciencias exactas
	hacer un programa para conocer los porcentajes de mujeres
	y hombres, se necesita cargar la cantidad de mujeres y 
	hombres, calcular y emitir por pantalla los porcentajes
	correspondientes. 


	//valor porcentual
	50 manzanas como porcentaje de 1250 manzanas
	50/1250 = 0,04 * 100 = 4%

	o

	50*100 = 5000/1250 = 4%



	//porcentaje de porcentaje

	convierte ambos porcentajes a fracciones de 100, o 
	a decimales, y se multiplican

	50 % de 40 %

	50/100 * 40/100 = 0,50 * 0,40 = 0,20 = 20/100 = 20%



	// porcentaje como fraccion

	se divide entre 100 y se simplifica

	10% = 10/100 = 1/10 = 0,1



	// porcentaje como multiplicación

	La fracción común se multiplica por el número que 
	sea necesario para que el denominador sea 100 y se toma
	el numerador, que será el porcentaje. 

	representar 1/10 como un porcentaje

	1/10 = 10/100 = 10%



	// porcentaje de un número
	de un número, simplemente se multiplica por 0,01
	es decir, 1/100

	el 25 % de 150 = 25*0,01*150 = 37,5

	Una forma equivalente de tratar esta operación es 
	considerar que se multiplica por la cifra y se divide
	por cien (pues 0,01 = 1/100):

	25*150/100



	//valor porcentaje = %/100
	//porcentaje desc = x*total

	//r3: 
	//calcular porcentaje de un numero:
	//porc de num

	//si num es 100%
	//x(valorDesconocido) es porc
	// ahora tengo 3 valores conocidos: num, porc y 100

	//x = num*porc/100

	//porc de num
	//ej: 25% de 150
	//100% es 150(num)
	//25%(porc) es x

	//x = 150*25/100 = 37,5 es el 25% de 150

	//calculo: 
	//numHom + numMuj = total
	//numHom y numMuj es la entrada o valor conocido (num)

	//x = num*porc/100

	//si numHom + numMuj es 100
	//numHom  -- porcHom
	//numMuj  -- porcMuj

	//porcHom = numHom*100/(numHom + numMuj)
	//porcMuj = numMuj*100/numHom + numMuj)



	ingreso: 
	numHom, numMuj

	cálculo:
	porcHom = numHom*100/(numHom + numMuj)
	porcMuj = numMuj*100/(numHom + numMuj)

	salida: 
	porcHom, porcMuj




	7. Hacer un programa que permite ingresar dos números
	y que muestre la suma, la resta, la multi y la division 
	de los números. Se debe mostrar cuatro resultados en 
	pantalla. Los números deben ser solicitados una única vez


	ingreso: 
	num1, num2

	cálculo:
	sum = num1 + num2
	rest = num1 - num2
	mult = num1 * num2
	div = num1 / num2

	salida: 
	sum
	rest
	mult
	div



	|| operador resto, mod, modulo
	residuo de una división de dos números enteros es 
	el número que se le ha de restar al dividendo para que
	sea igual a un determinado número de veces el divisor

	resto = dividendo-(divisor*cociente)

	div:
	dividendo |divisor
	resto 	   cociente

	Según su resto las divisiones se clasifican como 
	exactas, si su resto es cero, o enteras, cuando no lo es. 


	Número par: 
	número entero (+,-) que es divisible entre dos
	2*k //k es un entero. 

	los pares son multiplos de 2

	los enteros no pares son números impares: 
	2*k+1

	cero es un número par, cumple con la definición así como
	con todas las propiedades de los números pares

	%/2



|| Ejercicios IF

	El procesador da una respuesta lógica: si o no. 

	El flujo de datos del programa se divide en caminos
	o ramas, tomará uno u otra camino para después volver 
	a unirse al final. 


	Crear condición lógica: 
	necesitamos un par de valores y un operador lógico 
	para comparar. 

	igual (==), mayor (>), menor (<), mayor o igual (>=), 
	menor o igual (<=), distint (!=)


	Repaso IF:


	Ejercicio: 
	Imprimir la edad de la persona y que nos muestre si la
	persona es  mayor de edad o no.

	ingreso: 
	edad

	calculo: 
	v-- edad>18 --F //pregunta
	|           |

	salida:
	n1          n2 //mostrar 
	es mayor    no es mayor de edad
	edad



	Ejercicio: 
	Hacer un programa con dos numeros distintos y luego 
	mostrar el resultado de restar el mayor de ellos con 
	el menor de ellos. 

	 
	ingreso: 
	a, b

	calculo: 
	v-- a-b --F //pregunta
	|           |
	r=a-b      r=b-a

	salida:
	r          //mostrar 



	Ejercicio: 
	Hacer un programa para ingresar un número y luego
	se emita por pantalla un cartel aclaratorio si es mayor
	a 10  o no es mayor a 10. 


	ingreso: 
	num

	calculo: 
	v -----num>10 ----- F //pregunta/condición
	|                   |
	r="numero           r="numero //guardamos el resultado
	mayor que 10"       no es mayor a 10"


	salida:
	r          //mostrar resultado


	En un lenguaje de programación: 
	Cuando no queremos usar un camino

	if (n>10) { // if y llaves para verdadero

	} else { //else y llaves para el falso
	         //es opcional
	}

	Es opcional pero si no queremos dejar un camino u opción
	vacio, podemos usar el else para mostrar el falso en
	mensaje u otra instrucción para unir el flujo de datos. 

	Tambien podemos usar solo el if: 

	if (n<10) {
	 mostrar('Es menor');
	}
	 
	Siempre usar la condición que se necesite/verdadera
	primero y después tratamos los casos restantes. 



	Ejercicio: 
	Hacer un programa para ingresar dos números distintos y 
	luego se muestran por pantalla el menor de ellos. 


	entrada: 
	a, b

	cálculo: 
	v -----a<b ----- F //pregunta/condición 
	|                |
	r = a 		r=b   //guardar resultado

	salida:   //mostrar resultado
	r

	1. preguntamos por el verdadero (a)
	2. la condición es el menor de los dos (a<)



	Ejercicio: 
	Hacer un programa para ingresar dos números y luego se 
	emita por pantalla el mayor de ellos con un cartel que 
	aclare si son iguales en el caso de que lo sean. 
	Los números pueden ser iguales. 

	entrada: 
	a, b

	cálculo: 
	v -----a>b ----- F //pregunta/condición 
	|                |
	r = a 	     v --b>a-- f  //guardar resultado
	             |         |
	             r=b       r="son iguales"

	salida:   //mostrar resultado
	r

	1. preguntamos por el verdadero (a)
	2. la condición es el menor de los dos (a<)
	3. volvemos a preguntar por el otro numero en mayor (b>)
	4. si el verdadero lo guardamos ahí, si es falso
	usamos por descarte la igualdad. 
	5. ocupamos todos los escenarios/opciones



	resto, mod, modulo: 
	resto = dividendo-(divisor*cociente)

	div:
	dividendo |divisor
	resto 	   cociente

	Según su resto las divisiones se clasifican como 
	exactas, si su resto es cero, o enteras, cuando no lo es. 

	Número par: 
	número entero (+,-) que es divisible entre dos
	2*k //k es un entero. 

	los pares son multiplos de 2

	los enteros no pares son números impares: 
	2*k+1

	cero es un número par, cumple con la definición así como
	con todas las propiedades de los números pares

	%/2


	Ejercicio: 
	Hacer un programa para ingresar un número y mostrar 
	por pantalla cuando si es par o impar. 


	entrada: 
	num

	cálculo: 
	r = num%2

	v -----r==0 ----- F //pregunta/condición 
	|                |
	'par'           'impar' //guardar resultado
	         
	salida:   //mostrar resultado


	1. preguntamos por el verdadero (a)
	2. la condición es el menor de los dos (a<)
	3. volvemos a preguntar por el otro numero en mayor (b>)
	4. si el verdadero lo guardamos ahí, si es falso
	usamos por descarte la igualdad. 
	5. ocupamos todos los escenarios/opciones



	IF - AND - OR - Contador - Acumulador:

	&& (y), || (o) son concatenadores lógicos para unir 
	dos sentencias lógicas o preguntas. 

	crear pregunta: 
	valor 
	operador
	valor


	si necesitamos que dos(o todos) requisitos se cuplan 
	usamos &&, va a dar verdadero. 
	va a dar falso cuando una sola condición no se cumpla
	o sea falsa. 

	si solo necesitamos que uno solo (de todos) 
	se cumpla usamos ||, va a dar verdadero. 
	va a dar falso cuando ninguna se cumpla o todas 
	sean falsas. 


	Unificar pregunta en un solo if: 

	ej: nota que está entre 4 y 8. 


	entrada: 
	n

	cálculo: 

	v--- n>4 && n<8 ---f

	n           "no está entre
	             4 ni 8"

	salida: 



	Ejercicio:
	Una tienda de videojuegos da un descuento dependiendo 
	del importe de la compra realizada según los siguientes
	valores: si el importe es menor a 1000 no hay descuentos
	si es 1000 o más pero menor a 5000 aplica un descuento 
	del 10% si es de 5000 o más aplica un descuento del 18%
	El programa debe ingresar un importe de venta y mostrar 
	el importe final con el descuento que corresponda. 


	//descuento = importe * porcDesc
	//importeFinal = importe-descuento

	//10/100 = 0,1
	//18/100 = 0,18 

	//importe es menor a 1000
	//1000 o más pero menor a 5000 10
	//5000 o más aplica un descuento 18

	entrada: 
	importe

	cálculo: 
	v---  importe>=5000   ---f 

	iF= importe*0,82      v  importe>1000 && importe<5000 f        

	               iF =importe*0,90              iF = importe

	salida: 
	iF


	alternativa

	v---  importe>5000  ---f 

	iF= importe*0,82      v  importe>1000    

	               iF =importe*0,90             

	----importe----



	Ejercicio: 
	Hacer un programa para ingresar 4 num distintos y luego 
	mostrar por pantalla el mayor de ellos. 


	entrada:  
	num1, num2, num3, num4

	cálculo: 
	v---  num1>num2 &&  num1>num3 && num1>num4 --f 

	m= num1       v   num2>num1 &&  num1>num3 && num1>num4  f  f

	            m=num2                                etc

	salida: 



	Alternativa: 

	//nos pregunta el maximo de ellos, lo evaluamos indirect
	mente todos contra todos. 
	Se hace por partes, preguntamos el primer par y vamos
	guardando el maximo.  Para el falso, decimos el el otro
	num es el maximo y cerramos el condicional. 

	//En el segundo condicional preguntamos por el tercer
	valor si es mayor al maximo. no usamos el falso. 

	//tercer condicional, preguntamos por el cuarto num si es
	mayor al max, no usamos el falso. 


	entrada:  
	num1, num2, num3, num4

	cálculo: 

	v---  num1>num2  ---f 

	m= num1            m=b
	               

	v---  num3>max

	m= num3            


	v---  num4>max

	m= num3            


	salida: 
	m




	Ejercicio
	Hacer un programa para ingresar cuatro num y luego mostrar
	cuantos son menores a 100. 

	//preguntar por las opciones, entrada, etc. 
	//cuantos es contar++, nueva variable
	//cuales es imprimir


	1. Variable Contador:
	contamos de a 1

	Son valores para asignar valores cuando corresponda. 
	Empiezan con 0, para luego ingrementarse en ciertas 
	situaciones. 

	operador contador ingremento o decremento: 
	var++,  -- o **

	implicitamente lee la variable se suma o decrementa y
	la vuelve a asignar. 


	2. Variable Acumulador: 
	sumamos los valores
	a = 10
	b = 5
	a = a+15
	a = a + b

	o

	Operador de acumulación: var += var2, 
	-=, *=, /=, **=, &&=, ||= (log), etc

	a += b
	a += 15


	//cuantos
	entrada: 
	num1, num2, num3, num4

	cálculo: 
	j=0 

	v---  num1<100  

	j=j+1
	               

	v---  num2<100

	j=j+1            


	v---  num3<100

	j++            


	v---  num4<100

	j++


	salida: 

	j



	//cuales
	entrada:  
	num1, num2, num3, num4

	cálculo: 

	v---  num1<100  

	num1            
	               

	v---  num2<100

	num2            


	v---  num3<100

	num3            


	v---  num4<100

	num4


	v---  num1>100 || num2>100 || num3>100 || num4>100

	num1
	num2
	num3
	num4


	salida: 




	Ejercicio: 

	hacer un programa que solicite el ingreso del un numero 
	y luego emita por pantalla aclarando si el mismo es 
	multiplo de 5. 


	Conceptos: 

	multiplo: 
	un múltiplo de un número es el producto por algún entero

	para a y b, b es multiplo de a si b = n*a 
	para algún entero n

	multiplo de 5 = 

	a*n = b (multiplo)
	5*2 = 10 (multiplo de 5)
	 
	a será divisor de b (multiplo)
	todo entero es multiplo de 1 y de sí mismo. 
	 

	// (divisor) a*n = b (multiplo)
	//  5*n=num (b)
	// n = num/5 


	entrada:
	num


	cálculo: 
	//resto de div num por 5 es 0 

	v---  num % 5 == 0 

	num es multiplo       
	        
	       
	salida: 
	num     




	Ejercicio: 

	Hacer un programa que solicite el ingreso de dos números
	y luego calcular. a) la resta si el primero es mayor que 
	el segundo. b) la suma si son iguales, c) el producto 
	si el primero es menor, se deberá emitir por pantalla
	el resultado correspondiente.


	operador contador ingremento o decremento: 
	var++,  -- o **

	Operador de acumulación: var += var2, 
	-=, *=, /=, **=, &&=, ||= (log), etc


	entrada: 
	num1, num2


	cálculo: 

	v---  num1>num2  

	resta = num1-num2  //   num1-=num2      
	               

	v---  num1==num2 // 

	suma = num1+num2            


	v---  num1<num2 //

	producto = num1*num3            


	salida: 
	resta
	suma
	producto



	alternativa: 


	entrada: 
	num1, num2


	cálculo: 

	v---  num1>num2  ---f

	resta = num1-num2   v --num1==num2 --f     
	                   
	             suma = num1+num2      prod = num1*num2

	salida: 
	resta
	suma
	producto

	o


	r=num1-num2 
	    r=num1+num2 
	       r=num1*num2    


	salida:
	r 


	1. preguntamos por el verdadero (a)
	2. la condición es el menor de los dos (a<)
	3. volvemos a preguntar por el otro numero en mayor (b>)
	4. si el verdadero lo guardamos ahí, si es falso
	usamos por descarte la igualdad. 
	5. ocupamos todos los escenarios/opciones





	Ejercicio

	hacer un programa para ingresar dos números si el segundo
	es distinto de cero, calcular la division del primero
	por el segundo y mostrar el resultado, caso contrario
	emitir un cartel por pantalla que no se puede dividir
	por cero. 




	entrada: 
	num1, num2


	cálculo: 

	v---  num2!=0 ---f

	div = num1/num2   m = "no se puede dividr por 0"         
	               

	salida: 
	div, m


	Ejercicio: 

	Un importante negocio de desinfectante liquido realiza 
	descuentos dependiendo de la cantidad de litros vendidos
	segun las siguientes escalas: a) si venden menos de 100
	litros no hay descuentos, b) si venden entre 101 y 300
	litros, hay descuento de 10%; c) si venden entre 301 y
	500 litros, el descuento es del 15%, d) finalmente si 
	la venta es de más de 500 litros el descuento es del 25%
	Solicitar el ingreso del importe total de la venta y la
	cantidad de litros vendidos y calcule y emita el importe
	con el descuento aplicado. 


	//chequear cada condición en las ramas

	entrada: 
	venta


	cálculo: 

	v---  venta<100  

	impF = venta 
	               

	v---  venta >100 && venta <300

	impF = venta * 0,90           


	v---  venta >300 && venta <501

	impF = venta * 0,85              


	v---  venta>500

	impF = venta * 0,75



	salida: 

	impF




	alternativa: 


	entrada: 
	venta

	cálculo: 

	v---  venta<100  ---f

	impF = venta   v --venta >100 && venta <300 --f     
	                   
	             impF = venta*     impF = vent*
	              
	             etc

	salida: 
	impf

	o


	r=venta*
	    r=venta*
	       r=venta*
	etc

	salida:
	r 



	Ejercicio: 
	Solicitar el ingreso de las notas del primer parcial 
	y del segundo de una alumna de programación, el programa 
	deberá analizar las notas y emitir la situación de la 
	alumna segun la siguiente escala, a) si tiene ocho o más
	si tiene ocho los dos parciales emitir la aprobación directa, 
	b) si tiene entre 4 y 7 en ambos parciales 'rendir examen
	final', c) si tiene menos de 4 en algunos alguno de los 
	dos parciales emitir 'debe recuperar'. 
	el programa debe emitir un solo cartel, el que corresponda. 


	entrada:
	notaParc1, notaParc2

	cálculo: 

	v---  notaParc1 >= 8 && notaParc2 >= 8 ---f 

	m='Aprobación directa'         v   notaParc1 >= 4 && notaParc1 >= 7   f        
	                                 notaParc2 >= 4 && notaParc2 >= 7
	                             
	                         m='rendir examen final'               m= 'debe recuperar'         
	                              

	salida: 
	m


	alternativa: 


	entrada: 
	venta

	cálculo: 

	v---  venta<100  ---f

	impF = venta   v --venta >100 && venta <300 --f     
	                   
	             impF = venta*     impF = vent*
	              
	             etc

	salida: 
	impf

	o


	r=venta*
	    r=venta*
	       r=venta*




	Ejercicio: 
	Hacer un programa ingresar por teclado la longitud de los
	tres lados de un triangulo y que luego determine con 
	un cartel a que tipo de triangulo corresponde, equilatero
	cuando los tres lados sean iguales, isoseles cuando dos
	lados sean iguales y escaleno cuando todos los lados sean
	distintos. 

	Conceptos: 

	angulo: 
	figura formada por dos semirrectas, llamadas lados (arista), 
	que comparten un punto final común, llamado vértice.​ 

	La medida de un ángulo es considerada como la amplitud 
	del arco de circunferencia centrada en el vértice y 
	delimitada por sus lados. Su medida es un múltiplo de la 
	razón entre la longitud del arco y el radio. 

	Su unidad natural es el radián, pero también se puede
	 utilizar el grado sexagesimal o el grado centesimal.

	Pueden estar definidos sobre superficies planas 
	(trigonometría plana) o curvas (trigonometría esférica).
	 Se denomina ángulo diedro al espacio comprendido entre
	 dos semiplanos cuyo origen común es una recta. 

	Un ángulo sólido es el que abarca un objeto visto desde 
	un punto dado, midiendo su tamaño aparente.

	Ángulo también se utiliza para designar la medición de 
	un ángulo o de una rotación. Esta medida es la relación
	entre la longitud de un arco circular y su radio.


	tipos de angulos: 
	de acuerdo con su amplitud

	1. Ángulo nulo:
	dos semirrectas coincidentes, por lo tanto su abertura
	es nula, es decir, de 0°. 

	2. Ángulo agudo:
	os semirrectas con amplitud mayor de 0 rad y 
	menor de π/2  rad. 
	mayor de 0° y menor de 90° (grados sexagesimales), 
	o menor de 100g (grados centesimales). 

	3. Ángulo recto:
	Un ángulo recto es de amplitud igual a π/2rad.
	Es equivalente a 90° sexagesimales (o 100g centesimales).
	Los dos lados de un ángulo recto son perpendiculares entre sí.
	La proyección ortogonal de uno sobre otro es un punto,
	 que coincide con el vértice. 

	4. Ángulo obtuso:
	amplitud es mayor a π/2 rad y menor a π rad. 
	Mayor a 90° y menor a 180° sexagesimales (o más de 100g
	y menos de 200g centesimales). 

	5. Ángulo llano:
	El ángulo llano tiene una amplitud de π rad. 
	Equivalente a 180° sexagesimales (o 200g centesimales). 

	6. Ángulo oblicuo: 
	no es recto ni múltiplo de un ángulo recto. 
	Los ángulos agudos y obtusos son ángulos oblicuos. 

	7.Ángulo completo o perigonal:
	amplitud de 2 π {\displaystyle 2\pi \,} rad.

	Equivalente a 360° sexagesimales (o 400g centesimales). 


	Semirrecta:
	a cada una de las dos partes en que queda dividida una
	recta al ser cortada en cualquiera de sus puntos. 
	Es la parte de una recta conformada por todos los 
	puntos que se ubican hacia un lado de un punto fijo 
	de la recta, denominado origen, a partir del cual se 
	extiende indefinidamente en un solo sentido. 


	Arista:
	geometría, el segmento de recta que limita la cara, 
	también conocida como lado, de una figura plana.

	En la geometría sólida se le llama arista al segmento 
	de línea donde se encuentran dos caras. Un tetraedro, 
	por ejemplo, tiene 6 aristas. Una arista corresponde a
	lo que en lenguaje cotidiano se llama de modo coloquial
	«borde», «filo» o «extremo».

	Línea recta de intersección de dos planos o dos
	superficies de un poliedro que se cortan: 
	la arista de un poliedro es la línea recta en la que se
	cortan dos caras. 


	vértice:
	geometría, punto donde se encuentran dos o más elementos
	unidimensionales (curvas, vectores, rectas, semirrectas
	o segmentos). 

	Vértice de un ángulo:
	punto donde los dos segmentos de línea se unen. 
	El vértice de un ángulo es el punto donde confluyen 
	o se cruzan dos rectas, semirrectas o segmentos.

	Estrictamente hablando, el punto donde se cruzan dos 
	curvas no genera un ángulo, pero generalmente es posible
	calcular el ángulo entre las rectas tangentes a cada
	curva en el punto de cruce (usando cálculo diferencial). 
	-derivadas-


	segmento: 
	fragmento de la recta que está comprendido entre 
	dos puntos, llamados puntos extremos o finales. 

	Así, dado dos puntos A y B, se llama segmento AB a la 
	intersección de la semirrecta de origen A que contiene 
	al punto B con la semirrecta de origen B que contiene al
	punto A. 

	Los puntos A y B son extremos del segmento y los
	puntos sobre la recta a la que pertenece el segmento.



	Triangulos: 

	3 lados, 3 vertices
	area
	angulo interior

	es polígono de tres lados y tres ángulos

	En geometría plana, se llama triángulo, trígono o 
	trigonoide al polígono de tres lados. Los puntos
	comunes a cada par de lados se denominan vértices del 
	triángulo.

	Un triángulo tiene tres ángulos interiores, tres partes 
	congruentes de ángulos exteriores, 2​ tres lados y tres
	vértices entre otros elementos



	Tipos triangulos: 
	pueden clasificar por la relación entre las longitudes
	de sus lados o por la amplitud de sus ángulos. 


	1. Por la medida de sus lados:

	equilatero: 
	los tres lados del triángulo tienen una misma longitud
	(los tres ángulos internos miden 60 grados o π/3radianes).

	isósceles: 
	tienen al menos dos lados congruentes es decir, iguales.
	Los ángulos que se oponen a estos lados tienen la misma
	medida. (Tales de Mileto, demostro una relación entre longitudes y 
	ángulos; lados iguales, ángulos iguales​).

	Un triángulo es isósceles cuando tiene dos lados iguales;
	esto no descarta que los tres lados sean iguales, 
	de modo que todo triángulo equilátero sea isósceles, 
	pero no se cumple el enunciado recíproco.5​

	escaleno: 
	si todos sus lados tienen longitudes diferentes (en un 
	triángulo escaleno no hay dos ángulos que tengan la 
	misma medida).


	2. Por la amplitud de sus ángulos

	Triángulo rectángulo
	si tiene un ángulo interior recto (90°). A los dos lados
	que conforman el ángulo recto se les denomina catetos 
	y al otro lado hipotenusa.

	Triángulo oblicuángulo
	do ninguno de sus ángulos interiores es recto (90°).
	Por ello, los triángulos obtusángulos y acutángulos son
	oblicuángulos. Cualquier triángulo o bien es rectángulo
	o bien oblicuángulo.7​

	Triángulo obtusángulo
	si uno de sus ángulos interiores es obtuso (mayor de 90°);
	los otros dos son agudos (menores de 90°).

	Triángulo acutángulo
	cuando sus tres ángulos interiores son menores de 90°.


	propiedades: 

	En geometría euclidiana10​ la suma de los tres ángulos 
	internos de un triángulo es siempre 180°, lo que 
	equivale a π radianes
	a+b+y=180°=pi

	La suma de las longitudes de dos de los lados de un 
	triángulo es siempre mayor que la longitud del tercer 
	lado.

	Para cualquier triángulo se verifica el Teorema del seno 
	que establece: «Los lados de un triángulo son proporcionales
	a los senos de los ángulos opuestos»:

	Para cualquier triángulo se verifica el Teorema del
	coseno que establece: «El cuadrado de un lado es igual
	a la suma de los cuadrados de los otros lados menos el
	doble del producto de estos lados por el coseno del 
	ángulo comprendido

	pitagoras: 
	Para cualquier triángulo rectángulo, cuyos catetos
	miden a y b, y cuya hipotenusa mida c, se verifica 
	el Teorema de Pitágoras:

	c^2 = b^2 + a^2


	Cálculo de los lados y los ángulos de un triángulo: 

	calcular la longitud de un lado y la medida de un ángulo.
	Mientras que ciertos métodos pueden ser adecuados para 
	calcular los valores de un triángulo rectángulo, otros 
	pueden ser requeridos en situaciones más complejas.

	Para resolver triángulos (en general) se suele utilizar
	los teoremas del seno y del coseno, para el caso especial
	de triángulos rectángulos se utiliza generalmente el 
	Teorema de Pitágoras. 


	Razones trigonométricas en triángulos rectángulos:

	Un triángulo rectángulo siempre incluye un ángulo de 90°
	(π/2 radianes), aquí etiquetado C. Los ángulos A y B 
	puede variar. Las funciones trigonométricas especifican
	las relaciones entre las longitudes de los lados y los 
	ángulos interiores de un triángulo rectángulo.

	las razones trigonométricas del seno, el coseno y la tangente pueden ser usadas para encontrar los ángulos y las longitudes de lados desconocidos. Los lados del triángulo se denominan como sigue, con respecto a uno de los ángulo agudos:

	La hipotenusa es el lado opuesto al ángulo recto. 
	Es el lado más largo de un triángulo rectángulo.

	El cateto opuesto es el lado opuesto al ángulo agudo 
	considerado.

	El cateto adyacente es el cateto que forma el ángulo 
	agudo considerado


	area: 
	Usando un lado, llamado base, y la altura correspondiente,
	es decir, la distancia del vértice opuesto a la recta que 
	el lado define, el área de un triángulo es igual al 
	semiproducto de la base por su altura respectiva.



	Ejercicio: 
	Hacer un programa ingresar por teclado la longitud de los
	tres lados de un triangulo y que luego determine con 
	un cartel a que tipo de triangulo corresponde, equilatero
	cuando los tres lados sean iguales, isoseles cuando dos
	lados sean iguales y escaleno cuando todos los lados sean
	distintos. 


	entrada:
	lado1, lado2, lado3

	cálculo: 

	v---  lado1 == lado2 && lado2 == lado3
	equilatero          
	               

	lado1 == lado2 || lado1 == lado3 || lado2 == lado3
	isoseles


	lado1 != lado2 || lado1 != lado3 || lado2 != lado3
	escaleno



	altern:

	//cond1:
	lado1 == lado2 && lado2 == lado3
	v equilatero      f
	                  |
	//cond2:
	lado1 != lado2 && lado2 !=lado3 || lado1 != lado3
	v escalena        f esoceles


	Ejercicio: 
	Hacer un programa que ingresa cuatro numeros y luego 
	analizar e informar si los mismos se encuentran ordenados
	de forma decreciente



	entrada: 
	n1, n2, n3, n4



	cálculo: 

	//imprimir valores en ord desc:
	v---  n1<n2 && n1<n3 && n1<n4
	n1            
	               

	v--- n2<n1 && n2<n3 && n2<n4

	n2     

	etc       

	//imprimir mensj

	entrada:
	a, b, c, d

	cálculo: 

	v   a>b && b>c && c>d   f
	ordenados             desordebados

	salida:


	planteo mat:
	1 text/problem: pregunt sobre lo que se quiere resolver
	invest
	2 lenguaje mat
	3 expres mat
	4 r3
	5 proporc
	6 de caso part a generico

	1 pregunta
	2 hipotesis
	3 experimentacion
	4 condiciones y restricciones
	5 conclusiones datos extraidos



|| Switch

	Mientras en if podemos hacer condiciones que nos den
	como respuesta verdadero  o falso, concatenerlas y 
	armar condiciones complejas; en switch tenemos una 
	multiple selección. 

	Switch es rombo, dentro ponemos la variable que queremos
	evaluar.

	Switch nos permite evaluar el contenido de una variable. 
	establecemos la variable y luego ponemos tantas opciones
	como valores pueda adoptar la variable para cubrir todos
	los escenarios posibles. 

	Diagrama: 

	     var
	|     |     | 



	Ejemplo: 

	Solicita dos números y distintos valores
	que va a representar la operación que va a realizar 
	el programa: 

	Uno para sumar, los para restar tres para 
	multipllicar y cuatro para dividir. 

	Pedimos esos tres valores/variables y evaluar con el 
	switch cual es la opción seleccionada por la persona que
	este ejecutando la app. 

	Si la opción es 1, el programa va a sumar y guardar el 
	resultado en la variable, sino va a restar, multi y 
	div, etc. 


	entrada:
	a, b, op

	cálculo: 

	  1        2    op    3      4

	r = a+b  r = a-b  r = a*b  r = a/b

	salida: 
	r


	En switch solo podemos evaluar una variable y elegir 
	el camino que corresponda dependiendo de la opción que 
	haya dentro de esa variable. 

	No se puede usar los operadores lógicos para preguntar
	si es mayor, menor, distino y los concatenadores lógicos.  


	Cuando el valor de la variable no corresponde con ninguna
	de las opciones planteadas, usamos default al final 
	del programa. 

	Debemos poner todas las opciones posibles como opciones
	probables haya dentro de la variable. 


	En una cálculadora básica las opciones son 4 (+.-,*,/),
	las opciones dentro del switch tambien. 

	en default elegimos la acción para las opciones al restantes
	no planteadas, no correspondidas, etc. 

	ej, opcion 8, cuando solo hay 4. 


	cuando da verdadero, switch cierra su ejecución. 



	Para tratar los simbolos los tenemos que formatear:

	entrada:
	a, b, op

	cálculo: 

	  '+'    '-'   op   '*'    '/'

	r = a+b  r = a-b  r = a*b  r = a/b

	salida: 
	r



	ej: 
	programa para ingresar un número del 1 al 7 y que 
	nos muestre la nota musical a la cual corresponde. 


	entrada:
	num

	cálculo: 

	 1    2    3  -num-  4    5    6    7   default

	'do' 're' 'mi'     'fa' 'sol' 'la' 'si'  'error'

	salida: 



	ejercicio: 
	una importante marca de computadores permite elegir 
	cierta configuración del equipo a comprar. 
	existe la siguiente escala de precios: 
	    
	ram       procesador
	          i5(1)   i7(2)   i9(3)
	8(1)       800    900     1200
	16(2)      900    1000    1400
	32(3)      1000   1400    2000

	si elegimos i5 y 8ram sería la opcion de procesador 1 
	y opción de ram 1, así podemos configurar la computadora

	además el equipo viene con un disco de 500gb y se puede 
	amplicar a un tera si así lo desea con un costo de 300usd

	Hacer que el programa solicite la opción de procesador, 
	ram y si extiende el disco o no, ingresar 1 para extender
	y 0 para no extender. 

	Debe imprimir por pantalla el monto de la configuración. 


	entrada:
	proc, ram, disc

	cálculo: 
	                   proc
	 1                   2               3  

	'i5'                'i7'            'i9'     
	     
	                    ram            
	 1    2    3     1    2    3     1    2    3
	'8' '16' '32'   '8' '16' '32'   '8' '16' '32'

	p=800 900 1000  p=900 1000 1400  p=900 1400 2000


	                  disc == 1   
	                  '1000gb'
	                   p=p+300

	salida: 
	p

	si pide proc 1 y ram 1, el precio es de 800. 
	si pide 1, 1 y 1; el precio es de 1300. 



|| Bucle for 

	Es un ciclo exacto para iterar (dar vueltas) para volver
	a ejecutar o repetir ciertas instrucciones según la condición. 
	Si necesitamos que algo se repita muchas veces según una
	situación, podemos usar este bucle para ahorrarnos mucho
	trabajo. 

	diagrama: 

	circulo con tres ramas y cuatro secciones. 
	unido a un cuadro. 

	Dentro del bucle for podemos poner cualquier tipo de 
	instrucciones: variables de entrada, salida; cálculos,  
	más condicionales, etc. 

	ej: 

	   for 
	     entrada: 
	      num2
	    
	     calculo: 
	      'hola'
	      num2
	       v-- num1 < num2 --f
	       'jajaj' 
	     
	Si el ciclo for esta configurado para girar 5 veces, las
	instrucciones dentro, se van a ejecutar 5 veces. 

	La programación es secuencial, se ejecuta de arriba hacia
	abajo, nunca vuelve hacia arriba una vez ejecutadas las
	instrucciones. 

	El bucle for se empieza a ejecutar secuencialmente pero
	antes de terminar pregunta si hay más vueltas y si es 
	verdad, vuelve a ejecutarse secuencialmente desde su 
	primera instrucción. 

	El ciclo exacto se configura con una variable, que deter
	mina las instrucciones que tiene que ejecutar el ciclo. 

	En los diagramas suele aparecer con la x, en los lenguajes
	con la i o como segunda variable j. 


	Para configuarlo, primero ponemos la variable que va a 
	manipular el ciclo, como x. 

	Lo siguiente, vamos a parametrizar el ciclo con un 
	conjunto de variables:

	1. inicialización: es el valor inicial de la 
	variable que maneja el ciclo. Puede ser 0 como configura
	ción estandar. 

	x = 0.

	2. condición: preguntar por una situación, escenario 
	entre variables o valores. Podemos usar un operador
	de comparación. 

	x < 10. 

	3. incremento/decremento: modificación o actualización
	de la variable que maneja el ciclo for, para cuando ter
	mine de ejecutar las instrucciones o antes de volver a 
	comenzar las instrucciones y de la vuelta. Podemos usar
	un operador contador como ++/--. 

	x++.


	ej: 

	for 
	 x 
	x = 0 | x < 10 | x++

	 entrada: 
	  num1

	 calculo: 
	  'hola'
	  num2
	   v-- num1 < num2 --f
	 'jajaj' 


	ej sin bucle: 
	imprimir una vez hola mundo: 

	inicio
	'hola mundo!'
	fin 


	ej sin bucle: 
	imprimir 5 veces hola mundo!: 

	inicio
	'hola mundo!'
	'hola mundo!'
	'hola mundo!'
	'hola mundo!'
	'hola mundo!'
	fin 


	ej con bucle:
	imprimir 10 veces 'hola mundo!' pero escribiendolo una
	vez o utilizando una su instrucciones una vez: 

	for 
	 x 
	x = 0 | x < 10 | x++

	 'hola mundo!'


	Inicializamos la variable, el ciclo for pregunta por 
	el valor o contenido de la variable y si es verdadero 
	entra al ciclo para ejecutar las instrucciones 
	secuencialmente de arriba hacia abajo. 

	Cuando llega al final, el ciclo incrementa la variable 
	ahora que tiene un nuevo vkalor va a preguntar si este 
	nuevo valor cumple con la condición para volver a 
	ejecutar las instrucciones hasta que no cumpla con la 
	condición.


	ej: 
	ingresar tres números y mostrar un promedio en pantalla

	entrada: 
	num1, num2, num3 

	cálculo: 
	r = (num1+num2+num3)/3

	salida: 
	r



	ej: 
	ingresar 5 números y mostrar un promedio en pantalla

	entrada: 
	num1, num2, num3, num4, num5

	cálculo: 
	r = (num1+num2+num3+num4,num5)/5

	salida: 
	r


	ej: 
	ingresar 100 números y mostrar un promedio en
	pantalla

	Podriamos crear 100 variables en un ingreso

	o podriamos escribir 100 ingresos con una variable en 
	cada ingreso para pedir los 100 valores


	Cuando tenemos que hacer muchas instrucciones repetiti
	vas podemos usar un bucle



	Usamos el for para no escribir 100 ingresos con una
	variable distinta en cada ingreso. 

	El objetivo es reemplazar el elemento repetitivo. 

	Escribimos una sola instruccion de ingreso con una sola 
	variable:


	Pedimos n y lo ponemos dentro de un bucle for que de 100
	vueltas:


	inicio

	entrada: 


	cálculo:

	// el ciclo for va a dar 100 vuletas (x<100), entonces,
	n se va a ejecutar 100 veces. 

	 for 
	  x
	  x=0 | x<100 | x++
	   
	    entrada:
	       n
	 
	    cálculo: 
	  

	    salida: 
	     r

	Con este código: 

	// El ciclo for empieza en 0 (x=0) -no queremos que 
	empieze por el ingreso 50-, al chequear 0 < 100 entra 
	en las instrucciones del bucle, son los elementos que 
	queremos que se repitan. 

	// Acá el programa le pide un número al usuario, que es
	justo el elementos repetitivo y se guarda en la variable
	n. 

	// Ante de la vuelta, incrementa x (x++), para volver a 
	preguntar. Ahora x tiene 1 (x = 1) que es menor que 100, 
	vuelve a salir en cartel de ingreso y se guarda otro 
	numero distinto y pisa al anterior. 

	// Ahora necesitamos entender que hacer con los valores
	en cada vuelta y con el problema que queremos resolver. 

	// Para un promedio no necesitamos tener 100 valores al 
	mismo tiempo. 

	// Tenemos que sumar los 100 elementos y dividirlos por
	100

	// Con este código, n (ingreso número) que se repite 100
	veces, tenemos que guardar su valor antes de que
	el ciclo for de un vuelta y lo pierda. 

	// Necesitamos un acumulador (var+=, var-=, var*=, etc), 
	una variable como acumulador antes de que se inicie el
	ciclo: acu = 0. 


	inicio

	acu = 0


	entrada:


	cálculo: 

	for 
	  x
	  x=0 | x<100 | x++
	   
	    entrada:
	       n

	    acu += n    

	    cálculo: 
	  

	    salida: 


	// Ahora antes de que de la vuelta y se pierda el valor, 
	n se guarda en una sola variable acumuladora (acu) que
	va sumando. 

	// El ciclo for vuelve a chequear su variable x, 
	para volver a entrar al código; ahora si número de n 
	se perdió pero se guardó en acu+=. 


	promedio = acu/100


	salida: 

	promedio



	fin

	// A la salido el ciclo hacemos el cálculo, lo asignamos
	a una variable y al final mostramos esa variable. 


	Configuración estandar de indices: 
	en programación los indices (posición/ubicación) empiezan
	en 0, por eso la condicón es x < 100 y no x <= 100
	por que de 0 a 99 hay 100; el 0 es el 1. 





	planteo mat:

	1 text/problem: pregunt sobre lo que se quiere resolver
	invest

	ingreso 100 num, promedio

	2 lenguaje mat:

	3 expres mat:

	4 r3:

	5 proporc:

	6 de caso part a generico:


	1 preguntas e investigación:

	herramientas: for, switch 
	100 var 
	goog

	2 hipotesis:


	3 experimentacion:


	4 condiciones y restricciones:


	5 conclusiones datos extraidos:




	inicio

	acu = 0

	entrada:

	cálculo: 

	for 
	  x
	  x=0 | x<100 | x++
	   
	    entrada:
	       n

	    acu += n    

	    cálculo: 
	  

	    salida: 

	promedio = acu/100

	salida: 

	promedio = acu/100

	fin



|| Ejercicios for: 


	Ejercicios: 
	el programa requiere el ingreso de 10 números y que 
	muestre el mayor de ellos en pantalla. 
	Solo se debe emitir un valor por pantalla. 



	con if se hace de la siguiente manera: 

	Ejercicio: 
	Hacer un programa para ingresar 4 num distintos y luego 
	mostrar por pantalla el mayor de ellos. 


	entrada:  
	num1, num2, num3, num4

	cálculo: 
	v---  num1>num2 &&  num1>num3 && num1>num4 --f 

	m= num1       v   num2>num1 &&  num1>num3 && num1>num4  f  f

	            m=num2                                etc

	salida: 



	Alternativa: 

	//nos pregunta el maximo de ellos, lo evaluamos indirect
	mente todos contra todos. 
	Se hace por partes, preguntamos el primer par y vamos
	guardando el maximo.  Para el falso, decimos el el otro
	num es el maximo y cerramos el condicional. 

	//En el segundo condicional preguntamos por el tercer
	valor si es mayor al maximo. no usamos el falso. 

	//tercer condicional, preguntamos por el cuarto num si es
	mayor al max, no usamos el falso. 


	entrada:  
	num1, num2, num3, num4

	cálculo: 

	v---  num1>num2  ---f 

	m= num1            m=b
	               

	v---  num3>max

	m= num3            


	v---  num4>max

	m= num3            


	salida: 
	m


	Ejercicios: 
	el programa requiere el ingreso de 10 números y que 
	muestre el mayor de ellos en pantalla. 
	Solo se debe emitir un valor por pantalla. 

	usamos var m (max) para guardar y comparar el resto
	de condiciones

	contador: var++
	acun: var1+=var2
	          

	//1. quiero que se repita 10 veces
	en cada vuelta muestre una entrada
	guardar el valor 

	//2. comparar todos los valores entrados
	y mostrar el mayor. 

	//3. al final bucle, cálculo


	inicio

	max = 0 

	for 
	  x
	  x=0 | x<10 | x++
	   
	    entrada:
	       n   

	    cálculo: 
	     
	      v-- n>max-- f
	      
	      max=n   
	 
	    salida: 
	    

	salida: 


	fin

	//una vez que el ciclo pida un numero, preguntamos si 
	ese número es mayor al max, si es verdad que es mayor
	reemplazamos max por n. 

	//una vez que termina el ciclo, mostramos lo que quedo
	dentro de la variable max (solo el número max)
	dado el ingreso y la condición. 

	//Pero hay un problema, si el usuario ingresa un número
	más chico que cero, el programa no lo registra. 
	Tenemos que hacer que las entradas sean dinamicas. 

	//En un contexto dinamico, el punto de partida no puede
	ser 0, entonces, tomamos el primer elemento que tengamos
	en nuestra lista; si tenemos 10; el primero que tenga
	va a ser el maximo, minimo, unico, la situación que sea. 

	//Guardamos ese número y lo que venga a continuación lo 
	comparamos contra nuestro primer elemento. 

	//Encontrar el primer número/elemento: (estamos frente
	a 10, no sabemos cuál va a ser el primero)

	//Entonces, creamos el ciclo requerido, con el indice
	del propio ciclo podemos modificar desde dónde va a 
	empezar el mismo ciclo. 

	//Podemos preguntar el valor del indice del ciclo para
	saber su posición:



	inicio

	//no creamos un acum o cont, entramos en el bucle 
	al principio. 

	//pedimos un ingreso, después tenemos que averiguar 
	a qué vuelta o posición corresponde n, la entrada, etc. 

	//preguntamos cuanto vale x(indice, posición bucle)
	x == 0 (si estamos en la primera vuelta del ciclo)
	entonces, el max es n. 

	//no la cambiamos para que no se rompa el ciclo que maneja. 


	for 
	  x
	  x=0 | x<10 | x++
	   
	    entrada:
	       n   

	    cálculo: 
	     
	      v-- x==0-- f
	      
	      max=n      v-- n>max --f
	                   
	                 max = n

	    salida: 
	    

	salida: 
	 
	max

	fin

	//si estamos en la primera vuelta del ciclo, guardamos n 
	como max. 

	//si no es la primera vuelta, quiere decir que x 
	no vale 1 y que tenemos un valor max de n (primer elem
	guardado como max) 

	//cuando es falso, preguntamos si el nuevo número es 
	mayor al max

	//si es verdadero, reemplazamos el max otra vez, si es
	falso

	//cerramos el bucle y al final mostramos max. 


	Ejercicio:
	hacer un programa que solicite 20 números y cálcule y 
	emita por pantalla cuantos son positivos (mayores a 0)
	mostrar un solo valor, el conteo final. 

	//tenemos muchos números y además nos pide un contador

	//1. cargamos los números, iniciamos un bucle de 20 
	vueltas. 

	//2. el bucle pedirá un ingreso que se ejecutará 20 veces

	//3. cuántos son positivos: preguntamos por si la 
	entrada es positiva

	//4. el contador tiene que inicializarce en 0 afuera
	del ciclo y al inicio del programa. 
	 
	inicio

	contador = 0 

	entrada:

	cálculo: 

	for 
	  x
	  x=0 | x<20 | x++
	   
	    entrada:
	       n

	    cálculo: 
	     
	     v-- n>0-- f

	    salida: 


	salida: 

	contador

	fin



	Ejercicio: 
	programa para mostrar los números del 1 al 10, no se debe
	realizar ningún pedido de datos. 

	//Podemos modificar al configuración del ciclo
	x distinto de 0, 


	inicio

	num = 0

	entrada:

	cálculo: 

	for 
	  x
	  x=1 | x<=10| x++

	    entrada: 
	    

	    cálculo: 
	  

	    salida:    

	salida: 

	x

	fin


	// en la primer vuelta va a valer 1, así hasta 10 

	//cuando el indice sea 11, sale del bucle y muestra los 
	números del 1 al 10. 


	Ejercicio: 
	mostrar los números del 10 al 1, no se debe realizar 
	ningun pedido de datos. 

	//1. modificamos el indice, arranca en 10 y cambia la 
	condición del bucle, x>0 y x--


	inicio

	num = 10

	entrada:

	cálculo: 

	for 
	  x
	  x=10 | x<0 | x--
	   
	    entrada:
	      

	    cálculo: 
	  

	    salida: 


	salida: 
	x

	num

	fin




	Ejercicio: 
	solicitar un numero y luego calcule y emita un cartel 
	aclaratorio si el mismo es primo o no es primo. 
	primo(divisible por 1 y si mismo)

	//No todos los número son primos, dado que son divisibles
	por otros números. 

	// vamos a chequear cuantas veces es divisible un número
	si es divisible solo por 1 y si mismo, es primo, 
	dos veces. si es divisible más de dos veces no es primo 

	//pedimos entrada, dividimos tantas veces como el número
	sea, contar cuantas veces fue divisible y mostrar. 


	inicio

	contador = 0

	entrada:
	n

	cálculo: 


	for 
	  x
	  x=0 | x<100 | x++
	   
	    entrada:


	    cálculo: 
	     
	     v-- n%x == 0 --f
	     
	     contador ++

	    salida: 


	v-- contador == 2 --f

	'primo'             'no es primo'


	salida: 
	    
	fin


	//no tenemos una entrada que se repite, lo que se va a 
	repetir el la cantidad de divisiones que soporta la entrad

	//inicializamos el bucle en 1, va a ir hasta la entrada n
	y x sumará de a 1

	//preguntamos si n es divisible, desde 1 hasta n

	//Usamos el operador de resto entre n y x
	si el resto de dividir x entre n es igual a 0
	n%x == 0

	// n será divisible por lo que este en ese momento 
	posición de x. 

	// si es verdadero (divisible) contador++

	// al final preguntamos cuando n va a ser primo,
	si el contador es igual a 2

	v--contador == 2--f




	Ejercicio: 
	programa que solicite 10 números y luego mostrar por
	pantalla el maximo de ellos y la posición en la que fue
	ingresado. 

	//tomar el primero numero como maximo para comparar
	cuando sea la primera vuelta comparando con el indice
	del bucle

	//como siempre va a haber un max a la primera vuelta
	queda establecido y en la segunda vuelta ya se 
	compara con n (entrada)

	//mostrar posición del mayor: asignamos como posición 1
	al primer elemento capturado (mayor) y la guardamos 
	variable

	//en las siguientes vueltas del bucle preguntamos si el 
	nuevo número en n es mayor al max. si es verdadero 
	reemplazamos al max. 

	//para el verdadero tambien vamos a reemplazar la posición
	vamos a correguir el valor desfazado de x, no podemos 
	asignarlo a mano porque no tenemos la seguridad como 
	en el primer número. 

	//en la vuelta 0 de x, sabemos que va a ingresar el 
	primer elemento, en la vuelta 1 va a ingresar el segundo
	acá es cuando vemos el desfazaje: 
	 
	mostrar posición: 
	 vuelta 1 -> x=0 -> primer elemento -> posición = 1
	 vuelta 2 -> x=1 -> segundo elemento -> posición = x+1
	  
	vemos que si ponemos posición = x va a ser 1, que ya 
	 la tenemos en primera vuelta, por eso es posición = x+1
	 

	inicio: 

	for 
	  x
	  x=0 | x<10 | x++
	   
	    entrada:
	       n   

	    cálculo: 
	     
	      v-- x==0-- f
	      
	      max=n      v-- n>max --f
	      pos=1    
	                 max = n
	                 pos = x+1

	    salida: 
	    

	salida: 
	 
	max, pos

	fin



	Ejercicio: 
	programa que solicite 20 numeros y luego mostrar por
	pantalla el minimo de ellos y la posición en la que 
	fue encontrado.

	//tomar el primero numero como maximo para comparar
	cuando sea la primera vuelta comparando con el indice
	del bucle

	//como siempre va a haber un max a la primera vuelta
	queda establecido y en la segunda vuelta ya se 
	compara con n (entrada)

	//mostrar posición del mayor 

	inicio: 

	for 
	  x
	  x=20 | x<=20 | x--
	   
	    entrada:
	       n   

	    cálculo: 
	     
	      v-- x==20-- f
	      
	      min=n      v-- n<min --f
	      pos = 1
	                 min = n
	                 pos = x-1
	    
	    salida: 
	    

	salida: 
	 
	max, pos

	fin



	altern: 

	for 
	  x
	  x=0 | x<20 | x++
	   
	    entrada:
	       n   

	    cálculo: 
	     
	      v-- x==0-- f
	      
	      max=n      v-- n<max --f
	      pos = 1
	                 min = n
	                 pos = x+1
	    
	    salida: 
	    
	salida: 
	max, pos


	Ejercicio: 
	programa que solicite 20 edades y luego calcule el 
	promedio de edad de aquellas personas mayores a 18. 

	prom = suma total/cant valores
	prom = entrada acumulada de mayores /20 

	//tomar el primero numero como maximo para comparar
	cuando sea la primera vuelta comparando con el indice
	del bucle

	//como siempre va a haber un max a la primera vuelta
	queda establecido y en la segunda vuelta ya se 
	compara con n (entrada)

	//mostrar posición del mayor 

	inicio: 
	cont = 0 
	acum = 0 

	entrada: 

	cálculo: 

	for 
	  x
	  x=0 | x<20 | x++
	   
	    entrada:
	       n   

	    cálculo: 
	     
	      v-- n>18-- f
	      cont++
	      acum+=n    
	                             
	    salida: 
	   
	prom = acum/cont 

	salida: 
	 
	prom

	fin

	//como no sabemos cuantas personas van a ser mayor de 
	18, no podemos dividir para sacar el promedio por eso
	debemos usar un contador para sacar ese valor




	Ejercicio: 
	programa que solicite 20 numeros y luego emitir por 
	pantalla el maximo de los numeros pares y el minimo
	de los numeros impares. 

	pares: %/2 == 0 

	//tomar el primero numero como maximo para comparar
	cuando sea la primera vuelta comparando con el indice
	del bucle

	//como siempre va a haber un max a la primera vuelta
	queda establecido y en la segunda vuelta ya se 
	compara con n (entrada)

	//necesitamos dos resultados: 
	el maximos de los pares y el minimo de los impares
	buscamos dos valores, max y min. 

	//discriminar grupos: 
	tenemos 20 num, pero hay/necesitamos los pares e impares

	1. preguntar si la entrada es un numero par (verdaero): 
	n%2 == 0 (resto de dividir el num por dos es 0, es par)

	2. por el falso será impar. 

	3. buscar max y min: tanto para el max y min tenemos
	que tomar la primera entrada. Acá no podemos usar x 
	x==0 para tomar la primera entrada y guardarla. 
	porque no sabemos cuando x vale (indice) 0. 
	x solo puede valer 0 una vez. 
	si ingresamos un número y ademas es par, que no está 
	garantizado que sea 0; no podemos saber si es par o no. 
	no podemos inicializar pensando en la primera vuelta:
	n%2 == 0 &&  ni x==0, dificiles de cumplir

	Debemos inicializar pensando en cualquier número. 

	4. variable bandera: 
	no podemos saber cuando el usuario va a entrar un numero
	par o impar. 
	usamos una variable auxiliar para marcar el camino. 
	la inicializamos en un valor que vamos a decidir y luego
	preguntar si ese valor está en esa condición. 

	Es una variable con un tipo de dato booleano (t,f o 1,0)



	inicio: 

	bi= 0
	bp= 0
	for 
	  x
	  x=0 | x<20 | x++
	   
	    entrada:
	       n   

	    cálculo: 
	     
	      v --            n%/2            -- f
	      
	      v   bp==0      f               v--  !bi  --f
	        
	      maxP=n     v   n>maxP  f       minI=n   v n<minI f
	      bp= 1                          bi=1     minI=n
	                 maxP=n
	                 

	salida: 
	 
	maxP, minI 

	fin

	//creamos una bandera de impares con valor 0 y creamos
	una bandera de pares con valor 0 tambien. 

	//no preguntamos por la primera vuelta (x==0), preguntamos
	si tenemos un par, para saberlo, preguntamos cuanto vale
	la bandera (bp==0); por verdadero quiere decir que no 
	hay ningún valor par. Determinamos por maximo par a n. 
	y a la bandera de pares le cambiamos el valor a 1. 

	//para el falso de la bandera par preguntamos si n>maxpar
	nuevo valor mayor al maximo para que determinamos al 
	principio. Para verdadero (mayor que el anterior)
	actualizamos el valor de maxpar = n

	//para el falso del impar n%2==0, preguntamos por la 
	bandera de impar. 

	alternativa: 
	si una variable booleana tiene un verdadero o un falso
	si la ponemos en un if va a ir por el valor que tenga. 
	bi y bp tiene un 0 (inicializado) que es falso. 
	entonces, necesitamos que se vaya al verdaero como hicimos
	con bp, usamos un operador negado (!) negando el valor 
	que tiene, invertirlo. 

	"si bi tiene falso, !bi hace que que sea verdadero. 
	guardamos minimo impar como n y cambiamos la bandera impar
	de valor a 1 (en verdadero)

	cuando la bandera este en 1 va a ir para el falso
	ahí preguntamos si n<minino impar



	Ejercicio: 
	programa para ingresar 10 numeros y luego calcule y emita
	el mayor de los primos de la lista. En caso de no haber
	ningun numero primo, deberá aclararlo con un cartel. 

	//podemos crear un ciclo dentro de otro.
	el primero nos permite pedir los 10 numeros. 

	//tenemos que preguntar si la entrada es num primo. 
	hacemos un for, dividirlo, contar; si contaba dos veces
	era primo, si contaba más no lo era. 

	//cuando es primo lo guardamos como max, el primer num
	primo que aparezca va a ser el max, los siguientes se 
	comparan contra ese max. 

	//no sabemos si el primer num primo que va a aparecer 
	en la primera vuelta. 
	x ==0 no nos sirve para tomar el primer num


	inicio
	primo = 0 
	entrada: 

	cálculo: 

	for
	x
	x=0 | x<10 | x++

	 entrada: 
	  n
	 
	 cálculo: 
	   for
	   y=1 | y<=n | y++
	   
	   inicio: 
	    con= 0
	 
	   entrada: 

	   cálculo: 
	    
	       n%y == 0 //resto de dividir y con n es 0, es divisible
	    v            f
	    con++


	     con == 2 
	  v           f

	v  !primo  f
	  
	mP=n     v   n>mP  f
	primo=1  m==N


	salida: 
	mP

	fin

	//primero calculamos un numero primo con otro for

	//con el primer for pedimos los 10 numeros, 

	//con el segundo for en cada uno de los 10 num, 
	lo inicializamos en 0, dividimos, si es verdaero 
	contamos, sino no contamos. 

	//el siguiente bloque de código con == 2 preguntamos si 
	es primo, con lo contrario. 




|| leetcode problems 

	cons1: ve a entrev de empres que no te interesan para 
	practicar ejerc y entrev. no hay contidad de código
	algoritm, que te haga sentir comodo frente a la pizarra. 
	salvo la sintax
	 |te pregunt como resolverias esto, aquello, etc|
	 |que conceptos usarías|

	2. no es necesario resolver tantas pruebas

	-/subconjuntos

	3. errores: 
	no comprender los fundamentos, despues intentas resolver
	problema sin saber como funciona te genera caos. 

	estructuras de control, datos y algoritmos (repasar
	los de thinking python): 
	busqueda binaria, 
	busqueda binaria arbol
	busqueda binaria array
	no array sort
	(sin confundir dónde haces el ++/+1 es simple, piensa)

	--
	array
	linked list
	stacks
	queues
	hashmap
	priority queues
	graphs

	sorting
	binary search
	greedy
	recursion
	dynamic programming
	dfs bes (algoritm recorrido)

	no es necesario estudiar nada avanzado, 

	-threes avl son geniales-
	-geeks for geeks es trash-

	o es necesario estudiar nada avanzado, te consumiran mucho
	tiempo y segundo, realmente en la entrevista preguntan


	cuantos problemas resolver: 
	easy
	medium
	hard

	60-70

	cada dificultad

	300 dificiles en total

	50%medium

	-cada problema se puede resolver en distintos nivelesl-

	--
	buen curso data estructures, algoritmos, entender todos 
	los fund y resolver 50 problemas de leetcode en facil y 
	medio con orientación a matrices. 
	los de matrices los más dificiles y son los más comunes. 
	experiencia en DP y luego ir por las entrevistas.

	rebotar tres entrevistas = a hacer 1000 problemas
	aprendes lo que te preguntan. 
	dp = programación dinamica

	--
	30% easy
	50% medium
	20% hard


	problemas ntop seleccionados
	principales top liked questions
	resolverlas


	Cómo resolver problemas: 
	 
	comprender el problema
	escribirlo en un papel 
	visualizarlo en mente
	ejecutar ejemplos de entrada y salida
	piense y escriba su en un papel

	despues de que crea que su solucion funcionará ejecutela
	en el código principal y compare su desempeño con otros. 

	--
	ignorar comparación dado que lo optimiza en manera
	increible, puedes ejecutar la misma solución tres veces
	y puedes pasar del 100 al 0 instantaneamente

	siempre debes tener un papel para dibujar y pensar

	en tercer lugar lo trataría como una entrevista
	tomar el papel como si fuera una pizarra: 

	escribir el problema, hablar en voz alta como enseñandole
	describiendo sus pasos proceosos.

	y despues pasarlo a leetcode

	--

	seguir buenas practicas para algoritmos: 
	nombres variables


	--
	buena entrevista: 
	hablar de lo que estas pensando mientras resolves
	para junior incluso si lo sigues intentando aunque no 
	salga. 

	los malos senior son preocupantes cuando no planean 
	e improvisan.
	--


	tiempo: 
	si no puedes resolver el algoritmo en una hora mirar 
	las sugerencias y las soluciones, ir a seleccion de 
	discusión y vea otras soluciones. 



	utilizar el foro de discusión para mandar el problema 
	despues lea la solucion oficial, ir a discusión e intente
	entender otras soluciones. 

	--
	si copias y pegas de stackoverflow para hacer el trabajo
	te reemplaza la ai. 
	buscar las cosas una y otra vez es un problema

	--



	usar notion para cerar una lista de problemas y trackearlo

	titulo acceptance% dificuly status notes


	participar concursos de leetcode contest
	leads queue/quod


	tiempo cronometro te mete en competencia
	resolver problemas medios en 25min



	ningun código es legible de pies a cabeza
	si refactorizas algo que andas solo es porque no te gusta
	como está escrito y despues viene otro a refactorizarlo
	otra vez por no la gusta la forma. 


	resolver problemas, no crear cosas para resolver problemas
	inexistentes.


	no proyectos copy, aprende a códificar bien:
	estructuras de control, datos y algoritmos (repasar
	los de thinking python): 
	busqueda binaria, 
	busqueda binaria arbol
	busqueda binaria array
	no array sort
	(sin confundir dónde haces el ++/+1 es simple, piensa)

	--
	array
	linked list
	stacks
	queues
	hashmap
	priority queues
	graphs

	sorting
	binary search
	greedy
	recursion
	dynamic programming
	dfs bes (algoritm recorrido)



|| While

	Ciclo inexacto que significa mientras
	al contrario del ciclo for era exacto

	Nos permite iterar o girar o repetir instrucciones 
	como el ciclo o bucle for; tantas veces como necesitemos. 

	Acá no le decimos la cantidad de vueltas que va a dar

	Le damos una condición para que entre al bucle 
	y ejecutará esas instrucciones y saldrá cuando ya no 
	suceda esa condición.


	diagrama: 

	adentro de una caja, en la parte superior hay un
	rectángulo. 

	la configuración de while es solo una condición. 

	El ciclo for puede configurar la variable de inicio
	del ciclo, la condición para la variable y contador
	de vueltas o incremento: 
	x=0, x<10, x++

	El ciclo while solo se queda con la condición: 
	x<10

	Como en el condicional if que solo hay condiciones. 


	//if, contador, acumulador, for, bandera(boolean)


	While/mientras se cumpla la condición, ejecuta 
	las instrucciones y gira. 

	es un poco más simple. 

	Cuando cambia la variable controladora/condición saldrá
	del bucle. 


	ej: 

	inicio
	n=0

	entrada: 

	cálculo: 
	while
	 n<10
	 

	salida: 


	fin

	//primero evaluará la condición n<10, entra y ejecuta
	las instrucciones. 

	//en este ejemplo entra al bucle pero no cambia n, es 
	infinito. 

	//no hay un acumulador de valor o contador para cambiar
	la variable controladora, solo está vacio. 



	Si hacemos un while con la condicion n!=0 (distinto) y 
	una variable en 10:

	inicio
	n=10

	entrada: 

	cálculo: 
	while
	 n!=10
	 

	salida: 

	fin

	//es falso, no va a entrar. 


	Si hacemos un while con la condicion n==10 (distinto) y 
	una variable en 10:

	inicio
	n=10

	entrada: 

	cálculo: 
	while
	 n==10
	 

	salida: 

	fin

	//es verdadero, va a entrar. 

	//al llegar al final, vuelve a preguntar por la variable
	controladora como el programa está vacio, no cambió la 
	variable queda un bucle infinito. 


	Conclusión: 
	El while va a funcionar/iterar, mientras la condición 
	no cambie o siga igual. 



	ej: imitar el for

	//for
	//x
	//x=0 | x<10 | x++


	inicio
	n=0

	entrada: 

	cálculo: 
	while
	 n<10
	 
	 entrada:      

	 cálculo: 
	  n++

	salida: 

	fin


	//1 vuelta: n=0 cumple con n<10, entra y suma
	//2 vuelta: n=1 cumple con n<10, entra y suma


	Conclusión: 
	El ciclo while puede tender a infinito


	El ciclo for puede tender a infinito haciendo: 
	x=0, x<10 y x--

	Acá siempre va a ser menor a 10, entonces, nunca va a 
	para de repetirse.

	Pero es más facil configurar mal un ciclo while que 
	un ciclo for. 


	ejemplo while: 
	programa para ingresar numeros sin limitar el cantidad
	de entradas y cortar la entrada cuando ingrese el 
	numero 0

	//entrada

	//condicion 

	//cont, acum, bandera


	inicio
	n       //controla ciclo while
	entrada: 

	cálculo: 
	while     //mientras sea distinto de 0 repeti entrada n
	 n!=0
	 
	 entrada:      
	  n

	 cálculo: 
	 
	salida: 

	fin

	//inicia el programa, pedimos un número, ciclo while
	mientras sea n!=0 (distinto de 0) entramos al ciclo. 

	//entramos al ciclo para volver a pedir numero, despues
	vuelve a preguntar n!=0.

	//Va a dejar de pedir el numero cuando n sea 0.

	 
	Está es una configuración estandar para muchas practicas
	y ejercicios. 



	ej: cargar edad de todas las personas del curso de 
	programación


	inicio
	e       //controla ciclo while
	entrada: 

	cálculo: 
	while     //mientras sea distinto de 0 repeti entrada e
	 e!=0
	 
	 entrada:      
	  e       

	 cálculo: 
	 
	salida: 
	e

	fin

	//cuando termine de cargar, ponemos un 0 para cortar el 
	bucle. 

	//se cargaron indefinidas edades, las que se necesite
	en el momento. 

	//la persona que ingresa datos, corta el ciclo. 



	ej: cargar edad de todas las personas y buscar un 
	promedio de todas las personas que sean mayores de 
	25 años

	//cont, acum, bandera, segregación

	inicio
	e       //controla ciclo while
	acu=0
	con=0
	entrada: 

	cálculo: 
	while     //mientras sea distinto de 0 repeti entrada n
	 e!=0
	 
	  v-- e>25 --f //pregunta si e>25 acumula la entrada y
	                  contá cuantos son    
	  acu+=e
	  con++       

	   salida:
	    e        //sino no pasa nada y vuelvo a pedir e

	p=acu/con

	salida: 
	p

	fin

	//pedimos edad al inicio
	//mientras sea distinto de 0
	//si es mayor a 25 acumular y contar
	//sino no hago nada y vuelvo a pedir e

	//cuando la persona encargada de cargar los datos pone 
	0, se guarda todos los datos en acu y cont 

	//el programa calcula promedio 

	//el programa muestra promedio




	|| Do While

	el diagrama está al revés
	empiezan las instrucciones y al final la condición

	Hacer cosas hasta que no se cumpla la condición

	primero ejecuta una vuelta y después pregunta si 'continua'


	ej: cargar numeros indefinidamente, hasta cortar el ciclo 
	con un comando. 


	//cont, acum, bandera

	inicio

	entrada: 

	cálculo: 
	do while    
	 
	 entrada:      
	  n       //pide entrada, controla do while

	 cálculo: 
	 
	 n!=0  //mientras sea distinto de 0 repeti entrada n



	salida: 

	fin

	//la diferencia está en que al numero lo pedimos entro 
	del ciclo do while 

	//en while lo pediamos afuera, preguntabamos por la 
	condición y lo volviamos a pedir adentro. 



	Ciclos más utilizados: 
	while, for y for each


	Usos: 

	Cuando sabemos la cantidad exacta de iteración o vueltas
	que tenemos que dar usamos un for. 

	Cuando no las sabemos usamos un while. 





	|| Conceptos

	mayor, menor, desc porcent,  prom, par/impar, posición, 


	1. Mayor/Menor:

	a>b 
	  b>a


	num>10



	inicio: 
	cont = 0 
	acum = 0 

	entrada: 

	cálculo: 

	for 
	  x
	  x=0 | x<20 | x++
	   
	    entrada:
	       n   

	    cálculo: 
	     
	      v-- n>18-- f
	      cont++
	      acum+=n 



	2. Porcent y Desc:


	importe>5000
	 iF= importe*0,82  
	      importe>1000
	           iF =importe*0,90




	3. Prom: 

	(nota1 + nota2 + nota3)/3


	inicio
	acu = 0

	for 
	  x
	  x=0 | x<100 | x++
	   
	    entrada:
	       n

	    acu += n    

	promedio = acu/100




	4. Par/Impar:
	r = num%2
	   r==0




	5. Max/Min:

	entrada:  
	num1, num2, num3, num4

	cálculo: 

	v---  num1>num2  ---f 

	m= num1            m=b
	               

	v---  num3>max

	m= num3   



	inicio

	max = 0 

	for 
	  x
	  x=0 | x<10 | x++
	   
	    entrada:
	       n   

	    cálculo: 
	     
	      v-- n>max-- f
	      
	      max=n  




	inicio: 

	bi= 0
	bp= 0
	for 
	  x
	  x=0 | x<20 | x++
	   
	    entrada:
	       n   

	    cálculo: 
	     
	      v --            n%/2            -- f
	      
	      v   bp==0      f               v--  !bi  --f
	        
	      maxP=n     v   n>maxP  f       minI=n   v n<minI f
	      bp= 1                          bi=1     minI=n
	                 maxP=n
	                 



	6. posicion: 


	inicio: 

	for 
	  x
	  x=0 | x<10 | x++
	   
	    entrada:
	       n   

	    cálculo: 
	     
	      v-- x==0-- f
	      
	      max=n      v-- n>max --f
	      pos=1    
	                 max = n
	                 pos = x+1





	7. primo: 

	inicio

	contador = 0

	entrada:
	n

	cálculo: 


	for 
	  x
	  x=0 | x<100 | x++
	   
	    entrada:


	    cálculo: 
	     
	     v-- n%x == 0 --f
	     
	     contador ++

	    salida: 


	v-- contador == 2 --f

	'primo'             'no es primo'





	inicio
	primo = 0 
	entrada: 

	cálculo: 

	for
	x
	x=0 | x<10 | x++

	 entrada: 
	  n
	 
	 cálculo: 
	   for
	   y=1 | y<=n | y++
	   
	   inicio: 
	    con= 0
	 
	   entrada: 

	   cálculo: 
	    
	       n%y == 0 //resto de dividir y con n es 0, es divisible
	    v            f
	    con++


	     con == 2 
	  v           f

	v  !primo  f
	  
	mP=n     v   n>mP  f
	primo=1  m==N









	|| Ejercicios While


	Ejercicio: 
	programa para mostrar numeros del 1 al 10, no se debe 
	realizar ningún pedido de datos



	Ejercicio: 
	programa para mostrar los números del 10 al 1, no se debe
	realizar ningun pedido de datos. 




	Ejercicio: 
	programa que solicite la edad de un grupo de personas 
	el programa deberá pedir edades hasta que se ingrese 
	una edad menor a 18 y debera mostrar por pantalla cuantas
	personas mayores que registraron. 




	Ejercicio: 
	programa que solicite dos numeros y luego muestre los 
	numeros entre el menor y el mayor de ellos. 





	Ejercicio: 
	programa que muestre los numeros 1 al 100, de 5 en 5




	Ejercicio: 
	programa que solicite un numero y un numero 1 y luego 
	calcular y emitir un cartel para saber si el primo o no




	Ejercicio: 
	programa que solicite una lista de numeros y corta cuando
	se ingresa un 0 y luego mostrar por pantalla el max de 
	ellos y la posición en la que fue ingresado. 




	Ejercicio: 
	programa que solicite una lista de numeros que corta 
	cuando se ingresa un 0 y luego mostrar el menor 
	y el segundo menor. 





	Ejercicio: 
	realizar el ejercicio anterior pero además tenemos que 
	devolver la posición en la que fue ingresado cada uno 
	de los minimos 

	//minimo y segundo minimo




	Ejercicio: 
	programa que solicite una lista de numeros que corta 
	cuando se ingresa un 0 y luego emitir por pantalla
	el maximo de los numeros negativos y el minimo de los 
	numeros positivos. 


	//maximo de los negativos y el minimos de los positivos
	//segregar datos




	Ejercicio: 
	programa para ingresar una lista de numeros que corta
	cuando se ingresa un 0 y luego mostrar la cantidad 
	de numeros primos, la cantidad de numeros pares y la
	cantidad de numeros positivos y la cantidad de negativos


	//cont, acum, bandera, segregación

	inicio
	e       //controla ciclo while
	acu=0
	con=0
	entrada: 

	cálculo: 
	while     //mientras sea distinto de 0 repeti entrada n
	 e!=0
	 
	  v-- e>25 --f //pregunta si e>25 acumula la entrada y
	                  contá cuantos son    
	  acu+=e
	  con++       

	   salida:
	    e        //sino no pasa nada y vuelvo a pedir e

	p=acu/con

	salida: 
	p

	fin









	RS: Algoritm


	1. Mayor/Menor:

	cálculo: 
	v -----a>b ----- F //pregunta/condición 
	|                |
	r = a 	     v --b>a-- f  //guardar resultado
	             |         |
	             r=b       r="son iguales"



	ingreso: 
	num

	calculo: 
	v -----num>10 ----- F //pregunta/condición
	|                   |
	r="numero           r="numero //guardamos el resultado
	mayor que 10"       no es mayor a 10"






	2. Porcent y Desc:



	ingreso: 
	numHom, numMuj

	cálculo:
	porcHom = numHom*100/(numHom + numMuj)
	porcMuj = numMuj*100/(numHom + numMuj)

	salida: 
	porcHom, porcMuj



	v---  importe>5000  ---f 

	iF= importe*0,82      v  importe>1000    

	               iF =importe*0,90     




	3. Prom:


	entrada:  
	nota1, nota2, nota3

	cálculo:
	promedioNotas = (nota1 + nota2 + nota3)/3



	inicio
	acu = 0

	entrada:

	cálculo: 

	for 
	  x
	  x=0 | x<100 | x++
	   
	    entrada:
	       n

	    acu += n    

	    cálculo: 
	  

	    salida: 

	promedio = acu/100

	salida: 

	promedio




	4. Par/Impar:

	cálculo: 
	r = num%2

	v -----r==0 ----- F //pregunta/condición 
	|                |
	'par'           'impar' //guardar resultado





	5. Max/Min:

	entrada:  
	num1, num2, num3, num4

	cálculo: 

	v---  num1>num2  ---f 

	m= num1            m=b
	               

	v---  num3>max

	m= num3            


	v---  num4>max

	m= num3            


	salida: 
	m




	inicio

	max = 0 

	for 
	  x
	  x=0 | x<10 | x++
	   
	    entrada:
	       n   

	    cálculo: 
	     
	      v-- n>max-- f
	      
	      max=n   
	 
	    salida: 
	    

	salida: 


	fin





	inicio: 

	bi= 0
	bp= 0
	for 
	  x
	  x=0 | x<20 | x++
	   
	    entrada:
	       n   

	    cálculo: 
	     
	      v --            n%/2            -- f
	      
	      v   bp==0      f               v--  !bi  --f
	        
	      maxP=n     v   n>maxP  f       minI=n   v n<minI f
	      bp= 1                          bi=1     minI=n
	                 maxP=n
	                 

	salida: 
	 
	maxP, minI 

	fin





	6. Posición:


	inicio: 

	for 
	  x
	  x=0 | x<10 | x++
	   
	    entrada:
	       n   

	    cálculo: 
	     
	      v-- x==0-- f
	      
	      max=n      v-- n>max --f
	      pos=1    
	                 max = n
	                 pos = x+1

	    salida: 
	    

	salida: 
	 
	max, pos

	fin



	//mostrar posición del mayor 

	inicio: 
	cont = 0 
	acum = 0 

	entrada: 

	cálculo: 

	for 
	  x
	  x=0 | x<20 | x++
	   
	    entrada:
	       n   

	    cálculo: 
	     
	      v-- n>18-- f
	      cont++
	      acum+=n    
	                             
	    salida: 
	   
	prom = acum/cont 

	salida: 
	 
	prom

	fin




	7. primo:


	inicio

	contador = 0

	entrada:
	n

	cálculo: 


	for 
	  x
	  x=0 | x<100 | x++
	   
	    entrada:


	    cálculo: 
	     
	     v-- n%x == 0 --f
	     
	     contador ++

	    salida: 


	v-- contador == 2 --f

	'primo'             'no es primo'


	salida: 
	    
	fin




	inicio
	primo = 0 
	entrada: 

	cálculo: 

	for
	x
	x=0 | x<10 | x++

	 entrada: 
	  n
	 
	 cálculo: 
	   for
	   y=1 | y<=n | y++
	   
	   inicio: 
	    con= 0
	 
	   entrada: 

	   cálculo: 
	    
	       n%y == 0 //resto de dividir y con n es 0, es divisible
	    v            f
	    con++


	     con == 2 
	  v           f

	v  !primo  f
	  
	mP=n     v   n>mP  f
	primo=1  m==N


	salida: 
	mP

	fin







	Ejercicio: 
	Hacer un programa para ingresar dos números y luego se 
	emita por pantalla el mayor de ellos con un cartel que 
	aclare si son iguales en el caso de que lo sean. 
	Los números pueden ser iguales. 

	entrada: 
	a, b

	cálculo: 
	v -----a>b ----- F //pregunta/condición 
	|                |
	r = a 	     v --b>a-- f  //guardar resultado
	             |         |
	             r=b       r="son iguales"

	salida:   //mostrar resultado
	r

	1. preguntamos por el verdadero (a)
	2. la condición es el menor de los dos (a<)
	3. volvemos a preguntar por el otro numero en mayor (b>)
	4. si el verdadero lo guardamos ahí, si es falso
	usamos por descarte la igualdad. 
	5. ocupamos todos los escenarios/opciones




	Ejercicio: 
	Hacer un programa para ingresar un número y mostrar 
	por pantalla cuando si es par o impar. 


	entrada: 
	num

	cálculo: 
	r = num%2

	v -----r==0 ----- F //pregunta/condición 
	|                |
	'par'           'impar' //guardar resultado
	         
	salida:   //mostrar resultado




	Ejercicio: 
	Hacer un programa para ingresar las tres notas de 
	examen de un alumno y luego cálcule y emita por pantalla
	el promedio final. 

	ingreso: 
	nota1, nota2, nota3

	cálculo: 
	promedioNotas = (nota1 + nota2 + nota3)/3

	salida: 
	promedioNotas




	6. Una universidad desea conocer los porcentajes de
	mujeres y hombres en las carreras de ciencias exactas
	hacer un programa para conocer los porcentajes de mujeres
	y hombres, se necesita cargar la cantidad de mujeres y 
	hombres, calcular y emitir por pantalla los porcentajes
	correspondientes. 


	//valor porcentual
	50 manzanas como porcentaje de 1250 manzanas
	50/1250 = 0,04 * 100 = 4%

	o

	50*100 = 5000/1250 = 4%



	// porcentaje como fraccion

	se divide entre 100 y se simplifica

	10% = 10/100 = 1/10 = 0,1



	// porcentaje de un número
	de un número, simplemente se multiplica por 0,01
	es decir, 1/100

	el 25 % de 150 = 25*0,01*150 = 37,5

	Una forma equivalente de tratar esta operación es 
	considerar que se multiplica por la cifra y se divide
	por cien (pues 0,01 = 1/100):

	25*150/100


	//calculo: 
	//numHom + numMuj = total
	//numHom y numMuj es la entrada o valor conocido (num)

	//x = num*porc/100

	//si numHom + numMuj es 100
	//numHom  -- porcHom
	//numMuj  -- porcMuj

	//porcHom = numHom*100/(numHom + numMuj)
	//porcMuj = numMuj*100/numHom + numMuj)



	ingreso: 
	numHom, numMuj

	cálculo:
	porcHom = numHom*100/(numHom + numMuj)
	porcMuj = numMuj*100/(numHom + numMuj)

	salida: 
	porcHom, porcMuj




	Ejercicio: 
	Hacer un programa con dos numeros distintos y luego 
	mostrar el resultado de restar el mayor de ellos con 
	el menor de ellos. 

	 
	ingreso: 
	a, b

	calculo: 
	v-- a-b --F //pregunta
	|           |
	r=a-b      r=b-a

	salida:
	r          //mostrar 



	Ejercicio: 
	Hacer un programa para ingresar un número y luego
	se emita por pantalla un cartel aclaratorio si es mayor
	a 10  o no es mayor a 10. 


	ingreso: 
	num

	calculo: 
	v -----num>10 ----- F //pregunta/condición
	|                   |
	r="numero           r="numero //guardamos el resultado
	mayor que 10"       no es mayor a 10"


	salida:
	r          //mostrar resultado




	Ejercicio:
	Una tienda de videojuegos da un descuento dependiendo 
	del importe de la compra realizada según los siguientes
	valores: si el importe es menor a 1000 no hay descuentos
	si es 1000 o más pero menor a 5000 aplica un descuento 
	del 10% si es de 5000 o más aplica un descuento del 18%
	El programa debe ingresar un importe de venta y mostrar 
	el importe final con el descuento que corresponda. 


	//descuento = importe * porcDesc
	//importeFinal = importe-descuento

	//10/100 = 0,1
	//18/100 = 0,18 

	//importe es menor a 1000
	//1000 o más pero menor a 5000 10
	//5000 o más aplica un descuento 18

	entrada: 
	importe

	cálculo: 
	v---  importe>=5000   ---f 

	iF= importe*0,82      v  importe>1000 && importe<5000 f        

	               iF =importe*0,90              iF = importe

	salida: 
	iF


	alternativa

	v---  importe>5000  ---f 

	iF= importe*0,82      v  importe>1000    

	               iF =importe*0,90     



	Ejercicio: 
	//nos pregunta el maximo de ellos, lo evaluamos indirect
	mente todos contra todos. 
	Se hace por partes, preguntamos el primer par y vamos
	guardando el maximo.  Para el falso, decimos el el otro
	num es el maximo y cerramos el condicional. 

	//En el segundo condicional preguntamos por el tercer
	valor si es mayor al maximo. no usamos el falso. 

	//tercer condicional, preguntamos por el cuarto num si es
	mayor al max, no usamos el falso. 


	entrada:  
	num1, num2, num3, num4

	cálculo: 

	v---  num1>num2  ---f 

	m= num1            m=b
	               

	v---  num3>max

	m= num3            


	v---  num4>max

	m= num3            


	salida: 
	m




	ej con bucle:
	imprimir 10 veces 'hola mundo!' pero escribiendolo una
	vez o utilizando una su instrucciones una vez: 

	for 
	 x 
	x = 0 | x < 10 | x++

	 'hola mundo!'





	Ejercicio: for y Acumulador

	// Ahora necesitamos entender que hacer con los valores
	en cada vuelta y con el problema que queremos resolver. 

	// Para un promedio no necesitamos tener 100 valores al 
	mismo tiempo. 

	// Tenemos que sumar los 100 elementos y dividirlos por
	100

	// Con este código, n (ingreso número) que se repite 100
	veces, tenemos que guardar su valor antes de que
	el ciclo for de un vuelta y lo pierda. 

	// Necesitamos un acumulador (var+=, var-=, var*=, etc), 
	una variable como acumulador antes de que se inicie el
	ciclo: acu = 0. 


	inicio

	acu = 0


	entrada:


	cálculo: 

	for 
	  x
	  x=0 | x<100 | x++
	   
	    entrada:
	       n

	    acu += n    

	    cálculo: 
	  

	    salida: 


	// Ahora antes de que de la vuelta y se pierda el valor, 
	n se guarda en una sola variable acumuladora (acu) que
	va sumando. 

	// El ciclo for vuelve a chequear su variable x, 
	para volver a entrar al código; ahora si número de n 
	se perdió pero se guardó en acu+=. 


	promedio = acu/100


	salida: 

	promedio





	Ejercicio: for y maximo e if

	//En un contexto dinamico, el punto de partida no puede
	ser 0, entonces, tomamos el primer elemento que tengamos
	en nuestra lista; si tenemos 10; el primero que tenga
	va a ser el maximo, minimo, unico, la situación que sea. 

	//Guardamos ese número y lo que venga a continuación lo 
	comparamos contra nuestro primer elemento. 

	//Encontrar el primer número/elemento: (estamos frente
	a 10, no sabemos cuál va a ser el primero)

	//Entonces, creamos el ciclo requerido, con el indice
	del propio ciclo podemos modificar desde dónde va a 
	empezar el mismo ciclo. 

	//Podemos preguntar el valor del indice del ciclo para
	saber su posición:



	inicio

	//no creamos un acum o cont, entramos en el bucle 
	al principio. 

	//pedimos un ingreso, después tenemos que averiguar 
	a qué vuelta o posición corresponde n, la entrada, etc. 

	//preguntamos cuanto vale x(indice, posición bucle)
	x == 0 (si estamos en la primera vuelta del ciclo)
	entonces, el max es n. 

	//no la cambiamos para que no se rompa el ciclo que maneja. 


	for 
	  x
	  x=0 | x<10 | x++
	   
	    entrada:
	       n   

	    cálculo: 
	     
	      v-- x==0-- f
	      
	      max=n      v-- n>max --f
	                   
	                 max = n

	    salida: 
	    

	salida: 
	 
	max

	fin

	//si estamos en la primera vuelta del ciclo, guardamos n 
	como max. 

	//si no es la primera vuelta, quiere decir que x 
	no vale 1 y que tenemos un valor max de n (primer elem
	guardado como max) 

	//cuando es falso, preguntamos si el nuevo número es 
	mayor al max

	//si es verdadero, reemplazamos el max otra vez, si es
	falso

	//cerramos el bucle y al final mostramos max. 






	Ejercicio: for y contador/mostrar unidad/cantidad

	hacer un programa que solicite 20 números y cálcule y 
	emita por pantalla cuantos son positivos (mayores a 0)
	mostrar un solo valor, el conteo final. 

	//tenemos muchos números y además nos pide un contador

	//1. cargamos los números, iniciamos un bucle de 20 
	vueltas. 

	//2. el bucle pedirá un ingreso que se ejecutará 20 veces

	//3. cuántos son positivos: preguntamos por si la 
	entrada es positiva

	//4. el contador tiene que inicializarce en 0 afuera
	del ciclo y al inicio del programa. 
	 
	inicio

	contador = 0 

	entrada:

	cálculo: 

	for 
	  x
	  x=0 | x<20 | x++
	   
	    entrada:
	       n

	    cálculo: 
	     
	     v-- n>0-- f

	    salida: 


	salida: 

	contador

	fin





	Ejercicio: 
	solicitar un numero y luego calcule y emita un cartel 
	aclaratorio si el mismo es primo o no es primo. 
	primo(divisible por 1 y si mismo)

	//No todos los número son primos, dado que son divisibles
	por otros números. 

	// vamos a chequear cuantas veces es divisible un número
	si es divisible solo por 1 y si mismo, es primo, 
	dos veces. si es divisible más de dos veces no es primo 

	//pedimos entrada, dividimos tantas veces como el número
	sea, contar cuantas veces fue divisible y mostrar. 


	inicio

	contador = 0

	entrada:
	n

	cálculo: 


	for 
	  x
	  x=0 | x<100 | x++
	   
	    entrada:


	    cálculo: 
	     
	     v-- n%x == 0 --f
	     
	     contador ++

	    salida: 


	v-- contador == 2 --f

	'primo'             'no es primo'


	salida: 
	    
	fin




	Ejercicio: for posicion y max, min

	//para el verdadero tambien vamos a reemplazar la posición
	vamos a correguir el valor desfazado de x, no podemos 
	asignarlo a mano porque no tenemos la seguridad como 
	en el primer número. 

	//en la vuelta 0 de x, sabemos que va a ingresar el 
	primer elemento, en la vuelta 1 va a ingresar el segundo
	acá es cuando vemos el desfazaje: 
	 
	mostrar posición: 
	 vuelta 1 -> x=0 -> primer elemento -> posición = 1
	 vuelta 2 -> x=1 -> segundo elemento -> posición = x+1
	  
	vemos que si ponemos posición = x va a ser 1, que ya 
	 la tenemos en primera vuelta, por eso es posición = x+1
	 

	inicio: 

	for 
	  x
	  x=0 | x<10 | x++
	   
	    entrada:
	       n   

	    cálculo: 
	     
	      v-- x==0-- f
	      
	      max=n      v-- n>max --f
	      pos=1    
	                 max = n
	                 pos = x+1

	    salida: 
	    

	salida: 
	 
	max, pos

	fin




	Ejercicio: 
	programa que solicite 20 numeros y luego mostrar por
	pantalla el minimo de ellos y la posición en la que 
	fue encontrado.

	//tomar el primero numero como maximo para comparar
	cuando sea la primera vuelta comparando con el indice
	del bucle

	//como siempre va a haber un max a la primera vuelta
	queda establecido y en la segunda vuelta ya se 
	compara con n (entrada)

	//mostrar posición del mayor 


	for 
	  x
	  x=0 | x<20 | x++
	   
	    entrada:
	       n   

	    cálculo: 
	     
	      v-- x==0-- f
	      
	      max=n      v-- n<max --f
	      pos = 1
	                 min = n
	                 pos = x+1
	    
	    salida: 
	    
	salida: 
	max, pos


	Ejercicio: 
	programa que solicite 20 edades y luego calcule el 
	promedio de edad de aquellas personas mayores a 18. 

	prom = suma total/cant valores
	prom = entrada acumulada de mayores /20 

	//tomar el primero numero como maximo para comparar
	cuando sea la primera vuelta comparando con el indice
	del bucle

	//como siempre va a haber un max a la primera vuelta
	queda establecido y en la segunda vuelta ya se 
	compara con n (entrada)

	//mostrar posición del mayor 

	inicio: 
	cont = 0 
	acum = 0 

	entrada: 

	cálculo: 

	for 
	  x
	  x=0 | x<20 | x++
	   
	    entrada:
	       n   

	    cálculo: 
	     
	      v-- n>18-- f
	      cont++
	      acum+=n    
	                             
	    salida: 
	   
	prom = acum/cont 

	salida: 
	 
	prom

	fin

	//como no sabemos cuantas personas van a ser mayor de 
	18, no podemos dividir para sacar el promedio por eso
	debemos usar un contador para sacar ese valor




	Ejercicio: 
	20 numeros pares y luego emitir 


	3. buscar max y min: tanto para el max y min tenemos
	que tomar la primera entrada. Acá no podemos usar x 
	x==0 para tomar la primera entrada y guardarla. 
	porque no sabemos cuando x vale (indice) 0. 
	x solo puede valer 0 una vez. 
	si ingresamos un número y ademas es par, que no está 
	garantizado que sea 0; no podemos saber si es par o no. 
	no podemos inicializar pensando en la primera vuelta:
	n%2 == 0 &&  ni x==0, dificiles de cumplir

	Debemos inicializar pensando en cualquier número. 

	4. variable bandera: 
	no podemos saber cuando el usuario va a entrar un numero
	par o impar. 
	usamos una variable auxiliar para marcar el camino. 
	la inicializamos en un valor que vamos a decidir y luego
	preguntar si ese valor está en esa condición. 

	Es una variable con un tipo de dato booleano (t,f o 1,0)



	inicio: 

	bi= 0
	bp= 0
	for 
	  x
	  x=0 | x<20 | x++
	   
	    entrada:
	       n   

	    cálculo: 
	     
	      v --            n%/2            -- f
	      
	      v   bp==0      f               v--  !bi  --f
	        
	      maxP=n     v   n>maxP  f       minI=n   v n<minI f
	      bp= 1                          bi=1     minI=n
	                 maxP=n
	                 

	salida: 
	 
	maxP, minI 

	fin

	//creamos una bandera de impares con valor 0 y creamos
	una bandera de pares con valor 0 tambien. 

	//no preguntamos por la primera vuelta (x==0), preguntamos
	si tenemos un par, para saberlo, preguntamos cuanto vale
	la bandera (bp==0); por verdadero quiere decir que no 
	hay ningún valor par. Determinamos por maximo par a n. 
	y a la bandera de pares le cambiamos el valor a 1. 

	//para el falso de la bandera par preguntamos si n>maxpar
	nuevo valor mayor al maximo para que determinamos al 
	principio. Para verdadero (mayor que el anterior)
	actualizamos el valor de maxpar = n

	//para el falso del impar n%2==0, preguntamos por la 
	bandera de impar. 

	alternativa: 
	si una variable booleana tiene un verdadero o un falso
	si la ponemos en un if va a ir por el valor que tenga. 
	bi y bp tiene un 0 (inicializado) que es falso. 
	entonces, necesitamos que se vaya al verdaero como hicimos
	con bp, usamos un operador negado (!) negando el valor 
	que tiene, invertirlo. 

	"si bi tiene falso, !bi hace que que sea verdadero. 
	guardamos minimo impar como n y cambiamos la bandera impar
	de valor a 1 (en verdadero)

	cuando la bandera este en 1 va a ir para el falso
	ahí preguntamos si n<minino impar



	Ejercicio: 
	programa para ingresar 10 numeros y luego calcule y emita
	el mayor de los primos de la lista. En caso de no haber
	ningun numero primo, deberá aclararlo con un cartel. 

	//podemos crear un ciclo dentro de otro.
	el primero nos permite pedir los 10 numeros. 

	//tenemos que preguntar si la entrada es num primo. 
	hacemos un for, dividirlo, contar; si contaba dos veces
	era primo, si contaba más no lo era. 

	//cuando es primo lo guardamos como max, el primer num
	primo que aparezca va a ser el max, los siguientes se 
	comparan contra ese max. 

	//no sabemos si el primer num primo que va a aparecer 
	en la primera vuelta. 
	x ==0 no nos sirve para tomar el primer num


	inicio
	primo = 0 
	entrada: 

	cálculo: 

	for
	x
	x=0 | x<10 | x++

	 entrada: 
	  n
	 
	 cálculo: 
	   for
	   y=1 | y<=n | y++
	   
	   inicio: 
	    con= 0
	 
	   entrada: 

	   cálculo: 
	    
	       n%y == 0 //resto de dividir y con n es 0, es divisible
	    v            f
	    con++


	     con == 2 
	  v           f

	v  !primo  f
	  
	mP=n     v   n>mP  f
	primo=1  m==N


	salida: 
	mP

	fin

	//primero calculamos un numero primo con otro for

	//con el primer for pedimos los 10 numeros, 

	//con el segundo for en cada uno de los 10 num, 
	lo inicializamos en 0, dividimos, si es verdaero 
	contamos, sino no contamos. 

	//el siguiente bloque de código con == 2 preguntamos si 
	es primo, con lo contrario. 


|| Ciclos Combinados: Lotes y Sublotes

	Ejercicios combinados de ciclo for con lotes, sublotes
	o grupos y subgrupos. 

	No permite hacer combinaciones de una manera distinta. 

	Se trata de combinar dos o más ciclos, exactos o inexactos.


	Cuando hacemos un ejercicio como: 

	programa para ingresar una lista de numeros que corta
	cuando se ingresa un 0 y luego mostrar la cantidad 
	de numeros primos, la cantidad de numeros pares y la
	cantidad de numeros positivos y la cantidad de negativos

	//necesitamos cuatro contadores: 
	pos, neg, pares, primos

	//si n>0 cuenta positivos
	//si n<0 cuenta negativos o hacerlo por el falso
	//si n%2==0 pares
	//buscar si n tiene mas de dos divisores. 


	inicio

	cpos= 0 
	cneg= 0 
	cpar= 0 
	cpri= 0 

	entrada: 
	n

	cálculo: 
	while n!=0 
	 
	 v-- n>0 --f
	 |         |
	 cpos++    cneg++

	 v-- n%2==0 
	 |           
	 cpar++      

	     con=0 
	     j=1
	 
	  while j<=n     //dividimos por j
	  
	  v-- n%2==0 --f
	  |            |
	  con++        j++

	 v-- con==2
	 |
	 cpri++
	 

	 n

	salida: 
	cpos, cneg, cpar, cpri

	fin 



	Cuando combinamos dos o más ciclos, exactos o inexactos
	estamos tratando con los conceptos de lote y sublote, 
	(aunque depende los problemas). 


	Cuando analizamos las consignas de los problemas, 
	como puede ser ingresar cierta cantidad de numeros/obj
	 o hasta que...

	Vamos a crear una estructura para cargar o ingresar lo que 
	se denomina, lote de numeros o lote de registro. 

	Aunque un registro es una entidad compuesta que tiene 
	caracteristicas; nombre, edad, profesión, etc. 

	Lote de registros o números: 
	Puede ser que necesitemos cargar 50 personas, nos está 
	pidiendo un lote de registro o numeros o un lote de 50. 


	Con ese lote tenemos que operarlos con las cosas o condiciones
	que requiere el programa. 
	ej: promedio de todos los ingresos/numeros, menor, mayor, etc. 

	for es más apropiado cuando tenemos la cifra exacta
	de ese lote. 

	while es más apropiado cuando no tenemos la cifra del lote. 

	En los dos hay un lote de registros. 


	Existe el concepto cuando haya o creamos una subdivisión 
	dentro de ese lote. 

	Ej: hacer un programa para ingresar 10 números. 

	podemos hacerlo con un for con 10 vueltas. 


	inicio

	entrada: 
	n

	cálculo:
	for
	x=0 | x<10 | x++   //empieza en 0, 0<10: v, entra y pide n

	 n 

	salida: 


	//Nos permite ingresar un lote de 10 numeros. 



	Ej: programa para ingresar 5 sublotes o grupos de números. 

	[//multiplicamos x5 la entrada o el for(? con while(?
	una atras o despues o  afuera de otro. 
	si lo pongo adentro del primer lote estaría dividiendo el 1
	(?]


	Pero no sería lo más optimo de programar
	[//entonces usamos condicionales para subdividir las 
	entradas dentro de un ciclo solo(?]


	Lo mejor es, como ya tenemos una estructura con un ciclo que
	nos permite repetir entradas, podemos crear un for/while
	padre/hijo con otra variable controladora para controlar
	cuantas veces va a aparecer el bucle hijo que tiene solo
	un lote de números para cargar. 

	inicio

	entrada: 
	n

	cálculo: 

	for
	y=0 | y<5 | y++    

	 for
	 x=0 | x<10 | x++
	  
	   n

	salida: 


	fin 

	//inicia el programa con un for, entra dado que y=0 <5 
	pasa al siguiente for, entra 0<10 y pide n. 

	//cuando termina de pedir los 10 numeros (1 lote) o vuelta
	y=0, el primer lote termina, sale y chequea y=1 <10 


	Tenemos un ciclo interno que pide 10 numeros (1 lote) y un 
	ciclo interno que dice cuantas veces tiene que ejecutarse
	el lote. Forma 5 subgrupos de 10 numeros. 

	Tenemos un programa que está haciendo uso de un ciclo 
	combinado y también, usa grupos y subgrupos o lote y 
	sublote. 

	Lote: es el lote externo o complete
	sublote: es el lote interno que se ejecuta varias veces
	creando un subgrupo y cuando termina empieza a crear otro, 
	así sucesivamente. 


	Ej: creando un lote y sublote usando for y while


	inicio

	entrada: 
	n          //entrada principal/controlador while, externa

	cálculo: 

	while n!=0
	 
	  
	  n       //mientras n sea distinto de 0, pide n, interna
	 
	salida: 


	fin 

	//así solo, es un programa que permite cargar un lote de 
	numeros hasta que n sea distinto de 0. 


	Si queremos un programa para cargar 5 sublotes de numeros
	separados entre si por un 0. 

	//estructuras principales: 
	1 lote, 5 sublotes

	cargar numero

	//estructuras secundarias: 
	numeros separados entre si por un 0 


	inicio

	for
	y=0 | y<5 | y++  
	 
	 entrada: 
	 n

	 cálculo: 

	 while n!=0
	 
	  
	   n

	salida: 


	fin 


	//Con una estructura while tenemos un lote que carga
	numeros hasta que n, entrada sea 0. 

	//Con una estructura for tenemos 5 sublotes con x cantidad
	de cargas dado el while. 

	//la clave está en que nos pediar separar los lotes por 
	un 0 y ese rol lo cumple el while n!=0 


	Entonces tenemos 5 sublotes dividios cada uno cuando 
	se ingresa un 0. 

	Entonces tenemos un lote dado por todos los numeros (for)
	y 5 sublotes dados por un while n!=0. 

	Tambien podemos decir que tenemos un lote exacto y 5 sublotes
	inexactos. 



	Ej: cargar todos los numeros positivos que está dividido 
	internamente en sublotes que corta con 0 

	//estructuras principales: 
	1 lote positivos, sublotes cuando 0


	//estructuras secundarias: 
	cargar numeros positivos
	entrada: n
	positivos: solo permitir n>0


	//tenemos un programa que no nos dice la cantidad de
	sublotes (subL=x).

	//el corte general es un numero negativo

	//internamente, debemos subdividir el lote en sublotes
	que se separan por 0. 


	inicio
	 
	n=1         //parche para pasar el primer while
	              controla y ejecuta primer                

	while n>=0 
	  
	 n         //entrada: pedimos un numero para segundo while
	           //estructura origina while: 
	            entrada, while entrada, entrada 
	 
	 while n>0   //solo toma los positivos
	  
	            
	   n
	              
	salida: 


	fin 

	//si ingresamos 45 al inicio, pasa el 1 while y el segundo

	//si ingresamos un 0 al inicio pasa el 1 while y pasa
	el segundo while cortando el lote, cambiando, no ingresamos 
	un numero negativo para cortar el programa. 

	//pero para el segundo while 0!=0 es verdad, después vuelve
	al while 1 0>=0, verdad y queda un bucle. 


	Entonces, tenemos un lote con x cantidad de positivos
	y x cantidad de sublotes y x cantidad de numeros

	el programa corta cuando el usuario ingrese negativo



	[mi altern ]

	inicio

	entrada: 
	n=1         //parche para pasar el primer while

	while n>=0 
	 
	 entrada: 
	 n         //pedimos un numero para segundo while

	 cálculo: 

	 while n!=0
	  
	   v-- n>0  //solo vamos a mostrar la entrada cuando n>0
	   |
	   n        //volvemos a pedir 
	             
	salida: 


	fin 



	Ejercicio: 
	dada una lista de numeros computesta por 10 subgrupos y 
	cada subgrupo separados por un 0, se piede determinar 
	e informar...A), B), etc. 

	//planteo programa
	Además del lote y sublote, el programa pide consignas
	concretas. 

	1. armar arquitectura con ciclos combinados que nos 
	permita cargar la arquitectura de lote y sublote 

	2. despues armamos las consignas, que nos pide, requisitos
	condiciones para que suceda tal o cual cosa. 

	for
	x=0 | x<10 | x++
	 
	 n
	 
	 while n!=0 

	  

	   n


	para el punto a: 
	para cada uno de los subgrupos, el maximo de los numeros 
	pares y el max de los impares. 

	//esto va a ir en el bucle interno. 

	//segregar pares n%2==0 

	//encontrar par e impar

	//mostrar par e impar

	bp=0
	bi=0

	while n!=0

	               v-- n%2 == 0 --f
	               |              |
	 v-- bp == 0 --f              v-- bi==0 --f
	 |             |              |           |
	 maxP=n        v-- n>m        maxI=n      v-- n>maxI
	 bp=1          |              bp=1      |
	               maxP=n                   maxI=n
	                          
	            
	 n

	salida: 
	maxP, maxI



	punto b: para cada uno de los subgrupos, el porcentaje
	de numeros negativos y el porcentaje de numeros positivos

	debemos contar los pos y neg
	cpos = 0
	cneg = 0 
	pos: n>0
	neg: n<0

	r3: 
	total: n -> 100%
	pos x -- x*100/pos+neg
	neg y -- x*100/pos+neg
	k
	  cpos=0 
	  cneg=0



	 while n!=0
	 
	   v-- n>0 --f
	   |         |
	   cpos++    cneg++


	salida
	porP=cpos*100/(cneg+cpos)
	porN=cneg*100/(cneg+cpos)



	punto c: cuando numeros habia en total entre los 10 subgrupos 
	sin contar los 0 que separan a cada subgrupo. 

	//en la estructura principal/externa/controladora sub bucle
	//aumentamos el contador cuando entra al bucle while. 

	inicio
	con=0 

	for

	 while n!=0
	 con++
 


|| Corte de Control


	En los sublotes podiamos cambiar o cortar el sublote con 
	una condición, acá lo hacemos controlado. 

	Además se trabaja con registros complejos o compuestos
	especificos y tienen que estar agrupados según sus 
	características. 

	También tenemos que segregar los registros. 

	Tenemos que saber como se van a procesar esos datos 
	para obtener información. 

	Nosotros debemos poder tomar cada sublote y cargar los 
	datos. 

	El programa va a ir cortando ciclos automaticamente. 

	Vamos a trabajar con lotes agrupados y con lotes y sublotes


	Estructura básica de un corte de control: 

	Es un ciclo while dentro de otro while. 



	Ej: factura
	numero, tipo y monto de factura. 

	//numero, tipo y monto como datos/ingreso

	//el lote general corta (bucle externo) cuando el numero
	de facturas sea negativo

	//en el bucle externo, mientras el numero de facturas
	sea distinto de 0

	//cuando el usuario no quiera cargar más facturas o no tenga
	más que cargar, va a introducir nf = 0 y termina. 


	Estructura básica: 
	bucle externo while corte/fin programa en numero de factura
	tiene 1era entradas. 

	en bucle interno while tiene 2 entradas, nf, tf y m

	inicio
	nf, tf, m     //1 entrada

	while nf!=0
	 



	 while




	  nf, tf, m  //2 entrada



	Claves en corte de control: 

	1. bucle interno con su condición 
	2. entrada/operaciones externas/1entrada/1operaciones
	para bucle externo. 


	inicio
	nf, tf, m     //1era entrada

	while nf!=0
	 


	               //clave2: entradas/op para bucle interno
	   
	 while         //clave1: valida entrada para bucle interno




	  nf, tf, m  //2da entrada


	//Hasta ahora tenemos registros (nf, tf, m), tienen
	que pasar la condición del bucle 1 (nf!=0). 
	en el segundo bucle volvemos a pedir los registros. 



	Estructura avanzada: 

	bucle interno:  


	//como digimos que se agrupa por tipos de factura

	1. Vamos a agregar una asignación fuera del bucle interno. 

	El tipo de factura actual es el tipo de factura. 

	tfACT = tf


	2. en la condición el bucle interno preguntamos si 
	el tipo de factura es igual al tipo de factura actual

	tf == tfACT

	Con esto entra al bucle para procesar las instrucciones. 



	inicio
	nf, tf, m     //1era entrada de registros

	while nf!=0
	 


	  tfACT=tf         //clave2: entradas/op para bucle interno
	   
	 while tf==tfACT  //clave1: valida entrada para bucle interno




	  nf, tf, m  //2da entrada de registros, al final de procesar
	               instrucciones



	//Hasta ahora tenemos que cuando llega al segundo pedido
	de registro, si cargamos nf, m nueva; pero si cargamos 
	el mismo tipo de factura, va a validarse con la condición 
	del bucle inteno. 

	ej: 

	tfACT = B asignamos

	B == B entra al segundo bucle, procesa las instrucciones y 
	al final pide otro registro (nf, tf, m). 

	Cargamos una factura nueva pero el tipo es el mismo, entonces, 
	volvemos a cargar el misto tipo de factura. 

	Si vuelve a ser el mismo tipo entra y sigue procesando. 
	Así sucesivamente, hasta que no sea el mismo tipo. 

	Sale del bucle interno, vuelve al final, del bucle externo, 
	para preguntar en su condición: numero de factura es 
	distinto de 0; nf!=0, si es verdaero, sigue procesando. 

	Entra y actualiza la factura actual. 
	Pisa el valor B y le pone C 

	tfACT = C asignamos

	C == C entra al segundo bucle, procesa las instrucciones y 
	al final pide otro registro (nf, tf, m). 


	//claves nf(controlador externo), tf(controlador interno)

	Claves a saber/encontrar: 

	1. saber porqué parametro se está agrupando
	tipos de factura -a,b,c-

	para cargar numero factura, tipo factura, monto
	-nf, tf, m-

	1. mientras el nf!=0, seguimos cargando facturas: 
	lote general para cargar todas (tipos a,b,c)

	2. mientras tf==tfACT (la factura y tipo de factura) sea 
	el mismo, seguimos procesando en este bucle o sublote
	que vuelve a pedir nf, tf, m. 
	sublote para cargar del mismo tipo, que es el valor 
	que guardamos afuera del segundo bucle (tfACT=tf)

	3. cuando terminamos de cargar el mismo tipo, sale y vuelve
	a chequear 1 condicional (nf!=0) para seguir cargando 
	tipos de facturas, si lo cambiamos, se actualiza 
	TfACT=tf



//notas, aclaraciones, cuestiones: 

1. no usamos 0 en condicional para cambiar de sublote.
(que salga del bucle interno y chequee en bucle externo)

cambia automaticamente cuando cambiamos el registro. 
factura tipo a, b, c

2. tampoco tiene un limite de sublotes, solo tenemos tipos
de factura y le podemos sumar otros como comprobantes, etc.  

lo importante es que cargamos las pilas agrupadas si las
mezclamos, cálculo otra cosa. 

3. siempre que carguemos los sublotes agrupados, podemos 
cargar la cantidad de sublotes, tipos de remito que queramos



Ej: 
cargar registro personaje (personaje, serie, n° de serie, 
sueldo y edad) agrupados por numero de serie. 


Segregar: 

1. qué es lo que estamos cargano: 
-registro: personajes de series-
con los datos que componen ese registro/personaje de serie. 

2. cómo están agrupados: 
-por n° serie-. 


Estructura principal:
necesitamos cargar personajes hasta que se ingrese un 
numero de serie 0 y los personajes van a estar agrupados
por numero de serie. 


//condicion 1while: n!=0

//condicion 2while: Serie == numSerie por ej

son los cortes de los dos bucles, como en el ej de las 
facturas: num facturas para corte primer bucle  o lote
y tipo de factura para corte de segundo bucle o sublote. 

o tambien llamado corte general para el lote y 
corte de control para el sublote. 

Los ejercicios de corte de control se tratan de agrupar
datos por algunas características. 


Estructura principal: 
al inicio pedimos los registros/entradas.

la estructura general y su corte: 
numero de serie 0 -> ns!=0


Estructura avanzada: 
la estructura interna y su corte: 
sublotes agrupados por numero de serie -> nsACT = ns
como variable controladora del segundo while

en while, mientras el numero de serie sea igual a numero
de serie actual; procesar instrucciones. 

entre las instrucciones a procesar está volver a pedir 
registros. 

inicio
np, se, ns, su, e      //entrada reg

while ns!=0            //controlador/condicion 1while

 	     
  nsACT=ns             //controlador/operad 2while

 while ns==nsACT       //cond/control 



   np, se, ns, su, e   //2 entrada sublote


fin 


//lo importante que esten agrupados y no ordenados. 
está agrupados por numero de serie y no ordenados por edad, 
sueldo, etc. 

//funcionamiento: 
inicio, despues pide cada registro: nombre personaje, 
después, serie, numero de serie, sueldo y edad. 

 np: goku
 se: db
 ns: 3

chequea bucle de lote: 3!=0, verdadero; entra. 
después, a nsACT le va a asignar el numero de serie
chequea bucle sublote: 3==3, verdadero; entra. 
procesar las instrucciones hasta que vuelve a pedir 
registros, cargamos los registros de la serie correspondiente
db, num 3. 

 np: bulma
 se: db
 ns: 3
 su, e, etc. 

al final del registro, chequea numero de serie que es 3==3
vuelve a entrar, procesar instrucciones y pedir registros. 

 np: roshi
 se: db
 ns: 3
 su, e, etc. 

al final del registro, chequea numero de serie que es 3==3
vuelve a entrar, procesar instrucciones y pedir registros. 
no tenemos más personajes de db para cargar. 

Si cargamos los registro de otra serie: 

 np: fring
 se: bb
 ns: 1
 su, e, etc.

Termina con todos los registros y chequea el valor que 
tiene en este momento ns = 1. 

ns==nsACT
1==3

nsACT lo habiamos definido al ingresar al primer bucle 
y a se primer bucle ingresamos con el primer registro. 

1==3 es falso, no entra al ciclo, sale y llega al final
para chequear lote: 
ns!=0
1!=0

es verdadero, entra y volvemos a definir nsACT con el 
valor 1 que tenemos en ns. 

Ahora chequea ns==nsACT -> 1==1, verdadero
entra procesa al personaje que teniamos (fring), 
sigue con las instrucciones y vuelve a pedir los 
registros. 

 np: jesse
 se: bb
 ns: 1
 su, e, etc.


//Así es como el programa por su cuenta gestiona solo
los registros de manera desordenada pero agrupada por 
numero de serie.  


Nos pueden pedir el promedio de edad de los personajes de
cada serie. 

Podemos procesar/operar y mostrar info en 3 momentos: 

1. en el sublote: info/operaciones relacionada a los 
elementos del sublote

2. en el lote: info relacionada al sublote como grupo

3. afuera del lote: infor relacionada al lote. 

Entonces: 

1. mostrar por registro: ej, por pj

2. mostrar por sublote: ej, por serie

3. mostrar por lote: ej, info sobre todos los lotes, 
series, personaje, etc. 

Entonces, 

1. entre elemento

2. entre grupo

3. entre todos  


La instrucciones/operación va a entrar y salir de los 
lote, sublote para buscar info, operarla. 


Si nos piden el promedio de edad. 
No nos especifican, entonces, asumimos que se refiere 
a todo; lote y sublote. 

Lo mostramos fuera del lote. 


promedio de edad de todos los personajes: 
prom: sum todos los elem/cantidad elem
código: acu/con

inicio
acuE=0
con=0

np, se, ns, su, e

while ns!=0
 
 nsACT=ns 
 
 while ns==nsACT
 
    
  acu+=e
  con++

  np, se, ns, su, e

prom = acu/con
  
salida
prom

fin

//inicializamos afuera al inicio del programa y 
lo mostramos  afuera del bucle externo lote al final



Si nos piden mayor sueldo de cada serie: 
buscamos un max, aveces podemos hacerlo con max = 0, 
otras veces con bandera, etc. 


inicio

np, se, ns, su, e

while ns!=0 

 nsACT=ns 
 
 max=0 

 while ns==nsACT
 

  np, se, ns, su, e


 max

salida

fin


//inicializamos dentro del lote y lo mostramos dentro
al minal del lote. 
cuando terminamos de procesar la serie, para mostrar 
el sueldo max de esa serie. 
así con cada serie o sublote. 


Entonces, dentro del sublote toma todo, no es especifico. 
dentro de lote, toma un grupo y fuera por el lote total. 

Entonces, inicializamos inicio, mostrar final
ya sea lote, sublote, programa. 



............

//estructura principal:
inicio
nf, tf, m     //1era entrada

while nf!=0
 
               //clave2: entradas/op para bucle interno
   
 while         //clave1: valida entrada para bucle interno


  nf, tf, m  //2da entrada


//Hasta ahora tenemos registros (nf, tf, m), tienen
que pasar la condición del bucle 1 (nf!=0). 
en el segundo bucle volvemos a pedir los registros. 


//estructura avanzada:

bucle interno:  

//como digimos que se agrupa por tipos de factura

1. Vamos a agregar una asignación fuera del bucle interno. 
El tipo de factura actual es el tipo de factura. 

tfACT = tf

2. en la condición el bucle interno preguntamos si 
el tipo de factura es igual al tipo de factura actual

tf == tfACT

Con esto entra al bucle para procesar las instrucciones. 


inicio
nf, tf, m     //1era entrada de registros

while nf!=0

  tfACT=tf         //clave2: entradas/op para bucle interno
   
 while tf==tfACT  //clave1: valida entrada para bucle interno

  nf, tf, m  //2da entrada de registros, al final de procesar
               instrucciones





|| Ejercicios Corte de Control y ciclos

Los de corte de control tienen registros que piden agruparlos. 
los de ciclo son los que piden repetir ciertas instrucciones. 


ejercicio: 
se dispone de una lista de 10 grupos de numeros enteros
separados entre ellos por cero. 
se pide determinar e informar: a), b), c). 


enteros: 
positivos y negativos: n>0, v pos, f neg
recta numerica: a>b y b>a
hacia la der los más grandes y hacia a izq los más pequeños


Tipo ejercicio: 
lote y sublote pero no hay corte de control. 

tipo de bucle: hay definido el numero de sublotes 
por lo que usamos un for en 10 vueltas. 

Estructura básica: 
permite cargar datos

n 

 while n!=0
  
 
  n 



Estructura avanzada: 
operaciones: tenemos que repetir la estructura para 
cargar los datos 10 veces. 

inicio: 

for 
x=0 | x>10 | x++
 
 n 

 while n!=0
  
 
  n         


fin



Consignas: 
Las consignas no tienen porqué compartir código, estructura
relacionadas. 

Tampoco es necesario hacerlas en orden. 


a. el numero de grupo con mayor porcentajes de numeros
impares positivos respecto al total de numeros que forman 
el grupo. 

b. 

c. 




|| Funciones

Es un pequeño programa, bloque de código o diagrama que 
tiene que resolver una sola cosa. 


Suponiendo que tenemos un programa principal con un montón
de líneas de código: 

int main(){
 
 //code...

}


Con las funciones, el programa se desglosa en varias partes: 
en un programa principal y en varias funciones. 

El programa principal se va a encargar de manejar las demás
funciones o partes del programa. 

A medida que main va avanzando le va a pedir cosas a las 
funciones, etc. 

Las funciones resuelven pequeños problemas como operaciones
matemáticas concretas como sumar, sacar porcentaje, promediar; 
tambien operaciones con cadenas, mostrar mensajes, etc. 

 
En vez de hacer todo el programa imperativo una instrucción
después de otra, con operaciones matemáticas 'sueltas', 
llamamos a una función, pasamos parametros par que ejectute
su código con esas operaciones.  

De esta manera hacemos que el programa y el código sea 
módular, reutilizable y mantenible. 


Las funciones tiene ciertas características: 
como un programa, tiene un inicio y un final. 

La idea de la función es que reciba cosas y no que pida
como hace el programa principal con las funciones, usuarios. 

El programa principal comparte datos con las funciones 
para que puedan funcionar y le devuelva al programa 
principal lo que necesita saber. 

La información que recibe del programa principal se llama
parámetros para que la función trabaje. 

Retorno de la función: cuando la función trabaja, devuelve
un resultado o no. 

Proceso: 
1. llamada a la función 
2. paso de argumentos
3. retorno de resultado


Función Main: 

Ejemplo de programa principal imperativo no modular: 

inicio

entrada: 
a, b        //el programa principal pide numeros

cálculo: 
r=a+b       //procesa numeros

salida: 
r           //muestra un resultado

fin 



Ej: programa principal modular-reutilizable

Podemos hacer al programa principal modular usando 
una función para resolver operaciones o problemas. 

Escribiendo una sola vez la función. 

Primero definimos una función: 
tiene tres partes: 

1. tipo de función  (tipo de datos/valores para la func)
basicos: int, float, bool, char)

Int: podemos guardar numeros enteros: positivos y negativos. 
Float: numeros reales: decimales positivos y negativos.
bool: guardar v o f. 
char: guardar caracter [string es un objeto]
void: especial para funciones que no devuelven valor

Además de guardar el tipo de dato, también es el que va 
a retornar y vamos a recibir. 

entonces, una función tiene que tener un tipo. 


2. Tambien tiene que tener un nombre significativo que 
exprese o represente a su contenido/valor guardado. 
tambien tiene que seguir las reglas de nomenclatura 
como camelCase, no espacio, no empezar con número, 
no palabra reservada, etc. 


3. Paramétros: datos que la función necesita para trabajar
Los parametros tambien deben tener y ser del tipo de dato
que guarda o trabaja la función. 

el orden importa, se tiene que respetar. 


4. Dentro de la función tenemos que poner las instrucciones
u operaciones que la función va a realizar 


5. Al final valor a devolver el resultado: 
return


inicio

func: 
int suma
int n1, int n2 | param referenc
param valor    | ....
 |
 r = n1+n2
 |
 return r

o 

 |
 rtn r

fin 


//la función recibio los valores (int n1 e int n2)
lee valores (n1+n2), realiza la suma que la va a asignar 
a una variable llamada r y va a retornarla. 

//funcionamiento: 
recibe los numeros del exterior, realiza la operación y la 
guarda en una variable y luego retorna r (operación). 

return: le asegura el resultado al programa principal que
la llamo. 




Main: 
Programa principal modular que llama a funciones. 

Cuando llamamos a las funciones 

inicio

entrada: 
a, b         //el programa principal pide numeros a y b
              distintos a los de la func

cálculo: 
h = suma     //llamada a la funcion: no toma tipos, debemos
a, b |        pasarle el tipo esperado. 
              debemos guardar lo que devuelve en algun lado
              guardamos toda la func en la variable h. 
              una vez que se ejecuta se guarda en h y
              podemos mostrar h
salida: 
h            //muestra un resultado

fin 


//funcionamiento: 
inicia main, pide dos numeros a, b, le pasan 7 y 5, llama a la
función suma, procesa 7 y 5.

viaja a los paramétros int n1 e int n2, 7 y 5 se guardan 
en n1 y n2; lee 7, 5, suma, guarda el resultado en r
y retorna 12. 

Cuando retorna 12, vuelve al programa principal, 
el programa principal guarda 12 en la variable h. 

Al final va a mostrar 12 en pantalla


//los parametros a y b de main son distintos a los
parametros int n1 e int n2 de suma; son copias de los 
valores guardadas en memoria. 


Cuestiones: 
A la funcion se le pueden pasar todos paramétros que quieras
pero se recomienda que se le pasen los paramétros necesarios

Solo va a devolver un valor. 

Se rompe si no le pasamos los parametros definidos



Paramétros por valor y Paramétros por referencia:

inicio

func: 
int suma
int n1, int n2 |  param referenc
 param valor   |  ......
 
 |
 r = n1+n2
 |
 return r 

Los parametros a y b de main son distintos a los
parametros int n1 e int n2 de suma. 

Hay dos tipos de parametros, los que se pasan por valor 
y los parametros que se pasan por referencia. 

Cuando hacemos un pasaje de paramétro por valor: 
int n1 e int n2, volviendo a la memoria de la computadora;
cuando creamos una variable, nos daba un espacio para
esa memoria y una dirección. 

|a=7 |     |     | b=5 | 

entonces, cuando pasamos las variables a y b por valor a 
la función, nacen dos variables nuevas n1 y n2


|a=7 |     |     |b=5 | 
   
|    |n1=7 |n2=5 |    |


con una copia del valor, a=7 se va a copiar en n1
y b=5 se va a copiar en n2. 
n1=7 y n2=5


Mientras este la función en proceso, viva; vamos a tener 
en memoria duplicados los valores. 

Si definimos un paramétro de la función con un valor

n1=0
r = n1+n2

estamos asignando 0 en el espacio de memoria de n1 que es
distinto de a o b del programa main. 
dado que los parametros a y b son pasados por valor (copia)
y no por referencia. 


Cuando termina de ejecutarse la función, se eliminan esos
valores copias. 
De la misma manera que la variable locar r creada dentro 
de a función. 
Como la guardamos en otra variable distinta, va a quedar 
en h. 

al final van a quedar a, b y h. 

Se conoce como dimensión, scope o alcance de la función. 

Las variables en una función nacen al inicio y mueren al 
final de la función y lo mismo para el programa principal
las variables en el programa principal quedan, cada uno 
con sus propias variables. 

Incluso se pueden llamar de la misma forma, pero van a 
seguir siendo distintas dados que son distintos ambientes
o dimensiones. 

Por el scope: 
Si queremos mostrar una variable que está en la dimensión 
o alcance de una función en el programa principal, 
como lo es la variable r, no podemos. 



Pasar valor por referencia: 

Función de tipo void: 
no devuelve nada, no tiene retorno
vamos a mandar a la variable por referencia
No vamos a tener guardado h. 

Vamos a pasar al programa principal la referencia H

inicio

func: 
void suma
int n1, int n2 |  param referenc
 param valor   | int j
 |
 r = n1+n2



inicio

entrada:
a, b 

cálculo: 
h= suma    
a, b | h


salida:
h





Tenemos en memoria: 

|a=7 | h   |     |b=5 | 
   
|    |n1=7 |n2=5 |    |



//la función va a recibir 7 y 5 por valor, mandamos 
por referencia h (main) a la función. 

main: 
cálculo: 
h= suma    
a, b | h

func: 
void suma
int n1, int n2 | param referenc
 param valor   | int j
 |
 j = n1+n2



mandamos por referencia h (main) a la función, quiere
decir que no vamos a hacer una copia, no va a haber 
en memoria un espacio y dirección para j; va a ocupar,
compartir el espacio con h, mientras la función este
ejecutandose.

En memoria: 

|a=7 | h/j |     |b=5 | 
   
|    |n1=7 |n2=5 |    |


Al pasarle la referencia desde main (le prestamos h), 
le indicamos dónde está la ubicación del valor; ambas 
apuntan al mismo espacio en memoria. 

la función lee las ubicaciones de n1 y n2, y va a guardar
el resultado en j

Al terminar la función





|| Ejercicio Funciones

hacer una función llamada producto y que reciba dos num 
enteros y devuelva el producto de ambos. 
Luego hacer un programa que pida el precio de un articulo
y la cantidad vendida y muestro el monto total a pagar


func: 

inicio

func: 
int producto
int n1, int n2 | param referenc
param valor    | ....
 |
 r = n1*n2
 |
 return r

fin 

o 

rtn a*b



inicio

void main: 

//precio -> entrada
//cantidad vendida -> entrada
//monto total = p*c

entrada: 
p, c

cálculo: 
m = producto
p, c |

salida: 
m

fin 


//el programa principal se encarga de interactuar con la 
persona y las funciones hacen el trabajo. 




Ejercicio: 
hacer un función llamada mayor que reciba dos enteros
y devuelva el mayor de los enteros o cero si son iguales. 


inicio

func: 
int mayor
int n1, int n2 | param referenc
param valor    | ....
 |
 
 v---n1==b
 |         
 return 0        
 
 v---n1>n2---f
 |           |      
 rtn n1      rtn n2          
 

fin 


//que tengamos 3 return no queire decir que pueda devolver
3 valores al mismo tiempo. 
Quiere decir que va a devolver uno de ellos dependiendo 
del camino que tome el programa dado el if. 




Ejercicio: 
hacer un función llamada par que reciba un numero entero
y devuelva 1 si es par o cero si no lo es. 
hacer un programa para ingresar 20 numeros y mostrar 
por pantalla cuantos son pares. 



inicio

func: 
bool par 
int n | param referenc
param valor    | ....
 |
 
 v---n%2==0---f     //si el resto de dividir por 2 a n es 0
 |            |
 return 1     return 0

fin 




inicio
con=0

void main: 

for
x=0 | x<20 | x++
 
 a

 b=par            //creamos una bandera para guardar el 
  a |               el resutado de la funcion                                 
                          

 v-- b             //en la siguiente instrucción preguntamos
 |                  si el resultado es booleano que cuente.
 con++                

salida: 
con

fin




Alternativa a: 

 b=par       
  a |                                                                      

 v-- b             
 |
 con++ 


hacer un if directo dado que va a asignarle el resultado 
al if. 

 v-- par --f
 |    a    | 
 con++






Ejercicio: 
hacer una funcion llamada primo que reciba un numero entero
y devuelva 1 si es primo o 0 si no lo es. 
hacer un programa para ingresar numeros, el lote corta
cuando se ingresa un numero 0, informar el promedio teniendo
en cuenta solo los numeros primos. 


//crear numero primo en un función

inicio

func: 
bool primo
int n | param referenc
param valor    | ....
 |
 
 con=0

 for
 x=1 | x<=n |x++ 
 
  v-- n%x == 0  
  |            
  con++

 v-- con == 2 --f  
 |              |
 return 1   return  0                  
 
       
fin 



//programa principal: 

no se trata de un corte de control dado que no dice 
en ningun momento agrupar registros, etc. 

pide n cantidad de numeros 


inicio

void main: 
 con=0
 acu=0 

 a

 while a!=0
  
  
  p=primo
   a |
     
  v-- p
  con++  
  acum+=p

  a

prom=acum/con

salida: 
prom

fin 





Ejercicio: 
hacer funcion llamada pagos que reciba un monto float y 
una cantidad de pago int y que devuelva el monto de cada 
pago. 
hacer un programa para ingresar 10 ventas, para cada venta
se conoce el monto y la cantidad de pagos, el programa 
debera mostrar la cantidad de pago y el monto de pago 
para cada una de las ventas 


func: 
float pagos
float m, int p | 
 |
 cp=m/p
 |
 rtn cp


//el tipo de la función, no de los parametros; 
está relacionado con el retorno, tiene que coincidir 
tenemos una variable que opera float e int, entonces, 
el retorno y func serán float. 

//la función tiene que devolver lo que vale cada pago
monto dividido la cantidad de pago



void main: 

for
x=0 | x<10 | x++
 
 mon, cp

 mc=pagos
  mon, cp | 


salida
mon, cp





Ejercicio: 
hacer funcion que se llame suma resta que reciba dos num
y que devuelva la suma y la resta del primer numero 
con el segundo. 
nota: las func solo pueden devolver un valor por return 
como se puede hacer para tener ambos resultados en main. 


func: 
int sumaResta
int n1, int, n2
 | 

 v-- n1>n2 --f 
 |           |
 r=n1+n2     v-- n2<n1
 rtn r       |
             r=n1-n2
             rtn r



//podemos hacerlo de dos maneras: 
una función solo puede devolver un valor, pero dependiendo
de como le pasemos los paramétros podria devolver muchos
valores. 
Tenemos la posibilidad de pasar una variable por referencia
pasar, un atributo, un paramétro pasarlo por referencia
(prestar ubicación en memoria de variable main a la variable
de la función) para que la función pueda modificar este valor
o para que pueda asignarselo. 


//hacemos una función de tipo void y le podemos pasar 
cuatro variables: dos variables para los valores y dos
variables para los resultados por referencia. 

o 

//hacemos un función de tipo entero para que nos devuelva 
una de los datos por valor y el otro resultado por referencia


func: 
int sumaResta
int n1 | int n2      
 |
 suma=n1+n2       //hacemos suma que devolvemos al final
                   con rtn

 n2=n2-n1        //pisamos n2 con resta asignada a la
                   variable referencia. 
               
 rtn suma



void main: 
a, b

sum=sumaResta
    a | b
 
salida
sum, b






Ejercicio: 
hacer una función de tipo void -porque no va a devolver nada-
llamada positivo negativo cero que reciba un numero por 
valor y una variable por referencia. Que analice el numero
y escriba la variable referida con 1 si el numero es 
positivo, -1 si es numero es negativo y cero si el numero 
es 0. 
hacer un programa main que permite ingresar 100 num y 
emitir por pantalla cuantos son positivos y cuantos son 
negativos y cuantos son cero. 

func: 
void posNegCero
int n | int j

 v-- n==0 --f
 |         |
 j=0       v-- n>0 --f
           |         |
           j=1       j=-1



//la funcion por referencia no tiene return
//no podemos asignarla a una var en main dado 
esta falta de  return


void main: 
pos=0
neg=0
cero=0
int ban

for
x=0 | x<100 | x++

 a
 
 posNegCero
  a | ban 
 
         ban
  0      -1       1
  |       |       |
 cero++  neg++   pos++
  
salida
pos, neg, cero


fin 





Ejercicio: 
programa que permita ingresar una lista de numeros que 
corta cuando se ingresa un cero. a partir de dichos datos
informar mayor de num pares, cantidad de num impares, 
menor de num primo
hacer uso de las funciones previamente desarrolladas

//func par, primo


void main: 
bmaxpar=0
imp=0
bmin=0 

n

while n!=0

  bp=par
   n|
  
  v-- bp --f        //preguntamos si es par, si es v 
  |        |         preguntamos por bmaxpar vacia
  |        imp++
  | 
  v-- !bmaxpar --f
  |              |
  maxp=n         v-- n>maxp 
  bmaxpar=1      |
                 maxp=n
 
  pri=primo
   n |
  
  v-- prim 
  |
  v-- !bmin --f
  |           |
  minp=n      v-- n<minp
  bmin=1      |
              minp=n

salida
maxpar, imp, minp






func: 
void posNegCero
int n | int j

 v-- n==0 --f
 |         |
 j=0       v-- n>0 --f
           |         |
           j=1       j=-1



//la funcion por referencia no tiene return
//no podemos asignarla a una var en main dado 
esta falta de  return


void main: 
pos=0
neg=0
cero=0
int ban

for
x=0 | x<100 | x++

 a
 
 posNegCero
  a | ban 
 
         ban
  0      -1       1
  |       |       |
 cero++  neg++   pos++
  
salida
pos, neg, cero


fin 








//hacemos una función de tipo void y le podemos pasar 
cuatro variables: dos variables para los valores y dos
variables para los resultados por referencia. 

o 

//hacemos un función de tipo entero para que nos devuelva 
una de los datos por valor y el otro resultado por referencia


func: 
int sumaResta
int n1 | int n2      
 |
 suma=n1+n2       //hacemos suma que devolvemos al final
                   con rtn

 n2=n2-n1        //pisamos n2 con resta asignada a la
                   variable referencia. 
               
 rtn suma



void main: 
a, b

sum=sumaResta
    a | b
 
salida
sum, b








func: 
float pagos
float m, int p | 
 |
 cp=m/p
 |
 rtn cp


//el tipo de la función, no de los parametros; 
está relacionado con el retorno, tiene que coincidir 
tenemos una variable que opera float e int, entonces, 
el retorno y func serán float. 

//la función tiene que devolver lo que vale cada pago
monto dividido la cantidad de pago



void main: 

for
x=0 | x<10 | x++
 
 mon, cp

 mc=pagos
  mon, cp | 


salida
mon, cp



...........


//crear numero primo en un función

inicio

func: 
bool primo
int n | param referenc
param valor    | ....
 |
 
 con=0

 for
 x=1 | x<=n |x++ 
 
  v-- n%x == 0  
  |            
  con++

 v-- con == 2 --f  
 |              |
 return 1   return  0                  
 
       
fin 



//programa principal: 

no se trata de un corte de control dado que no dice 
en ningun momento agrupar registros, etc. 

pide n cantidad de numeros 


inicio

void main: 
 con=0
 acu=0 

 a

 while a!=0
  
  
  p=primo
   a |
     
  v-- p
  con++  
  acum+=p

  a

prom=acum/con

salida: 
prom

fin 











inicio

func: 
int mayor
int n1, int n2 | param referenc
param valor    | ....
 |
 
 v---n1==b
 |         
 return 0        
 
 v---n1>n2---f
 |           |      
 rtn n1      rtn n2          
 

fin 




inicio

void main: 

//precio -> entrada
//cantidad vendida -> entrada
//monto total = p*c

entrada: 
p, c

cálculo: 
m = producto
p, c |

salida: 
m

fin





inicio

func: 
bool par 
int n | param referenc
param valor    | ....
 |
 
 v---n%2==0---f     //si el resto de dividir por 2 a n es 0
 |            |
 return 1     return 0

fin 




inicio
con=0

void main: 

for
x=0 | x<20 | x++
 
 a

 b=par            //creamos una bandera para guardar el 
  a |               el resutado de la funcion                                 
                          

 v-- b             //en la siguiente instrucción preguntamos
 |                  si el resultado es booleano que cuente.
 con++                

salida: 
con

fin



Alternativa a: 

 b=par       
  a |                                                                      

 v-- b             
 |
 con++ 


hacer un if directo dado que va a asignarle el resultado 
al if. 

 v-- par --f
     a | 
 |
 con++





//crear numero primo en un función

inicio

func: 
bool primo
int n | param referenc
param valor    | ....
 |
 
 con=0

 for
 x=1 | x<=n |x++ 
 
  v-- n%x == 0  
  |            
  con++

 v-- con == 2 --f  
 |              |
 return 1   return  0                  
 
       
fin 



//programa principal: 

no se trata de un corte de control dado que no dice 
en ningun momento agrupar registros, etc. 

pide n cantidad de numeros 


inicio

void main: 
 con=0
 acu=0 

 a

 while a!=0
  
  
  p=primo
   a |
     
  v-- p
  con++  
  acum+=p

  a

prom=acum/con

salida: 
prom

fin 






|| vectores/array/matriz/arreglo

kcolección de elementos del mismo tipo

tipos de datos primitivos
int, float, bool, char

una variable solo puede guardar un valor de un tipo de dato
si a la misma variable le queremos guardar otro valor, 
se va a reemplazar el anterior. 

con un array podemos guardar varias cosas en la misma 
'variable' u objeto. 

int num = 5;
int num[5]; //array de 5 numeros/elementos del tipo int


Declarar vector antes de asignarle valores: 

inicio
int vNum[6]

//declaración de un vector de tipo entero de 6 elementos
llamado vNum (vector de números)


Espacio en memoria: 

en variable: 
ocupa o se reserva un espacio de memoria que permite 
guardar un elemento

|int num = 5 |       |        |


el peso o el espacio de memoria también depende del lenguaje
y tipo de dato.


en vector: 
de manera aleatoria, el sistema operativo define distintos
espacios de memoria. 

|int num = 5|           |int vNum[6]|

va a reservar/ocupar tantos espacios seguidos como necesite 
los elementos

internamente en los vectores hay muchas variables dado 
que el vector ocupas muchas espacios de memoria. 


Asignar o guardar valores en un vector: 
escritura de datos

usamos el operador de asignación =, pero antes tenemos
que apuntar con el indice al lugar o ubicación kque queremos
ocupar con el valor. 

int vNum[6]

Hacemos referencia a algunos de esos espacios de memoria. 

|int vNum[6]|
|0|1|2|3|4|5| indices


Obtener el ultimo espacio del vector: 
v[n]: total
v[0]: primer elemento/espacio
v[n-1]: ultimo elemento/espacio dado que empiezan en 0


Los indices representa cada celda/espacio de memoria del 
vector. 

vNum[3]=9 


Lectura de dato o espacio de memoria: 
acceso a los datos

vNum[3]; //9

n = vNum[3]+1 //10

//n lee 9 y suma 1. 



Ejemplos: 

pedir numero: 

inicio
n

fin



pedir 4 numeros: 

inicio: 
n1, n2, n3, n4

fin



pedir 100 numeros: 
creabamos un bucle for que repetia la entrada 100 veces

inicio: 

for
x=0 | x<100 | x++
 
 n

fin

// estos numeros no los guardaba, los opera en cada ciclo,
guardamos en acumuladores o contadores, band, etc;
y al final de la iteración los pierde. 

//crear tantos elementos manualmente es ineficiente, 
además que despues lo tenemos que operar, manipular, 
etc. 



pedir 10 numeros y guardarlos: 
podemos crear un vector definido en 10 elemetnos

inicio: 

int v[10]

for
x=0 | x<10 | x++
 
 n

 v[x] = n

fin 


//para asignarle valores en cada vuelta usamos un valor
variable como es x del for y le asignamos el valor 
de la entrada de usuario. 



Uso del vector con elementos: 

ej: cargar vector de 10 y determinar el valor max dentro
de ese vector, cual es el promedio, cantidad de valores
positivos, negativos, etc. cualquier operación que se
necesite. 


inicio: 

int v[10]

for
x=0 | x<10 | x++
 
 n

 v[x] = n

fin 

//vector cargado


//para realizar las operaciones tenemos que leer el 
vector 

entonces, primero se cargo todos los numeros; antes era
vuelta por vuelta. 

ej: sacar promedio: 

leemos el vector ya cargado usando un ciclo. 


inicio: 

acu=0

for
x=0 | x<10 | x++

 acu+= v[x]      

prom = acu/10

salida 
prom  
                    
fin 

//al acumulador le asignamos en cada vuelta del ciclo
lo que tenga el vector en la variable x. 





|| Ejercicios Vectores


Ejercicio: 
programa que solicite 50 numeros enteros y los guarde en
un vector. 
recorrer el vector y determinar e informar cuál es la suma 
de los valores del mismo. 
usar dos ciclos, uno para el vector y otro para recorrerlo 
y leerlo. 


inicio

int v[50]           //definimos vector: nombre y tamaño


for
x=0 | x<50 | x++   //repetimos el bucle 50 veces

 n                 //pedimos los n, tenemos que guardar n
                      50 veces en el vector. 

 v[x] = n          //el vector en x: v[x] = n, guardamos 
                     en cada vuelta x del ciclo, cuando x
                     valga 0 a 50, el valor de n en estas. 

                     lo inicializamos tomando x como indice
                     y le asignamos la entrada de datos. 


acu=0              //definimos o declaramos el acumulador

for
x=0 | x<50 | x++   //como estamos en otro ciclo separado
                    podemos volver a utilizar x           
 
 acu+=v[x]         //en cada vuelta le asignará el valor
                    del indicie al acumulador. 
                  
                   //asignamos en acu, lo que vamos a leer
                     del vector en x (v[x]) en cada vuelta. 

salida
acu                //mostramos la variable acu que tiene
                    la suma de todos los valores. 

fin 





Ejercicio: 
programa que solicite 50 numeros enteros y los guarde en 
un vector, luego recorrer todos los elementos del vector 
y determinar cuál es el valor maximo y su posición dentro
del vector 


inicio

int v[50]

for 
x=0 | x<50 | x++

 n
 
 v[x]=n 



b=0
pos=0

for 
x=0 | x<50 | x++
 
  v-- !b --f
  |        |
  max=v[x] v-- n>maxp 
  b=1      |
  pos=1    maxp=v[x]
           pos=x+1


//hacemos 50 veces una asignación la del vector y la de 
la operación. 

//en el segundo bucle tenemos que recorrer todos los valores
antes asignados. 
Realizar la operacion indicada: en este caso, encontrar 
el maximo de todos los valores del vector. 



alternativa: 

inicio

max=v[0]            //max es lo que tiene el vector en pos 0
pos=1               tomamos el primer elemento como max, etc. 
                    
                    //pos=1 asegura que si el primero es el
                     max, el indice quede como 1 y no 0. 
for                   
x=0 | x<50 | x++
 
  v-- v[x]>max     //preguntamos elemento en posición x>max
  |                 entonces (v), el max es el vector que está
  max=v[x]          en esa posición. 
  pos=x+1       
 

salida
max, pos

fin 




alternativa: 


max=0

for 
x=0 | x<50 | x++
 
  v-- x==0--f
  |         |
  max=x     v-- n>maxp 
  b=1       |
            maxp=v[x]
 




Ejercicio: 
hacer un programa que solicite 100 numeros enteros y los
guarde en un vector. 
luego recorrer ese vector para calcular el promedio y 
mostrar por pantalla los valores del vector que son mayores
al promedio calculado. 
-hacer 3 ciclos for- uno para los elementos, otro para 
leerlos/operarlos y otro para ver el promedio que calculamos
si algun elemento es mayor al promedio calculado. 

inicio

int v[100]

for
x=0 | x<100 | x++
 n

 v[x]=n 


acu=0

for
x=0 | x<100 | x++
 
 acu+= v[x] 

 
prom = acu/100         //una alternativa sería dividirlo
                        por x, dadas sus 100 vueltas


for 
x=0 | x<100 | x++
 
 v-- v[x]>prom       //si el contenido del vector en la 
 |                    posición x (0, 1, 2, 3, etc)
 v[x]            
                     //en cada vuelta va mostrando si es mayor
                      no va fijando mayores
salida                va a mostrar el valor mayor al prom
max                   en esa posición. 





Ejercicio: 
dada una lista de 10 numeros enteros, cargarlos en un vector
luego determinar e informar si el vector está ordenado 
en forma creciente, por ejemplo, el vector por los valores
1,3,5,7,9; está ordenado, el vector 1,5,3,9,7 está desordenado


inicio

int v[10]

for
x=0 | x<10 | x++
 n

 v[x]=n 


//para ordenar un vector podemos hacer una especie de 
busqueda de max, guardamos el primer elemento y preguntamos
si el siguiente es mayor y guardarlo, así sucesivamente. 

//otra forma es poner un contador con 10 vueltas

//podemos usar una bandera y asumir que están ordenados. 
declaramos una bandera en 1, verdadero. 
en otros ejercicio lo haciamos en falso. 

//despues declaramos un max que va a ser el vector en 
su primera posición. 


ban=1 
max=v[0]

for
x=0 | x<10 | x++   //for para recorrer los elementos guard
 
 v-- v[x]           //preguntamos si el vector en x>=max
 max=v[x]           en primera vuelta tenemos v[0] contra x
                    va a dar verdadero. 
                    reemplaza max=v[x]
v--  ban  --f
|           |
'ordenados' 'desordenados'
  
fin 

//si el valor en x >= al valor en max, actualizamos el max

//en la siguiente vuelta preguntamos si el nuevo valor
es mayor al maximo preguntamos si es verdadero. 
así todas las vueltas. 
necesitamos actualizar para preguntar si el nuevo valor
de la nueva vuelta es el valor max

//si una sola vez va hacia el falso, ponemos la bandera 
en 0 (falso) para preguntar al final si la bandera 
está ordenada





Ejercicio: 
Hacer un programa que solicite una serie de valores tipo 
char. se entiende por caracteres a cada elemento que se 
obtiene de presionar una tecla. 
por ejemplo el valor 25, son dos caracteres; si quisieramos
guardarlo en variables enteras nos alcanza con una (pero
es un numero), si quisieramos guardarlo en variable char
necesitaremos dos. 
la frase 'maxi programa' tiene tiene 13 variables
de forma char/caracteres. 
la cantidad de valores será como maximo 50 pero el programa
puede cortar antes si se ingresa el caracter punto. 
Una vez cargado el vector de char, recorrerlo y reemplazar
todas las apariciones de la letra a por la letra e. 
por ejemplo, vector, char original; hola muchachada como 
están. 
vector char modificado: hole muchechede como esten
finalmente mostrar el resultado en pantalla. 
necesitaremos un vector char de 50, pero no se cargará 
con un for 

//primero creamos el vector char de 50

//necesitamos un bucle que se pueda cortar y además nos 
pide un caracter como entrada
lo cargamos con un while, pero antes pedimos una letra. 

//como no tenemos x/posición del for, para trabajar como un
indice la tenemos que crear. 

i=0


inicio

char v[50]          //definición tamaño vector

l                   //pedimos letra/caracter

i=0                 //indice en 0

while l!='.' && i<50 //definimos entrada/corte bucle
                     mientras i<50 no se rompe, tiene que 
                     cumplir las dos condiciones. 
 
 char v[]=l         //carga/inicialización del vector en 
                     una posición
 
 l                  //volvemos a pedir la letra

 i++                //aumentamos indice después de cada letra



//funcionamiento de while:
inicia el programa. 
en cada vuelta pedimos una letra (la de afuera del while)
chequea si no es un punto, entra. 
guardamos la letra en la posición/valor de i (1°vuelta es 0)
vuelve a pedir letra e incrementa el indice. 
chequea la letra (la que está dentro del bucle) si no es 
un punto, entra, la guarda en el indice aumentado (1). 
vuelve a peidr letra y chequear, así sucesivamente. 

//el while funciona hasta ahora para una carga infinita
pero solo podemos cargar hasta 50. le agregamos una condición
and/&&

&& i<50


//ahora tenemos que recorrer el vector para detectar el
caracter o la letra a dentro y reemplazarla por la letra e. 

//lo podemos hacer con un for dado que sabemos al extension
del vector aunque no este cargado completamente. 

for
x=0 | x<50 | x++     //for de 50
 
 v-- v[x]=='a'       //si en el vector en posición x, 
 |                    tenemos una letra a, asignamos 
 v[x]='e'             (si el caracter que está en ese indice)
                      en ese lugar v[x], una letra e. 


//o lo podemos hacer con un while para recorrer solo 
los elementos que fueron cargados. 

el while sigue la misma estructura para cargar datos, 
y además tenemos que recorrer y mostrar los elementos. 

i=0                     //inicializamos el indice en 0
                         para recorrer correctamente el while

while v[i]!='.' && i<50 //queremos chequear/preguntar hasta 
                         donde cargó la persona y el tamaño
 v[i]
 i++





Ejercicio
dar una lista de 10 numeros y cargarlos en un vector. 
luego detectar si en el vector hay un elemento repetido. 
de haberlo indicarlo con un cartel aclaratorio 'hay repetidos'
de lo contrario 'no hay repetidos'. 


inicio

int v[10]

for
x=0 | x<10 | x++

 n

 v[x]=n 



//buscar repetidos y no repetidos
buscamos cada elemento del vector y ver si existe otra vez
ese elemento. 
tomamos un elemento y recorremos otra vez desde la posición
de este elemento si existe otro igual

rep=0

for  
x=0 | x<10 | x++       //ciclo grande para recorrer todos
                        los elementos.

 r=v[x]                //guardamos el elemento repetido
                        en las vuelta va a guardar el elem
                        que está en la posición x en la 
 con=0                  variable r. 
 
  for                  //usamos un ciclo interno para
  y=0 | y<10 | y++      recorrer y preguntar si r existe
                        en algunas de las posiciones del 
  v-- r==v[y] --f       vector. 
  |
  con++
 
 v-- con==2            //dentro del bucle externo.
 |
 rep=1


v-- rep --v           //fuera del bucle externo. 
|         | 
'hay'     'no hay'


//funcionamiento
en la primera vuelta ciclo externo, agarramos un primer
elemento; en la primera vuelta de este, va a dar 10 vueltas
el ciclo interno. 
cuando el ciclo externo termine de dar sus 10 vueltas 
va a llegar al final del ciclo externo y va a chequear 
la segunda vuelta de este ciclo externo. 
va a tomar el segundo elemento que está en x=1, lo va a 
guardar en r y va a dar 10 vueltas más; así sucesivamente. 

rs: va a dar 10 vueltas por cada elemento del vector. 

entonces, guardamos el elemento y preguntamos si hay similitud
//creamos un contador afuera al inicio del bucle interno y 
cuando hay coincidencia, vamos a sumar ese contador. 

con=0

v-- r==v[x]
|
con++

//naturalmente un conteo va a haber (detalle) en la primera
vuelta va a decirnos que son iguales y va a contar. 
entonces, vamos a tener en cuenta, el conteo a partir de 2. 

//entonces, al final del bucle interno, afuera, preguntamos
si contador >= 2, quiere decir que hay repetidos. 
en verdadero creamos una bandera rep y le asignamos 1. 
tambien creamos la bandera rep afuera del bucle externo grande

v-- con>=2
|
rep = 1

asumimos que no hay repetidos, entonces, creamos la bandera
en 0. 


//funcionamiento desde bucle externo: 
para evaluar, agarramos el primer elemetno

r=v[x]

iniciamos el contador en 0
 
con=0 (no repetidos)

recorremos y evaluamos 10 veces r==v[x]
y aumentará contador si encuentra coincidencias
la primera coincidencia es obligatoria por eso empezamos 
a contar de a 2. 


//al final mostramos el resultados que nos pedian: 
con if si hay repetidos

v-- rep --v
|         | 
'hay'     'no hay'
mostramos la frase 'hay repetidos y es falso 'no hay 
repetidos'
