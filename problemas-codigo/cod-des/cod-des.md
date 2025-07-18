# Eficiencia - Robustez - Claridad - Escalabilidad


## Eficiencia: 

##### Código que funcione de forma óptima en cuanto a tiempo de ejecución, eso de memoria y escalabilidad. 

Reducir uso de CPU, memoria, líneas

Ejecutar más rápido

Ser minimalista

Evitar lógica redundante


Ej: 

Usa algoritmos adecuados a la escala del problema (O(n), O(log n), etc.)

Minimiza bucles innecesarios o cálculos repetidos

Usa estructuras de datos eficientes (ej: set en vez de list para búsquedas)

Evita copias grandes o uso excesivo de memoria

Usa generadores o procesamiento “perezoso” cuando se puede

Aplica early return o lógica corta-circuitada


## Robustez: 

##### Código resistente a errores, que se comporte de forma predecible ante entradas inválidas, fallos inesperados y condiciones límite.

Validar errores, entradas, casos raros

Manejar excepciones

Ser a prueba de fallos

Agregar controles extra


Ej: 

Valida todas las entradas antes de operar

Usa try/except para capturar errores esperables

Tiene mensajes de error claros y controlados

Tolera entradas incompletas, inesperadas o inconsistentes

Sigue el principio de “fail safe”: no hacer daño si falla

Está cubierto por tests de casos borde (listas vacías, None, strings mal formateados, etc.)


## Claridad: 

##### Código fácil de leer, entender y modificar, tanto para vos como para otras personas (¡incluido tu “yo” del futuro!).

Nombres legibles y descriptivos 

Código dividido y limpio

Comentar por qué, no solo qué, separar en secciones


Ej:

Usa nombres descriptivos para variables y funciones

Divide el código en funciones pequeñas con una sola responsabilidad

Tiene estructura visual clara (bloques separados, indentación correcta)

Usa comentarios útiles (explican por qué, no cómo)

Usa docstrings para describir lo que hace cada función

Sigue un estilo de código uniforme (como PEP 8)


## Escalabilidad

### Código que no se rompa cuando aumenta la carga (más usuarios, más datos), fácil de extender o modificar cuando cambian los requerimientos y que permita que más personas lo trabajen a la vez, sin conflictos.

Modular:

El código está dividido en piezas pequeñas y reutilizables.

Cada módulo (archivo o clase) tiene una única responsabilidad
    
Ej: Podés cambiar una parte sin afectar las demás.


Extensible:

Agregar nuevas funcionalidades sin reescribir lo viejo.

Usa principios como el de abierto/cerrado: abierto a extensión, cerrado a modificación

Ej: Sumar lógica nueva sin romper lo existente.


Reutilizable:

Las funciones y clases no están acopladas a un único caso.

Se parametrizan, abstraen o heredan para usar en varios contextos.

Ej: Menos duplicación, más eficiencia


Separación de responsabilidades:

La lógica de negocio, la interfaz y los datos están separados.

Cada capa tiene su propia responsabilidad (MVC, servicios, etc).

Ej: Trabajar sobre una capa sin tocar las otras.


Testeable:

El código está diseñado para ser probado fácilmente (unidades, integración).

Usa dependencias inyectables y evita efectos secundarios ocultos.

Ej: Cambios seguros, menos errores.


Desempeño progresivo:

El código no se vuelve exponencialmente más lento con más datos o usuarios.

Usa algoritmos y estructuras de datos adecuados

Ej: Escala bien con el uso.



# Diseño de Código 

##### El código debe ser claro, modular, robusto, y mantenible, aplicando buenas prácticas y patrones simples de diseño.


## 1. Fundamentos del buen diseño 

Legibilidad y claridad

Nombres significativos

Comentarios útiles vs innecesarios

Entrada / procesamiento / salida


## 2. Funciones y modularidad

Descomposición en funciones pequeñas

Principio de responsabilidad única

Parámetros y retorno claros


## 3. Robustez y manejo de errores

Validación de entrada

try / except y errores comunes

Diseño defensivo


## 4. Diseño de scripts y organización del código

Separación de lógica principal (main) y funciones

Uso de if __name__ == "__main__"

Separar código en módulos (utils.py, etc)


## 5. Buenas prácticas y estilo 

Aplicar PEP 8

Uso de linters (flake8) y formateadores (black)

Introducción a tipos (mypy) y anotaciones simples



# Eficiencia 

## 1. Fundamentos

Tiempo vs memoria

Escalabilidad y casos reales

Medir el rendimiento (tiempo y espacio)

Complejidad algorítmica


Análisis de algoritmos

Notación Big-O


## 2. Eficiencia temporal: complejidad algorítmica

Big-O: O(1), O(n), O(log n), O(n²), O(2ⁿ)

Tasa de crecimiento

Cómo detectar y reducir bucles anidados

Buscar y ordenar de forma eficiente


Búsqueda lineal vs binaria

Identificar la complejidad de fragmentos de código

Optimizar funciones cuadráticas

Visualgo.net para ver complejidades en acción


## 3. Eficiencia espacial (memoria)

Uso eficiente de estructuras: listas vs sets vs dicts

Costos de copiar datos innecesariamente

Evitar estructuras temporales innecesarias

Generadores y lazy evaluation


Convertir listas en generadores (yield)

Evitar duplicaciones de estructuras grandes

Medir memoria con sys.getsizeof()


## 4. Refactorización y micro-optimizaciones

Perfilado de código con cProfile, timeit, line_profiler

Reemplazar patrones ineficientes (+= dentro de bucles, list + list)

Evitar cálculos repetidos (memoización simple)

Usar algoritmos o estructuras más apropiadas


Detectar cuellos de botella en una función larga

Algoritmo de O(n²) a O(n log n)


## 5. Eficiencia aplicada: diseño orientado al rendimiento

Diseño eficiente de funciones y módulos

Costo de llamadas innecesarias

Técnicas como:

Short-circuit evaluation

Early exit

Evitar recomputación

Elegir estructuras según uso esperado


Proyecto: 

Debe cumplir con: 

Algoritmos eficientes

Estructuras correctas

Medición de tiempos

Justificación de diseño


## Herramientas: 

timeit, time: Medir tiempo de ejecución

cProfile: Analizar tiempo por función

line_profiler: Ver qué línea consume más

sys.getsizeof: Medir uso de memoria

functools.lru_cache: Memoización automática


## Claves

“cuello de botella” y cómo encontrarlo

Elegir el algoritmo correcto antes de “codear rápido”

No optimizar prematuramente, pero sí medir

Hacer que tu solución escale: ¿cómo responde si n = 10⁶?




# Robustez 

## 1. Fundamentos

Código que "funciona" y código confiable.

Entradas válidas vs entradas inválidas


# 2. Manejo de errores con try/except

Manejo de excepciones con try/except

Excepción, capturarla, informar al usuario

Cuándo usar try/except y cuándo no


# 3. Validación y control de flujo

Validación explícita (if ...) antes de ejecutar

Uso de assert vs validación

Early return (salir antes si la entrada no sirve)


## 4. Diseño defensivo y testing básico

Evitar errores antes de que ocurran

Escribir tests básicos con assert o unittest


## Herramientas: 

try/except: Manejo de errores

unittest: Pruebas automáticas

assert: Condiciones esperadas

type(), isinstance(): Validación de tipos

mypy: Tipado estático opcional para mayor robustez


## Claves 

Nunca asumir que input() es correcto

Siempre validar antes de operar

Uso try/except para errores probables

Mensajes útiles si algo falla

Escribir tests o probar funciones con entradas malas


# Claridad 

## 1. Código 

Debe explicar qué hace y por qué, no solo cómo

La intención debe ser explícita

Evitar nombres vagos, abreviaciones crípticas y estructuras enredadas


## 2. Nombres

Deben revelar rol y propósito

Completos, legibles 


## 3. Estructura y orden visual

Dividir el código en bloques visuales claros

Separar lógica en funciones pequeñas

Escribir los bloques en orden lógico: entrada → proceso → salida


Como: 

Entrada
Validación
Cálculo principal
Resultado


## 4. Comentarios y documentación

Comentá por qué, no solo qué

Usá docstrings para funciones

