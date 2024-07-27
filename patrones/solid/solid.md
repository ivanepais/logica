SOLID

Es una metodología que reune un conjunto de buenas prácticas y principios que nos permite fabricar mejores clases y un mejor sistemas orientado a objetos para construir aplicaciones más robustas y mantenibles a lo largo del tiempo.      
Podemos hacer que cada clase este hecha lo mejor posible. 


|| Principio de Responsabilidad Única (SPR)

 Single Responsability Principle

 Indica que una clase solo debe tener una única responsabilidad o una única razón de cambio. 

 1 clase:
   1 responsabilidad
   1 razón de cambio
 
 Son conceptos relacionados, una clase solo debe servir para una cosa. 
  
 Si tenemos una clase para realizar una acción en particular, no debería hacer cálculos, tomar información de otro lado, etc.

 Las otras acciones deben tener cada una su clase. 

 
 Más tarde seguramente habrá que hacer cambios en la clase, si creamos muchas acciones en una sola clase debemos reformularla agresivamente. 

 Separando el código en acciones individuales evitamos cambios agresivos y costosos. 


 Ej: clase formulario que realiza dos acciones: enviar y validar. 

 Formulario: 
  enviar()
  validar()

 Enviamos usuario y contraseña a una base de datos y lo validamos verificando si el usuario y la contraseña son correctas. 

 Formulario:   f = newForm(u, p): 
  enviar()     f.validar()
  validar()    f.enviar()
  ---------
  username
  password

 username y password lo introducimos en el constructor, instanciamos un nuevo formulario; le pasamos como parámetro el usuario y contraseña, y podemos llamar al método validar para devolver un verdadero o un falso según si el usuario y la constraseña son correctas y llamar al método enviar para enviar esa información a un backend y poder guardarla en una base de datos. 

 Podemos diseñarlo de está manera, pero si las normas cambian, podemos crear un campo de normas de validación para pasar al instanciar la clase. 
 
 Agregamos un método más a la autenticación, las normas pueden ser 8 caracteres como minimo, con una mayus, un numero, etc.       
 
  Formulario:  f = newForm(u, p, n): 
  enviar()     f.validar()
  validar()    f.enviar()
  ---------
  username
  password
  normas

 Estamos creando información que no esta relacionada/cohesionada: 
 
 El método enviar no tiene porqué saber que hace el método normas

 El método enviar lo único que tiene que saber es el usuario y la contraseña. 

 En la clase tenemos dos métodos que usan distinta información (u, p y n) que no estan relacionadas. 


 Podemos hacerlo de manera que solo exista una única responsabiliadad por clase. 
 
 Dentro de la clase formulario solo debemos tener una única responsabilidad. 

 Formulario: 
  username
  password  

 Esta clase contiene datos, no hace ninguna operación por su cuenta; es un record o data class que solo contiene información que vamos a usar después. 

 Vamos a crear dos clases con una funcionalidad para cada una. 

 ValidadoraFormulario: 
  form
  normas
  ------ 
  constructor(f, normas)
  validar(): bool

 Va a recibir como parámetro al formulario como parametro y a una lista de normas y una funcion validar que devuelve verdadero o falso según si el formulario proporcionado es válido de acuerdo con la lista de normas. 
   
 validar() necesita saber que el formulario a validar y las normas a aplicar. 

 Creamos una clase envio de formulario cuyo proposito será enviar el form. 

 EnvioFormulario 
  form
  -------
  constructor(F)
  enviar()
 
 Le pasamos como parametro el formulario validado que tiene que enviar.  y 

 Solo le proporcionamos el formuario, el envio de form no depende de la validación no hace falta que tenga la lista de normas. 


 Pasamos de una única clase que tenia dos responsabilidades a tener dos clases cada una con una única responsabilidad validar y enviar. 

 Desventajas: encontrar el equilibrio entre el número de clases que crear para cada responsabilidad. 
 
 Podemos pasar a tener muchas clases que se llamen entre si, complejo de entender, con información y métodos muy basicos que hacen complejo de entender entre todas esas clases. 
 
 Tambien aparece el acoplamiento puede aparecer si modificamos una clase y deje de funcionar con otra. 

 
 El SPR nos permite segregar la lógica de negocio en distintos componentes faciles de testear al hace una acción y reutilizar dado su única tarea. 

 Debemos comprender cuales son las necesidades de la app y así poder determinar el mejor modelado o mejor diagrama de clases para ella. 
  


