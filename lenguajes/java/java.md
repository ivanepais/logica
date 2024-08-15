Java


|| Modificadores de Acceso a Atributos 

 Getters y setters dentro de las clases. 
 

 Lo contrario de esto es tener atributos publicos y asignarles valor. 

 Después recuperar el valor utilizando el nombre del atributo. 

 ```
 package getters; 

 public class Main {
  public static void main(string[] args) {
    Persona p = new Persona(); 
    p.nombre = "Juanito"; 

    String nom = p.nombre; 
    System.out.println("Se llama " + nom); 
  }
 }

 ```
 Después lo guardamos en otra var (nom) y lo imprimimos. 


 Un setter y getter nos puede dar ventajas sobre atributos públicos. 

 Además de la encapsulación.  


 Los getter y setter son funciones que creamos, empiezan con get y set como getNombre() y setNombre().  

 Utilizadas para recuperar o cambiar el valor de un atributo. 

 ``` 
 package getters; 

 public class Persona { 

  public String nombre; 

  public String getNombre() {
   return nombre; 
  }

  public String setNombre() {
   this.nombre = nombre; 
  }
  
 }

 ```  
 
 Si al atributo que estaba publico lo modificamos y lo ponemos en privado.

 Con las dos funciones publicas creadas recuperamos o modificamos de manera indirecta el valor del atributo sin cambiar su código. 

 El resultado de esto es que tenemos una propiedad que se va a controlar con estas funciones. 

 ``` 
 package getters; 

 public class Persona { 

  private String nombre; 

  public String getNombre() {
   return nombre; 
  }

  public String setNombre() {
   this.nombre = nombre; 
  }
  
 }

 ```  

 
 En la función main ya no podremos utilizar el atributo nombre de manera directa. 
 
 ```
 package getters; 

 public class Main {
  public static void main(string[] args) {
    Persona p = new Persona(); 
    p.nombre = "Juanito"; 

    String nom = p.nombre; 
    System.out.println("Se llama " + nom); 
  }
 }

 ```
   
 Tenemos que invocar a las funciones desde main. 

  ```
 package getters; 

 public class Main {
  public static void main(string[] args) {
    Persona p = new Persona(); 
    p.setNombre = ("Juanito"); 

    String nom = p.getNombre(); 
    System.out.println("Se llama " + nom); 
  }
 }

 ``` 
 
 Ya no podemos acceder tan fácil como antes. 


 Esto es encapsulación básica, esconder la implementación interna y utilizar para rescatar la información ahora cerrada.  


 La ventaja se presenta a la hora de implementar las funciones get y set en main. 

 Su código interno no es preocupación para quién lo implemente. 


 Si modificamos un atributo público  

 ```
 p.nombre = "Juanito"; 

 String nom = p.nombre; 

 ```

 No permite realizar validación dado que el objeto/instancia p de persona permite cargar cualquier información. 

 ```
 p.nombre = null; 
 p.nombre = ""; 
 p.nombre = "%&$$()&/-/%$; 

 String nom = p.nombre; 

 ```  

 Dado que le estamos asignando un valor a un atributo. 


 En los setter podemos incluir código de validación para evitar carga de dato ilegal. 

 ```
 public void setNombre(String nombre) {
  if (nombre == null || nombre.isEmpy()) {
    throw new RuntimeException("el nombre no es valido") 
  }

  this.nombre = nombre; 
 
 }

 ```

 Podemos comparar valores, llamar a funciones, lanzar errores. 


 Podemos limpiar el campo introducido. 

 ```
 package getters; 

 public class Main {
  public static void main(string[] args) {
    Persona p = new Persona(); 
    p.setNombre = ("JUANITO"); 

    String nom = p.getNombre(); 
    System.out.println("Se llama " + nom); 
  }
 }

 ```
 
 Debemos cambiar la función get

 ```
 public String getNombre() {
  String minus = nombre.toLowerCase();  
  char inicial = nombre.toUpperCase().charAt(0); 

  return inicial + minus.substring(1); 
 }
  
 ```
 
 Le pasamos minuscula al nombre. 
 
 Recuperar el caracter inicial 

 Luego devolviendo la concatenación inicial más minus. 

 Toma inicial upper y luego el resto lo toma minus. 

 
 Mientras  estemos devolviendo lo que digan los métodos get y set. 

 A los que lo aplican no deberian importarle su código interno. 

 No molesta al resto de código, ni el resto del código tiene que aplicar cosas extra. 

 Con estos métodos se aplican funcionalidades a todos los valores. 

 Sin tener que modificar uno a uno. 


 Aplicación de Directorio: 

  Clase auxiliar para recuperar nombres. 

  En vez de usar get. 

  ``` 
  public class Persona {
   
   private Directorio directorio = new Directorio(); 
    
   Private String nombre;  
    
   public String getNombre() {
    return directorio.descargarNombre(); 
   }
  
  }

  ```
 
  La fuente de busqueda para el método get será el directorio. 

  A get le pasamos el directorio. 

  Cuando llamemos a get para recuperar el valor de la propiedad nombre, además de devolver el valor del atributo nombre. 

  El código puede recuperar algo a partir de internet. 

  Si el atributo nombre fuese publico no se podría hacer. 

  Requeriria cambiar todas las instancias de persona, para modificar cualquier acceso a la variable o al atributo nombre y cambiarlo por el nuevo código. 

   
   
 Getters y Setters virtuales: 

  Antes teniamos un get y set que estaban aplicando a un atributo de la misma clase formando una propiedad. 
  
  ``` 
  package getters; 

  public class Persona { 

   private String nombre; 

   public String getNombre() {
    return nombre; 
   }

   public String setNombre() {
    this.nombre = nombre; 
   }
  
  }

  ```  

  
  Podriamos crear otro metodo get

  ``` 
  public String getApellido() {
   return ""; 
  }

  ```
  Devolverá un string. 


  Y un método set 

  ```
  public void setApellido(String apellido){

  }

  ```

  Aceptará un string.


  Desde afuera podemos asumir que tenemos una propiedad apellido. 

  Sin escribir ningún atributo podemos hacer algo más personalizado. 

  
  Al llamar a set se utilize la clase file para escribir dentro de un archivo para escribir una cadena apellido. 

  ```
  public void setApellido(String apellido){
   Path ruta = path.of("apellido.txt"); 
   Files.writeString(ruta, apellido); 
  }

  ``` 
  
  Cuando llamemos a setApellido se escribira dentro del archivo txt el valor le pasamos. 
 
  Debemos poner un try catch porque un get y setter no pueden devolver excepciones para que sean propiedades. 

  ```
  public void setApellido(String apellido){
   try {
    Path ruta = path.of("apellido.txt"); 
   Files.writeString(ruta, apellido); 
  }catch(IOException ex) {
   logger.getlogger(Persona.class.getName()).log(Level); 
  }

  ``` 
    
  En getApellido preparamos el acceso a modificar y se haga una llamada a files para poder recuperar lo que de el archivo. 

  ```
   public String getNombre() {
    Path ruta = Path.of("apellido.txt"); 
    return Files.readString(ruta);  
   }

  ```


  En caso que no se pueda recuperar devolvemos una cadena vacía en setApellido. 

  ```
  public void setApellido(String apellido){
   try {
    Path ruta = path.of("apellido.txt"); 
   Files.writeString(ruta, apellido); 
  }catch(IOException ex) {
   logger.getlogger(Persona.class.getName()).log(Level); 
   return ""; 
  } 

  ``` 


  En main o desde fuera podemos llamar a setApellido. 
  
  Sin tener que preocuparnos saber que está escribiendo un archivo. 
  
  Y que se va a recuperar cuando llamemos y le demos valores a getApellido. 

  ```
  package getters; 

  public class Main {
   public static void main(string[] args) {
    Persona p = new Persona(); 
    p.setNombre = ("JUANITO"); 
    p.setApellido("Perez");  

    String nom = p.getNombre(); 
    String ape = p.getApellido(); 
    System.out.println("Se llama " + nom); 
   }
  }
 
  ```
 
  En el proyecto se creo un archivo txt y contiene lo que escribimos en main. 

  Volviendo a propiedades virtuales con get y set. 

  Vemos que no existia y se ejecuto en un código que escribio en un archivo. 



|| Genérico 

 En java nos encontramos con los simbolos <> en los que se escribe el nombre de otra clase. 

 <Integer> o <String>, se denominan genéricos. 

 ```
 import java.util.arrayList; 
 import java.util.arrays; 
 import java.util.List; 
 import java.util.stream.Collectors; 
 import java.util.stream.IntStream; 

 public class Main {
  public static void main (String[] args) {
   List<Integer> list = Array.asList(1, 2, 3, 4);
   list.forEach(item -> {
    System.out.printf("elemento %d\n", item);
   });

   List<String> str = new ArrayList<>(); 
   str.addAll(Arrays.asList("hola", "mundo", "muy", "buenas"); 
   str.forEach(System.out::println);
  }

  public static String repetir(int veces) {
   
  }
 }
 
 ```

 Los genéricos sirven para parámetrizar clases.

 Como los parámetros de una función sirven para aplicar modificaciones internamente. 

 Con los genéricos parámetrizamos el comportamiento interno de las clases. 

 O su interfaz pública de funciones. 
  
 Al contrario del casteo, los genéricos cumplen con las reglas polimorficas de POO. 

 
 Algunas clases del paquete java.util aceptan estas modificaciones. 
 
 Como Map<K,V>, Map.Entry<K,V>, NavigableMap<k,V>, NavigableSet<E>. 

 Optional<T>. 


 Son declaraciones de un genérico. 

 Optinal está declarada por un genérico T. 

 Los genéricos están declarados por letras que representan diferentes objetos. 

 <T> representa un tipo de dato. 

 <E> representa un elemento. 

 
 Clase Optional<T>: 

  Lleva un genérico T, que será un parámetro de clase T. 

  Para instanciar correctamente Optional, debemos indicarle que vale la T. 
  
  El genérico funcionará como una incognita para eso que espera. 

  
  En la lista de métodos hay algunos que devuelven elementos de tipos normales. 

  Como hasCode() -> devuelve int. 
  
  isEmpy() -> boolean. 

  
  Pero tambien hay métodos que devuelven elementos de tipos especiales. 

  Como get() -> T
 
  Devuelve una instancia de tipo T. Se refiere a un tipo de dato. 
 
  
  El genérico nos permite fabricar clases e interfaces en las cuales algunos tipos no esten definidos. 
  
  El tipo se tiene que declarar al momento de instanciar esa clase. 
 

  Si creamos una instancia de Optional y le pasamos un booleano o random es valido. 

  En su uso se reemplazarán por esos tipos, en vez de la T. 

  Aparecerá random o boolean. 

 
 Clase genérico y Método genérico: 

  Si creamos un optinal booleano, el método get -> T. 
   
  Ahora devolverá un booleano.  

  O lo que le hayamos pasado a Optional. 

  Si le pasamos un String, devolverá String. 


 Funcionamiento de Clases o Interfaces como List<E> y ArrayList<E>
    
  Reciben un genérico E, que se refiere a un elemento. 

  Métodos como add(E e) que devuelve un tipo establecido como boolean. 
 
  get(int index) devolverá E. 

  
  Según como instanciemos List<E> y ArrayList<E>, es lo que devolverán sus métodos genéricos. 

  Como una incognita. 
   
  
  Por ejemplo, si instanciamos List como un entero

  ```
  List<Integer> list = Arrays.asList(1, 2, 3, 4);
 
  ```

  El método genérico get va a devolver entero. 

  Siempre que correctamente usemos la instancia. 

  ```
  list.get(); 

  ```

  Si a List le pasamos un elemento Random. 

  ```
  List<Integer> list = Arrays.asList(1, 2, 3, 4);
  
  ```
  list.get va a devolver Random. 



 Tipo Object vs Tipo Genérico: 

  Cuando no pasamos genéricos, Java va a compilar el tipo Object. 

  ```
  List list = Arrays.asList(1, 2, 3, 4); 
  list.add

  ```
 
  No sería especifico. 

  El método será tipo Object. 

  El tipo Object es valido pero no tiene semántica, significado. 

  Implica tener que hacer casteos, que es arriesgado en ciertas circunstancias. 

  Los valores no encajarían bien. 

  
 Buenas Prácticas en Genérico: 

  De primera debemos poner el tipo especifico. 

  ```
  List<Integer> list = Arrays.asList(1, 2, 3, 4);

  list.get(); 

  ```
  
  Vemos la clase, tipo especifico y nombre de instancia o instancia.   

  Asi evitamos tener que hacer casteo, conversiones. 


  Los genéricos tiene que ser indicados en la declaración del tipo. 

  Cuando estamos indicando el tipo de una variable o parámetro. 

  Tendremos que ponerlo siempre en la parte izquierda del igual/ operador de asignación

  O tendremos que ponerlo en el tipo que tenga un parámetro. 

 ```
 public class Main {
  public static void main (String[] args) {
   List<Integer> list = Array.asList(1, 2, 3, 4);
   list.forEach(item -> {
    System.out.printf("elemento %d\n", item);
   });

   sum(list);

   List<String> str = new ArrayList<>(); 
   str.addAll(Arrays.asList("hola", "mundo", "muy", "buenas"); 
   str.forEach(System.out::println);
  }

  private static void sum(List<Integer> valores){
  
  }

  public static String repetir(int veces) {
   
  }
 }
 
 ```

  Creamos una función sum que acepta como parámetro una lista de enteros. 

  Y este parámetro se llama valores. 
  
  ```  
  sum(List<Integer> valores)

  ```

  En este caso el genérico tiene que estar especificado en el parámetro de la función. 

  Para saber el tipo de retorno esperado al aplicar modificaciones internas. 

  ```
  private static void sum(List<Integer> valores) {
   valores.get(); 
  
  }
 
  ``` 
  

 Genéricos y Estructuras de Datos: 

  Dado la inferencia de tipos se puede obviar el tipo. 

  Si a la izquierda de la asignación o definición de instancia. 

  Aclaramos de que tipo es, a la derecha o asignación podemos obviarlo.

  Pero lo que no se puede es no escribir <>. 

  No va a inferir bien el tipo. 

  ```
  List<String> str = new ArrayList<>(); 
  str.addAll(Arrays.asList("hola", "mundo", "muy", "buenas"); 
  str.forEach(System.out::println);

  ```

  Como no se lo mencionamos, asume que va a ser del mismo tipo del que está en la declaración. 

  
  ```
  List<String> str = new ArrayList(); 
  
  ``` 

  Poner los tipos en la declaración y la asignación no es necesario desde la version 7. 

  Aunque es valido. 

  ``` 
  List<String> str = new Array<String>(); 

  ``` 