Evitá comentar obviedades


## Herramientas

black: Formatea el código automáticamente

flake8:	Revisa estilo

pylint: Detecta problemas comunes

docstring: Genera documentación de funciones


## Claves

¿El nombre de la función deja claro qué hace?

¿El nombre de cada variable es comprensible por sí mismo?

¿El orden de los pasos se entiende al leer de arriba hacia abajo?

¿Los comentarios explican intención, no solo el “cómo”?

¿Es fácil cambiar un valor o una parte del código sin romperlo?



# Prácticas

## Eficiencia

1. Estructura de datos adecuada:

Usá set o dict en lugar de list si vas a hacer muchas búsquedas.

Evitá estructuras que obligan a copiar o recorrer todo sin necesidad

```
# Evitá:
if elemento in lista:  # O(n)

# Mejor:
if elemento in conjunto:  # O(1)

```


2. Evitá bucles innecesarios o anidados

Si tenés un for dentro de otro y no es imprescindible, buscá una forma de reducirlo.

Pensá en cómo evitar volver a calcular lo mismo.

Guardá resultados previos (memoización).


3. Algoritmos apropiados al problema

Elegir bien el algoritmo puede mejorar de O(n²) a O(n log n) o incluso O(n).

Conocé las bases: búsqueda binaria, ordenamiento eficiente, tablas hash, etc


4. Short-circuit evaluation y early return

Terminá antes si no hace falta seguir

```
# En lugar de:
if x == 0:
    return 0
else:
    return 10 / x

# Mejor:
if x == 0:
    return 0
return 10 / x

```


5. Evitá recalcular: usá variables intermedias

Si usás el mismo cálculo varias veces, guardalo.

```
# Evitá:
if len(lista) > 0 and lista[len(lista) - 1] > 5:

# Mejor:
longitud = len(lista)
if longitud > 0 and lista[longitud - 1] > 5:

```


6. Usá generadores en vez de listas cuando puedas

Evitás cargar todo en memoria.

```
# Ineficiente para muchos datos:
sum([x*x for x in range(1_000_000)])

# Mejor:
sum(x*x for x in range(1_000_000))

```


7. Medir rendimiento

Usá timeit, cProfile, o %timeit (si usás Jupyter) para comparar soluciones


8. Código limpio

Código claro es más fácil de optimizar después.

No sacrifiques claridad por micro-optimizaciones antes de medir.
    

9. Conocé las complejidades comunes

Saber que .sort() es O(n log n) y que .append() es O(1) te ayuda a tomar decisiones más eficientes.

    
10. No optimizar antes de tiempo 

"Premature optimization is the root of all evil." – Donald Knuth"

Primero escribí el código correcto y claro, luego optimizás lo necesario.


## Robustez

1. Validá todas las entradas

Nunca confíes en que los datos son correctos. Siempre chequeá:

Tipo

Rango

Formato

```
edad = input("Edad: ")
if not edad.isdigit():
    print("La edad debe ser un número entero.")

```


2. try/except para manejar errores previsibles

Capturá solo lo que esperás que falle, y explicá el error con un mensaje claro

```
try:
    valor = int(input("Número: "))
except ValueError:
    print("Eso no es un número válido.")

```


3. No ocultes errores importantes

Evitá usar except: sin tipo. 

Siempre especificá la excepción.

```
# Evitá esto:
try:
    ...
except:
    pass  # Silencioso

# Mejor:
except ValueError as e:
    print(f"Error: {e}")

```


4. Validá desde el principio (fail early)

Detectá errores cuanto antes, idealmente antes de hacer cómputos costosos.


5. Escribí funciones que fallan de forma controlada

##### Una función robusta:

No rompe el programa

Da pistas útiles para entender el problema

Devuelve un valor de error o lanza una excepción manejable


6. Evitá dependencias innecesarias entre partes

##### El código robusto aísla riesgos: si algo falla en una parte, que no rompa todo.

Divide tu lógica en funciones pequeñas, cada una con una responsabilidad clara.
    
    
7. Comprobá precondiciones y postcondiciones

##### Si una función requiere algo (por ejemplo, una lista no vacía), chequealo. 

```
def promedio(lista):
    if not lista:
        raise ValueError("No se puede calcular el promedio de una lista vacía.")
    return sum(lista) / len(lista)

```


8. Tests para casos borde

##### Una función robusta:

Funciona con inputs raros: None, "", 0, `[]`, etc.

Tolera errores comunes del usuario

Tiene tests que lo confirman

    
9. Usá logs o mensajes informativos

Cuando algo falla, mostrale al usuario (o a vos mismo) un mensaje que ayude a entender qué pasó


10. Pensá en lo peor

"¿Qué pasa si esto no existe? ¿Y si llega vacío? ¿Y si el archivo no está?"

El pensamiento defensivo es la base de la robustez.


### Herramientas

try/except

assert

Validaciones de tipo (con isinstance)

Tests automatizados (con pytest o unittest)

##### logging para registrar errores (mejor que print() en producción)


## Claridad 

1. Nombres significativos

Que expliquen qué representa cada variable o función.

Evitá abreviaciones crípticas


2. Una función, una responsabilidad

Cada función debe hacer una sola cosa y hacerlo bien.

##### Si una función necesita un título o comentario del tipo “también hace...”, es demasiado larga.
    
    
3. docstrings y comentarios útiles

Escribí un docstring corto que explique qué hace la función y qué espera como entrada/salida.

Comentá por qué hacés algo, no cómo (eso se lee en el código).

```
def convertir_temperatura(celsius):
    """Convierte grados Celsius a Fahrenheit."""
    return celsius * 9/5 + 32

```


4. Organizá tu código por bloques lógicos

Separá visualmente entrada, proceso y salida.

Usá líneas en blanco para agrupar ideas relacionadas

```
# Entrada
nombre = input("Nombre: ")
edad = int(input("Edad: "))

# Cálculo
años_faltan = 65 - edad

# Salida
print(f"{nombre}, te faltan {años_faltan} años para jubilarte.")

```


5. Evitá lógica anidada en exceso

Reducí el nivel de indentación usando return temprano o continue.

```
# Peor:
if x > 0:
    if x < 10:
        print("OK")

# Mejor:
if not (0 < x < 10):
    return
print("OK")

```


6. Eliminá código muerto o innecesario

##### No dejes prints de prueba, funciones sin usar ni código comentado “por si acaso”.


7. Pensá en quien lo va a leer

¿Alguien nuevo podría entender esto en menos de 30 segundos?

Si la respuesta es no, hacelo más claro.


8. Estructuras de control claras

Evitá condicionales demasiado complejos. 

Si lo necesitás, dividilo en pasos intermedios con nombres que aclaren la lógica.     


9. Seguí convenciones (como PEP 8 en Python)

Usá:

4 espacios por nivel de indentación

snake_case para variables y funciones

nombres en minúsculas

líneas de menos de 79 caracteres


10. Releé y revisá tu propio código

Volvé al código al otro día y tratá de entenderlo sin recordar cómo funciona.

Si te cuesta, hacelo más claro


Rs: 

¿Las funciones tienen nombres que describen su propósito?

¿Los nombres de variables son descriptivos?

¿Hay docstrings?

¿Está bien indentado y dividido visualmente?

¿Es fácil seguir el flujo general?



# Validaciones 

Los buenos algoritmos y sistemas logran un balance:

##### Validás lo importante, pero no cada mínimo detalle si no vale la pena.

##### Optimás lo que realmente impacta en el rendimiento (ej: un bucle que corre 10⁶ veces), no cada línea.

##### A veces escribís primero robusto, luego perfilás y optimizás lo que duele.


Ayuda a crear código más robusto, seguro y confiable, especialmente cuando tratás con entrada de usuarios, archivos, datos externos, o sistemas complejos.


Validar correctamente:

1. Entrada del usuario (CLI, GUI, web)

2. Argumentos de funciones y clases

3. Estructura y tipo de datos (listas, dicts, JSON…)

4. Formatos: fechas, correos, contraseñas, etc.

5. Datos en capas de dominio (ej: modelo de negocio)


## 1. Fundamentos 

1. ¿Qué es validar?

2. Diferencia entre validación y conversión