|| Principio Abierto-Cerrado (OCP)

 Open-Closed Principle

 Se refiere que una clase o módulo debe estar abierta para su extensión pero cerrada para su modificación.

 Cuando desarrollamos una clase podemos continuar añadiendo código siempre y cuando se prespeten otros principios como el de responsabilidad única.  

  Clase: 
   //...
   //...

 A medida que incorporamos código, vamos agregando una especificación que son los métodos y atributos que tiene que tener nuestra funcionalidad única. 

 Debemos definir los atributos y los métodos de nuestra clase en tiempos de diseño: antes de escribir código. No deberiamos escribir código sin saber lo que hace falta. 

 El Principio abierto y cerrado tiene sentido aplicarlo cuando estamos diseñando. 

 Aquí el truco: después de diseñar la clase y desarrollarla, esa clase se va a cerrar. 

 Si más adelante surge la necesidad de incorporarle más código para la funcionalidad, no podemos hacerlo. 

 
 Ej: app web con paneles de control con widget que muestran datos como información de venta, estadisticas, trackeo, etc.

 Si queremos colorear el panel, el diseño de las clases sería como: 
  
  Dashboard // contiene los paneles para pintar los widget

  Widget // 

 
 El código para pintar el dashboard se compone como: 
    
  List<Widget> widgets = {
   new SellChart()
   new CakeChart()
   new Messages()
   new ProfitChart()
  }
  
  void paint(Table t){
   for w:widgets{
    w.paint(t)
   }
  }

 Declaramos al principio la lista de widgets que queremos pintar y luego la función pintar que va a iterar cada uno de los widget y pintarlo. 

 List toma un conjunto de elementos y paint itera sobre ellos. 

 
 Si queremos tener un widget especial que solo se muestre cuando la persona ha contratado o tiene un nivel superior o suscripción,  
 
 Tenemos un widget especial que solamente queremos pintar cuando cuando cumple con este requisito. 
 
 El widget tendra que tener un atributo especial en el código. 
 
  SpecialWidget{//...}
   user.level=4
 
 Pero lo primero que suele ocurrirle a algún programador es cuando se tiene una condición especial, agregar un if. 

 Agregar un condicional para cuando ocurra un atributo, trae sus consecuencias. 

 Cambiar la clase porque no se tuvo en cuenta en el diseño una condición especial abre la puerta a otros cambios imprevistos y no pensados. 

  void paint(Table t){
   for w:widgets{
    if !w.special{   //no especial -> pintar
     w.paint(t)
    }else if user.level=4{
     w.paint(t)
    }
   }
  }
 
 Después se agregan más cosas, sin haberlas planteados.


 El metodo paint widget solo tenía que pintar y ahora se convierte en una clase controladora que tiene que decidir qué y cuándo pintar. 

 Estamos metiendo problemas de diseño en el código actual, el principio abierto-cerrado no lo permite. 

 Una vez que se diseño y desarrollo se cierra la clase. 

 Debemos poner al nueva característica en otra clase. 

 Podemos usar la herencia para fabricar clases que se puedan extender el objeto si tener que modificar el anterior u original. 

 
 Podríamos extender la clase Dashboard con la herencia, pero no modificarla para agregar funcionalidades. 

 Por eso debemos aplicar el principio en la etapa de diseño. 

 Utilizando una buena arquitectura y un buen sistema de patrones de diseño que garantizen que bajo ningún concepto sea necesario modificar una clase sin cambiar su comportamiento. 

 Tenemos que preveer la extensión de la clase desde el momento que estamos fabricando el diagrama de clases. 

 Ej: haber creado una clase DashboardPainter y que deba consultar las condiciones/atributo del usuario. 

 Si el usuario forma parte de un grupo especial o si es un usuario generico. 

 Usar un patrón stategy, usar una subclase (extendida de dash)
   
  DashboardPainter //función pintar
   |
   Dashboard //clase/objeto pintado
   ^
 GeneralDashboard |  VipDashboard  //subclases de objeto pintado
   
 ExecutiveDashboard
 
 Estos contratos no deberían estar todos juntos controlados por el dashboard general. 


 Hay método más convenientes que la extensión/herencia como las interfaces y la delegación. 

 Convendría diseñar el código de tal manera que favoreciera la fabricación de interfaces que es otro principio solid o el uso de delegación que es más conveniente que la herencia. 

    
 
|| Principio de Sustitución de Liskov (LSP)

 Liskov Substitution Principle
 
 Si tenemos una clase que cumple con una serie de propiedades/atributos, una serie de condiciones que se tienen que dar en los métodos; cada una de las clases derivadas T. 
 
  ClaseS: 
   //...
   //...
   //...
  
    ^
  ClaseT: 
   //...
   //...
   //...
 

 Significa que las propiedades que se cumplan para una clase base tiene que seguir cumpliendose para las clases derivadas.  

 Las propiedades son las pre condiciones y post condiciones invariantes que puede tener un método o es lo mismo que las condiciones o predicados tienen que ser ciertos antes y después de llamar al método.    

 Ej: si tenemos una jerarquía de clases

  CuentaBancaria
   depositar(int)
   extraer(int)

   ^              ^
 cuentaBasica   cuentaNomina

 Las subclases que implementen la interfaz CuentaBancaria tiene que cumplir el contrato. 

 Puede haber cosas que se tienen que cuplir en el retorno, parámetros, efectos que tienen que cumplirse después de llamar a un método. 

 Como condición: no se puede llamar a extraer con un cantidad de dinero no disponible en la cuenta. 

 Como condición para llamar a depositar puede tener como precondición puede tener que el valor al que se le está pasando como parámetro no sea menor que cero, no se le pueda pasar un número negativo. 

 Se puede poner una condición extra que sea que no se le pueda meter 3000 por cuestiones antifraude. 

 Un efecto colateral puede ser que cuando se hace un depósito o cuando se extrae dinero, tiene que haber una fila más dentro del historial de transacciones que tenga el banco internamente. 

 
 Al implementar estas interfaces, fabricando  cuentaBasica o cuentaNomina; las condiciones se tienen que cuplir o implementar. 

 Otras de las formas de ver el principio es como una sustitución. 
 
 Si nosotros tenemos todo el tiempo implementaciones de interfaces o extensiones de clase que cumplen con lo que dice la clase base. 

 A partir de ese momento podemos fabricar métodos que trabajen con la clase base. 

 Un método o una clase puede utilizar unicamente la clase superior sin hacer distinción a si es una cuenta bancaria de tipo a o tipo b. 

 Si tenemos otra cuenta bancario tipo C, nos da igual si la cuenta bancaria es tipo cuenta nomina o cuenta básica. 

 Mientras se comporte con una cuenta bancaria lo que haga por dentro nos da igual. 

 Aquí es cuando estas clases secundarias sustituyen a la principal. 

 
 Si fabricamos clases abstractas o interfaces correctamente: especificadas las entradas, salidas, las precondiciones y las postcondiciones. 

 Debería ser posible fabricar implementaciones de estas clases que cumplan correctamente con el contrato o protocolo. 

 
 Inconvenientes en la fabricación de la clase base: 

  CuentaBancaria   cajero (CuentaBancaria c){} //tipo de cuenta c
   depositar(int)
   extraer(int)      

    ^              ^            ^
  cuentaBasica   cuentaNomina cuentaDeposito

 Si fabricamos una subclase de CuentaBancaria, cuentaDeposito para que el usuario ingrese dinero y genere interes. 

 Esta cuenta en teoría solo sirve para depositar ya que no podemos extraerlo hasta cierto plazo. 

 Se saltea la condicion extraer, significa que no podemos sustituir una cuenta depósito y utilizarla como parametro dentro de cajero. 


 Puede que para esto estemos utilizando una clase padre equivocado o la clase padre no está bien definida. 

 Podríamos dividir esta clase padre en cuentas que permitan solo depositar y no extraer de las que si lo permiten. 

 Esto entra ya en los principios de segregación de interfaces que favorece el diseño de interfaces según su propósito. 

 Las interfaces nos permiten fabricar abstracciones que nos permiten implementar métodos en las clases. 

 Permite el desacople de las clases o módulos en el código. 
 
 Debemos concentrarnos en los métodos que implementamos o exponemos para su implementación. 

 Tampoco implementar métodos que no hagan falta. 

  
 Otro de los inconvenientes para saltearse la implementacion, está en el uso de instanceOF

 Si estamos comprobando que tipo es la clase padre, para determinar si una cuenta bancaria es de tipo a, b, c. 

 No estaríamos cumpliendo las abstracciones correctas.  
 
 La gracia es hacer implementaciones sin tener que conocer que hay en ellas. 

 Podríamos crear una interfaz intermedia que represente una cuenta que pueda extraer dinero, tendríamos la información que represente códificada en el tipo. 



|| Principio de Segregación de Interfaz (ISP)

 Interface Segregation Principle

 Los clientes que implementen o utilizen interfaces no deberían depender de métodos que no deberían utilizar. 

 Las interfaces deberían diseñarse de forma breves, cortas y tener pocos métodos. 

 Deberíamos evitar las interfaces con muchos métodos. 

 
 Ej: modelar sistema para imprimir informes. 

 Si lo hacemos en base a una clase que represente la impresora multifunción. 

  Multifunción: 
   imprimir()
   escanear()
   fax()
    
 Si implementamos esta interfaz multifunción, cualquier clase que la implemente deberá ejecutar los tres métodos. 

 Si creamos una clase informe que puede imprimir, podemos hacer que reciba como parámetro un objeto de tipo multifunción y así hacer que el informe se pueda imprimir llamando al método imprimir de la multifunción que pasamos como parámetro.    
   
  class informe {
   void imprimir (Multifunción)
  }

 Pero así tiene inconvenientes: imprimir recibe un objeto que tiene métodos que no usa. 

 Es un problema cuando se modifique multifunción, arrastrará a la clase informe.  

 Cuando tenemos muchos métodos en una interface que solo son útiles en una circunstancia pero luego no son aplicables. 

  ImpresoraMatricial: 
   imprimir()
   escanear() {
    return 0 // o throw
   }

 Una solución es fabricar interfaces más pequeñas. 

 Si queremos representar una impresora multifunción, se puede hacer en tres interfaces separadas. 

 La interfaz impresora representará cosas que pueden imprimir cosas. 

 La interfaz escaner representa entidades que pueden convertir de papel a digital. 

 La intefaz enviar documentos digitalmente por fax. 

  Impresora:  Escaner:   Fax: 
   imprimir    escaner    enviar
         
           ^  ^  ^       
         multifuncion 

 Fabricamos una clase multifunción a partir de estas. 

 Por herencia multiple hacemos que una clase sea a la vez una impresora, escaner y faz. 

 Utilizamos una multiple implementación usando threads

 Mientras la clase multifunción se comporte como una impresora, escaner y fax; podrá ser utilizada en métodos que acepten como parámetro una impresora, escaner o fax; según el caso necesario. 

   
 Segregamos una interfaz que de otro modo podría ser más grande con métodos. 

 Creamos pequeñas interfaces qeu tengan menos operaciones y que combinen para fabricar interfaces mucho más grande, pero siempre depender de comportamientos concretos para interfaces particulares. 



|| Inversión de Dependencia (DIP)

 Dependency Inversion Principle

 
 La inversión de dependencia no es inyección de dependencia. 

 La inversión de dependencia determina que los módulos de alto nivel deben depender de abstracciones, no de módulos de bajo nivel. 

 Cuando tenemos un módulo de alto nivel, que depende de varios módulos de bajo nivel para funcionar. 
  
           mAltoLvl

  mBajoLvl1  mBajoLvl2  mBajoLvl3

 Es a la situación que se llega si aplicamos los anteriores principios SOLID: 

 El módulo de alto nivel tiene dependencias de los módulos de bajo nivel. 

 Si aplicamos el principio de responsabilidad única tenemos que dividir el código en varias clases que coperan para realizar una tarea. 

 Vamos a tener una clase de alto nivel que dirige la ejecuación, compartiendo datos o interactuando con las clases de bajo nivel que son las que colaboran para realizar la tarea. 


 En el principio de inversión de dependencia, este tipo de diagrama o situación 
  
 Los multiples módulos de bajo nivel deberían evitarse o reemplazarse con abstracciones. 

 Las abstracciones son interfaces. 

 Ej: si creamos un modulo de pago que es una clase que sirve para pagar con distintos métodos de pagos. 

  ModuloPago: 
   //...
   
  stripe visa master card paypal
  
 Esta clase de alto nivel interactua con otras clases de bajo nivel para realizar un sistema de pago completo. 

 En nuestro sistema de bajo nivel tenemos clases que hacen cosas más concretas como sistemas de integración para pagar con stripe, visa, mc, paypal. 

 Vamos conectando el módulo de pago con la clase paypal, tiene como parametro a la clase paypal. 

   ModuloPago: 
   //...
    |
   paypal  
 
 Nos estamos salteando el principio de inversión de dependencia. 

 Si necesitamos cambiar el módulo de pago para favorecer otros metodos no va a ser facil. 

 Además cada método de pago (clases bajo nivel) tienen sus propios métodos, 
 
    ModuloPago: 
     //...
   
 paypal:      stripe:        visa:        master card 
  enviar()     recurrente()   efectivo()   pagar()
  solicitar()

 Tiene su propia interfaz, diferentes, con sus parámetros. 

 
 Debemos realizar las dependencias por abstracciones, mediante una interfaz. 

 Si realizamos una interfaz como metodo de pago para pagar.  
  
  ModuloPago:            MetodoPago:
   //...                  pagar()
           
  paypal:      stripe:        visa:        master card 
   enviar()     recurrente()   efectivo()   pagar()
   solicitar()

  //los diferentes métodos de pago va a tener que implementar la abstraccion MetodoPago. 


 Si queremos aplicar los principios de segregación, queremos dejar afuera otros métodos que no tienen que ver con la acción de pagar, como la solicitud de dinero. 

 El resto de métodos de pago van a tener que implementarla. 

 Seguramente tendremos que adaptar (usando el patrón adapter) los métodos de pagos para que puedan procesar nuestra interfaz abstracta. 
 

 Lo importante es que si tenemos una referencia a un método de pago, si tenemos una variable llamada metodo de pago (mp). 

  MetodoPago:
     mp
     pagar()

  mp.pagar

 Cuando agamos mp.pagar tenemos acceso al metodo pagar sin importa el método de pago. 

 Con llamar a mp.pagar se va a efectuar el pago. 

 Estamos fabricando una abstracción que permite que quien sea que use ese método de pago no se tenga que preocupar del metodo de pago en concreto. 
  
   
    ModuloPago:  //tenemos que hacer que módulo de pago
     constr()    //acepto a metodo pago abstracto
                 //así podemos cambiar el método de pago
      ^            por el parametro del constructor. 
  MetodoPago:   
     mp        
     pagar()

  mp.pagar

  ^           ^              ^            ^
 paypal:      stripe:        visa:        master card 
  enviar()     recurrente()   efectivo()   pagar()
  solicitar()



 El principio de inversión de dependencia nos dice que cuando fabriquemos nuestra clase/módule evitemos depender de clases de bajo nivel, tenemos que conseguir que nuestro módulo/clase acepte a los métodos de bajo nivel. 

 Acepte en el constructor un método de pago abstracto, de tal manera que si quisieramos cambiar el método de pago lo habamos modificando el parametro del constructor  
   
   ModuloPago:  
     constructor()
  
 El principio marca que las dependencias que necesita un módulo de alto nivel, como las clases colaboradores, le entran como parametros en el constructor. 
  
 Si tenemos una clase ModuloPago y hacemos que el método de pago sea un atributo de clase que fabricamos en el constructor. 
  
 Dentro del constructor vacio, agregamos o instanciamos el método (la funcionalidad se guarda en atributo). 

 Si queremos cambiar el método de pago, tenemos que ir al módulo de pago y hacer la modificación en él. 

  ModuloPago: 
   constructor(){
    mp = new MP()   //metodo de pago se atri clase
   }
  
 Esto tambien se salta el principio abierto o cerrado. 

 Pero podemos hacer de otro modo: una vez fabricado la abstraccion 
 
 Reciba en el constructor el metodo de pago como parametro

   ModuloPago: 
    constructor(MP mp) {

    }  

 Cuando instanciemos el módulo de pago tenemos que decirle cual es el metodo de pago tenemos que aplicar. 

 Cualquier modificación al método de pago para hacer la compra, no requiere modificaciones al módulo de pago. 

 Habrá que hacer los cambios en un selector sin meternos en el módulo de pago para hacer el cambio. 

 Repeta mejor los principios, esto tambien es inyección de dependencia. 

  

|| RS: 

  
 Responsabilidad Única: 

  Formulario:  f = newForm(u, p, n): 
  enviar()     f.validar()
  validar()    f.enviar()
  ---------
  username
  password
  normas
  
 
  Es mejor: 
  
 Formulario: 
  username
  password  


 ValidadoraFormulario: 
  form
  normas
  ------ 
  constructor(f, normas)
  validar(): bool


 EnvioFormulario:
  form
  -------
  constructor(F)
  enviar()
 


 Abierto-Cerrado: 

  List<Widget> widgets = {
   new SellChart()
   new CakeChart()
   new Messages()
   new ProfitChart()
  }
  
  void paint(Table t){
   for w:widgets{
    w.paint(t)
   }
  }

   DashboardPainter //función pintar
   |
   Dashboard //clase/objeto pintado
   ^
 GeneralDashboard |  VipDashboard  //subclases de objeto pintado
   
 ExecutiveDashboard
 


 Sustitución Liskov:
  
  CuentaBancaria   cajero (CuentaBancaria c){} //tipo de cuenta c
   depositar(int)
   extraer(int)      

    ^              ^            ^
  cuentaBasica   cuentaNomina cuentaDeposito

  //las propiedades que se cumplan para una clase base, tienen que seguir cumpliendose para las derivadas. 
  //por eso podemos sustituir cuenta bancaria por las derivadas. 
    
  //creamos metodos como cajero que trabajen con la clase base. 
  //Usamos cuenta bancaria sin hacer distincion se es tipo a, b, c (basica, nomina, deposito)
  //le pasamos como tipo la clase base, y el parametro
   va a ser las otras clases derivadas
  //si reemplazamos el tipo clase base por una clase
   derivada el programa no se rompe dado que las 
   sustitutas tienen cumplen con el contrato atrib y met. 



 Segregación Interfaz:

    Impresora:  Escaner:   Fax: 
   imprimir    escaner    enviar
         
           ^  ^  ^       
         multifuncion 


 Inversion de Dependencia: 

 
  ModuloPago:        //tenemos que hacer que módulo de pago
   constr(MP mp){    //acepto a metodo pago abstracto
   }                 //así podemos cambiar el método de pago
      ^                por el parametro del constructor. 
  MetodoPago:   
     mp        
     pagar()

  mp.pagar

  ^           ^              ^            ^
 paypal:      stripe:        visa:        master card 
  enviar()     recurrente()   efectivo()   pagar()
  solicitar()








      
 

  
   
 
 
 