|| Clase Genérica

 Envoltorio se utilizará para envolver una una instancia de otra clase. 

 ```
 public class Envoltorio {

 }
 
 ```
 
 Por ejemplo, envolver clase Empleado que es un record/registro.  

 ```
 public record Employee (String name, String surname, Department department) {

 }

 ```
  
 Queremos que Envoltorio contenga una instacia de la clase Empleado. 

 ```
 public class Envoltorio {
  private Employee envuelto;
  
  public Envoltorio (Employee envuelto) {
   this.envuelto = envuelto; 
  }

  public Employee get() {
   return envuelto;
  }
 }
 
 ```

 Creamos una instancia/objeto privado de Employee llamada envuelto. 

 Definimos constructor de Envoltorio que recibe empleado envuelto (tipo y parametro).
 
 Podemos llamarla y pasar el valor del parámetro. 
 
 Este valor será el de la propiedad establecida anteriormente. 

  
 Después definimos métodos de encapsulamiento get y set. 

 De tipo Employee, no de envuelto ni Envoltorio. 

 Recuperamos y establecemos la propiedad envuelto. (empleado-envuelto)

 Para recuperar y establecer valores desde fuera, ej func main. 

 
 Después implementamos la operación toString(). 

 Para delegar (@Override super) en empleado envuelto.  

 ```
 public class Envoltorio {
  private Employee envuelto;
  
  public Envoltorio (Employee envuelto) {
   this.envuelto = envuelto; 
  }

  public Employee get() {
   return super;
  }

  @Override
  public String toString() {
   return "Envolvemos [" + envuelto.toString() + "]";
  }
 }
  
 ```

 Devolvemos instancia e imprimimos algo más. 


 Metimos Un Employee (//Employee envuelto -propiedad-) en nuestro Envoltorio. 

 A partir de ahora, cuando tengamos un Employee, se lo pasamos a Envoltorio para envolverlo. 

  
 El Envoltorio es inflexible dado que solo sirve para envolver instancias/objeto de Employee. 

 
 Si queremos Envolver otras cosas como un Department. 
 
 ```
 public record Department(int id, String anme, String location) {

 }
 
 ```

 No sería posible. 

 
 Si queremos aplicar estas clases, lo vemos en un test. 

 ```
 Public class EnvoltorioTest {

  @Test
  public void testEnvuelveEmpleado() {
   Department dep = new Department(123, "Contabilidad", "Europa");
   Employee empl = new Employee ("Foo", "Bar", dep); 
   Envoltorio env = new Envoltorio (empl); 
   Assertions.assertTrue(env.soString().contains("Envolvemos["));  
  }
 
  @Test
  public void testEnvuelveDepartamento() {

   //Instanciar Departamento 
   Department dep = new Department(123, "Contabilidad", "Europa");   

   //instanciar Envoltorio
   Envoltorio env = new Envoltorio (dep); 

  }

 }

 ```
 Instanciar dept como dep y envolver dep en parametro 

 No da advertencia de que el tipo esperado es Employee. 

 Y le pasamos tipo Department. 


 Envoltorio Genérico o Polimorfico: 

  Aceptará todo tipo de objetos. 

  Una opción es que los tipos de ambas clases sean comunes o iguales. 
  
  Como puede ser tipo Entity y Object. 

  O un elemento que forme parte de la jerarquia de ambas clases. 

  ``` 
  public class Envoltorio {

   private Object envoltorio; 

   public Envoltorio(Object envuelto) {
    this.envuelto = envuelto; 
   }   
   
   public Object get() {
    return envuelto; 
   }

  }

  ```
  
  Compilará, pero el metodo get, como es Object no tiene acceso a ningúnas de las propiedades de instancia. 

  La única forma es hacer un casteo. 
  

  ```
  @Test
  public void testEnvuelveDepartamento() {

   //Instanciar Departamento 
   Department dep = new Department(123, "Contabilidad", "Europa");   

   //instanciar Envoltorio
   Envoltorio env = new Envoltorio (dep); 
 
   env.get()
 
  }

  ```


  ```
  {(Department) env.get()}.location(); 

  ``` 

  Castear tiene problemas, dado que la inferencia de tipos es buena. 

  Al castearlo lo apagamos. 

  Se salteará mensajes de error relevantes. 

  Además que los casteos en alguna instancia puede fallar. 
 
 
 Usar Genérico: 
  
  Debemos ponerlos dentro de la declaración de una clase. 
 
  Usando la anotación <E>, <T>, <Var>. 

  Es mejor un nombre significativo para el tipo de dato de nuestor genérico. 
 
  Por lo general se usa una sola letra mayus para diferenciar al genérico de otras clases. 
   
  En el momento que la clase tenga un genérico. 

  Podemos utilizarla para definir tipos de datos de las propiedades. 

  Métodos, parámetros en esta clase. 

  
  ``` 
  public class Envoltorio<Var> {

   private Var envoltorio; 

   public Envoltorio(Var envuelto) {
    this.envuelto = envuelto; 
   }   
   
   public Var get() {
    return envuelto; 
   }

  }

  ```

  Es mejor reemplazarla por una sola letra o todo el nombre en mayus. 
 
  V o VAR. 

  
  Un nombre significativo sería <E> para representar que estamos envolviendo otro tipo de dato. 

  Podemos usar <E> tanto para tipos internos de la clase. 

  Como para tipos internos de los atributos o propiedades. 

  También para tipos internos de los parámetros. 
  
  O para tipo de retorno de funciones. 

  ```
  public class Envoltorio<E> {

   private E envoltorio; 

   public Envoltorio(E envuelto) {
    this.envuelto = envuelto; 
   }   
   
   public E get() {
    return envuelto; 
   }

  }

  ```

 Ahora podemos usar un genérico cuando instanciemos clases. 

 ```
 Public class EnvoltorioTest {

  @Test
  public void testEnvuelveEmpleado() {
   Department dep = new Department(123, "Contabilidad", "Europa");
   Employee empl = new Employee ("Foo", "Bar", dep); 
   Envoltorio<Employee> env = new Envoltorio <>(empl); 
   Assertions.assertTrue(env.soString().contains("Envolvemos[")); 
  
   Assertion.assertEquals("Foo", env.get().name());   
 
  }

  //comprobamos nombre empleado es "Foo"
  //tendremos acceso a sus metodos. 

  @Test
  public void testEnvuelveDepartamento() {

   //Instanciar Departamento 
   Department dep = new Department(123, "Contabilidad", "Europa");   
   Assertion.assertEquals("Europa", env.get().location());      

   //instanciar Envoltorio
   Envoltorio env = new Envoltorio (dep); 

  }

 }

 ```  

 Modificamos. 

 Envoltorio<Employee> env = new Envoltorio <>(empl); 

 Department<Department> dep = new Department<>(123, "Contabilidad", "Europa");   


 Ya no necesitaremos caster para extraer datos. 

 ``` 
 String loc = {(Department) env.get()}.location(); 

 Assertion.assertEquals("Europa", loc);   

 ``` 



|| Wildcards en Genérico

 El tipo del genérico es una interrogación <?>. 

 ```
 import java.util.list; 

 public class Reporte {

  public void imprimir(List<?> datos) {
   System.out.println("Imprimiendo datos"); 
   for (Object d : datos)
    System.out.println(d); 
  }
 }

 ```

 Si llamamos a métodos que utilizan el resultado del genérico, tienen tipo interrogación. 

 Como datos.add() // add(? e)

  
 Tiene la misma semantica, trato o significado que usar un Object. 

 Tenemos una lista de tipo interrogación, podemos recorrer los elementos de la lista con un for each como si fuese un Object. 

  
 Si pasamos un tipo de dato Integer, no compilará. 

 ```
 import java.util.list; 

 public class Reporte {

  public void imprimir(List<?> datos) {
   System.out.println("Imprimiendo datos"); 
   for (Integer d : datos)
    System.out.println(d); 
  }
 }

 ```
 
 No podrá convertirlo a entero. 
 
 Se usa en situaciones para que no falle el compilador. 

 Vamos a tener disponible los métodos de Object. 


 El sistema de tipos no permitiría darle como tipo genérico objeto a un párametro
 
 ```
 import java.util.list; 

 public class Reporte {

  public void imprimir(List<Object> datos) {
   System.out.println("Imprimiendo datos"); 
   for (Integer d : datos)
    System.out.println(d); 
  }
 }

 ```

 
 ```
 public class ReporteTest {

  @Test
  public void testPrint() {
   Empleado e1 = Programador.factory(); 
   Empleado e2 = Manager.factory(); 
   List<Empleado> empleados = Array.asList<>(e1, e2); 

   Reporte r = new Reporte(); 
   r.imprimir(empleados); 

  }

 }

 ```
 
 La lista empleados está hecha instanciando dos elementos de tipo empleado. 

 Después llamamos a la función imprimir.

 Acepta como parámetro un elemento List<?>. 

 La variable que le pasamos es de tipo List<Empleado>. 

 Este imprimir acepta un parámetro de tipo List<Object>, no <?>. 

 El código no compiladrá. 

 Ocurre porque la función espera un List<Object>, no le podemos proporcionar un List<Empleado>. 

 A pesar de que List<Empleado> sea un Object. 

 Los tipos tipos genéricos no aceptan genérico Object. 

 List<Object> solo acepta Object no un genérico. 

 ```
 public void imprimir(List<Object> datos) {//...}
  
 //...
 
 List<Empleado> empleados = Array.asList<>(e1, e2); 
 
 ```
 
 
 Para que compile podemos hacer que la lista empleados sea List<Object>
 
 ```
 public void imprimir(List<Object> datos) {//...}
  
 //...
 
 List<Object> empleados = Array.asList<>(e1, e2); 
 
 ```
 
 La consecuencia de anular la semántica de tipo es que no tenemos a disposición ninguno de los métodos para la clase Empleado. 

 Como getID o getSueldo. 

 
 Cuando ponemos la interrogación en el genérico es para aceptar cualquier tipo al pasar un argumento. 
 
 ```
 public void imprimir(List<?> datos) {//...}
  
 //...
 
 List<Empleado> empleados = Array.asList<>(e1, e2); 
 
 ```
 

 Con el wildcard le podemos pasar un argumento de cualquier tipo. 

 Pero cuando ejecutemos el bucle de la función, se convertirá en una lista de objetos. 

 No podemos llamar a ningún método especifico para Empleado. 
 
 ```
 import java.util.list; 

 public class Reporte {

  public void imprimir(List<?> datos) {
   System.out.println("Imprimiendo datos"); 
   for (Object d : datos)
    System.out.println(d); 
  }
 }

 ```

 ```
 public class ReporteTest {

  @Test
  public void testPrint() {
   Empleado e1 = Programador.factory(); 
   Empleado e2 = Manager.factory(); 
   List<Empleado> empleados = Array.asList<>(e1, e2); 

   Reporte r = new Reporte(); 
   r.imprimir(empleados); 

  }

 }

 ```
  

 En el siguiente caso: 
 
 ```
 import java.util.List; 

 public class Contabilidad {

  public long pagarCuentas(List<Empleado> empleados) {
   long amount = 0; 
   for (empleado e : empleados) {
    System.out.println("pagando " + e.getSueldo() + " amount += e.getSueldo()); 
   }
   return amount; 
  }

 }

 ```

 ```
 import java.util.Arrays; 
 import java.util.List; 
 import static org.junit.jupiter.api.Assertions.assertTrue;
 import org.junit.jupiter.api.Test; 

 public class ContabilidadTest {
  

  @Teset
  public void testPagarEmpleados() {
   List<Empleado> empleados = arrays.asList(Programador.factory(), Manager.factory()); 
   long amount = new Contabilidad().pagarCuentas(empleados); 
   assertTrue(amount >= 0); 
  }

 }

 ```
 
 La lista de empleados juntará dos tipos de empleados. 

 Como programador y manager. 

 Son clases que extienden de empleado. 

 Mientras la lista sea de tipo Empleado, no hay para las funciones en Contabilidad. 

 Contabilidad tiene una función para pagar cuentas. 

 Toma un tipo Empleado y va a obtener el sueldo. 

 El cálculo accede a las propiedades, metodos de Empleado. 

 
  
 Si tenemos una lista de programadores. 

 Creados con una fabrica programadores. 

 ```
 @Test

 public void testPagarProgramadores() {
  List<Programador> empleados; 

  empleados = Arrays.asList(Programador.factory(), Programador.factory()); 
  long amount = new Contabilidad().pagarCuentas(empleados); 
  assertTrue(amount >= 0); 
  
 }

 ```

 Ya no podemos pasarle como parámetros la lista Programador. 

 A un método que espera una lista Empleado como tipo. 

 Aunque Programador sea empleado, la función espera List<Empleado>, no List<Programador>. 

  
 Como antes, si le proporcionamos un ? a la función. 

 Aceptará empleado como argumento. 

 A su vez meter un wildcard, implica usar tipo Object. 

 El el tipo Object nos hace perder los métodos especificos. 

 Solo podemos acceder a los métodos de Object. 

 
 ```
 import java.util.List; 

 public class Contabilidad {

  public long pagarCuentas(List<?> empleados) {
   long amount = 0; 
   for (empleado e : empleados) {
    System.out.println("pagando " + e.getSueldo() + " amount += e.getSueldo()); 
   }
   return amount; 
  }

 }

 ```


 Si no le ponemos limite a wildcard le podemos pasar hasta un entero. 

 ```
 @Test
 public vodi testFalso() {
  List<Integer> numeros = Arrays.asList(1, 2, 3); 
  
  new Contabilidad().pagarCuentas(numeros); 
 }

 ```


 Para solucionar los inconvenientes con las clases derivadas. 

 Podemos hacer que el tipo wildcard reciba instancias. 

 ```
 import java.util.List; 

 public class Contabilidad {

  public long pagarCuentas(List<? extends Empleado> empleados) {
   long amount = 0; 
   for (empleado e : empleados) {
    System.out.println("pagando " + e.getSueldo() + " amount += e.getSueldo()); 
   }
   return amount; 
  }

 }

 ```

 El wildcard va a ser cualquier clase que en alguna parte de su jerarquía se identifique como empleado. 

 No solo casta hacia un objeto, sino hacia empleado. 
 
 Sigue utilizando la clase común pero ahora nos va a aceptar un Empleado o cualquier cosa que derive de él. 

 Ahora si que tendremos los métodos de la clase Empleado. 

 Y podemos usar List<Programador> y List<Manager> como tipo o los objetos/intancias de ellos y pasarlos como parametros. 


 De una manera similar podemos acotar la jerarquía para abajo. 

 Usando super en wildcard

 ```
 import java.util.List; 

 public class Contabilidad {

  public long pagarCuentas(List<? super Empleado> empleados) {
   long amount = 0; 
   for (empleado e : empleados) {
    System.out.println("pagando " + e.getSueldo() + " amount += e.getSueldo()); 
   }
   return amount; 
  }

 }

 ```

 Debemos proporcionarle una clase que de algún modo sea generalización del tipo que le pasamos después de super. 

 Se pueden hacer funciones para aceptar cualquier tipo de String. 

 Sea String o charSQL
 

 El wildcard sirve para aceptar clases de una manera más genérica sin romper el sistema de tipos. 

 Con extends podemos acotar por arriba y con super por abajo. 

 Para marcar que las clases proporcionadas sean de una jerarquía. 



|| Modificador Static

 Sirve para crear atributos y métodos en las clases con ambito global. 

 Que no sean instancia de ninguna otra clase.  

 ```
 public class Main {

  public static void main (String[] args) {

   Empleado e1 = new Empleado ("Patricia", "Gonzales"); 
   Empleado e2 = new Empleado ("Joaquin", "Perez"); 

   System.out.println(e1.toString()); 
   System.out.println(e2.toString()); 

  }

 }

 ```

 Una clase se compone de propiedades, constructor y metodos que interactuan con los datos del constructor. 
 
 ``` 
 public class Empleado {
  
  public String nombre; 
  public String apellido; 

  public Empleado(String nombre, String apellido) {

   this.nombre = nombre; 
   this.apellido = apellido; 
   
  }

  @Override
  public String toString() {
   return nombre + " " + apellido 

  }

 }

 ```

 //@Override sobreescribe una función o la clase la adapta a su manera
 
 Para usar los métodos y atributos de una clase, necesitamos crear una instancia de esa clase. 


 Las instancias de las clases las creamos para usar sus datos. 

 ```
 public class Main {

  public static void main (String[] args) {

   Empleado e1 = new Empleado ("Patricia", "Gonzales"); 
   Empleado e2 = new Empleado ("Joaquin", "Perez"); 

   System.out.println(e1.toString()); 
   System.out.println(e2.toString()); 

  }

 }

 ``` 
 
 Con new declaramos una variable de tipo Empleado (clase) 

 Dentro contiene el estado interno de la clase, el valor de sus atributos. 

 La clave está en poder instanciar instanciar distintos objetos como querramos. 

 Los distintos objetos pueden tener cualquier valor según corresponda con el tipo que espera el parámetro. 

 Esta instancia puede usar los métodos de su clase. 

 Los métodos accederán a los valores particulares de instancia. 

 Las variables de la clase van a tener como valor los que le pasamos al instanciar y usar el constructor. 


 Esto no es static. 

 Cuando usamos static podemos declarar atributos o métodos que tienen un scope global. 

 Que no están ligados con ninguna instancia concreto. 


///O sea, declarar propiedades o métodos libres.//// 
  

 Si dentro de la clase publica Empleado creamos un método static público. 

 ``` 
 public class Empleado {
  
  public String nombre; 
  public String apellido; 

  public Empleado(String nombre, String apellido) {

   this.nombre = nombre; 
   this.apellido = apellido; 
   
  }

  @Override
  public String toString() {
   return nombre + " " + apellido 

  }

  public static int count; 

 }

 ```

 Estamos creando un atributo dentro de la clase que no está asociado a ninguna instancia concreta.  


 ///Por eso main es static y class Empleado no///


 En main no podríamos ejecutar lo que definimos como static en una clase. 

 ```
 public class Main {

  public static void main (String[] args) {

   Empleado e1 = new Empleado ("Patricia", "Gonzales"); 
   Empleado e2 = new Empleado ("Joaquin", "Perez"); 

   System.out.println(e1.toString()); 
   System.out.println(e2.toString()); 

   e1.count; 

  }

 }

 ```

 No podemos usar una instancia para acceder a ese atributo. 

 Porque static hace que no le pertenezca a una instancia de clase. 


 Una forma de interactuar con un atributo statico es invocando a la clase que lo contiene. 

 ```
 public class Main {

  public static void main (String[] args) {

   Empleado e1 = new Empleado ("Patricia", "Gonzales"); 
   Empleado e2 = new Empleado ("Joaquin", "Perez"); 

   System.out.println(e1.toString()); 
   System.out.println(e2.toString()); 

   Empleado.count = 10; 
   System.out.println(Empleado.count); 

  }

 }

 ```

 Así podemos acceder al atributo y modificar su valor. 

 Y podemos imprimirlo o mostrarlo. 
 

 También podemos crear métodos con una visibilidad static. 
  
 En la clase anterior: 

 ```
 public static void printCount() {
  System.out.println(count); 
 }

 ```

 En main 

 ```
 Empleado.printCount(); 

 ```

 Tambien podemos usalo en una instancia, con advertencia: 

 ```
 e1.printCount(); 

 ```

 Se compilará y ejecutará pero lanzará una advertencia. 

 Para una mejor practica es mejor llamar a los static usando su clase. 

 
 Los métodos estaticos solo pueden acceder a atributos que son estaticos. 

 Si queremos usar el metodo statico imprimir un atributo: 

 En la clase: 

 ```
 public static void printCount() {
  System.out.println(nombre); 
 }

 ```

 No compilará porque le pertenece a una instancia. 

 Si lo podemos hacer llamando a Empleado. 

 Al llamar a una clase estamos trabajando por encima de las instancias. 

 
 Un caso de uso de static puede ser para declarar una constante. 

 En la clase: definimos

 ```
 public static final int IDENTIFICADOR = 1234; 
 
 ``` 

 En main: implementamos. 

 ```
 System.out.println(Empleado.IDENTIFICADOR); 
 
 ```

 Sirve para no tener valores duplicados. 

 La guardamos en este tipo de variable global constante. 

 Para poder referenciarlos cuando los necesitemos. 

 Cuando los tendremos que cambiar vamos al código fuente en su declaración. 

  
 Otro caso es la encapsulación de un atributo static. 

 En la clase: 

 ```
 private static int count = 0; 

 ``` 

 Si hacemos dos métodos estaticos: 
 

 Definimos

 ```
 public static getCount() {
  
  return count;  
   
 }
 
 public static void increment() {
  
  count++;  
 
 }
 
 ```  
 
 Al definir un atributo como privado no podemos acceder desde fuera. 

 Llamese desde main o el ambito que no sea la propia clase. 

 en main no se podrá: 

 ```
 Empleado.count = 10; 

 ``` 

 Pero para eso se definen los métodos get y set.  

 Para tratar los atributos privados. 

 ```
 Empleado.increment(); 
 System.out.println(Empleado.getCount()); 

 ```

 Al final mostramos el incremento. 


 El uso general para el modificador de acceso static: 

 Son para atributos y métodos para objetos que tengan o necesiten un estado global. 
 
 Que tengan que compartirse entre distintas instancias. 

 Si no es necesario, no usar static. 

 Como java está orientado a objetos, todo son clases. 

 Se supone que para todo se necesita usar instancias. 



|| Bloque Static

 Sirve para ejecutar código la primera vez que se carga en memoria una clase. 

 Tiene ambito global, no está asociado a ninguna clase. 

 Sintaxis: static {//...}

 ```
 publica class Main {

  static {

  }
  

  public static void main (Strig[] args) {

  }

 }
 
 ```

 Este bloque permite ejecutar inicializaciones de una única vez de manera global. 

 
 Hay algunas consideraciones. 

 Si imprimimos algo en static: 
 
 ```
 static {
 
  System.out.println("Este es el static{} de Main"); 
  
 }

 ```
 
 La primera vez que la clase Main (bloque static y método main) 
  
 Se va a ejecutar el bloque static antes que cualquier otro bloque static o no static como un constructor. 

 Siempre que el bloque static esté en esa clase a ejecutar 

 ```
 publica class Main {

  static {

   System.out.println("Este es el static{} de Main"); 

  }
  

  public static void main (Strig[] args) {
 
   System.out.println("Este es el método main"); 

  }

 }

 ``` 
 
 
 Otra consideración. 

 ```
 public class ClaseA {
   
  public String nombre; 
  
  public ClaseA(String nombre) {   
   this.nombre = nombre;  
 
  }

 }

 ```

 La ClaseA tiene un atributo cadena llamado nombre. 

 Nombre se asigna con el constructor ClaseA(String nombre)

 Para usar el atributo necesitamos una instancia que pase valores al constructor. 

 Así sería normalmente. 


 Un bloque estatico dentro de todo la construcción de esta clase. 

 No podría referenciar variables que no sean staticas. 

 ```
 public class ClaseA {
   
  public String nombre; 
  
  public ClaseA(String nombre) {   
   this.nombre = nombre;  
 
  }

  static {
   nombre = "Ramón"; 
   System.out.println("nombre: " + nombre); 
   toString(); 

  }

 }

 ```

 No se puede establecer el valor de un atributo desde static. 

 Static no está asociado a ninguna instancia de clase. 

 Ni obtener valor de atributo ni llamar a un método de la instancia. 
 

 Lo unico que puede utilizar static dentro de la clase. 
 
 Son los métodos y atributos staticos, solo perteneciantes a la misma clase. 

 ```
 public static int contador = 0;

 public static void incrementar() {
  contador++; 
  System.out.println("contador => " + contador); 
 
 }

 ``` 
 
 Para esto hay consideraciones también. 

 El orden de las instrucciones importa. 

 Podemos llamar a un método pero no antes de que lo que opere esté definido. 

 
 En ClaseA

 ```
 static {
 
  incrementar(); 
  System.out.println("Valor de contador: " + contador); 
 }

 public static int contador = 0;

 public static void incrementar() {
  contador++; 
  System.out.println("contador => " + contador); 
 
 }

 ```

 No compilará porque el atributo statico contador viene después de la llamada. 


 El atributo static necesita estar declarado antes del bloque static. 

 ```
 public static int contador = 0;

 public static void incrementar() {
  contador++; 
  System.out.println("contador => " + contador); 
 
 }

 static {
  incrementar(); 
  System.out.println("Valor de contador: " + contador); 
 }

 ```
 

 Otra consideración es que todo esto no se va a ejecutar en Main. 

 Salvo que se haga referencia a la clase que contenga el bloque static, los atributos y metodos static. 

 ```
 public class ClaseB {
 
  public ClaseB() {
   System.out.pirntln("Fabrico instancia de mi clase"); 
  }

  public static void actualizar() {
   System.out.println("Método estático de mi clase"); 
  }
 
 } 

 ```
 
 Modificamos más cosas: 

 ```
 public class ClaseB {

  static {
   System.out.println("Estoy en el static{} de ClaseB"); 
 
  }
 
  public ClaseB() {
   System.out.pirntln("Fabrico instancia de mi clase"); 
  }

  public static void actualizar() {
   System.out.println("Método estático de mi clase"); 
  }
 
 } 

 ```

 Main: 

 ```
 public class Main {

  public static void main (String[] args) {

  }

 }

 ```

 Compila pero si ejecutamos no muestra nada. 
 
 El bloque static no se ejecuta cuando se lanza el programa. 
 
 Solo se va a ejecutar si hacemos referencia a él. 

 Como hicimos en el primer Main. 

 En el primer ejemplo estaba dentro de la clase Main. 

 Se ejecutará cuando se hace uso por primera vez de la clase que lo contiene. 


 Actualiznado el segundo Main: 
 
 ```
 public class Main {

  public static void main (String[] args) {
   System.out.println("==="); 
  }

 }

 ```

 Si imprime solo el mensaje === de main  


 Si agregamos referencias a static: 

 ```
 public class Main {

  public static void main (String[] args) {
   System.out.println("==="); 
   ClaseB.actualizar();
    
  }

 }
 
 ```
 Salida: 
 ===
 Estoy en el static{} de ClaseB
 Método estático de mi clase

 Primero invoca el mensaje de main

 Segundo el mensaje del bloque static

 Tercero el mensaje del metodo static. 

 
 Entonces, hasta no usar static por primera vez. 
 
 La máquina virtual de Java no se ocupa del bloque static. 

 
 Si instanciamos ClaseB en Main: 

 ```
 public class Main {

  public static void main (String[] args) {
  
   System.out.println("===");   

   new ClaseB();
    
  }

 }

 ```

 Con new invocamos al constructor para instanciar la clase. 

 Solo teniá un mensaje. 

 La salida salida es: 
 ===
 Estoy en el static{} de ClaseB
 Fabrico instancia de mi clase


 Otro detalle, se lanza una única vez, todo junto. 

 Si llamamos a static dos veces: 

 ```
 public class Main {

  public static void main (String[] args) {
  
   System.out.println("===");   

   new ClaseB();

   ClaseB.actualizar(); 
    
  }

 }
 
 ```
 
 Salida: 

 ===
 Estoy en el static{} de ClaseB
 Fabrico instancia de mi clase 
 Método estático de mi clase. 

 En la primera ejecución de la ClaseB solo nos faltaba el constructor. 
 
 Static no se usa para crear clases dinámicas (tiempo ejecución)

 Ni para crear cargadores personalizados. 


 Solo sirve para crear inicializaciones globales a nivel de clase por primera vez  

 Y es necesario invocarlo en Main. 



|| Import Static

 'import' permite traer o importar clases pertenecientes a otros paquetes 

 Podemos especificar las clases sin escribir su nombre completo al tener que incluir a 'package'. 

 
 Si usamos import y * podemos importar todas las clases que forman parte de un paquete. 

 ```
 import java.util.*; 

 public class Group {

  ArrayList<Integer> lista; 
  
  public Group() {

  }
  
 }

 ```

 Nos permite crear un estructura ArrayList. 

 ArrayList forma parte del paquete java.util. 

 
 Si queremos usar estructuras o herramientas especificas podemos importarlas individualmente, escribiendo su nombre, después del nombre del paquete. 

 ```
 import java.util.ArrayList; 

 public class Group {

  ArrayList<Integer> lista; 
  
  public Group() {

  }
  
 }


 ```


 Una alternativa a esto es importarlo individualmente en el código. 

 ```
 public class Group {

  java.util.ArrayList<Integer> lista; 
  
  public Group() {

  }
  
 }

 ```

 
 Ahora un import static no sirve para importar clases. 

 Sirve para importar identificadores/nombres de atributos o métodos

 Solo si son static y que estén dentro de la clase. 

 Si usamos operaciones como Arrays.aslist

 Contiene métodos estaticos para los atributos y métodos static

 Sin tener que instanciar ninguna clase.  

 Tampoco va a ser necesario declarar la estructura.  

 
 Normalmente haríamos algo como: 

 ``` 
 import java.util.ArrayList; 

 public class Group {

  ArrayList<Integer> lista; 
  
  public Group() {
   lista = arrays.asList(1, 2, 3, 4); 
  }
  
 } 

 ``` 
 
 Con import traemos a la clase Array. 
 
 Formará parte de la lista de clases reconocida por otras clases que vamos a crear. 
 
 Además las usamos sin tener que indicar de qué paquete forma parte. 

 
 Con import static: 
 
 El método o atributo static lo podemos utilizar como si pertenecierá a nuestra clase. 

 ``` 
 import static java.util.Array.asList; 

 public class Group {

  ArrayList<Integer> lista; 
  
  public Group() {
   lista = asList(1, 2, 3, 4); 
  }
  
 } 

 ``` 

 Importamos Array.asList como estático y no escribimos Array para utilizalo. 

 Podemos importar de manera statica cualquier método o atributo estático que forme parte de una clase. 

 asList forma parte de la clase Array. 


 Se pueden encontrar en las pruebas de Unit. 

 Donde vamos a importar todos los métodos que formen parte de una clase. 

 Como puede ser Assertions. 


 import static también acepta el asterisco *. 

 Para importar todos los identificadores staticos que formen parte de esa clase. 

 Sin tener que aclarar de qué clase forma parte. 

 ```
 import static java.util.Array.*; 

 public class Group {

  ArrayList<Integer> lista; 
  
  public Group() {
    
   binarySearch();  
    
   lista = asList(1, 2, 3, 4); 

  }
  
 } 


 ```

 Si debemos utilizar mucho esa clase nos ahorra especificar la clase a qué pertenece el método. 



|| Clases Anónimas

 Se implementan en event listener y arrow functions. 

 ```
 public interface Comando {
  String nombre(); 
  String descripcion(); 
  
 }

 ``` 

 Con la interfaz Comando representamos un comando de un programa. 
 
 Tiene nombre y descripción. 

 
 Podemos crear una implementación de él. 

 Creamos una clase AyudaComando declarando que es de tipo Comando. 

 Para interfaces usamos inplements Comando.  

 ```
 public class AyudaComando implements Comando {
  
  @Override
  public String nombre() {
   return "ayuda"; 
  }

  @Override
  public String descripcion() {
   return "Muestra los parámetros y la forma "; 
  }
   
 }

 ```
 
 Debemos cumplir con el contrato utilizando sus atributos y métodos. 

 
 Si creamos una instancia de la implementación AyudaComando. 

 Tomará el tipo Comando. 

 ```
 public class Main {
  
  public static void main (String[] args) {
   Comando ayuda = new AyudaComando(); 
   ayuda.nombre(); 
   ayuda.descripcion(); 
  }
  
 } 

 ```

 Al instanciar podmeos usar los métodos de la clase instanciada. 

 
 Si agregamos en Main una función imprimir que nos muestre los datos del comando pasado. 

 ```
 public class Main {
  
  pblic static void imprimir(Comando cmd) {
   System.out.println(cmd.nombre() + ": " + cmd.descripcion()); 
  }

  public static void main(String[] args) {
   Comando ayuda = new AyudaComando(); 

   imprimir(ayuda); 

  }

 }
 

 ``` 



 Si declaramos una instancia de Comando en Main. 

 En teoría las interfaces no se deberían instanicar porque no tiene funcionalidad. 

 Pero podemos fabricar una clase anónima

 ```
  public class Main {
  
  pblic static void imprimir(Comando cmd) {
   System.out.println(cmd.nombre() + ": " + cmd.descripcion()); 
  }

  public static void main(String[] args) {
   Comando ayuda = new AyudaComando(); 

   Comando opciones = new Comando() {

   }

   imprimir(ayuda); 

  }

 }
 
 ```
 
 Es una clase sin nombre que la creamos instanicando directamente una interfaz. 

 Sin crear la clase misma en otro lado o módulo de programa. 

 Esta clase ni siquiera tiene nombre, solo se va a guardar en 'opciones'.

 Los métodos de Comando son solo las definiciones de nombre y despcripción. 

 Las cuales debemos implementar. Ahoran serán de Main. 

 ```
  public class Main {
  
  pblic static void imprimir(Comando cmd) {
   System.out.println(cmd.nombre() + ": " + cmd.descripcion()); 
  }

  public static void main(String[] args) {
   Comando ayuda = new AyudaComando(); 

   Comando opciones = new Comando() {
    @Override 
    public String nombre() {
     return "opciones"; 
    }

    @Override 
    public String descripción() {
     return "muestra las opciones del programa"; 
    }
 
   }; 

   imprimir(ayuda); 
   imprimir(opciones); 

  }

 } 

 ```
 
 Al final de la clase anónima, en su llave de cierre agregamos un punto y coma para indicar que finaliza la instrucción. 
 
 No se puede crear copias de esta clase. 

 Podemos usar los métodos pasandole la instancia. 
 
 Estamos instanciando la clase misma que declaramos y se la asignamos a opciones. 


 También es posible utilizando clases abstractas. 
 
 ```
 public abstract class AbstractComando {
  public abstract String nombre(); 
  public abstract String descripcion(); 
  public abstract boolean deprecado(); 
   

 }

 ```

 En el método main: 

 ```
 AbstractComando login = new AbstractComando() {

  @Override
  //...

 }; 

 ```

 
 También podemos fabricar subclases con clases anónimas. 
 
 ```
 Random rand = new Random() {

  @Override
  public double nextDouble() {
   return super.nextDouble(); 
  }

  @Override
  public intStream ints(long streamSize) {
   return super.ints(streamSize); 
  }

 }; 


 ```
 
 rand sería la subclase de Random y podemos sobreescribir métodos. 

 Para crear lógica propia y hacer un return super y llamar al mismo método. 

 
 Un tipico uso de clases anónimas es para interfaces o acciones de un solo uso. 

 Como eventos o arrow functions. 

 Estas clases no son reutilizables una vez que la escribimos. 
 
 No podemos llamarlas en otra parte.  



|| Main String[]

 Se utiliza para especificar el código que se ejecute inicialmente al abrir el programa. 

 Para que funcione debemos declara el método main como public static void.  

 ```
 public class Prueba {
  
  public static vodi main (String[] args) {
 
   System.out.println("Hola");   
 
  }   

 }

 ```
 
 Si ejecutamos la clase Prueba detectará el método main y ejecutará sus instrucciones. 

 
 Si en una terminal ejecutamos la clase Prueba. 

 Debemos ir a su directorio correspondiente.

 ```
 java Prueba.java

 ```  

 Compilará la clase y la ejecutará.  

 La instrucción inicial java es el ejecutable de java. 

 El sistema buscará este ejecutable en algunas de las carpetas del sistema y tratará de ejecutarlo. 

 Si a la instrucción java le agregamos Prueba.java 

 Entenderá que queremos ejectuar la clase o archivo Prueba.java.  


 La instrucción que le agregamos a java se denomina argumento. 

 Sirve para especificar lo que queremos que haga el programa. 

 Cada programa tienen distintos argumentos para hacer cosas con el programa. 

 El anterior es para compilar y ejecutar un archivo o clase. 

 Tiene más comandos como java -version

 La instruccion - la entiende como un subcomando. 

 Es una palabra reservada para una operación. 



 El parámetro String[] args (tipo array y nombre args) del método main comunicarnos o guardar los argumentos que le pasamos al invocar el programa. 

 ```
 import java.util.Arrays; 

 public class Prueba {
  
  public static vodi main (String[] args) {
    
   var str = Arrays.toString(args); 
   System.out.println(str); 
   
  }   

 }

 ```

 Si creamos una variable local y convertimos el parámetro en cadena. 
 
 Con str imprimimos args que guardamos. 

 Si compilamos y ejecutamos Prueba el programa va a estar vacío. 
 
 ```
 java Prueba.java
 
 ```
 salida: []

 Dado que invocamos el programa sin argumentos. 

 java toma al primer comando Prueba.java para compilar y ejecutar. 

 Si agregamos comandos al programa (Prueba.java) los va a tomar como argumentos para el parámetro String[] args. 

 
 Si escribimos java y la orden para compilar y ejectuar y le pasamos argumentos los va a guardar e imprimir y mostrar por consola. 
 
 ```
 java Prueba.java hola mundo

 ```

 Como hola mundo no forma parte de la clase que está ejecutando, lo toma y lo pasa como args. 

 salida: [hola, mundo]  

 Va a pasarse como elementos de array. 

 En este caso tiene un tamaño de 2 (longitud/posición de 0 a 1 (n-1 o 2-1)).

  
 Al crear un programa de linea de comandos tendremos que darle funcion a estos argumentos. 

 Y chequear que tenga el número de elementos esperado. 


 Cuando ejecutemos un programa como args.Prueba con java. 

 ```
 java args.Prueba

 ```
 
 Tendremos que pasarle como parámetros dos números para sumar o restar el primero con el segundo número. 

 ```
 java args.Prueba 3 + 5

 ```
 
 Primero tenemos que comprobar que los argumentos sean los correctos. 

 Hay que recibir tres argumentos, los números y la operación. 

 Si el array (args) no tiene 3 elementos significa que no debería funcionar. 
 
 ```
 public class Prueba {

  public static void main (String[] args) {
  
   if (args.length != 3) {
  
     System.out.println("Error: No has pasado los parámetros correctamente");     
      return 
   }   

  }

 }

 ``` 

 Después convertimos los argumentos a enteros. 

 0 y 2 serían el primer valor y el tercero del array. 

 El intermedio 1, es el signo. 

 ```
  public class Prueba {

  public static void main (String[] args) {
  
   if (args.length != 3) {
  
     System.out.println("Error: No has pasado los argumentos correctamente");     
      return 
   }   

   int a = Integer.parseInt(args[0]); 
   int b = Integer.parseInt(args[2]); 
   if (args[1]).equals("+") {
    System.out.println(a+b);  
   }else if (args[1].equals("-") {
    System.out.println(a-b);
   }else{
    System.out.print("Error: No es un argumento aceptado");
    return;  
   }

  }

 }

 ```
 
 Con un return salimos de la ejecución. 


 Un manejo alternativo de error de argumento. 
 
 Chequeamos los errores al pricipio. 

 Comprobamos cuando el argumento no sea ni + ni -.  
 
 Si args 1 es diferente de + y el argumento 1 es diferente de -. 

 ```
 public class Prueba {

  public static void main (String[] args) {
  
   if (args.length != 3) {
  
     System.out.println("Error: No has pasado los argumentos correctamente");     
      return 
   }

   if (!args[1].equals("+") && !args[1].equals("-")) {
    System.out.println("Error: No has pasado el operador suma, ni resta"); 
    return; 
   }

   int a = Integer.parseInt(args[0]); 
   int b = Integer.parseInt(args[2]); 
   if (args[1]).equals("+") {
    System.out.println(a+b);  
   }else if (args[1].equals("-") {
    System.out.println(a-b);
   }

  }

 }

 ```

 Después agregamos un print de los argumentos. 

 ```
 System.out.print(args[0] + " " + args[1] " " + args[2] + " = "); 

 ``` 


 Si ejecutamos java.Prueba.java 3 + 5

 ```
 java Prueba.java

 ```

 Ejecutamos el programa y operará esos argumentos. 


 El sistema de argumentos se usa para pasar información desde fuera y no tener que recompilar la aplicación.  

 Si queremos cambiar el valor de una variable, creamos la función para que la tome desde fuera y que lo cambie. 

 Cada programa tendra uno especifico y necesario.   

 Es una forma de pasarle cadenas de caracteres dinámicas. 



|| Scanner

 Se usa para captar la entrada de usuario que v a ser recibida por el programa. 

 Si tenemos, por ejempo una cadena con números

 ```
 public class Main {
  
  public static void main(String[] args) {
   String datos = "123 456"; 
   String datos2 = "91-14" 
   String datos3 = "hola mundo"; 
  }

 }

 ```

 Si queremos recorrer o escanear está cadena en cada valor y capturar números letras y signos. 
 
 Nos damos cuenta cual es un número, letra, signo o cadena etc 

 Scanner automátiza este proceso o lo hace por nosotros.  

 Va a leer cualquier tipo de dato que le pasemos. 
 
 
 Crear un scanner a partir de datos:

 El tipo de dato será Scanner. 

 Instanciamos la clase con new. 

 Al final llamamos al constructor Scanner(String source/file source/...). 

 Toma un solo parámetro pero acepta muchas fuentes de entrada. 

 ``` 
 public class Main {

  public static void main (String[] args) {
   String datos = "hola mundo como estamos"; 
   Scanner scan = new Scanner(datos); 
   
   scan.next(); 
  }
 }

 ```
 Le pasamos nuestro String de datos. 

 La instancia creada scan, puede usar los multiples métodos de la clase padre Scanner. 

 Usamos next() para poder leer cada dato de la cadena.  
 
 Devolverá el siguiente trozo de una cadena o fuente de entrada 

 También está disponible nextBoolean() para leer un booleano. 

 nextByte() para leer un byte o nextDouble() o nextFloat() 
 
 nextInte() o nextLine() para captar una linea de la fuente de entrada.

 o netxImputStream() para leer cadena de carácteres. 

 
 La clase Scanner leera una fuente hasta un separador que será un espacio, salto de linea o carácter especial. 

 En el ejemplo, hola mundo... hay un separador/espacio en cada trozo. 

 ``` 
 public class Main {

  public static void main (String[] args) {
   String datos = "hola mundo como estamos"; 
   Scanner scan = new Scanner(datos); 
   
   scan.next();
   System.out.println(scan.next());  
   System.out.println(scan.next());
   System.out.println(scan.next());
   System.out.println(scan.next());
  }
 }

 ```
 salida:

 hola
 mundo
 como 
 estamos


 Si imprimimos más veces de las palabras que hay nos da un error. 

 Así nos damos cuenta que llegamos al final de la cadena. 


 Con hasNext() preguntará si lo que viene puede ser leido. 

 Con el bucle while, mientras tengamos datos que procesar (hasNext(), o sea, hasNext -> True) 

 Podamos imprimir la palabra con scan.next(). 

 ```
 public class Main {

  public static void main (String[] args) {
   String datos = "hola mundo como estamos"; 
   Scanner scan = new Scanner(datos); 
   
   while (scan.hasNext()) {
    System.out.println("una palabra: " + scan.next());
   }

  }

 }

 ```
 salida: 
 hola
 mundo
 como 
 estamos

 Cuando llegamos al final de la cadena hasNext devuelve false. 

 La clave de Scanner es que detecta los tipos, simbolos del contendido y dónde se separan. 

 
 Con nextInt() si lo que ha leído es un número, lo convierte en int. 

 Con nextLong(), es igual, devolverá el tipo casteado. 

 Estos pueden ir acompañado de hasNextInt() o hasNextLong(), etc. 

 Next leerá lo primero que encuentre la fuente que le hemos pasado y tiene que coincidir con la operación que queremos hacer. 
 
 Si leemos algo que no coincide tira error: 

 ```
 public class Main {

  public static void main (String[] args) {
   String datos = "hola mundo como estamos"; 
   Scanner scan = new Scanner(datos); 
   
   while (scan.hasNext()) {
    System.out.println("una palabra: " + scan.nextInt());
   }

  }

 }

 ```
 
 Le queremos decir que mientras haya hasNext(), imprima nextInt(). 

 Le pedimos que nos lea un número con nexInt() pero en la fuente no hay números entero.  

 Lo primero que lee (next o a continuacion) es un hola que no es un número. 


 Podemos crear una protección para cada dato que lea. 

 Con hasNextInt() y nextInt(), se detendra cuando no haya entero y no intentará imprimir entero. 

 Debemos proporcionarle la fuente correspondiente con la operación. 

 ```
 public class Main {

  public static void main (String[] args) {
   String datos = "hola mundo como estamos"; 
   Scanner scan = new Scanner(datos); 
   
   while (scan.hasNextInt()) {
    System.out.println("una palabra: " + scan.nextInt());
   }

  }

 }

 ```
 
 Podemos usar esto para validar fuente de entrada.  
 

 Cuando tenemos números en la cadena de entrada. 

 ```
 public class Main {

  public static void main (String[] args) {
   String datos = "1234 5678 9012"; 
   Scanner scan = new Scanner(datos); 
   
   while (scan.hasNextInt()) {
    System.out.println("una palabra: " + scan.nextInt());
   }

  }

 }

 ```
 
 salida: 

 1234
 5678
 9012

 
 Podemos hacer scan dentro de operacionesa aritméticas. 

 ```
 public class Main {

  public static void main (String[] args) {
   String datos = "1234 5678 9012"; 
   Scanner scan = new Scanner(datos); 
   
   int total = 0; 
   while (scan.hasNextInt()) {
    total += scan.nextInt(); 
   }
   
   System.out.println(total); 

  }

 }

 ```
 
 Guardamos scan en acumulador 

 Imprimimos la suma de todos los valores pasados por parámetros. 

 salida: 
 15924 
 
 
 Si cambiamos el espacio por un caracter especial para separar la cádena. 

 ```
 public class Main {

  public static void main (String[] args) {
   String datos = "1234-5678-9012"; 
   Scanner scan = new Scanner(datos); 
   
   int total = 0; 
   while (scan.hasNextInt()) {
    total += scan.nextInt(); 
   }
   
   System.out.println(total); 

  }

 }

 ```
 salida: 
 0

 No lee correctamente. 

 El scanner está buscando un espacio por defecto. 


 Si cambiamos hasNextInt() por hasNext()

 Nos devuelve errores. 
 
 ```
  public class Main {

  public static void main (String[] args) {
   String datos = "1234-5678-9012"; 
   Scanner scan = new Scanner(datos); 
   
   int total = 0; 
   while (scan.hasNext()) {
    total += scan.nextInt(); 
   }
   
   System.out.println(total); 

  }

 }

 ```

 Intentará convertir la fuente en un número pero los números están separados por un caracter que nos es espacio. 

 
 Debemos decirle a scanner porqué estan separados las cadenas. 

 El método useDelimiter(String pattern) nos permimte proporcionale como parámetro el caracter para separar la cadena. 

 Cuando se encuentra un guión llega al final del dato y pasa al siguiente. 

 ```
 public class Main {

  public static void main (String[] args) {
   String datos = "1234-5678-9012"; 
   Scanner scan = new Scanner(datos); 
   
   scan.useDelimiter("-"); 

   int total = 0; 
   while (scan.hasNext()) {
    total += scan.nextInt(); 
   }
   
   System.out.println(total); 

  }

 }

 ```
 salida: 
 15924

 
 Es util para detectar las separaciones de cadena en la fuente. 

 Y cambiar el espacio por defecto. 

 
 Usar scanner con ImputStream como parámetro del constructor. 

 Un caso tipico es poder leer del teclado usando System.in 

 ```
 public class Main {

  public static void main (String[] args) {
   Scanner scan = new Scanner(System.in); 
   

   int total = 0; 
   while (scan.hasNext()) {
    total += scan.nextInt(); 
   }
   
   System.out.println(total); 

  }

 } 

 ```

 El programa va a esperar a que realizemos una entrada para hacer operaciones. 

 O para seguir ejecuantando las siguientes instrucciones. 

 Leerá la entrada pero no la mostrará. 


 Para mostrar la entrada de teclado. 

 Debemos guardar al entrada en una varible. 


 ```
 public class Main {

  public static void main (String[] args) {
   Scanner scan = new Scanner(System.in);   

   int total = 0; 
   while (scan.hasNext()) {
    int num = scan.nextInt(); 
    System.out.println("He leido " + num); 
    total += num; 
   }
   
   System.out.println(total); 

  }

 } 

 ```

 Hasta ahora podemos seguir introduciendo numeros al infinito

 Pero no va a hacer ninguna operación. 

 Hasta introducir algo que no es un numero y va a producir un error. 


 En el while/mientras debemos poner hasta que haya enteros. 

 Cuando no los haya, cerrará la entrada y hará la operación. 

 Si introducimos una letra, finalizará la operación. 
 

 
|| Override

 Se usa cuando extendemos una clase, o cuando implementamos una interfaz o abstracción. 
 
 Ponemos @Override arriba del método y escribimos el código que necesitamos para nuestra nueva clase, interfaz o abstracción. 

 ```
 public class Animal {
  
  public void caminar () {
   System.out.println("El animal está caminando..."); 
  }

  public void sonido() {
   System.out.println("El animal no emite ningún sonido"); 
  }
 
 }

 ```

 La clase animal solo tiene dos métodos simples sin parámetros, caminar() y sonido(). 
 
 Cuando se ejecutan, mostrarán un mensaje correspondiente con su función, acción. 

 

 ```
 public class Perro extends Animal {
  
  @Override
  public void sonido() { 
   System.out.println("El perro hace guau guau"); 
  }
 }

 ```

 Creamos una extensión Perro para crear una subclase de Animal. 

 

 ```
 public class Main {
  public static void main(String[] args) {
   Animal a = new Animal(); 
   a.sonido(); 
  }
 
 }

 ```
 Ahora implementamos el método main que instancia un animal. 
 
 La instancia usará el método sonido() de la clase Animal. 

 Si compilamos y ejecutamos se imprime un mensaje por pantalla. 


 Sin embargo, podemos sobreescribir los métodos de una clase sin poner @Override. 

 ```
 public class Perro extends Animal {
  
  public void sonido() { 
   System.out.println("El perro hace guau guau"); 
  }
 }

 ```

 Compilará pero lanzará una advertencia. 

 Tambien lo ejecutará en el método main. 

 Si lo instanciamos usando el constructor de la subclase. 

 ```
 public class Main {
  public static void main(String[] args) {
   Animal a = new Perro(); 
   a.sonido(); 
  }
 
 ```
 
 Aunque lo ejecuté sigue la advertencia. 


 @Override evalua si estamos extendiendo un método o no. 
 
 Si no tenemos @Override y cometemos errores a la hora de sobreescribir un método no tenemos quién avise al compilador. 

 ```
 public class Perro extends Animal {
  
  public void sonnido() { 
   System.out.println("El perro hace guau guau"); 
  }
 }

 ``` 

 Si ponemos @Override sobre un método, el compilador se dará cuenta lo que intentamos hacer. 

 ```
 public class Perro extends Animal {

  @Override 
  public void sonnido() { 
   System.out.println("El perro hace guau guau"); 
  }
 }

 ``` 



|| Funciones Variádicas

 Es una función que acepta multiples parámetros. 

 ```
 public class Main {
  
  public int sumatorio(int a) {
   return a; 
  }

  public static void main(String[] args) {

  }

 }

 ```

 La función sumatorio devolverá el sumatorio de los parámetros. 

 La suma de un solo parámetro va a ser el mismo número. 
 

 Ahora podemos agregar la misma función con dos parámetros. 

 ```
 public class Main {
  
  public int sumatorio(int a) {
   return a; 
  }

  public int sumatorio(int a, int b) {
   return a + b; 
  }


  public static void main(String[] args) {

  }

 }

 ```

 Ahora si devolvemos la suma de dos números. 

 
 Después podemos sumar 3 y 4 parámetros su respectiva función. 

 ```
 public class Main {
  
  public int sumatorio(int a) {
   return a; 
  }

  public int sumatorio(int a, int b) {
   return a + b; 
  }

  public int sumatorio(int a, int b, int c) {
   return a + b + c; 
  }

  public int sumatorio(int a, int b, int c, int d) {
   return a + b + c + d; 
  } 

  public static void main(String[] args) {

  }

 } 

 ``` 

 
 Para hacer este método más eficiente, podemos crear un array. 

 Hacemos que la función acepte como parámetro un array. 


 Las funciones variádicas nos permiten tener un numero indefinido de parámetros y poder proporcionarlos sin necesidad de envolverlo en un array. 
 
 Parecido a lo que hace el método asList() de la clase Arrays. 

 Puede aceptar un valores indeterminados como 1, 2, 3, 4, 5, etc, 

 ```
 import java.util.Arrays;  

 public class Main {

  public static void main(String[] args) {
   Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); 
  }

 }

 ```  
  
 En las funciones variádicas trabajamos con arrays, pero no los vamos a tener que crear nosotros. 

 Se encargará la máquina virtual de Java. 

 Nosotros nos encargaremos solo de crear la función 

 Y poner el parámetro con un formato: 

 1. Tipo de los parámetros que acepte 

 2. Seguido, escribimos tres puntos que indicarán un parámetro variádico. 

 3. Nombre del parámetro variádico, significativo.  
 
 ```
 import java.util.Arrays;  

 public class Main {

  public static int sumatorio(int... valores) {

  }

  public static void main(String[] args) {
   sumatorio(1, 2, 3, 4, 5, 6, 7); 
  }

 } 

 ```
 
 Solo con declarar la función podemos llamar a la función con multiples parámetros. 

 Con el tipo correspondiente a la función. 

  
 A menos que le pasemos Object como tipo de parámetro a la función. 

 Podemos meter cadenas pero no tendria operatoria. 

 ```
 import java.util.Arrays;  

 public class Main {

  public static int sumatorio(Object... valores) {

  }

  public static void main(String[] args) {
   sumatorio(1, 2, 3, 4, "asdf", 5, 6, 7); 
  }

 } 

 ```

 Object matchea con cualquier tipo


 El parámetro valores representa, por debajo, un array. 

 A pesar de que le podemos pasar multiples valores fácilmente. 

 La máquina virtual de java lo va a envolver en un array. 

 'valores' tendrá todas las propiedades de un array.

 Como valores.length para poder sacar el número de elementos. 

 valores[0] acceso mediante indice a cada uno de los elementos del array valores. 

 
 Para calcular la suma de todos los valores que nos pasen. 

 Debemos tomar todos los valores, recorrerlos y acumularlos. 

 Para cada int v que hay en valores

 Sumarle el valor de v. 

 ```
 import java.util.Arrays;  

 public class Main {

  public static int sumatorio(int... valores) {
   
   int sum = 0; 
   for (int v : valores) suma += v;
    return sum; 
  }
    

  public static void main(String[] args) {
   System.out.println(sumatorio(1, 2, 3, 4, 5, 6, 7); 
  }

 } 
 
 ```
 salida: 
 28
 
 Imprimimos los valores de la llamada a sumatorio. 

 
 También le podemos pasar como parámetro un array. 

 ```
 import java.util.Arrays;  

 public class Main {

  public static int sumatorio(int... valores) {
   
   int sum = 0; 
   for (int v : valores) suma += v;
    return sum; 
  }
    

  public static void main(String[] args) {
   int[] valores = {1, 2, 3, 4, 5}; 
   int suma = sumatorio(valores); 
   System.out.println(suma); 
  }

 } 

 ```
 salida: 
 15
 
 Guardamos la función y su resultado en una variable suma y el pasamos el array creado como parámetro. 
 
 Si le pasamos un array, no va a convertir los valores a un array. 

 Siempre y cuando el tipo del array coincida con el tipo que el parámetro de la función espera. 

 
 Estas funciones se aplican para cosas simples que pueden tomar multiples parámetros. 

 Cosas auxiliares como sumas, sacar valores de un archivo. 

 La función variádica tiene doble funcionalidad. 

 Tomar valores sueltos indefinidos o pasarle un array definido 


  

|| Excepciones

 Sirve para menejar situaciones que producen errores. 
 
 Si asignamos null a una variable

 ```
 public class Main {
  
  public static void main (String[] args) {
   String persona = "null"; 
   String mayus = persona.toUpperCase(); 
   System.out.println(mayus); 
  }

 }

 ```

 El programa produce una error y se cierra. 

 Esto se conoce como una excepción. 

 Al ejecutar este programa erroneo entramos en una situación excepcional. 


 Esto se conoce como una segunda linea de retorno que tienen las funciones. 

 Cuando ejecutamos un programa, este está compuesto de funciones que se llaman entre si para que se ejecuten sus instrucciones o código interno. 
 
 Al final devolverán un resultado. 

 main -> function 
            |	
 main <- return

 Si es de tipo void tiene un tipo de dato de retorno especifico. 


 Pero normalmente tenemos esta linea de retorno para que la función devuelva un valor. 

 Como un número, cadena, referencia a objeto, etc. 

 Un lenguaje con soporte para excepciones tiene una segunda linea de retorno. 

 Sirve para comunicar errores. 

 En vez de devolver un resultado a main, devuelve un error comunicando que algo no ha salido bien. 

 
 Las excepciones se utilizan cuando nuestro programa no se comporta como debería. 

 ```
 public class Main {
  
  public static void main (String[] args) {
   String persona = "null"; 
   String mayus = persona.toUpperCase(); 
   System.out.println(mayus); 
  }

 }

 ```
 
 Nuestro método main está devolviendo una excepción a traves de una segunda linea. 

 Dado que se ha encontrado con una situación inapropiada. 
 
 No es posible llamar a ningún método dado que persona está vacío. 

 
 Si dividimos un valor entre 0. 

 ```
 public class Main {
  
  public static void main (String[] args) {
   int k = 5/0;  
  }

 }


 ```

 Un entero no puede devolver infinito. 

 Error: Exception in Thread "main".    

   
 Entonces, en condiciones normales usamos 'return' para comunicar el retorno cuando tenemos un valor real. 

 Y usaremos 'throw' para indicar un error que deseemos lanzar. 

 Como lanzamos el error, debemos atraparlo con catch. 
 
 Si no lo hacemos, el error se escapa y se cerrará el programa. 

 El programa se cierra para prevenir mayores problemas. 

 No tiene sentido continuar cuando un cálculo está mal y que corrompa el programa o provoque daños. 
 

 En condiciones normales, se ejecutará si errores. 

 ```
 public class Main {

  public static void main (String[] args){

   int res = calcular(); 
   System.out.println(res); 
  }

  public static int calcular() {
   int k = 5 / 2; 
   return k + 10; 
  }

 }

 ```


 Si abstraemos la parte del código que puede generar un error en el programa. 

 ```
 public class Main {

  public static void main (String[] args){

   int res = calcular(); 
   System.out.println(res); 
  }

  public static int calcular() {
   int k = 5 / 0; 
   return k + 10; 
  }

 }

 ```
 
 Como java está modelado en objeto, las excepciones lo son. 

 Podemos crear nuestras propias excepciones. 

 
 De forma estandar, un error de división por 0; tiene nombre. 

 java.lang.ArithmeticException: / by zero. 

 Las excepciones terminana con la palabra Exception. 

 Si creamos nuestras propias, debemos mantener este estandar de nombres. 

 
 Lo que engloba al error es un stacktrace, una traza de pila. 

 Se corresponde con el estado que tenía el programa cuando se produjo el error. 

 Marca los archivos, métodos, funciones y lineas conflictivas, involucrados en el error. 
 
 Dentro del método calcular ha fallado la linea 11 en la clase Main. 
 
 Y dentro de la clase Main marca quién ha llamado al método conflictivo. 
 
 Salida: 

 Exception in thread "main" java.lang.ArithmeticException: / by zero. 
 archivo.Main.calcular(Main.java:11). 
 archivo.Main.main(Main.java:6). 

 
 Es recomendable crear nuestros propios errores personalizados para comunicar efectivamente los problemas.  

 Si no usar los estandar. 


 Para tratar excepciones metemos el código problematico dentro de un bloque try. 

 Un bloque try tiene que terminar en catch que gestionará la excepcion. 
 
 catch tiene un parámetro de tipo excepción con un nombre. 

 El tipo será la excepcion que queremos tratar. 

 El parámetro es el que podemos operar o tratar internamente. 

 con e.getMessage() mostramos el mensaje de error.  

 ```
 public class Main {

  public static void main (String[] args) {
  
   try {
    int res = calcular(); 
    System.out.println(res); 
   } catch (ArithmeticException e) {
     System.out.println("Algo ha fallado"); 
     System.out.println(e.getMessage()); 
   }  
   
   System.out.println("Fin del programa"); 

  }

  public static int calcular() {
   int k = 5 / 0; 
   return k + 10; 
  }

 }

 ```
 
 Tratamos en error en la llamada a la funcion y cuando imprime el return. 

 Este es un tratamiento basico y correcto. 

 Hace que el código que haya después del try catch se pueda ejecutar. 
 
 Al tratar el error java entra en una situación segura. 
 
 No le es necesario cerrar abruptamente el programa. 
 
 Cuando el programa no entre en la parte que puede generar un error, ni siquiera se ejecuta el try catch. 

 Y mostrará el mensaje "fin del programa", salteandose el catch. 


 Entonces, ejecuta el try e intentará calcular, si no hay problema, hace el cálculo. 
 
 Se saltea catch y ejecutará las lineas siguientes. 

 

|| Throw y Throws

 Ante un código problematico podemos insertar throw y throws.
 
 Para controlar los errores del programa.
 
 
 Si tenemos una app que envia estadisticas al servidor. 

 Tomando las interacciones que hace el usuario con la app.

 Captamos los datos como clicks, visitas, sesiones. 

 ```
 public class Main {

  public static void main (String[] args) {
   String codificacion = "clicks = 30, paginas = 10, sesiones = 5"; 
   enviarAlServidor(codificacion); 
  }
 }

 ```
 
 Mediante el método enviarAlServidor, enviamos los datos. 
 

 Nuestra app puede depender de cosas externas, como una conexion a un servidor y más. 

 Si estas cosas fallan, nuestro programa puede que tambien. 

 Debemos estar pendientes de las excepciones que pueden ocurrir. 

 Por eso debemos capturar estos fallos para que el programa pueda continuar funcionando. 


 Si intentamos hacer un POST a un API HTTP y el ordenador no tiene conexión, va a fallar. 
 
 ```
 public class Main {

  public static void main (String[] args) {
   String codificacion = "clicks = 30, paginas = 10, sesiones = 5"; 
   enviarAlServidor(codificacion); 
  }

  private static void enviarAlServidor(String codificacion) {
   if (codificacion == null || codificacion.isEmpy()){

   }
  
  }
 }

 ```
  
 Para proteger la API podemos plantear que pasa si los datos estan nulos. 

 Nos protegemos de un parámetro nulo o de una cadena vacía.

 Lanzamos una excepcion para interrumpir la ejecución por un problema con el parámetro. 
 
 
 Para tirar una excepción necesitaremos instanciar una excepción. 

 Como casi todo es una instancia de un objeto, las excepciones lo son.

 Java tiene una clase 'Exception' que representa excepción.

 Como es muy generica, lo normal es que creemos subclases de Exception. 

 Usaremos algunas de las clases que extienden de Exception. 
 
 O crearemos las propias.

 
 Las distintas clases representarán distintos errores.

 Con try catch los trataremos. 

 El constructor de 'Exception' toma varios parámetros. 

 Además hay varios constructores.

 ```
 public class Main {

  public static void main (String[] args) {
   String codificacion = "clicks = 30, paginas = 10, sesiones = 5"; 
   enviarAlServidor(codificacion); 
  }

  private static void enviarAlServidor(String codificacion) {
   if (codificacion == null || codificacion.isEmpy()){
    Exception excep = new Exception ();
   }
  
  }
 }

 ``` 

 Constructores como Exception (String message, Throwable cause); 
 
 Exception (Throwable cause)  
 
 Exception (String message)

 Exception ()

 
 Los cuatro constructores se deben que una excepción puede tener hasta dos parámetros.

 Podemos lanzar solo un mensaje.

 ```
 Exception excep = new Exception ("Los datos enviados no son validos");

 ``` 

 Este mensaje lo podemos recuperar usando el método getMessage() con la instancia. 

 ```
 Exception excep = new Exception ("Los datos enviados no son validos");
 excep.getMessage(); 
 
 ```
 
 Ya en el bloque catch podemos capturar el mensaje que le hemos pasado.

 Lo imprimimos por pantalla, crear mensaje de error, enviarlo a un servidor de errores, devolverlo como error en una api rest.

 
 Constructor Throwable cause, otro de los parámetros.

 Representa otra excepcion. 

 Throwable es la clase base de la que extiende Exception. 
 
 ```
 //en la documentación

 public class Exception extends Throwable {}

 ```

 Dado que hay más cosas que se pueden lanzar y que no son errores. 

 cause está pensado para encadenar excepciones. 

 Cuando falla algo a causa de otro error.

 Si se ha producido un error podemos envolverlo en nuestra excepcion cause.

 Y proporcionar la excepcion original como la causa o parámetro de este. 


 Exception (String message, Throwable cause) lanza un mensaje y encadena errores.

 Exception () como constructor vacío, no depende de nada.

 Puede contener un mensaje.
 
 ```
 Exception excep = new Exception ("Los datos codificación está vacío");

 ```

 Con el método getCause() podemos recuperar la causa Throwable.

 ```
 excep.getCause();

 ```

 
 Una vez que tenemos la instancia de Exception, podemos lanzarla.

 Con Throw especificando la instancia de Exception que vamos a tirar.

 ```
 Exception excep = new Exception ("Los datos codificación está vacío");
 Throw excep; 

 ```


 La alternativa estandar es unir las dos declaraciones.

 Escribimos Throw antes de instanciar o usar el constructor de Exception.

 ```
 Exception excep = Throw new Exception ("Los datos codificación está vacío");

 ```
 
 o 

 ```
  Exception excep;
  throw new Exception ("Los datos codificación está vacío");

 ```


 Throw actúa como un return, el código que viene debajo no se va a ejecutar, finaliza el método.

 Como enviarAlServidor.

 ```
 public class Main {

  public static void main (String[] args) {
   String codificacion = "clicks = 30, paginas = 10, sesiones = 5"; 
   enviarAlServidor(codificacion); 
  }

  private static void enviarAlServidor(String codificacion) {
   if (codificacion == null || codificacion.isEmpy()){
    Exception excep = new Exception ("Los datos codificación está vacío");
    throw excep; 
   }
  
  }
 }

 ``` 

 Nos puede dar un error compilación. 

 'Unhandled exception type'

 Como anunciamos que se va a tirar una excepción con Throw excep. 

 Además de anunciarla después de la instancia.

 En la primera linea del metodo, su declaración antes de llaves de código.

 Tenemos que especificar las excepciones que el método puede tirar.

 Antes de las llaves de código usamos throws =/= throw (lanza o lanzará/lanzar)

 Después escribimos el tipo de la clase instanciada.
  
 ```
 public class Main {

  public static void main (String[] args) {
   String codificacion = "clicks = 30, paginas = 10, sesiones = 5"; 
   enviarAlServidor(codificacion); 
  }

  private static void enviarAlServidor(String codificacion) throws Exception {
   if (codificacion == null || codificacion.isEmpy()){
    Exception excep = new Exception ("Los datos codificación está vacío");
    throw excep; 
   }
  
  }
 }

 ``` 
 
 
 Ahora el compilador nos pide un try catch o un throws en el código que lanza el método que tiene una excepcion.

 ```
 public class Main {

  public static void main (String[] args) {
   String codificacion = "clicks = 30, paginas = 10, sesiones = 5"; 
   try {
    enviarAlServidor(codificacion); 

   } catch (Exception e) {
    e.printStackTrace();
   }

  }

  private static void enviarAlServidor(String codificacion) throws Exception {
   if (codificacion == null || codificacion.isEmpy()){
    Exception excep = new Exception ("Los datos codificación está vacío");
    throw excep; 
   }
  
  }
 }

 ```


 Rs:

  Ponemos throw y throws en la la definición del método que lanza una exceción

  Try and catch o throws donde se llama al método que lanza una excepción.


 Falta crear nuestros propios 'Exception' personalizados e instanciarlos.

 Y las excepciones de tipo checked se anuncian como throws Exception 



|| Inner Classes

 Las clases internas ayudan a ordenar las clases.

 Se refiere a meter un clase dentro de otra. 
 
 

 ```
 public class Triangulo {

  public float base, altura; 
 
  public Triangulo (float base, float altura) {
   this.base = base;
   this.altura = altura; 
  } 

  @Override
  public String toString() {
   return "Triangulo {" + "base=" + base + ", altura=" + altura '}';
  }

  public void print() {
   System.out.println(toString());
  }

  private class CalculadoraArea() {

  }


 }

 ```

 La clase externa u original Triangulo tiene atributos base y altura en decimales y dos métodos.

 Con una clase interna CalculadoraArea creamos espacio de nombres nuevo 

 Para poder meter más atributos y métodos que van a pertenecerle exclusivamente. 

 Así logramos algo de modularización, vamos a tener atributos que solo tengan que ver con un método.

 Y los métodos que solamente trabajen con un atributo

  
 Separamos el atributo area y con el constructor se le asignará un valor.

 Con las clases internas podemos acceder a las variables fuera de la clase interna.  

 Accedemos a base y altura y operamos. 

 ```
 private class CalculadoraArea() {
  
  public float area;

  public CalculadoraArea() { 
   this.area = (base*altura) / 2;
  }

  @Override
  public String toString() {
   return "CalculadoraArea{" + "area=" + '}';
  }

  public void print() {
   System.outprintln(toString());
  }

 }

 ```

 
 Podemos usar la clase interna en la clase externa.

 Lo hacemos mediante una instancia/dependencia.

 En la clase externa ponemos un atributo de tipo CalculadoraArea que es la clase externa

 Pasarle los atributos de la interna a la externa.

 En el constructor instanciamos la clase interna.

 ```
 public class Triangulo {

  public float base, altura; 

  public CalculadoraArea area;
 
  public Triangulo (float base, float altura) {
   this.base = base;
   this.altura = altura; 
   this.area = new CalculadoraArea(); 
  } 

  @Override
  public String toString() {
   return "Triangulo {" + "base=" + base + ", altura=" + altura '}';
  }

  public void print() {
   System.out.println(toString());
  }

  private class CalculadoraArea() {
  
   public float area;

   public CalculadoraArea() { 
    this.area = (base*altura) / 2;
   }

   @Override
   public String toString() {
    return "CalculadoraArea{" + "area=" + '}';
   }

   public void print() {
    System.outprintln(toString());
   }

  } 


 }

 ```


 Podemos acceder al valor de area o imprimir desde la clase externa.

 ```
 public void print() {
  System.outprintln(toString());
  this.area.area
 }
 
 ```

 ```
  public void print() {
  System.outprintln(toString());
  this.area.print();
 }
 
 ```


 Podemos querer usar clases internas para tener clases privadas.

 Solo podrán usarse dentro de la clase Triangulo.

 Clases que cumplicaran un único propósito especifico.

 Por ejemplo, si nos encontraramos con una variable que son varios valores.

 Con una única variable no se puede representar, como una coordenada polar, cartesiana.

 Son dos flotantes. 

 Una clase interna podría usarse en este caso.

 Tener los flotantes como atributos y poder agrupar dos o tres variables que queremos tratar como un único elemento.

 
 Las clases externas Triangulo pueden ser publicas, a nivel de archivo 
 
 O sin modificador para hacerlas visible a nivel de paquete.

 Si la hacemos private, no se podrían importar.

 Para esto podemos usar una interna.

 Aquí con instanciar la clase interna tenemos a disposición todos sus componentes. 
 
 Sus datos tienen relación con la clase externa.


 No se debería usar una clase interna para proporcionar datos no relacionados.

 O que la clase interna use muchos datos de la externa.

 Dado al hacer funcionar la clase externa se retroalimenta de la interna.

 Queda ligada la implementación, tiene que ser muy especifico.

 
 Casos de uso pueden ser evenListener y relacionados.

 

|| Interfaces funcionales y funciones flecha

 Introducido en Java 8. 


 Como las clases anonimas son implementaciones de interfaces o extensiones de clases abstractas. 

 No se hacen en un archivo independiente, para poder referenciar esta clase a dónde queramos. 

 Se hacen directamente en el código fuente creando con la palabra clave new y el nombre de la interfaz o de la clase abstracta que queramos extender, el código se introduce entre llaves dónde este. 

 ```
 public static void main (String[] args) {
  JFrame frame = new jFrame(); 
  frame.addKeyListener(new KeyListener() {
   @Override
   public void keyPressed(KeyEvent e) {//...}

   @Override
   //...
   
   @Override
   //...
 
  }
 }

 ```

 En ocaciones esto nos permitirá implementar interfaces complejas que tengan varios métodos.

 Como es este caso. 


 Pero en otras ocaciones nos vamos a encontrar con interfaces muy simples que tiene mucho menos métodos. 

 Runnable es una de ellas, definirá un único método abstracto denominado run. 

 ```
 public class Main {
  
  public static void main(String[] args) {
   Runnable r = new Runnable {
    @Override
    public void run() {
     throw new UnsupportedOperationException("Not supported yet"); 
    }
   };
  }
 }
 
 ``` 
 
 Cuando implementemos de manera anónima un runnable. 
 
 Tendremos que implementar la operación run(). 

 Es esta única que necesita. 

 Entonces, La interfaz Runnable expone un único método abstracto. 

 Se denomina SAM (Single Abstract Method). 

 
 A partir de la versión 8 de Java, existe una forma más simple de declarar este tipo de clases anonimas.  

 Podemos escribirlo directamente con una función flecha. 
   
 ```
 Runnable r = () -> {
  //Cod. func run
 }; 

 ```

 ```
 Runnable r = () -> {
  System.out.println("hola mundo"); 
 }; 


 ```

 Cuando solo tenemos que implementar una función se nos permite hacerlo de esta forma.

 Runnable o run no tiene paráemtros, ni retorno (void). 


 Si necesitamos implementar una interfaz que tiene tipo de retorno y parámetro 

 Como puede ser Predicate<T>. 

 Más compleja, con muchos métodos. 

 Aunque solo un método implementamos. 

 Boolean test(T t). 

 O sea test(T t) que acepta un generico y que devolverá un booleano.


 Si queremos implementar un predicado (retorno y param) 

 Lo hacemos de forma tradicional

 ```
 public class Main {
  
  public static void main(String[] args) {
   Predicate<String> pred = new Predicate<String> {
    @Override
    public boolean test(String t) {
     throw new UnsupportedOperationException("Not supported yet"); 
    }
   };
  }
 }

 ```
 
 O utilizando la forma moderna. 

 ```
 Predicate<String> pred2 = (String t) -> {
  //Cod. pred2
  return false; 
 }; 

 //o

 Predicate<String> pred2 = (t) -> {
  //Cod. pred2
  return false; 
 }; 

 
 ```
 
 Aunque debemos especificar el parámetro de tipo String de test. 
 
 En las interfaces funcionales con Arrow Function. 
 
 Java nos va a permiter deshacernos del tipo de dato del parámetro como se ve en el ejemplo. 

 Sin olvidar de poner en el código interno el retorno correspondiente, boolean en este caso.
  
 Esta clase anonima equivale a la forma tradicional con muchos métodos código.


 Los predicados en programación son todas las funciones que devuelven un booleano.

 Son usadas en los condicionales. 

 Por ej, un predicado que acepte un string y nos diga si el string está completamente en mayus. 

 ```
 import java.util.Predicate; 

 Public class Main {

  Public static void main (String[] args) {

   Predicate<String> esMayusculas = (str) -> 
    return str.toUpperCase().equals(str); 
  }; 

 } 

 ```
 
 En <String> está el retorno. 

 En (str) el parámetro
 
 Y en {//Cod. de su método};
  
 Todo implicitamente. 

 
 El predicado lo podríamos usar: 

 ```
 import java.util.Predicate; 

 Public class Main {

  Public static void main (String[] args) {

   Predicate<String> esMayusculas = (str) -> 
    return str.toUpperCase().equals(str); 
  }; 

  if (esMayusculas.test("hola")) {
   //Cod.
  }

 } 
 
 ```


 Con las funciones flecha podemos seguir reduciendo la sintaxis de las interfaces funcionales. 

 Si lo único que queremos es hacer una interfaz que implemente un método abstracto (único método).  

 En el cual tenemos directamente el return como un única expresion. 
 
 A la fecha le agregamos la expresión sin el return. 

 ```
 Predicate<String> esMayusculas = (str) -> str.toUpperCase().equals(str); 

 ```

 Tenemos el retorno: <String>
 Parámetro: (str)
 y el código de su metodo/valor del return: ->
  
 
 Esta permitido cuando implementamos una interfaz que solamente tiene un único método abstracto. 
 
 Si no vamos a poner nadaa más de código nos podemos ahorrar las llaves, return, public class, new, extends y override. 

 En una sola linea creamos una clase anonima que implementa la interfaz predicado. 

 Sobreescribimos el método test que tiene un parámetro de tipo string. 

 Y hacemos que su cuerpo sea return. 


 Si tenemos que instanciar un hilo. 
 
 ```
 Public class Main {

  public static void main (string[] args) {
   Thread t = new Thread(Runnable target); 
  }
 }

 ```

 Podemos proporcionarle directamente un Runnable. 
 

 ```
 Public class Main {

  public static void main (string[] args) {
   Thread t = new Thread(() -> {
    System.out.println("hola mundo"); 
   }); 
   t.star(); 
   t.join(); 
 }

 ```
 
 

|| Var 
 
 Introducido en Java 10. 

 Se usa para crear variables sin tipos.

 Dejandole al compilador que haga la inferencia.

 ```
 public static vodi main (String[] args) {
 
  var k = 10; 

  int hola = 5;
  String mundo = "aha";
  System.out.println("bonatarda");
  
 } 

 ```

 var k se va a inferir a partir de su valor.

 10 -> lo interpreta como int

 10.0 // 10.0f -> como float
 
 "hola" -> String


 También lo podemos instanciar como un objeto de tipo Random.

 ```
 var k = new Random(); 

 ```
 
 var no es una palabra clave, es un nombre reservado.

 Está hecho para evitar conflictos con referencias a variables con nombre var en el código.

 Se activa cuando lo usamos a la izquierda de un nombre.

 
 No es posible utilizar var como atributo o campos de una clase.   

 No es posible hacer inferencia en este ambito.
 
 Solo en ambitos locales.

 No podemos declara var como null. 

 ```
 var k = null;

 ```
 
 null no puede inferir el tipo de dato de k. 

 Lo tomaría como null k que no es un tipo de dato valido.


 No se puede declararla y después inicializarla.

 ```
 var k; 

 k = 10; 

 ```

 Se tiene que declarar e inicializar al mismo tiempo. 

 
 No se puede declarar varias var en la misma linea.

 Como se puede hacer con otros tipos de datos.
 
 ```
 var k = 10, p = "hola";

 ```

 No se puede declarar var con tipos especiales como lambda. 

 O referencias a funciones. 

 ```
 var metodo = System.out::println; 

 ```
  
 A metodo le queremos asignar una referencia a printlna.

  
 Usos validos como en ambitos locales.

 si tenemos una var con información y la queremos devolver mediatne una función.

 ``` 
 public class ClaseVAR {
  public static double sumar (double a, double b) {
   var completo = "hola bona tarde, " + nombre; 
   return completo; 
  }

 public static void main(String[] args) {
  System.out.println(saludar("var"); 
 }
 
 }

 ```
 
 El caso de uso es cuando no sabemos de que tipo será un objeto.
 
 Siempre que sea local en una funcion, método, etc. 



|| Comparator

 Un algoritmo de ordenación es esencial, en ciertas circunstanicas.

 Si queremos ordenar un array de números desordenados.
 
 Podríamos implementar un algoritmo de ordenación puro.

 O llamar a un método de ordenación del lenguaje.

 ```
 import java.util.Arrays; 

 public class Main {
  public static void main (String[] args) {
   int[] arr = new int[] { 4, 3, 6, 2, 1, 7, 9, 5 }

   Arrays.sort(arr);   

   for (int j: arr) System.out.print (j + " "); 
   System.out.println(" "); 
   
  }

 }

 ```
 
 Con Array.sort() ordenamos un array sin implementar nada.

 Puede tomar como parámetro varios tipos de array como int[], char[], float[], etc. 

 Le pasamos el nombre y listo.

 Modificará el array que le pasemos, no tenemos guardar una copia.

 
 Aplica cuando querramos ordenar estructuras personalizadas.

 Si queremos ordenar una data table siguiendo algún criterio.

 ```
 import java.util.list; 

 public record Pelicula (
  String nombre, 
  List<Persona> equipo, 
  int presupuesto, 
  int anio
 ) {

 }

 ```
    
 Un criterio especifico puede ser, dar peliculas que tienen más equipo trabajando.

 O las que tiene más presupuesto caras, antiguas por año, etc. 

 Array.sort no funcionará para una tabla compuesta si le padamos como argumento la estructura Pelicula.

 Dado que solo acepta un parámetro de algunos tipos, pero no record.

 
 Pero existe Array.sort(T[] a, Comparator<? super T c). 

 sort acepta un comparator que es un interfaz funcional. 

 Al igual que sort muchos métodos aceptan un comparator.

 ```
 import java.util.Arrays; 

 public class Main {
  public static void main (String[] args) {
   int[] arr = new int[] { 4, 3, 6, 2, 1, 7, 9, 5 }

   for (int j: arr) System.out.print (j + " "); 
   System.out.println(" "); 
   
  }

  
  public static void demo2() {
    var list = Arrays.asList(1, 2, 3); 
  }

 }

 ```
 
 Array.asList, como devuelve una lista.

 list está ordenada.
 
 Al hacer list.sort toma un comparator.

 list.sort(T[] a, Comparator<? super T c)

 list también aceptará el método stream().sorted(T[] a, Comparator<? super T c)


 La interfaz Comparator <T>

 ```
 public interface Comparator<T> {}

 ```

 Es una interfaz funcional, por lo que podemos escribirla como un método lambda.

 Sirve para comparar dos cosas de tipo T. 

 Lleva un generico.

 Asi que le podemos pasar un tipo personalizado.

 Aceptará un comparador de número como de peliculas y todo lo que tengamos.

 
 Comparator tiene un método llamado compare(T o1, T o2). 

 Toma dos elementos de tipo generico/x.

 Tiene que ser los dos de igual tipo.

 Si son peliculas, números, etc. 

 Retorna un entero, pos, neg en función de si el primer elemetnos es menor que, igual o mayor que el segundo.

 
 Debemos fijarnos en los parámetros y el retorno.

 Si no funciona como esperamos debemos recurrir a la explicación del doc.

 
 Para los parámetros y retorno.

 Dado que comparator es una interfaz funcional.

 Podríamos escribirlo como un método lambda que aceptará dos parámetros.

 (a, b) o (o1, o2).

 Donde expresaremos el criterio de ordenación, devolviendolo de una determinada forma.

 ```
 (a, b) -> {
  return
 }

 ```
 
 Para la devolución:

 si el primer argumento es menor que el segundo, tendremos que devolver un número negativo.

 a<b -> ej, -1.

 
 Al querer ordenar las peliculas, podemos sacar de los capos.

 Una propiedad por la que querramos comparar, ej: año de publicación.
 
 a.anio < b.anio así podremos devolver -1.
 

 Si el primero arg es mayor que el segundo, tendremos que devolver valor positivo.

 a>b -> 1.
 
 a.pres > b.pres -> 1
  

 Si son iguales o valen lo mismo, debemos devolver un cero.

 a = b -> 0. 

 a.equip.length = b.equip.length
 
  
 Si tenemos una lista de peliculas 

 ```
 import java.util.Arrays; 

 public class Main {
  public static void main (String[] args) {
   int[] arr = new int[] { 4, 3, 6, 2, 1, 7, 9, 5 }

   for (int j: arr) System.out.print (j + " "); 
   System.out.println(" "); 
   
  }

  
  public static void demo2() {
   List<Peliculas> lista = Collections.empyList; 

   lista.sort((pel1, pel2) -> {
   
   });
 
  }

 }

 ```

 Si queremos ordenarlo, usamos sort. 

 Especificandole el comparador que queremos utilizar.

 Recibiremos pel1, pel2 y creamos el código de la función, que nos permitirá comparar cuál es más pequeña o más grande. 

 Si queremos ordenar por presupuesto y por cuál es la más barata. 

 ```
 public static void demo2() {
  List<Peliculas> lista = Collections.empyList; 

  lista.sort((pel1, pel2) -> {
   return pel1.presupuest() - pel2.presupuest()
  });
 
 }

 ```
 
 Si el presupuesto de la primera es menor que el de la segunda. 

 Devolverá un número negativo.

 En caso de ordenar pel1 de menor a mayor, irá en primer lugar
   
 
 Para que nos de las de mayor presupuesto, podemos invertirlo.

 Negando. 

 ```
 public static void demo2() {
  List<Peliculas> lista = Collections.empyList; 

  lista.sort((pel1, pel2) -> {
   return - (pel1.presupuest() - pel2.presupuest())
  });
 
 }

 ```
 
 Para una sintaxis más corta, quitamos el return y las llaves.

 Creando una función flecha.

 ```
  public static void demo2() {
  List<Peliculas> lista = Collections.empyList; 

  lista.sort((pel1, pel2) -> - (pel1.presupuest() - pel2.presupuest())
 
 
 }

 ```


 Podemos hacer estas comparaciones llamando a un método como compare(). 

 ```
 public static void demo2() {
  List<Peliculas> lista = Collections.empyList; 

  lista.sort((pel1, pel2) -> {
   Integer.compare()
  });
 
 }

 ```

 La implementación de compara():

 ```
 public static compare (int x, int y) {
  return (x < y) ? -1 : ((x == y) ? 0 : 1); 
 } 

 ```
  
 Cuando x < y, devolverá -1. 

 Si x = y, devolverá 0. 

 Si x > y, devolverá 1


 ```
 public static void demo2() {
  List<Peliculas> lista = Collections.empyList; 

  lista.sort((pel1, pel2) -> {
   return Integer.compare(pel1.presupuesto(), pel2.presupuesto())
  });
 
 }

 ```

 Hacemos que la comparación de las peliculas sean directamente. 


 En ocaciones, si directamente queremos ordenar una lista como de enteros.

 ``` 
 public static void demo2() {
  List<Integer> lista = Collections.empyList(); 

  lista.sort(Integer::compareTo); 
 }

 ```

 Podemos usar las funciones como si fuesen referencias.

 Integer::compareTo crea una interfaz funcional. 

 A partir de compareTo. 

 Integer::compareTo es el comparator que vamos a utilizar.


 La clase String no tiene.

 Pero CharSequence que representa un string

 compare(CharSecuence cs1, CharSecuence cs2)

 Si usamos CharSecuence::compare

 Podemos compararla por orden lexicográfico.


 Rs:

 Los comparadores orden listas. 

 O para stream()



|| Referencias a Método

 Se usa el operador :: para crear referencias a métodos.
  
 Se usan para crear funciones lambda para poder pasarla como parámetro.

 
 Un caso simple es utilizar un referencia a método para crear una referencia a método de un método estático.  

 ```
 public class Main {

  public static void main (String[] args) {
   Long.parseLong()
  }
 }

 ```

 Tenemos el método parseLong de la clase Long. 

 Este método acepta como parámetro una cadena de caracteres.

 parseLong(String s)

 Decodifica su valor númerico leyendo los número dentro de una cadena.

 Y devuelve el valor como si fuese un Long.

 
 Si tenemos que crear una función como parseLong.

 Que transforme un String en un Long.

 Podemos crear una función lambda que tome un string.
 
 Y devuelva el método long.

 ```
 import java.util.function.Function; 

 public class Main {

  public static void main (String[] args) {
   Funcion<String, Long> lambda = (str) -> Long.parseLong(str);
  }
 }
 
 ```

 Tomamos el parámetro str (en lambda = (str)) y pasarselo tal cual a otro método.

 Llama a otro métodos para pasarle el mismo parámetro.

 Además este método tiene la misma interfaz <String, Long>. 

 Convirtiendo String a Long.


 En esta situación podemos usar el operador ::

 Para aplicar la construcción (str) -> Long.parseLong(str); 

 Es mejor escribir una referencia.

 ```
 import java.util.function.Funcion; 
  
 public class Main {

  public static void main (String[] args) {
   Function<String, Long> lambda = (str) -> Long.parseLong(str);
   Function<String, Long> lambdab = Long::parseLong; 
  }
 }
 
 ```
   
 Debemos poner el nombre de la clase, Long; dado que es método estatico.

 Seguido del operador ::

 Luego sacamos el metodo que queremos utilizar. 

 parseLong.

 ```
 Long::parseLong; 

 ```
 
 Se lee método parseLong de la clase Long, métodos estático.


 El lenguaje verá el método como un elemento de primera clase. 

 Y no como una llamada.
 
 ```
 Function<String, Long> lambdab

 ```
 
 Como la función lambda se corresponde con una conversión de String a Long

 Cuando la llamemos por su nombre, invocará a Long::parseLong; 


 Podemos crear una función lambda para invocar un constructor.

 Tiene una construcción parecida a la primera lambda. 
 
 Le pasamos un parámetro que sería el constructor. 

 Devolver (->) new. 

 La lambda tiene que devolver la instancia construida que fabrica el constructor. 

 ```
 import java.util.function.Funcion; 
  
 public class Main {

  public static void main (String[] args) {
   Function<String, Long> lambda = (str) -> Long.parseLong(str);
   Function<String, Long> lambdab = Long::parseLong; 
  
  }
 }
 
 ```

 En algunas ocaciones podemos tener una función sin parámetros. 
 
 Pero que nos devuelve un objeto de un tipo.

 Ej. Supplier está en el paquete function. 

 Es un método funcional que no acepta parámetros pero que si devuelve algo.

 Como de tipo Random.


 Llamamos a la función lambda y devolvemos el tipo Random();
 
 ```
 import java.util.function.Funcion; 
  
 public class Main {

  public static void main (String[] args) {
   Function<String, Long> lambda = (str) -> Long.parseLong(str);
   Function<String, Long> lambdab = Long::parseLong; 
 
   Supplier<Random> generaRandom = () -> new Random();  

  }
 }
 
 ```
 
 Es como el primer ejemplo, solo creamos un lambda para llamar a otro método, constructor. 

 Entonces usamos :: para crear referencias a constructores. 

 Sustituimos la implementación () -> newRandom()

 ```
 import java.util.function.Funcion; 
  
 public class Main {

  public static void main (String[] args) {
   Function<String, Long> lambda = (str) -> Long.parseLong(str);
   Function<String, Long> lambdab = Long::parseLong; 
 
   Supplier<Random> generaRandom = () -> new Random(); 
   Supplier<Random> generabRandom = Random::new; 

  }
 }
 
 ```
 
 En vez de hacer una función que llama a otra. 
 
 Creamos una referencia directa al método, en este caso, un constructor.


 Si tenemos varias formas de llamar al constructor podemos usar las correctas. 

 Random tiene un constructor que acepta un parámetro de tipo Long. 

 Podemos tener una función que acepta Long y devuelve un Random. 

 Llamará al constructor. 

 ```
 import java.util.function.Funcion; 
  
 public class Main {

  public static void main (String[] args) {
   Function<String, Long> lambda = (str) -> Long.parseLong(str);
   Function<String, Long> lambdab = Long::parseLong; 
 
   Supplier<Random> generaRandom = () -> new Random(); 
   Supplier<Random> generabRandom = Random::new; 
   Function<Long, Random> genera = Random:new; 

  }
 }
 
 ```
 
 Function<Long, Random> genera = Random:new;  

 toma un parámetro de devuelve otro. 

 Y Supplier<Random> generabRandom = Random::new; 

 No acepta y devuelve. 

 
 Cuando aceptamos parámetros no podemos usar var para referencias a métodos. 

 El compilador no podría inferir el tipo.


 Si tenemos una cadena normal y queremos sacar una función. 

 Como Suppplier que devuelva un Integer con la longitud. 
 
 ```
 String cadena = "hola mundo"; 
 Supplier<Integer> longitud = () -> cadena.length(); 

 ```

 Podemos simplificarlo. 

 Cuando tenemos una instancia (Supplier<Integer> longitud)
  
 Si queremos sacar una referencia a un método 
  
 Usamos el operador ::
 
 No sobre la clase, sino sobre la instancia cadena. 

 ```
 String cadena = "hola mundo"; 
 Supplier<Integer> longitud = () -> cadena.length(); 
 Supplier<Integer> longitue = cadena::length; 

 ```


 Si queremos hacer una función lambda del método startsWith(String prefix)
 
 Aceptará un parámetro prefix. 

 Tendremos un Predicate de tipo String. 

 Dado que  tenemos una función que empieza por una cadena de carácteres como parámetro.

 Devuelve un booleano si se cumple la condición o no.

 ```
 String cadena = "hola mundo"; 
 Supplier<Integer> longitud = () -> cadena.length(); 
 Supplier<Integer> longitue = cadena::length; 
 Predicate<String> abc = (str) -> cadena.startsWith(str); 

 ```

 Lo simplificamos como: 

 ```
 Predicate<String> abc = (str) -> cadena.startsWith(str); 
 PredicateString> abc = cadena::startsWith;

 ```
 

 Otra forma de llamar a una func lambda de length(). 
 
 Utilizamos String::length

 Es un método estático sacado como referencia no a partir de una instancia sino a partir de la propia clase a la que pertenece.

 Tiene implicaciones. 
 
 ```
 String::length; 

 ```

 Es habitual en las funciones lambda. 

 Como es estático es necesario explicarle de quién es la longitud que queremos sacar.

 A la referencia le falta saber cuál es la instancia de cadena  

 Existe un parámetro adicional que va a ser la instancia. 

 Va a ser equivalente para una función que acepta como primer parámetro la cadena de caracteres de la que queremos sacar la longitud.

 ```
 // (str) -> str.length() es igual a: 
 String::length
 Function<String, Integer> func1 = String::length;

 ```

 Se crea una lambda diferente dónde tenemos que pasarle un parámetro adicional a qué cadena de caracter queremos llamar.

   

 Si queremos hacer referencia a un método que si tenga parámetros:

 repeat(int count). 
 
 ```
 cadena.repeat(); 

 ```
 
 Le pasamos un número para que repita la cadena. 

 ```
 String hola = "holaa"; 

 hola.repeat(3) 

 ```
 salida:
 holaa holaa holaa


 Para crear una referencia. 

 ```
 cadena::repeat

 ```  

 o

 ```
 String::repeat

 ```
 
 Volvemos con la necesidad de saber a que instancia llama a repeat.

 Esta función no va a ser una referencia a tipo int a String. 

 Va a ser una BiFunction <T, U, R> de java.util.function. 

 Una función que acepta dos parámetros y que devuelve un parámetro ultimo. 


 Las interfaces funcionales como Function y BiFunction existen por el patrón interfaces y abstracción. 

 BiFunction aceptará dos parámetros T, U y devolverá un valor de tipo R.
 
 ```
 // (str, n) -> str.repeat(n) 
 BiFunction String::repeat
 BiFunction <String, Integer, String> fun2 = String::repeat; 

 ```


 ```
 import java.util.function.Funcion; 
  
 public class Main {

  public static void main (String[] args) {
   Function<String, Long> lambda = (str) -> Long.parseLong(str);
   Function<String, Long> lambdab = Long::parseLong; 
 
   Supplier<Random> generaRandom = () -> new Random(); 
   Supplier<Random> generabRandom = Random::new; 
   Function<Long, Random> genera = Random:new; 

   String cadena = "hola mundo"; 
   Supplier<Integer> longitud = () -> cadena.length(); 
   Supplier<Integer> longitue = cadena::length; 

   Predicate<String> abc = (str) -> cadena.startsWith(str); 
   Predicate<String> abcd = cadena::startsWith; 
   
   //String::length
   // (str) -> str.length() es igual a: 
   Function<String, Integer> func1 = String::length;
   
   //BiFunction String::repeat
   // (str, n) -> str.repeat(n) 
   BiFunction <String, Integer, String> fun2 = String::repeat; 

  }
 }
 
 ```

 Un ejemplo de uso 

 ```
 list.of("continue", "break", "return").stream();  
   .map(String::length);  

 ```

 Podemos usar la func map para ha cer una conversión

 Como String::length no tiene parámetros, se comporta como (str) -> str.length()

 Cada una de las instancias se le pasa como parámetro

 Entra la instancia como parámetro y calcula la longitud de la cadena 



|| Comparable

 Es una interfaz para crear clases se puedan comparar. 

 La clase tiene que ser invariable. 

 Querramos establecer con un orden naturual, como una forma definitiva y única de comparar de manera definitiva esa clase.

 Esta clase podría implementar una interfaz Comparable. 
 
 Le indicamos a esa clase que va a compararse.

 
 Comparable es una interfaz que acepta un generico T, es el nombre de esa clase que intentamos comparar.

 ```
 Comparable<T> pertenece a java.lang  

 ```

 Comparable proporciona un método que se denomina compareTo. 

 ```
 //Documentada como: 
 public int compareTo(@NotNull T o); 

 ```
 
 Acepta como parámetro una T y la única forma de convertir la T en un tipo correcto es pasarle el mismo tipo, sería el nombre de la clase que comparamos.

 Vamos a tener que sobreescribir el método compareTo(); 

 ```
 public class Moneda implements Comparable<Moneda> {

  public final int euros; 

  public final int centimos; 

  public Moneda (int euros, int centimos) {
   if (centimos < 0 || centimos >= 100)
    throw new IllegalArgumentException("centimos soo (0,99)"); 
   this.euros = euros; 
   this.centimos = centimos; 
  }

  @Override
  public int compareTo(Moneda o) {
   return 0; 
  }

 }

 ```
 
 Aceptará un parámetro de tipo moneda, devolverá int.

 
 Para implementar compareTo debemos establecer una comparativa entre nuestra instancia this y el objeto que nos pasen como parámetro. 
 
 Debemos determinar cual de los dos es mayor. 

 O si nuestra instancia es mayor, menor o igual. 
 
 Que lo que le pasemos al parámetro. 


 Sirven para implementar comparaciones naturales, definitivas. 

 Diferente a Comparator dado que compara dos cosas del mismo tipo, comparado según un criterio especificado.

 Mientras que si implementamos un Comparable, estamos diciendo que existe una forma única y definitiva de manera natural las clases.

 
 En el ejemplo usamos la clase Moneda para llamar a un Comparable. 

 Moneda se puede comportar como un valueObject que es una clase que lo único que hace es contener un valor.

 En su caso, dos valores de los campos euros y centimos.

 Usando el constructor para instanciar y dar valor a los campos.

 ```
 public class Main {

  public static void main(String[], args) {
   Moneda n1 = new Moneda(4, 99); //4.99 euros al poner toString();
   Moneda n2 = new Moneda(4, 98); 
   Moneda n3 = new Moneda(3, 99); 
  }
 
 }

 ```
  

 Cuando intentemos comparar instancias, no lo vamos a poder hacer. 

 A menos que implementemos la interfaz Comparable. 

 La comparación de una moneda sería que gana la que tiene más euros o si son iguales en euros, gana la que tiene más centimos. 

 Este criterio se establece usando compareTo(). 
 
 ```
 //Doc de interfaz comparable.
 //Interface Comparable<T>
 //Desde java 8 no ha cambiado. 

 ```
 
 Como la interfaz Comparator, hay detalles en el tipo/parámetro y retorno. 

 Por ej, si le pasamos un parámetro null; el método fallará obligatoriamente. 
 

 Como devuelve un int, debemos expresar una comparación menor, mayor o igual que retorno int.

 compareTo() devolverá a partir de dos intancias. 

 this y o que se hayamos pasado.

 Un numero negativo o un número o positivo entero. 

 En función de si el número es funcion de this es menor que o igual que el objeto especificado o. 

 
 Cuando se llame a compareTo, comparará this con el parámetro o. 

 Si se determina: 

 this < o -> return -1

 this > o -> return 1

 this = o -> return 0
  
 
 Si queremos implementar la moneda que tenemos en this que es Monenda. 

 Y la moneda que entra por o. 

 ```
 @Override
 public int compareTo(Moneda o) {
  if (this.euros > o.euros)
   return 1; 
  if (this.euros < o.euros)
   return -1;                 
  if (this.centimos > o.centimos)
   return 1; 
  if (this.centimos <  o.centimos)
   return -1; 
  return 0; 

 }

 ```
 
 Si no es ni mayor ni menor, necesariamente son iguales. 

 
 Podemos hacer más eficientes las expresiones llamando a <Integer.compare>
  
 Esta interfaz es la misma que la de Comparator. 

 Si tenemos un método comparator. 

 Como integer.compare(). 

 ```
 @Override
 public int compareTo(Moneda o) {
  if (this.euros > o.euros)
   return 1; 
  if (this.euros < o.euros)
   return -1;
  return Integer.compare(this.centimos, o,centimos); 

 ```
 
 Podríamos reemplazar los condicionales con esta llamada. 


 También podríamos guardar el valor de la comparación de euros. 

 En Integer.compare(this.euros, o.euros)

 Y evaluamos con un condicional 

 ```
 @Override
 public int compareTo(Moneda o) {
  int comparac = Integer.compare(this,euros, o.euros); 
  if (comparc  == 0 {
   return Integer.compare(this.centimos, o.centimos); 
  }else{
   return comparac; 
  }

 ```
 
 Si la comparación es igual que 0, entonces, hacemos la comparación de los centimos. 

 Si no devolvemos lo que guardamos. 


 El uso fundamental de compareTo() estaría en hacer comparaciones en valueObject. 
 
 Instancias en las que se supone que estas representan su valor como tal.

 ```
 public class Main {

  public static void main(String[], args) {
   Moneda n1 = new Moneda(4, 99); //equivalente a 4.99 euros al poner toString();
   Moneda n2 = new Moneda(4, 98); 
   Moneda n3 = new Moneda(3, 99);

   System.out.print(m1.compareTo(m2));  
  }
 
 }

 ```
 Salida: 
 1 

 Si queremos comprobar que m1 > m2 podríamos llamar a m1.compareTo(m2); 

 En este caso this m1 será mayor que o.m2
 
 
 Si comparamos algo consigo mismo.

 ```
 System.out.print(m2.compareTo(m2));  
  
 ```
 Salida: 
 0 

 Es como se especifica en Doc.

 La recomendación es que las ordenaciones naturales sean consistentes con el método equals. 

 Si dos cosas son iguales, el método equals devuelva true.
 


|| Lambda

 Crear lambdas, pasarlas como parámetro. 

 Y recibirlas como argumento.


 En java, las lambdas son un clase anomima que implementa una interfaz funcional. 
 
 Si queremos crear un runnable, creamos la lambda con parametros y código. 

 Un supplier es una función lambda que crear algo de un tipo y devolverá este tipo. 

 ```
 public class Main {

  public static void main(String[] args) {
   
   Runnable r = () -> {
    //code...
   }; 

   Supplier<Integer> r = () -> {
    //code...
    return 4; 
   };

  }

 }

 ``` 


 Para crear métodos que acepten lambdas. 

 Una lambda es solo sintaxis (()->) alrededor de las interfaces funcionales como Runnable, Supplier, etc. 
 
 Vamos a tener que aceptar algunas de estas interfaces funcionales como parámetros. 

 
 Si hacemos un método estatico que implemente por su propia cuenta un for each. 
 
 Queremos que se le pase como parámetro un array y un lambda con el código que se ejecuta para cada elemento del array. 

 Le podemos pasar como parámetro un Consumer. 

 Es un tipo de función que consume un parámetro que se le proporcione. 
 
 Consumer<T> de java.util.function

 Se corresponde con una función, con un parámetro que no devuelve nada. 

 Se supone que ese parámetro es lo que va a consumir. 

 Será de tipo Integer y podrá aceptar como parámetro. 

 Una lambda que acepte un Integer que se corresponde con el elemento del array.

 Y que no haga nada al respecto.  

 ```
 public class Main {

  public static void foreach(int[] arr, Consumer<Integer> cont) {

  }

  public static void main(String[] args) {
   
   Runnable r = () -> {
    //code...
   }; 

   Supplier<Integer> r = () -> {
    //code...
    return 4; 
   };

  }

 }

 ```
 
 Debemos tener en cuenta que las lambdas siguen siendo objetos. 

 Las interfaces funcionales pueden tener muchos metodos. 

 Consumer tiene un método accept(Integer t). 

 andThen(Consumer<? super Integer> after?)

 Devuelve otro consumer donde se supone que después de ejecutar nuestro consumer lambda parámetro. 

 con.andThem. 

 Llamará a su parámetro. 

 Como una forma de encadenar acciones. 

 
 Si tuviesemos un Predicada como parametro lambda. 

 ```
  public static void foreach(int[] arr, Predicate<Integer> cont) {

  }

 ```

 Se supone que Predicate devuelve verdadero o falso. 

 En funcion si algo es T o F. 

 Utilizado para hacer filtros. 



 ```
  public static void foreach(int[] arr, Consumer<Integer> cont) {
   cont. 
  }

 ``` 

 En Predicate, el método test(Integer t) 

 Servirá para invocar la lambda. 

 Como tal, devolverá el verdadero o falso según lo que haga nuestra lambda. 

 El método negate() devolverá otro predicado inverso a lo que le llamamos. 

 ```
 public static void foreach(int[] arr, Consumer<Integer> cont) {
   cont.negate()
 }

 ``` 

 Devolverá un predicado que envuelve nuestro predicado y lo invierte. 

 Si nuestra lambda (Predicate) devuelve true. 
 
 El negate hará que se devuelva false. 
 
 
 En su forma más simple, la interfaz funcional Function
 
 Represeta una función generica. 

 Function<Integer, String>

 ```
  public static void foreach(int[] arr, Function<Integer, String> cont) {
   cont. 


 ```
 
 Tiene sus propios métodos como apply(Integer t). 
 
 Invocará a la lambda. 

 anThen() invocará otra después. 

 compose(Function<? super V, ? extends Integer> before)

 Le pasamos como parámetro otra funcion lambda y nos devuelve otra funcion. 

 Que llama cuando se le invoca a esa funcion y lo que te devuelve se le pasa a la nuestra en este caso cont. 

 
 Como cont es un objeto, los métodos como appy es un método de nuestro objeto cont. 

 Dado que la lambda la tenemos capturada en el this. 

  
 Si quisiesemos hacer un consumer que haga un foreach. 

 Creamos un bucle. 

 Llamar a nuestra lambda cont y a los métodos. 

 Invocará a la lambda para cada uno de los elementos. 

 ```
 import java.util.function.Consumer; 

 public class Main {

  public static void foreach(int[] arr, Consumer<Integer> cont) {
   for (int i : arr) {
    cont.accept(i)
   }
  }

  public static void main(String[] args) {
   int[] arr = new int[] {1, 2, 3, 4, 5}
   foreach(arr, System.out::println; 
  } 

 } 

 ```
 
 Llamamos a foreach pasandole el array creado. 

 La referencia a método print actuará como lambda. 
 
 Tomará como argumento cada elemento y hará println. 
  
 
 Alternativamente podemos pasar la lambda de forma explicita. 

 ```
  public static void main(String[] args) {
   int[] arr = new int[] {1, 2, 3, 4, 5}
   foreach(arr, (i) -> System.out.println("Acepto mi " + i)); 
  } 

 ```
 
 Lo único que tenemos que tener en cuenta a la hora de crear funciones. 
 
 Que tomen como parámetro a una lambda es que está será una construccion orientada por encima de una intefaz funcional. 

 O objetos si son abstractos y tiene un único método abstracto como los SAM. 

 Tendremos que utilizar en cualquiera de los métodos que se llame dentro de nuestra interfaz, para poder invocar la operacion lambda que le pasemos por parámetro.  
 