3. Validación temprana (fail fast)

4. Validación por tipo, rango, formato, longitud, estructura


Ej: 

Validar un número entre 1 y 100

Validar un string no vacío

Validar una fecha con formato dd/mm/yyyy usando regex o datetime


## 2. Validación de entradas del usuario

1. input() y errores típicos

2. Cómo detectar y corregir entradas mal formateadas

3. try/except con ValueError, TypeError, etc.


Ej:

Pedir y validar edad (int >= 0)

Pedir una fecha y convertirla a datetime

Validar un email con re.match(...)


## 3. Validación en funciones y clases

1. Precondiciones y contratos

2. Validar argumentos al inicio de funciones

3. Uso de assert, raise, isinstance, type()

4. Decoradores simples para validar entradas


Ej: 

Crear función calcular_promedio(lista) que valide no vacía

Crear clase Persona(nombre, edad) que valide que edad > 0


## 4. Validación estructural y de tipos complejos

1. Validar listas, diccionarios, estructuras anidadas

2. Validar un JSON o entrada con esquema

3. pydantic o jsonschema (opcional)


Ej: 

Validar un diccionario que represente un producto:
{ "nombre": str, "precio": float, "stock": int }

Validar un JSON con varios usuarios


## 5. Validaciones avanzadas por dominio 

1. Validaciones que dependen de reglas de negocio

2. Separación de lógica de validación y lógica principal

3. Manejo de errores personalizado (raise MiError)


Ej:

Validar que un usuario no se registre dos veces

Validar que un total de compra no supere el saldo


## 6. Práctica integrada y diseño limpio

1. Organización de validaciones: centralizadas vs distribuidas

2. Validaciones repetibles: funciones auxiliares, clases validadoras

3. Validaciones en tests unitarios


Ej: 

App CLI que:

Pide datos de usuario

Valida campos

Guarda en una estructura

Muestra errores con claridad


## Tipos de validaciones

### Tipos: ¿Cómo validás que algo sea un número?

### Rango: ¿Cómo controlás que algo esté entre 0 y 100?

### Estructura: ¿Cómo validás que un diccionario tenga ciertas claves?

### Robustez: ¿Qué pasa si el usuario ingresa "abc" donde esperás un número?

### Diseño: ¿Dónde conviene poner las validaciones: en la UI, función o modelo?


## Herramientas 

assert

isinstance, type

re (regex)

datetime

pydantic (modelado + validación de datos)

pytest para testear casos borde






## Prácticas



# Programación modular y estructurada 


## Código modular

### Caso: Convertir fechas de nacimiento en edades

Flujo de programa:

1. Pedir una fecha de nacimiento al usuario.

2. Validar el formato.

3. Calcular la edad actual.

4. Mostrarla.


Dividirlo en archivos: 

```
proyecto/
├── main.py
├── utils.py
└── validacion.py

```


### main.py: Lógica principal 

```
from validacion import validar_fecha
from utils import calcular_edad

def main():
    fecha = input("Ingresá tu fecha de nacimiento (dd/mm/aaaa): ")
    
    if validar_fecha(fecha):
        edad = calcular_edad(fecha)
        print(f"Tenés {edad} años.")
    else:
        print("Fecha inválida. Usá el formato dd/mm/aaaa.")

if __name__ == "__main__":
    main()

```


### validación.py: Validaciones de entrada

```
from datetime import datetime

def validar_fecha(fecha_str):
    try:
        datetime.strptime(fecha_str, "%d/%m/%Y")
        return True
    except ValueError:
        return False

```


### utils.py: Funciones auxiliares

```

from datetime import datetime

def calcular_edad(fecha_str):
    nacimiento = datetime.strptime(fecha_str, "%d/%m/%Y")
    hoy = datetime.today()
    edad = hoy.year - nacimiento.year

    # Ajuste si todavía no cumplió años este año
    if (hoy.month, hoy.day) < (nacimiento.month, nacimiento.day):
        edad -= 1

    return edad

```


#### Ventajas

1. main.py: tiene solo la orquestación, no lógica interna.

2. validacion.py: se encarga solo de validar, y puede crecer (validar emails, DNI, etc).

3. utils.py: guarda funciones que transforman o calculan cosas.



## Usar __name__ == "__main__"

##### Sirve para separar lo que se ejecuta al correr el archivo directamente de lo que se debe exponer como módulo reutilizable.

Al escribir un archivo con funciones útiles, queres: 

1. Poder usarlo desde otros archivos (como un módulo)

2. Probarlo o correrlo directamente


Ej: 

Archivo utils.py:

```
def saludar(nombre):
    print(f"Hola, {nombre}!")

if __name__ == "__main__":
    # Esto solo se ejecuta si corrés `python utils.py`
    saludar("Mundo")

```

1. Usar como script:

$ python utils.py
→ imprime: Hola, Mundo!


2. Importar sin ejecutar nada extra:

En otro archivo: 

```
# archivo: otro.py
from utils import saludar

saludar("Bob")  # No imprime "Hola, Mundo!" automáticamente

```

##### Evitás que código de prueba se ejecute cuando importás el archivo como módulo.


## "Caja negra": no necesitas saber cómo funciona por dentro cada parte para usarla bien.

##### Forma de pensar en la que cada parte del sistema se usa sin saber cómo funciona internamente, solo qué entra y qué sale

1. Diseñás funciones o módulos con interfaces claras

2. El resto del programa no necesita saber su implementación.

Ej: 

```
# archivo: conversor.py

def convertir_pesos_a_dolares(pesos, tasa):
    return pesos / tasa

```

##### Quien use esta función no necesita saber si internamente divide, multiplica o usa una API. Solo importa:

1. qué parámetro recibe (pesos, tasa)

2. qué valor devuelve (dólares)


### Caja negra y main 

Cuando usás `__name__ == "__main__"` y diseñás por cajas negras

1. Cada módulo puede ser testeado o ejecutado por separado

2. Cada función puede ser usada sin importar su lógica interna

3. El código es más limpio, mantenible y fácil de probar


Ej:

Función que reciba una lista de precios y un porcentaje de descuento, y devuelva una nueva lista con los precios con el descuento aplicado.


##### 1. Pensá la “caja”: ¿qué entra y qué sale?

Entrada: lista de float o int, y un float con el porcentaje de descuento

Salida: nueva lista de precios con descuento aplicado


##### 2. Definí la interfaz (firma de la función)

```
def aplicar_descuento(precios: list[float], porcentaje: float) -> list[float]:
    ...

```


##### 3. Diseñá la lógica como una caja negra

Internamente:

1. iterás la lista

2. aplicás el descuento

3. devolvés una nueva lista

```
def aplicar_descuento(precios: list[float], porcentaje: float) -> list[float]:
    """
    Devuelve una nueva lista con los precios ajustados al descuento dado.
    porcentaje debe estar entre 0 y 100.
    """
    factor = 1 - porcentaje / 100
    return [round(p * factor, 2) for p in precios]

```
 

##### 4. Prueba de caja negra

```
precios = [100, 250, 80]
print(aplicar_descuento(precios, 20))  # → [80.0, 200.0, 64.0]

```

##### No necesito saber si usaste round(), listas por comprensión, etc. Solo que funciona correctamente.



# Diseño orientado a objetos 

Cuándo crear la clase

Cuándo una función alcanza 

Estado + comportamiento


## Componentes de un diseño OOP

##### Una clase representa un tipo de objeto del mundo real o lógico

### 1. Sistema: El conjunto de clases y objetos que resuelven el problema

### 2. Datos: Lo que cada objeto sabe (sus atributos)

### 3. Estado: Los valores actuales de esos datos

### 4. Métodos: Lo que el objeto puede hacer (comportamiento)


## 1. Cuándo y cómo crear una clase

Una clase representa un tipo de objeto del mundo real o lógico que tiene:

1. Estado (atributos: nombre, edad, saldo…)

2. Comportamiento (métodos: hablar, depositar, mover…)

##### Usás una clase cuando querés modelar algo con identidad, estado persistente y comportamiento asociado.

Ej:

```
class CuentaBancaria:
    def __init__(self, titular, saldo):
        self.titular = titular
        self.saldo = saldo

    def depositar(self, monto):
        self.saldo += monto

    def retirar(self, monto):
        if monto <= self.saldo:
            self.saldo -= monto

```


