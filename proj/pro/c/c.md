# C



# Módulos

Sintaxis base de C, la gestión directa de memoria y la programación imperativa

1. Introducción y Sintaxis Base

`Flujo de desarrollo`:
Configuración de compiladores (gcc/clang), el preprocesador y etapas de compilación.

`Estructura del código`:
Función main(), directivas de inclusión (#include) y comentarios.

`Tipos de datos`:
Primitivos (int, char, float, double) y modificadores (short, long, unsigned).

`Entrada/Salida`:
Lectura y escritura en consola mediante printf y scanf con especificadores de formato.


2. Control de Flujo

`Estructuras condicionales`:
Evaluación lógica con if, else if, else y operador ternario.

`Selección múltiple`:
Control mediante switch y case.

`Bucles de iteración`:
Estructuras while, do-while y for.

`Instrucciones de salto`:
Uso adecuado de break y continue.


3. Funciones y Modularización

`Diseño modular`:
Prototipos, declaración y definición de funciones.

`Mecanismos de pasaje`:
Pasaje de argumentos por valor

`Ámbito de variables`:
Modificadores de alcance y tiempo de vida (local, global, static).

`Organización`:
Separación de código en archivos de cabecera (.h) y de implementación (.c).


4. Arreglos y Cadenas

`Arreglos continuos`:
Vectores unidimensionales y matrices multidimensionales.

`Cadenas de caracteres`:
Manipulación de arreglos de tipo char finalizados en \0.

`Librería de cadenas`:
Operaciones estándar con <string.h> (strlen, strcpy, strcmp, strcat).


5. Punteros y Memoria Dinámica

`Fundamentos de punteros`:
Operador de dirección (&), desreferencia (*) y tamaño en memoria.

`Pasaje por referencia`:
Modificación de variables y retorno múltiple a través de punteros

`Aritmética de punteros`:
Relación directa entre arreglos y punteros.

`Gestión de memoria`:
Asignación en el Heap con malloc, calloc, realloc y liberación con free


6. Estructuras y Manejo de Archivos

`Tipos compuestos`:
Definición de estructuras (struct) y alias (typedef).

`Punteros a estructuras`:
Acceso a miembros mediante el operador flecha (->).

`Persistencia de datos`:
Operaciones con archivos (FILE*), aperturas (fopen), lectura/escritura (fprintf, fscanf, fread, fwrite) y cierre (fclose).

`Proyecto Integrador`:
Desarrollo de una herramienta en consola (como un analizador de texto o gestor de registros) aplicando gestión manual de memoria




# 1. Introducción y Sintaxis Base

## 1. `Flujo de desarrollo`:
Configuración de compiladores (gcc/clang), el preprocesador y etapas de compilación.

#### C transforma texto plano comprensible por humanos en instrucciones binarias ejecutables por la CPU
Compiladores como gcc (GNU Compiler Collection) o clang (LLVM) realizan esta transformación a través de cuatro etapas consecutivas y estrictas

1. Preprocesamiento
Directivas # y eliminación de comentarios

El preprocesador toma el código fuente (.c), expande el contenido de los archivos de cabecera (#include),
sustituye las macros (#define) y elimina todos los comentarios del texto
Genera un archivo intermedio (.i).

Comando para inspeccionarlo: `gcc -E main.c -o main.i`.


2. Compilación
Traducción a lenguaje ensamblado

El compilador analiza el código preprocesado, valida la sintaxis y optimiza el flujo antes de traducirlo a código en lenguaje ensamblado específico para la arquitectura de tu procesador (ej. x86_64 o ARM).
Produce un archivo (.s).

Comando para inspeccionarlo: `gcc -S main.i -o main.s`.


3. Ensamblado
Conversión a código ejecutable por hardware

El ensamblador traduce las instrucciones en ensamblado a código máquina (instrucciones en binario puro).
El resultado es un archivo objeto (.o en Linux/macOS, .obj en Windows)
que contiene ceros y unos pero aún no se puede ejecutar por sí solo.

Comando para inspeccionarlo: `gcc -c main.s -o main.o`


4. Enlazado (Linking)
Unión de librerías y generación del ejecutable

El enlazador (linker) toma uno o varios archivos objeto (.o) y los combina con las bibliotecas del sistema (como las definiciones de printf contenidas en la C Standard Library).
Resuelve las direcciones de memoria de las funciones y genera el archivo binario ejecutable final

Comando manual: `gcc main.o -o programa`



Uso del compilador:
no ejecutas las cuatro fases manualmente

Un solo comando compila e integra todo el flujo de extremo a extremo:

### Con GCC:

`gcc -Wall -Wextra main.c -o programa`

### Con Clang:

`clang -Wall -Wextra main.c -o programa`


##### Las banderas -Wall y -Wextra activan advertencias (warnings) sobre posibles errores lógicos en el código
Trata siempre las advertencias con la misma importancia que los errores de compilación.




## 2. `Estructura del código`:
Función main(), directivas de inclusión (#include) y comentarios.

```
// 1. Directivas del preprocesador e inclusión de librerías
#include <stdio.h>   // Para printf, scanf
#include <stdlib.h>  // Para EXIT_SUCCESS y EXIT_FAILURE

// 2. Definición de constantes y macros
#define LIMITE_INTENTOS 3

// 3. Prototipos de funciones (declaraciones previas)
void mostrar_mensaje(void);

// 4. Función principal con firma completa (recibe parámetros de consola)
int main(int argc, char *argv[]) {
    /* 
     * argc: Cantidad de argumentos pasados desde la consola (Argument Count)
     * argv: Vector de cadenas con el valor de cada parámetro (Argument Vector)
     */
    
    mostrar_mensaje();

    // Retorno semántico usando estándar de stdlib.h
    return EXIT_SUCCESS; // Equivale a return 0;
}

// 5. Definición/Implementación de funciones
void mostrar_mensaje(void) {
    printf("Estructura de código en C correctamente cargada.\n");
}
```


#### 1. Firma extendida de main
Aunque int main(void) funciona para programas simples
##### !!! int main(int argc, char *argv[]) permite capturar parámetros del sistema operativo al lanzar el ejecutable desde la consola (por ejemplo: ./programa argumento1

#### 2. Inclusión de cabeceras (#include)
Copian prototipos y declaraciones en la parte superior del archivo
Regla: Nunca incluyas archivos de código (.c) con #include, solo archivos de cabecera (.h).

#### 3. Códigos de salida estándar
##### !!! Usar EXIT_SUCCESS (0) o EXIT_FAILURE (generalmente 1) mediante <stdlib.h> mejora la portabilidad del programa en distintos sistemas operativos

#### 4. Prototipos de funciones
Declarar las funciones antes de main() informa al compilador sobre su existencia
el tipo de datos que retornan y los parámetros que reciben antes de su implementación física más abajo en el archivo



## 3. `Tipos de datos`:
Primitivos (int, char, float, double) y modificadores (short, long, unsigned).

#### !!! En C, cada variable requiere un tipo de dato explícito que determina cuánto espacio reserva en memoria y cómo el compilador interpreta sus bits

#### char:
Carácter ASCII o entero de bajo rango,1 byte (8 bits),-128 a 127

#### int:
Entero estándar del sistema,4 bytes (32 bits),"-2,147,483,648 a 2,147,483,647"

#### float:
Decimal de precisión simple,4 bytes (32 bits),~6-7 dígitos decimales de precisión

#### double:
Decimal de precisión doble,8 bytes (64 bits),~15-17 dígitos decimales de precisión


### Modificadores de Signo y Tamaño: Se anteponen a los tipos primitivos (principalmente a int y char) para alterar el rango de almacenamiento o la cantidad de bytes asignados

#### unsigned
"int, char","Elimina los números negativos; duplica el rango positivo (ej. unsigned int: 0 a 4,294,967,295)."

#### signed
"int, char",Permite valores positivos y negativos (comportamiento por defecto).

#### short
int,"Reduce la ocupación a 2 bytes (16 bits), con un rango de -32,768 a 32,767."

#### long
"int, double",Extiende el tamaño del entero a 4 u 8 bytes según la arquitectura (32 o 64 bits).

#### long long
int,Garantiza un tamaño mínimo de 8 bytes (64 bits) para enteros de gran magnitud.


### Verificación de tamaño con sizeof

##### Estándar de C no exige un tamaño fijo en bytes para todos los tipos, sino mínimos garantizados
##### Para consultar la memoria exacta asignada por tu compilador y arquitectura se utiliza el operador sizeof:

```
#include <stdio.h>

int main(void) {
    unsigned int edad = 25;
    long long poblacion_mundial = 8000000000LL;

    printf("Tamaño de char:      %zu byte(s)\n", sizeof(char));
    printf("Tamaño de short:     %zu byte(s)\n", sizeof(short));
    printf("Tamaño de int:       %zu byte(s)\n", sizeof(int));
    printf("Tamaño de long long: %zu byte(s)\n", sizeof(long long));
    printf("Tamaño de double:    %zu byte(s)\n", sizeof(double));

    return 0;
}
```



## 4. `Entrada/Salida`:

Lectura y escritura en consola mediante printf y scanf con especificadores de formato.

#### %d / %i,int (entero con signo)
"printf(""%d"", 42);"

#### %u,unsigned int (entero sin signo)
"printf(%u, 100);"

#### %f,float (decimal simple)
"printf(%.2f, 3.1416);"

#### %lf,double (decimal de doble precisión)
"printf(%lf, 3.14159265);"

#### %c,char (carácter individual)
"printf(%c, 'A');"

#### %s,char[] (cadena de caracteres)
"printf(%s, ""Hola"");"

#### %p,Puntero (dirección de memoria)
"printf(%p, (void*)&var);"


### printf: Escritura en consola
reemplaza cada especificador dentro de una cadena de formato por el valor del argumento correspondiente en orden de aparición
Permite controlar la alineación y la precisión decimal mediante modificadores (como %.2f para truncar a 2 decimales).

```
#include <stdio.h>

int main(void) {
    int edad = 24;
    double pi = 3.14159;

    printf("Edad: %d años | Valor de Pi: %.2lf\n", edad, pi);
    return 0;
}
```


### scanf: Lectura desde consola
scanf lee caracteres de la entrada estándar y los convierte al tipo especificado
Requiere anteponer el operador de dirección & a las variables escalares para pasar su posición en memoria y permitir su modificación

```
#include <stdio.h>

int main(void) {
    int edad;
    float altura;

    printf("Ingresa tu edad y altura (ej: 25 1.75): ");
    // &edad y &altura indican a scanf DÓNDE guardar los datos leídos
    scanf("%d %f", &edad, &altura);

    printf("Registrado: %d años y %.2f m de altura.\n", edad, altura);
    return 0;
}
```

### !!! Consideraciones criticas con scanf

operador &:
Es obligatorio para tipos primitivos (int, float, char).
No se utiliza al leer cadenas de caracteres (char[]), ya que el nombre del arreglo ya representa su dirección en memoria.

Espacios en blanco y buffer:
Al leer caracteres individuales con %c
añade un espacio previo en el formato (" %c") para omitir el salto de línea \n dejado en el buffer por entradas anteriores


## Ejercicio módulo 1

### Generador de Recibo de Compra

Escribe un programa en C que solicite al usuario los datos de una transacción comercial, realice los cálculos de importes e imprima un resumen formateado en pantalla.

Requerimientos del programa


1. Lectura de datos:

Categoría del producto: Un carácter individual (char), por ejemplo 'A' o 'B'.
Cantidad de unidades: Un entero (int).
Precio unitario: Un valor decimal de doble precisión (double).
Porcentaje de descuento: Un decimal de precisión simple (float), por ejemplo 10.0 para un 10%.


2. Cálculos:
Subtotal = cantidad * precio unitario}
Monto descontado = subtotal * (porcentaje descuento/100.0)
Total final} = subtotal - montodescontado


3. Salida en consola:
Desplegar el resumen con los precios y montos redondeados a 2 decimales (%.2lf).
Mostrar al final de la pantalla el tamaño en bytes reservado para la variable del total utilizando el operador sizeof.

Ej esperado:

```
--- REGISTRO DE VENTA ---
Ingrese categoría del producto (una letra): A
Ingrese cantidad de unidades: 3
Ingrese precio unitario ($): 1500.50
Ingrese porcentaje de descuento (%): 10

--- RESUMEN DE COMPRA ---
Categoría: A
Cantidad: 3 unidades
Subtotal: $4501.50
Descuento (10.00%): $450.15
Total Final: $4051.35
[Info] La variable del Total Ocupa: 8 bytes en memoria.
```

Hits

incluir <stdio.h>.
Recuerda usar el operador de dirección & en cada variable dentro del scanf.
Para leer el char sin problemas de saltos de línea atrapados en el buffer, usa " %c" (con un espacio antes del porcentaje).


