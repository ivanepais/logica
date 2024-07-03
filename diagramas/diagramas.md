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