## 2. Evitá usar clases cuando una función alcanza

##### A veces no necesitás una clase. Si:

##### 1. No hay estado que mantener

##### 2. No hay múltiples funciones que operen sobre una misma estructura

##### 3. El problema es simple y puntual

##### Preferí una función o módulo si no necesitás agrupar estado y comportamiento.


Ej:

```
class Calculadora:
    def sumar(self, a, b): return a + b
    def restar(self, a, b): return a - b

```

```
def sumar(a, b): return a + b
def restar(a, b): return a - b

```


## 3. Pensá en términos de estado + comportamiento

##### Cuando diseñás con OOP, pensá así:

##### 1. ¿Qué cosas existen en este sistema?

##### 2. ¿Qué datos tienen (estado)?

##### 3. ¿Qué hacen (métodos)?


### Ej: Para modelar un juego de cartas:

1. Clase Carta: tiene palo, valor, puede mostrar()

2. Clase Mazo: tiene lista de cartas, puede barajar(), repartir()


### Usar clase de clase o función: 

Estado persistente: 

1. Tenés que guardar o modificar datos internos

2. Solo hacés una operación puntual


Reutilización:

1. Vas a usar ese objeto muchas veces o en diferentes lugares

2. Es código único y simple


Comportamiento natural: 

1. El objeto hace cosas sobre sí mismo

2. Sólo transformás datos con funciones


## 4. Sistema en OOP

##### Conjunto de objetos que cooperan entre sí para cumplir una función o resolver un problema.

##### Es lo que estás modelando: puede ser una tienda online, un juego, una calculadora, un sistema bancario, etc.


### Ej: En un sistema bancario, podrías tener objetos como:

1. CuentaBancaria

2. Cliente

3. Transacción


## 5. Datos y atributos 

##### Los datos representan las características de un objeto. 

##### Son sus atributos (también llamados propiedades o campos).

##### Estos datos describen el estado del objeto en un momento dado.

##### Son guardados en el objeto, y pueden cambiar con el tiempo.


### Ejemplo para un objeto CuentaBancaria:

```
self.titular = "Bob"
self.saldo = 1500

```


### 6. Estado

##### Es el conjunto actual de valores de sus atributos.

##### Si cambian los atributos, cambia el estado del objeto


### Ej: Una cuenta con saldo $1500 está en un estado distinto a otra con saldo $300.

```
cuenta1 = CuentaBancaria("Bob", 1500)  # Estado inicial
cuenta1.depositar(500)                  # Estado nuevo: saldo = 2000

```


## RS OOP 

Cuando diseñás con OOP, pensás así:

1. Sistema: El conjunto de clases y objetos que resuelven el problema

2. Datos: Lo que cada objeto sabe (sus atributos)

3. Estado: Los valores actuales de esos datos

4. Métodos: Lo que el objeto puede hacer (comportamiento)



# OOP

## 1. Fundamentos 

##### Entender qué es un objeto y cómo se relacionan los elementos del diseño OOP

1. ¿Qué es un objeto? ¿Qué es una clase?

2. Diferencia entre datos, estado y comportamiento

3. Cómo definir clases y crear objetos en Python

4. Qué es `__init__`

5. Cómo usar self y atributos de instancia

6. Métodos vs funciones


## 2. Principios clave del diseño orientado a objetos

##### Escribir clases con lógica organizada y responsabilidades claras

1. Diseño de clases con una única responsabilidad

2. Encapsulamiento: uso de atributos privados `(_, __`

3. Métodos de acceso (get, set) y propiedades (@property)

4. Pensar una clase como una unidad autónoma con estado y comportamiento


Ej:

Rediseñar clases para ocultar detalles internos

Crear funciones de acceso

Construir clases con múltiples métodos


## 3. Relaciones entre objetos

##### Combinar objetos para modelar sistemas reales

##### Composición: un objeto “tiene” otros objetos (Carro tiene un Motor)

Delegación: pasar tareas de un objeto a otro

Diseño de jerarquías simples (composición > herencia)

Herencia básica: clases base y derivadas

Uso de super()


4. Principios de diseño orientado a objetos

##### Aplicar SOLID para hacer el diseño flexible y mantenible

DRY (Don’t Repeat Yourself)

SRP (Single Responsibility Principle)

Open/Closed Principle

Liskov Substitution

Composición vs Herencia

Diseño de interfaces mínimas y reutilizables


## 5. Aplicación práctica y patrones simples

Usar OOP para resolver problemas del mundo real

##### Introducción a patrones de diseño: Factory, Strategy, Observer

Modularización del código en varios archivos

Pruebas básicas (unit testing de métodos)



# Planteo 

Primero, escribí en papel o en comentarios:

¿Qué hace el programa?

¿Qué entradas tiene?

¿Qué funciones necesitás?

¿Qué estructuras de datos convienen?



# Escalabilidad 

##### Ayuda a escribir software que crece sin romperse ni volverse caótico.


## Guía de código escalable

##### 1. ¿Puedo agregar una nueva funcionalidad sin tocar 10 archivos?

##### 2. ¿Se entiende claramente qué hace cada parte?

##### 3. ¿Si aumento los datos 100x, sigue funcionando igual de bien?

##### 4. ¿Otro programador puede retomar esto y continuar sin confundirse?


## Separación de responsabilidades 

La lógica de negocio, la interfaz y los datos están separados.

Cada capa tiene su propia responsabilidad (MVC, servicios, etc).

Ej:trabajar sobre una capa sin tocar las otras.


Objetivo: 

diseñar y escribir código que escale:

1. En complejidad (más lógica)

2. En uso (más usuarios/datos)

3. En desarrollo (más colaboradores)


## 1. Fundamentos 

Cuándo es importante

Escalabilidad

Diferencia entre eficiencia y escalabilidad

Factores que afectan la escalabilidad: arquitectura, diseño, datos, personas


Ej:

Código que no escalan y por qué

Revisar una función muy larga o acoplada y discutir cómo dividirla


## 2. Modularidad y separación de responsabilidades

Dividir el sistema en partes independientes

Programación modular

Separación de capas (entrada, lógica, datos)

Diseño por responsabilidades


Ej:

En app monolítica, separar funciones en módulos

Diseño básico de carpetas con capas (ui/, services/, models/)


## 3. Extensibilidad y principios de diseño

Código que sea fácil de extender sin romperlo

Principios SOLID (especialmente SRP, OCP)

Abstracción y desacoplamiento

Patrón de estrategia, fábrica y composición


Ej:

Refactorizar un if/elif largo usando polimorfismo o estrategias

Implementar una función extensible con clases o callbacks



## 4. Organización y colaboración

Preparar el código para ser trabajado por equipos

Convenciones de estilo y estructura

Documentación mínima necesaria

Modularización por dominio (ej: producto, usuario, pedido…)


Ej:

Escribir documentación mínima para un módulo

Reorganizar un proyecto de 1 archivo en varios módulos


## 5. Datos, rendimiento y patrones de crecimiento

Detectar cuellos de botella y optimizar antes de que escale mal.

Estructuras de datos adecuadas

Algoritmos que escalan mal

Cargas pesadas y concurrencia

Caching, lazy loading, etc. (opcional)


Ej:

Medir tiempos de ejecución para distintos tamaños de entrada

Reescribir una función lenta usando una estructura más adecuada


## 6. Rediseño o mini-proyecto

Aplicar todo en un problema real


Ej:
 
Rediseñar un proyecto viejo con principios de escalabilidad

Crear una app simple (ej: gestor de tareas o agenda) con capas claras, código modular, funciones testables y extensión preparada


## Rs

##### ¿Tu código está dividido en partes bien nombradas?

##### ¿Podés agregar nuevas funciones sin reescribir todo?

##### ¿Otro programador podría entender tu sistema en 10 minutos?

##### ¿Sabés qué partes pueden volverse lentas con más datos?


# Precondicions y Postcondicioens 

Es clave para razonar sobre el comportamiento correcto de una función o algoritmo. 

##### Precondición: Lo que debe cumplirse antes de ejecutar el código. Es un requisito.

##### Postcondición: Lo que se garantiza después de ejecutar el código, si la precondición se cumplía.

 
### Objetivos: 

1. Definir contratos claros entre quien llama una función y quien la implementa.

2. Detectar errores temprano (pre) o asegurar resultados (post).

3. Escribir código más robusto, predecible y fácil de probar.

Ej: 

```
def dividir(a, b):
    return a / b

```

Precondición: b ≠ 0

Postcondición: el resultado es a / b (flotante)

Si b == 0, el código rompe. Si el usuario garantiza b ≠ 0, la función garantiza un resultado correcto.


```
def ordenar(lista):
    return sorted(lista)

```

Precondición: lista debe ser una lista de elementos comparables.

Postcondición: la salida es una lista ordenada en orden ascendente con los mismos elementos que la entrada.


### Hallar precondicion y postcondición

1. Antes de escribir una función:

Preguntate:

¿Qué necesita esta función para funcionar bien? (precondiciones)

¿Qué resultado debe devolver o dejar garantizado? (postcondiciones)


2. Mientras diseñás un algoritmo:

Anotá en comentarios lo que esperás de la entrada (pre) y lo que deberías tener al final (post).

Usá assert o raise para validarlas si hace falta.

Ej: 

```
def factorial(n):
    assert isinstance(n, int) and n >= 0, "n debe ser entero no negativo"  # precondición
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n - 1)  # postcondición: devuelve n!

```


## Práctica

##### 1. Leé bien el problema: ¿hay restricciones en la entrada?

##### 2. Escribí las precondiciones como si fueran filtros: n > 0, lista no vacía, etc.

##### 3. Imaginá cómo debe estar el estado después: ¿resultado ordenado? ¿valor actualizado?

##### 4. Verificá que el algoritmo las cumple. Si no, corregí o documentá el riesgo


Rs: 

¿Qué debe cumplir la entrada para que el código funcione? (precondición)	

¿Qué garantiza la función si se cumplen las condiciones iniciales? (postcondición)	

¿Puedo documentarlo o validarlo dentro del código?



# Validación

## Validación Validación por tipo, rango, formato, longitud, estructura

### 1. Validación por tipo

Verificás que el dato sea del tipo correcto: número, string, lista, etc.

```
def cuadrado(x):
    assert isinstance(x, (int, float)), "x debe ser un número"
    return x * x

```

Útil para:

Detectar errores de uso temprano

Evitar operaciones no permitidas (ej: "hola" * "hola")


### 2. Validación por rango

Verificás que el valor esté dentro de ciertos límites numéricos.

```
def asignar_edad(edad):
    assert 0 <= edad <= 120, "Edad fuera de rango"

```

Útil para:

Números que tienen sentido sólo en ciertos rangos: edades, puntajes, porcentajes, etc.


### 3. Validación por formato

Verificás que el contenido siga una estructura textual

```
import re
def validar_email(email):
    patron = r'^[\w\.-]+@[\w\.-]+\.\w+$'
    assert re.match(patron, email), "Email inválido"

```

Útil para:

Emails, fechas, DNI, números de tarjeta, etc.

Entradas que son strings pero con reglas internas


### 4. Validación por longitud

Verificás que el dato tenga una cantidad mínima o máxima de elementos (caracteres, ítems…).

```
def validar_nombre(nombre):
    assert 1 <= len(nombre) <= 50, "Longitud inválida"

```

Útil para:

Formularios (nombres, contraseñas)

Listas no vacías o que no superen cierto límite


### 5. Validación por estructura

Verificás que los datos compuestos tengan la forma correcta.
 
```
def validar_usuario(d):
   assert isinstance(d, dict), "Debe ser un diccionario"
   assert "nombre" in d and "edad" in d, "Faltan claves"
   assert isinstance(d["edad"], int), "Edad debe ser entera"

```

Útil para:

Diccionarios, JSON, objetos

Datos anidados o estructuras que siguen un “modelo”


### Práctica

Validaciones juntas

```
def registrar_usuario(nombre, edad, email):
    assert isinstance(nombre, str) and 1 <= len(nombre) <= 50
    assert isinstance(edad, int) and 0 <= edad <= 120
    assert re.match(r'^[\w\.-]+@[\w\.-]+\.\w+$', email)

```


### Validación por dominio

##### Es una de las formas más importantes de asegurarte de que un dato tiene sentido dentro del contexto del problema

##### Verificar que el valor pertenece al conjunto de valores válidos definidos por el problema o negocio.

##### No se trata solo del tipo, formato o rango, sino de si el valor tiene sentido lógico en ese contexto.


Ej: Días de la semana

```
def validar_dia(dia):
    dias_validos = ["lunes", "martes", "miércoles", "jueves", "viernes"]
    assert dia.lower() in dias_validos, "Día no permitido"

``` 

Tipo: válido (str)

Dominio: solo ciertos strings aceptados


Ej: Estado de un pedido

```
def validar_estado(estado):
    estados = {"pendiente", "enviado", "entregado", "cancelado"}
    assert estado in estados, "Estado inválido"

```

Aunque estado = "esperando" sea un string válido, no pertenece al dominio definido


Ej: Rol de usuario

```
def validar_rol(rol):
    roles_permitidos = {"admin", "editor", "lector"}
    if rol not in roles_permitidos:
        raise ValueError(f"Rol '{rol}' no permitido")

```


Beneficios: 

Previene errores lógicos o de negocio

Hace que tu código sea más explícito y más seguro

Ayuda a detectar entradas inesperadas temprano


### Claves

##### Usá validación por dominio cuando:

##### 1. Hay un catálogo cerrado de opciones

##### 2. Hay reglas de negocio estrictas

##### 3. Una entrada puede ser válida en tipo, pero incorrecta en contexto


¿Hay un conjunto conocido de valores permitidos?

¿Una entrada podría ser técnicamente válida, pero inválida según el problema?

¿Está claramente definido el dominio y dónde se valida?


## Casos borde/corner cases / edge cases

##### Es una situación especial que pone a prueba los límites del código. 

##### Suele involucrar entradas mínimas, máximas, vacías, nulas o inesperadas.

### 1. Entender el dominio del problema

Antes de escribir código, preguntate:

1. ¿Qué tipos de entrada existen?

##### 2. ¿Cuáles son los valores mínimos, máximos o extremos?

3. ¿Qué casos rara vez ocurren, pero son válidos?


Ej: 

```
def promedio(lista):
    return sum(lista) / len(lista)

```

Casos borde:

Lista vacía → división por cero

Un solo número

Todos ceros

Números negativos o flotantes


### 2. Clasificá tipos comunes de casos borde

1. Entrada vacía: `"", [], {}`

2. Longitud mínima o máxima: `n = 0, n = 1, n = 10^6`

3. Valores nulos o None: None, sin parámetro

4. Duplicados, negativos, cero: `[0, 0, 0], [-1, -2]`

5. Orden inesperado: `[100, 2, 3]`

6. Tipos inesperados: str donde se espera int


### 3. Tratamiento de casos borde

1. Precondiciones claras:
Definí qué valores son válidos (ej: n ≥ 0).

2. Validación defensiva
Agregá if, assert, try/except para manejar casos especiales.

3. Casos explícitos
Escribí lógica especial si un caso lo requiere.

4. Documentación mínima
Especificá en un comentario qué casos están cubiertos.

5. Tests de casos borde
Incluí pruebas que usen listas vacías, números extremos, etc.


### 4. Estrategia 

```
Caso base – caso mínimo – caso general – caso máximo – caso inválido

```

Ej: función buscar(x, lista):

1. Base: x está en lista

2. Mínimo: `lista = [x]`

3. General: `lista = [1, 2, 3, x, 5]`

4. Máximo: lista con 10⁶ elementos

5. Inválido: `lista = []` o `x = None`


### Claves

##### 1. ¿Qué pasa si hay un solo elemento?

##### 2. ¿Qué pasa si hay muchos elementos?

##### 3. ¿Qué pasa si hay muchos elementos?

##### 4. ¿Hay valores negativos, cero o repetidos?



# Mypy

## 1. Instalar 

```
pip install mypy

```

(O si usás pipenv, poetry o requirements.txt, podés agregarlo como dependencia de desarrollo.)


## 2. Agregar anotaciones de tipo

```
def saludar(nombre: str) -> str:
    return f"Hola, {nombre}"

```


En objetos

```
x: int = 10
lista: list[str] = ["a", "b"]
datos: dict[str, int] = {"a": 1}

```


## 3. Ejecutar mypy

```
mypy archivo.py

```

Si hay errores de tipo, los verás en consola:

```
archivo.py:1: error: Argument 1 to "saludar" has incompatible type "int"; expected "str"

```


## 4. Tipado en funciones reales

```
from typing import Optional, Union, Any

def obtener_usuario(id: int) -> Optional[dict[str, Any]]:
    if id > 0:
        return {"id": id, "nombre": "Bob"}
    return None

```


## 5. Tipado en clases

```
class Persona:
    def __init__(self, nombre: str, edad: int) -> None:
        self.nombre = nombre
        self.edad = edad

    def cumpleaños(self) -> None:
        self.edad += 1

```


## 6. Configurar mypy (opcional, recomendado)

Creamos un archivo mypy.ini

```
[mypy]
strict = True
ignore_missing_imports = True
disallow_untyped_defs = True
warn_unused_ignores = True

```

Activar strict = True es ideal para proyectos nuevos o educativos.


## Prácticas

##### 1. Siempre que puedas, anotá funciones públicas o importantes

##### 2. Usá Optional, Union, Literal, TypedDict, etc., según el caso

##### 3. Ejecutá mypy automáticamente con pre-commits o al guardar el archivo (por ejemplo, desde VSCode)


Herramientas: 

pydantic: valida datos a runtime, compatible con tipado

ruff o flake8: linters que complementan el análisis de tipos


## Limitaciones 

##### 1. mypy no ejecuta tu código, así que no valida valores, solo tipos

##### 2. Python permite romper tipos en tiempo de ejecución si forzás cosas (ej: casteos)

##### 3. Algunas cosas avanzadas (decoradores dinámicos, metaprogramación) son difíciles de tipar


# Romper tipos en tiempo de ejecución

Aunque uses mypy y anotaciones de tipo (x: int, def foo(s: str) -> int), Python no impone esas reglas en tiempo de ejecución. Es decir:

##### Los tipos en Python son opcionales y no obligan al intérprete a cumplirlos.

##### Entonces podés anotar algo como int y pasarle un str, y Python lo ejecuta igual, a menos que tú lo controles.

Ej: 

```
def duplicar(x: int) -> int:
    return x + x

print(duplicar("hola"))  # Resultado: 'holahola'

```

##### mypy te avisa: Argument 1 to "duplicar" has incompatible type "str"; expected "int"

##### Pero Python lo ejecuta igual, porque "hola" + "hola" es válido


## Otro caso: usar cast() o forzar cambios de tipo

```
from typing import cast

def get_data() -> dict[str, int]:
    return cast(dict[str, int], {"a": "no es un número"})

```

##### mypy NO se queja, porque vos forzás la conversión con cast

##### Pero en tiempo de ejecución eso va a fallar si hacés operaciones como * 2


## Evitar romper los tipos

1. No uses cast() a menos que sepas lo que hacés

2. Validá explícitamente si los datos vienen de fuera (usuario, archivo, red)

3. Usá mypy y no ignores sus advertencias

4. Si querés validación en tiempo de ejecución, usá algo como pydantic


## Error en mypy pero ejecución en python

mypy detecta un error de tipo.

Python ejecuta el código sin quejarse


### 1. Código con anotaciones correctas, pero mal uso

```
def saludar(nombre: str) -> str:
    return "Hola " + nombre

print(saludar(42))  # err, ¡le pasamos un número!

```

mypy dirá:

```
error: Argument 1 to "saludar" has incompatible type "int"; expected "str"

```

Python lo ejecuta igual y da:

```
TypeError: can only concatenate str (not "int") to str

```

Falla en tiempo de ejecución, aunque ya podíamos haberlo evitado antes.


### 2. Prevención

1. Validar manualmente

```
def saludar(nombre: str) -> str:
    if not isinstance(nombre, str):
        raise TypeError("nombre debe ser una cadena")
    return "Hola " + nombre

```

Ahora el mensaje de error es más claro y ocurre antes de que explote en concatenación


2. Usar mypy y asegurarte de que el tipo que pasás sea el correcto:

```
nombre: str = "Bob"
print(saludar(nombre)) # Correcto

```
 
 
### Permitir múltiples tipos

Usar tipado explícito:

```
from typing import Union

def repetir(dato: Union[str, int]) -> str:
    return str(dato) * 2

```

Ahora mypy permite strings o enteros, y convertís todo a string de forma segura.


### Claves

##### 1. mypy: Detecta errores antes de ejecutar el código

##### 2. Validaciones (isinstance): Te protegen en tiempo de ejecución

##### 3. Tipos como Union, Optional, cast: Te dan control explícito sobre qué tipos permitir y cómo tratarlos



# Romper tipos en otros lenguajes 

## Lenguajes con tipado dinámico (como Python, JavaScript, Ruby)

##### Estos no verifican tipos en tiempo de compilación, por lo tanto: 

1. Se pueden forzar castings o usos indebidos.

2. No hay errores hasta tiempo de ejecución.

3. Se puede romper fácilmente el contrato del tipo.

```
function sumar(x, y) {
  return x + y;
}

sumar("3", 4);  // "34", no un error

```


## Lenguajes con tipado estático pero no estricto (como C, C++, Go)

##### Estos verifican tipos en compilación, pero permiten castings que pueden romper cosas:

1. El compilador se asegura de tipos compatibles… hasta que usás un cast.

2. Con casting, podés hacer cosas peligrosas.

Ej: C

```
int x = 1234;

char* p = (char*)x;  // No seguro, pero permitido por el compilador

```


## Lenguajes con tipado estático estricto y seguro (como Rust, Haskell, Kotlin*, TypeScript*)

1. Requieren que todo cumpla tipos en compilación.

2. No permiten castings peligrosos fácilmente (algunos ni los permiten).

3. Ofrecen seguridad por diseño, muchas veces sin runtime checks.


Ej: Rust 

```
fn duplicar(x: i32) -> i32 {
    x * 2
}

duplicar("hola");  // Error de compilación

```


## Romper tipos 

Python: En ejecución, si,  si forzás o pasás mal

JavaScript: si, Siempre, no hay tipos en realidad

Java: Parcialmente, Al hacer casts mal hechos (con Object)

C / C++: Sí, Casts explícitos inseguros

Go: Sí, Interface{} o conversiones sin chequeo

Rust: No (muy difícil), A menos que uses unsafe

TypeScript: Sí, Si usás any o forzás castings

Haskell: No, Sistema de tipos muy estricto


## mypy automático con pre-commits o al guardar el archivo

##### Esto es clave para que no te olvides de revisar los tipos y mantengas el código limpio a medida que trabajás.

### 1. Ejecutar mypy al guardar

1. Tener mypy instalado en tu entorno (pip install mypy)

2. Tener VSCode con la extensión Python de Microsoft

3. Un archivo con anotaciones de tipo (.py con type hints)


Configuración:

Abrí la paleta de comandos (Ctrl+Shift+P)

Escribí: Preferences: Open Settings (JSON)

Agregá estas líneas si no están:

```
{
  "python.analysis.typeCheckingMode": "basic",
  "python.linting.mypyEnabled": true,
  "python.linting.enabled": true,
  "python.linting.mypyArgs": ["--strict"]
}

```

También podés poner "typeCheckingMode": "strict" si querés chequeos más exigentes.


### 2. Al guardar el archivo

VSCode va a:

1. Correr mypy detrás de escena.

2. Mostrar errores de tipo como subrayado en rojo.

3. Mostrar advertencias en la pestaña de "Problems".


## Ejecutar mypy con pre-commits (en Git)

Si usás Git, podés hacer que mypy se ejecute automáticamente antes de cada commit, así no subís código con errores de tipo.

1. Instalá la herramienta pre-commit:

```
pip install pre-commit

```

2. Creá un archivo .pre-commit-config.yaml en la raíz del proyecto:

```
repos:
  - repo: https://github.com/pre-commit/mirrors-mypy
    rev: v1.10.0  # o la versión que uses
    hooks:
      - id: mypy

```


3. Activá el hook:

```
pre-commit install

```

##### cada vez que hacés git commit, mypy corre y bloquea el commit si hay errores de tipo.


## Manual (CLI): Cuando quieras (mypy archivo.py)



# pydantic

Herramienta potente especialmente si estás trabajando con datos externos o APIs.

##### Objetivo: Validar y transformar datos fácilmente y con seguridad, usando tipos de Python

Cuando recibís datos desde:

un formulario web,

un archivo JSON,

una API externa…

Esos datos son cadenas de texto sin garantías de tipo. 

pydantic te permite:

1. Verificar tipos automáticamente

2. Rechazar o corregir datos inválidos

3. Transformar y acceder a los datos como objetos (tipo clase)

4. Aprovechar anotaciones de tipo para validación real, en tiempo de ejecución


```
pip install pydantic

```

```
from pydantic import BaseModel

class Usuario(BaseModel):
    nombre: str
    edad: int

datos = {"nombre": "Bob", "edad": "30"}

usuario = Usuario(**datos)
print(usuario)
# Usuario(nombre='Bob', edad=30)

```

##### pydantic convirtió "30" en int automáticamente

##### Validó que nombre es string

##### Si faltaba una clave o el tipo era inválido, lanzaba error


## Qué pasa con datos inválidos

```
Usuario(nombre="Bob")  
# ValidationError: missing field 'edad'

```

## Transformación de tipos

```
class Producto(BaseModel):
    precio: float

p = Producto(precio="19.99")
print(p.precio)  # 19.99 (convertido desde str)

```


## Validación personalizada

```
from pydantic import BaseModel, field_validator

class Persona(BaseModel):
    nombre: str
    edad: int

    @field_validator("edad")
    @classmethod
    def validar_edad(cls, valor):
        if not (0 <= valor <= 120):
            raise ValueError("Edad fuera de rango")
        return valor

```

## Casos de uso reales

##### Recibir datos JSON en APIs (FastAPI, Flask)

##### Leer archivos de configuración

##### Validar formularios en backend

##### Asegurar entrada/salida de funciones
    

## Características

Validación por tipo

Validación por rango

Conversión automática

Modelos anidados

Buen soporte en IDEs


## vs mypy

Ambos usan anotaciones de tipo, pero tienen objetivos muy diferentes

| Característica                               | `pydantic`                                        | `mypy`                                              |
| -------------------------------------------- | ------------------------------------------------- | --------------------------------------------------- |
| ¿Qué hace?                                   | Valida datos **en tiempo de ejecución**           | Verifica tipos **en tiempo de análisis** (estático) |
| ¿Cuándo actúa?                               | Mientras el programa **se ejecuta**               | Mientras **escribís o compilás** el código          |
| ¿Para qué sirve?                             | Verificar datos externos: JSON, formularios, APIs | Detectar errores de tipo en tu código               |
| ¿Convierte tipos automáticamente?            | ✅ Sí (`"25"` → `25`)                             | ❌ No                                               |
| ¿Lanza errores si los tipos no coinciden?    | ✅ Sí, con `ValidationError`                      | ❌ Solo muestra advertencias                        |
| ¿Corrige o transforma valores?               | ✅ Sí                                             | ❌ No                                               |
| Mensajes de error                            | Detallados en tiempo de ejecución                 | Técnicos, en tiempo de análisis                     |
| Casos típicos de uso                         | FastAPI, entrada de usuario, JSON                 | Refactorización segura, testeo de tipos             |


Ej: 

```
from pydantic import BaseModel

class Persona(BaseModel):
    nombre: str
    edad: int

# Esto funciona en pydantic: convierte "25" a int
p = Persona(nombre="Iván", edad="25")  # ✅

```

```
def saludar(nombre: str):
    print("Hola", nombre)

saludar(25)  # ❌ mypy lo detecta, pero Python lo ejecuta igual

```

##### mypy → ayuda a que tu código esté bien tipado (internamente)

##### pydantic → valida que los datos externos cumplan con tus reglas

##### Usar ambos al mismo tiempo: mypy para tu código, pydantic para validar datos del mundo real.


# flake8

# black 


# Planteo 

precond: requisitos
postcond: resultado
validaciones:
tipo, rango, formato, longitud, estructura y dominio (lógica)

Primero, escribí en papel o en comentarios:
¿Qué hace el programa?
¿Qué entradas tiene?
¿Qué funciones necesitás?
¿Qué estructuras de datos convienen?

Piensa siempre en:
1. ¿Qué pasa si...? -> (usa if)
2. ¿Qué hago para cada...? -> (usa for)
3. ¿Hasta cuándo sigo...? -> (usa while)
4. ¿Qué pasa si algo falla...? -> (usa try)
5. ¿Cómo manejo estructuras externas...? -> (usa with)
6. ¿Cómo encapsulo esta lógica...? -> (usa funciones)


Preguntas: Por qué usaría tal o cual cosa, dar los motivos y resultados esperados. 

Uso de sintaxis o funciones avanzadas (lambda, map, ls):
lambda (f linea) 
map(transf, f y iter obj)
ls nueva lista a partir de otra (expre/cambio expres/cond/accion; for expres cond) -> true

Combinación de control (Condicionales (if (elif, else), in, range, len), bucles (for, while, ls) y manejo de errores (try, except, finally, err).)
Combinación de esstructuras (list, dict, tuple, set)
Características del control y estructuras necesarias. 
Express, cond, func en var

Reducir las posibilidades:
Enfocar el problema, encontrar los elem claves
Retorno de los objetos 
Del final al inicio



# Diseño: Actualizar valor provisional

Comienza asignando un valor provisional a una variable (answer), actualizándolo cuando corresponde y luego imprimiendo el valor final de la variable.
 
Observe que comprueba si cada variable es impar exactamente una vez y contiene solo una sentencia de impresión. 

```
answer = min(x, y, z)
if x%2 != 0:
	answer = x
if y%2 != 0 and y > answer:
	answer = y
if z%2 != 0 and z > answer:
	answer = z
print(answer)

```

Este código es prácticamente lo mejor que podemos hacer, ya que cualquier programa correcto debe comprobar la imparidad de cada variable y comparar los valores de las variables impares para encontrar el mayor.


De lo contrario, susariamos muchos ifs

```
if x%2 != 0 and y%2 != 0 and z%2 != 0:
	print(max(x, y, z))
if x%2 != 0 and y%2 != 0 and z%2 == 0:
	print(max(x, y))
if x%2 != 0 and y%2 == 0 and z%2 != 0:
	print(max(x, z))
if x%2 == 0 and y%2 != 0 and z%2 != 0:
	print(max(y, z))
...

```

##### La mayoría de las tareas computacionales no se pueden realizar mediante programas de ramificación (ifs/control), ni linealmente.


# Diseño bucles: while

Considere, por ejemplo, escribir un programa que pregunte el número de X. 

Podría pensar en escribir algo como

```
num_x = int(input('How many times should I print the letter
X? '))

to_print = ''
if num_x == 1:
	to_print = 'X'
elif num_x == 2:
	to_print = 'XX'
elif num_x == 3:
	to_print = 'XXX'
#…
print(to_print)

```

##### No nos serviría un programa lineal con ramificación, para todos los valores



# Diseñar algoritmos

## 1. Fundamentos de lógica y estructuras básicas

Comprender estructuras como listas, tuplas, diccionarios.

Dominar for, if, range, enumerate, etc.

Empezar a expresar ideas con claridad


Ej: 

Imprimir números pares/impares del 1 al 100.

Contar vocales en una cadena.

Crear un diccionario de frecuencia de caracteres.


### Cuándo usar tuplas

Cuando querés proteger datos (por ejemplo, fechas, coordenadas).

Para usar como claves en diccionarios (porque son inmutables


## 2. Pensamiento algorítmico básico

##### Aprender sobre divisores, primalidad, sumas acumuladas.

Empezar a pensar en la complejidad (cuántas operaciones hago).

Usar bucles anidados y condiciones más precisas.


Ej: 

Verificar si un número es primo.

Calcular suma de primos hasta n.

Detectar números perfectos.

Generar lista de cuadrados sin bucles (comprensión de listas).


## Divisible

Un número d es divisor de otro número n si al dividirlo, no queda resto:

```
n % d == 0

```

"d será divisor de n si su resto da 0"

Ej: 

Divisores de 12: 1, 2, 3, 4, 6, 12

Porque 12 % d == 0 para esos d


Ej: 

Todos los divisores de n

```
n = 12
for i in range(1, n + 1):
    if n % i == 0:
        print(i)

```

range(ini 1, fin 13): de uno hasta trece. 
Si el resto de n por i da 0, imprimí el divisor. 

En la formula: 

n % d == 0 
n   i
imprimi el divisor(i)

##### dividir n por todos los números del 1 al n, y muestra los que son divisores. 


## Primalidad

Tiene dos divisores: 1 y él mismo.

##### Verificar si tiene más de 2 div o si el núm div !=2

```
n = 13
es_primo = True

for i in range(2, n):
    if n % i == 0:
        es_primo = False
        break

print(f"{n} {'es primo' if es_primo else 'no es primo'}")

```

Si n no tiene divisores entre 2 y n-1, es primo.

Optimización: solo probar hasta √n en lugar de hasta n


## Suma acumulada

Vas acumulando valores a medida que recorrés una secuencia.

Ej: sumar los primeros 10 números

```
total = 0
for i in range(1, 11):
    total += i
print(total)  # → 55

```

Ej: 

Suma primos del 2 al 100

```
total = 0
for n in range(2, 101):
    es_primo = True
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            es_primo = False
            break
    if es_primo:
        total += n

print(f"Suma de primos entre 2 y 100: {total}")

```


## 3. Algoritmos clásicos y eficiencia

Dominar patrones como marcado, conteo, búsqueda.

Implementar algoritmos clásicos como Criba, Fibonacci, conteo de dígitos.

Analizar eficiencia: O(n), O(n²), O(log n), etc.


Ej:

Criba de Eratóstenes

Búsqueda binaria

Conteo de ocurrencias con diccionarios

Simulación de procesos paso a paso (como una máquina de estados simple)


### Marcado/Bandera/flagging

Marcás elementos de una estructura (como una lista) para rastrear su estado: por ejemplo, si ya fue visitado, si es válido, si es primo, etc.

```
is_prime = [True] * (n + 1)
is_prime[0:2] = [False, False]  # 0 y 1 no son primos

for i in range(2, int(n ** 0.5) + 1):
    if is_prime[i]:
        for j in range(i * i, n + 1, i):
            is_prime[j] = False  # Marcamos como "no primo"

```

Estás "marcando" con False los múltiplos que no son primos.

Esto evita repetir trabajo innecesario más adelante.


Otros usos: 

Recorrer grafos sin visitar nodos repetidos.

Evitar duplicados.

Llevar el control de estados ("visitado", "procesado", etc.).


### Counting

Acumular cuántas veces algo ocurre, usando una variable, una lista o un diccionario

Ej: 

Contar números pares

```
pares = 0
for i in range(1, 101):
    if i % 2 == 0:
        pares += 1
print(pares)

```


Ej: 

Conteo de letras con diccionario

```
texto = "banana"
conteo = {}

for letra in texto:
    if letra in conteo:
        conteo[letra] += 1
    else:
        conteo[letra] = 1

print(conteo)  # → {'b': 1, 'a': 3, 'n': 2}

```

Muy usado en problemas de frecuencia, histogramas, validaciones, etc.


### Búsqueda (Searching)

Encontrar un elemento específico dentro de una colección.

Hay varios tipos, desde simples hasta avanzados.


#### Lineal (On(n))

```
lista = [10, 20, 30, 40]
objetivo = 30

for i in lista:
    if i == objetivo:
        print("Encontrado")
        break

```


#### Binaria (O(log n)): lista ordenada

```
lista = [5, 8, 13, 21, 34, 55]
objetivo = 21
inicio, fin = 0, len(lista) - 1

while inicio <= fin:
    medio = (inicio + fin) // 2
    if lista[medio] == objetivo:
        print("Encontrado")
        break
    elif lista[medio] < objetivo:
        inicio = medio + 1
    else:
        fin = medio - 1

```

Mucho más eficiente, pero requiere lista ordenada


4. Abstracción, claridad y estilo profesional

Escribir funciones reutilizables y limpias.

Documentar con docstrings.

Usar nombres claros y estructuras declarativas.

Comprender refactorización


Ej: 

Refactorizar funciones duplicadas.

Documentar tus propias funciones con """docstrings""".

Transformar scripts en funciones puras.

Escribir tests simples (con assert o pytest).


## 5. Entrenamiento cruzado con desafíos

Aplicar todo lo anterior en problemas nuevos.

Resolver desafíos desde varios ángulos.

Medir progreso en claridad, tiempo y estilo.

Plataformas de ejercicios 


# Planteo

precond: requisitos
postcond: resultado
validaciones:
tipo, rango, formato, longitud, estructura y dominio (lógica)

Primero, escribí en papel o en comentarios:
¿Qué hace el programa?
¿Qué entradas tiene?
¿Qué funciones necesitás?
¿Qué estructuras de datos convienen?

Piensa siempre en:
1. ¿Qué pasa si...? -> (usa if)
2. ¿Qué hago para cada...? -> (usa for)
3. ¿Hasta cuándo sigo...? -> (usa while)
4. ¿Qué pasa si algo falla...? -> (usa try)
5. ¿Cómo manejo estructuras externas...? -> (usa with)
6. ¿Cómo encapsulo esta lógica...? -> (usa funciones)

Preguntas: Por qué usaría tal o cual cosa, dar los motivos y resultados esperados. 

Uso de sintaxis o funciones avanzadas (lambda, map, ls):
lambda (f linea) 
map(transf, f y iter obj)
ls nueva lista a partir de otra (expre/cambio expres/cond/accion; for expres cond) -> true

Combinación de control (Condicionales (if (elif, else), in, range, len), bucles (for, while, ls) y manejo de errores (try, except, finally, err).)
Combinación de esstructuras (list, dict, tuple, set)
Características del control y estructuras necesarias. 
Express, cond, func en var

Reducir las posibilidades:
Enfocar el problema, encontrar los elem claves
Retorno de los objetos 
Del final al inicio


1. Entender el problema matemáticamente
    ¿Qué define un número primo?
    ¿Cuáles son sus propiedades?

2. Pensar en estructuras de datos eficientes
    ¿Necesito un arreglo, un diccionario, un conjunto?
    ¿Qué tipo de acceso necesito (índice, búsqueda, etc.)?

3. Aplicar patrones conocidos
    ¿Esto se parece a un filtrado?
    ¿Esto es un marcado de elementos?

4. Refinar con herramientas de Python
    ¿Puedo usar comprensión de listas?
    ¿Puedo usar enumerate, zip, slicing, etc.?
    
5. Probar, refactorizar y comparar
    ¿Puedo hacerlo más claro?
    ¿Es más rápido, más legible?


Estrategia

Evalúa las características del problema:
¿Es necesario explorar todas las soluciones? → Fuerza bruta.
¿Se puede dividir en partes más pequeñas? → Divide y conquista.
¿Hay subproblemas repetidos? → Programación dinámica.
¿Es suficiente una solución parcial óptima? → Algoritmos voraces.
¿Hay decisiones con retroceso? → Backtracking.

Estructuras de datos eficientes: 
Importancia de elegir la estructura de datos adecuada para el problema en cuestión, ya que esto puede afectar drásticamente el rendimiento de su algoritmo. 

Matrices y Listas: Excelentes para datos secuenciales, pero ineficientes para operaciones de búsqueda (a menos que estén ordenados).
Tablas hash (Diccionarios/Mapas): Eficientes para búsquedas, inserciones y eliminaciones.
Pilas y colas: Útiles para problemas que requieren operaciones LIFO (último en entrar, primero en salir) o FIFO (primero en entrar, primero en salir).
Árboles: En particular, árboles de búsqueda binaria para una búsqueda, inserción y eliminación eficientes.
Gráficos: Para representar datos interconectados (como redes sociales u hojas de ruta).


