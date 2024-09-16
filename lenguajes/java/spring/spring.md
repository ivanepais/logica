Spring
	
	Framework de Java que nos provee herramientas para crear aplicaciones de forma rapida y eficiente. 


Spring Boot

	Es una extensión de Spring para crear aplicaciones web de forma rapida. 
	


|| Crear App y configuración rapida

	En la web starts.spring.io
	
	Abrirá la herramienta spring initializr 


	Podemos generar dos tipos de proyectos: 
	
		Gradle y Maven: 
		
			Son herramientas para utilizar las dependencias en nuestro proyecto. 
		
		
		Java, Kotlin y Groovy: 
			
			Lenguaje de programación para crear el código fuente de la aplicación. 
			
			
		Version de Spring Boot: 
		
			Las versiones estables son las recomendadas. 
			
			No tiene ningún tipo de anotación en su nombre. 
			
		
		Metadata del proyecto: 
		
			Grupo, Artefacto, Nombre, Descripción, nombre del paquete,  
			
			
		Paquete de compilación: 
		
			Jar o War
		
		
		Versión de Java: 
		
			19, 17, 11, 8
			
			
		Dependencias: 
		
			Como Loombok para reducir las anotaciones
			
			o Spring Web para manejar un proyecto web. 
			
			
	Se descargará un archivo zip. 
	
	El proyecto tendra una estructura: 
	
		src: 
			
			Código fuente
			
			Contine la clase que corre el proyecto 
			
			```
			Demo.Application.java
			
			```
			
			Podemos ejecutarla directamente
			
			En la terminal veremos unos logs de información. 
			
			Veremos el puerto en el que corre
			
			Como localhost:8080
			
			Y que está iniciada. 
			
			Posteriormete podemos pausarlo. 
		
		test: testing de componentes
		
		gitignore: archivos que queremos excluir del rastreo de git. 
		
		gradle:
			
			Archivo construcción/compilación de la app
		
			Tiene las dependencias asignadas. 
		
	
	
|| Estructura del Proyecto

	Forma de estructurar las clases del proyecto. 
	
	En src, main, java, proyecto: 
	
		Podemos ver las clases e interfaces 
	
		Como controladores, servicios, repositorios, etc. 
	
		Además de la clase main. 
		
		Si tenemos todas estas cosas juntas es dificil distingir cual es su proposito. 
		
	
	Orden por feature: 
	
		Podemos crear un package. 
		
		Por controladores como package controllers
		
		E incluir todo tipo de controladores. 
		
		
		Podemos hacer lo mismo para los servicios. 
		
		Crear un package services e incluir las clases en esa carpeta. 
		
		
		Después lo hacemos con repositorios y dtos
		
		
		Funciona para proyectos pequeños cuando no tenemos muchas clases por cada feature. 
		
		
	Orden Dominio/concepto/proposito: 
	
		Por ejemplo si tenemos tres clases
		
		Dirigidas a usuarios. 
		
		Como UserController, UserRepository y UserService
		
		Creamos un paquete para ello. 
		
		package user e incluimos las clases. 
		
		Así con los demás, paquete company o employee. 
		
	
	Orden Dominio-Feature: 
	
		Dentro del orden dominio va el orden funcionalidad. 
		
		Creamos un paquete por dominio como UserController
		
		Y adentro creamos los paquetes feature. 
		
		Como controller, service, repository, dto 
		
		Pero le agregamos el dominio.
		
		Tenemos: 
		
			company
				controllers
				services
				dtos
				repositories
				
			employee
				controllers
				services
				dtos
				repositories
				
			user
				controllers
				services
				dtos
				repositories
				
			

|| Autowired

	Una de las anotaciones principales que nos ayudan con la inyección de dependencias usando la inversión de control
	
	Tiene tres formas de utilizarlo:
	
	Teniendo las clases:  
		
		Main:
			
			Tiene la anotación @SpringBootApplication
			
			Usaremos las instancias de objetos/clases
			
			
		UserController: 
		
			Tiene la anotación @Controller
			
			Tendrá una clase que usa otra clase como propiedad
			
			Para usar sus métodos
			
		
		UserService
		
			Tiene la anotación @Service
			
			La clase que se para inyectar dependencias. 
			
			Marca o definimos un tipo para usar en el controlador o main 
			
	
	1. Por anotación @Autowired con las propiedades: 
		
		Declaramos propiedades en nuestra clase 
		
		Spring inyectará la dependencia directamente. 
		
	
		
	2. Por constructor: 
	
		Contendrá el tipo y la propiedad que definimos anteriormente. 
	
		Usamos this para apuntar a esta propiedad. 
		
		Así tomará como valor lo que le pasen al parámetro. 
		
		Como los nombre de la propiedad de la clase y parametro del constructor son iguales
		
		Primero ser refiere a la propiedad y despues al paramétro
		
		
		Spring llamará al constructor para saber si tiene algún tipo de instancia del tipo que usamos en el constructor. 
		
		Si la encuentra la inyectará directamente. 
		
		Para ello usamos la anotación @Autowired para que spring inyecte la instancia que estamos buscando. 
		
		Aunque aquí la anotación no es un requisito. 
		
		
		
	3. Por setter: 
	
		Si tenemos un setter del tipo que estamos usando. 
		
		Podemos indicarle a Spring con una anotación @Autowired que nos inyecte la dependencia a traves del setter. 
	 	
	 	
	En Main.java
		
	```
	@SpringBootApplication
	public class Main {
		
		public static void main(String[] args) {			
			SpringApplication.run(Main.class, args); 
			
		}
		
	}
	
	```
	
	En UserController.java 
	
	```
	@Controller
	public class UserController {
		
		//1er forma: anotación
		
		@Autowired
		private UserService userService; 
		
		
		//2da forma: construct
		
		@Autowired
		public UserController(UserService userService) {
			
			this.userService = userService; 
				
		}
		
		
		//3er forma: setter es un método
		
		public void UserController(UserService userService) {
			
			this.userService = userService; 
	}
	
	```
	
	Para verificar esto ponemos un breakpoint
	
	En la propiedad del constructor
	
	Y en la propiedad del setter. 
	
	
	Primero llama al constructor. 
	
	Tiene una instancia del tipo UserService
	
	Y le va a pasar como parámetro al constructor. 
	
	El parámetro usuarioServico tiene como numero de referencia 
	
	Después llamará al setter. 
	
	El numero de instancia del setter es la misma que la del constructor. 
	
	Al final llama e inyecta a la propiedad
	
	Definida al principio con @Autowired. 
	
	
	Por general se usa con el método del constructor. 
	
	
	Si dejamos la propiedad y el constructor: 
		
		Funciona y podemos sacar los Autowired y el setter. 
		
		```
		@Controller
		public class UserController {
		
			private UserService userService; 
		
		public UserController(UserService userService) {
			
			this.userService = userService; 
				
			}
		
		}
		
		```
		
		Se usa en la metodología tdd
		
		Para hacer test eficientemente. 
		
		Para la interdependencia entre servicios y constructores. 
			
		Ya que tenemos una clase servicio UserService como dependencia
		
		Con la anotación @Servicio
	
	
	En UserService.java
	
	```
	@Service
	public class UserService {
		
			
	}
	
	```
	
	Si borramos su anotación Spring dará error. 
	
	
	Si borramos @Service en UserService. 
	
	En el controlador UserController debemos usar
	
	@Autowired(required =false) en el constructor de este controlador. 
	
	Para que Spring no tenga instancia de la clase. 
	




|| Component Controller Service y Repository
	
	@Component: 
	
		Nos permite crear beans en el contexto de Spring. 
		
		Para indicarle a Spring que cree una instancia de la clase y la guarde en su almacen de instancias. 
		
		Para poder usarlas con la anotación @Autowired
		
	
	Clase AppConfig.java: 
	
	Arriba de su definición escribimos la anotación. 
	
	Con @Component le indicamos a Spring
	
	Que la clase AppConfig es un componente de SpringApplication
	
	Tiene que crear una instancia u objeto dentro de su contexto o almacen de instancias. 
	

	```
	@Component
	public class AppConfig {
		
		public AppConfig(ApplicationContext applicationContext) {
			
			UserController userController = ApplicationContext.getBean(UserController.class);
			UserService userService = ApplicationContext.getBean(UserService.class);
			UserRepository userRepository = ApplicationContext.getBean(UserRepository.class);
			
			if (userController != null) {
				System.out.println("El controlador está creado"); 
				
			}
			
			if (userService != null) {
				System.out.println("El servicio está creado"); 
				
			}
			
			if (userRepository != null) {
				System.out.println("El repo está creado"); 
				
			}
		}
		
	}
	
	```
		
		
		
		
	La anotación @Controller
	
	Indica que la clase que lleva su anotación 
	
	será un controlador. 
	
	```
	@Controller
	public class UserController {
		
		private UserService userService; 
		
		public UserController(UserService userService) {
			
			this.userService = userService
			
		}
		
		public void holaMundo(){
			
			//usamos la instancia de userService
			//para llamar cualquier metodo en la instancia. 
		}
	}
	
	```
	
	
	@Service: 
	
		Utilizamos para crear una instanci 
				
		De la clase anotada. 
	
	```
	@Service
	public class UserService {
	
		
	}
	
	
	```
	
	
	@Repository: 
	
	La clase anotada será un repositorio. 
		
	```
	@Repository
	public class UserRepository {
	
		
	}
	
	
	```
	
	
	Indican los tipos de instancia de las clases anotadas. 
	
	Es una forma de incorporar semántica o significado a nuestro código. 
	
	
	


|| Configuration Bean

	Otra de las anotaciones más utilizadas en Spring. 
		
	Facilita la configuración de Beans o instancias dentro del contexto de Spring. 
	
	Resuelve algunas de las limitaciones de la anotación @Component
	
	
	Tenemos tres clases: 
	
		Main.java: 
			
			Dónde usamos las funcionalidades. 
			
		UserService.java: 
		
			Es la clases dónde vamos a inyectar un nuevo bean. 
			
		AppConfig.java: 
		
			Que es nuestra clase de configuración donde va a estar el administrador de nuestros beans. 
			
		Version.java: 
		
			Vamos a inyectar en la clase UsuarioServicio
	
			Para saber que version estamos utilizando
			
			Tiene funcionalidades para usar. 
			
			Si la inyectamos en otras clases. 
			
			Ellas pueden usar sus métodos. 
	
 
	Si usamos la anotación @Component
	
	En la clase Version.java
	
	Le estamos diciendo a Spring que nos cree una instancia dentro del contexto de Spring. 
	
	Y que la guarde. 
	
	El problema con @Component 
	
	Es que al crear una instancia de Version
	
	Necesitamos como parámetro del constructor
	
	Del tipo final int major, final int minor, final int revision
	
	Tipos de variables que no guarda en su contexto. 
	
	Además guardar un int no es posible en Spring. 
	
	Ya que no es un tipo objeto 
	
	Si compilamos y ejecutamos nos va a decir que necesita un bean de tipo entero. 
	
	
	Corregimos este problema usando @Configuration
	
	En AppConfig.java, le decimos a spring que esta clases
	
	Va a contener métodos en los cuales va a retornar
	
	Un bean que es una clase o instancia. 
	
	Que Spring va a tener que guardar en su contexto de Spring. 
	
	
	Código de los archivos: 
	
	Version.java: 
	
	```
	public class Version {
		
		private final int major; 
		private final int minor; 	
		private final int revision; 


		public Version(final int major, final int minor, final int revision) {
			
			this.major = major; 
			this.major = minor; 
			this.major = major; 
			
		}
		
		@Override
		public String toString() {
			
			return major + "." + minor "." + revision; 
		}
			
	}
	
	
	```
	
	
	AppConfig.java: 
	
	```
	@Configuration
	public class AppConfig {
		
		
		//Usando constructor de instancia
		//El método será un bean
		
		@Bean
		public Version version() {
			
			return new Version (1, 0, 0)
			
		}
		
	}
	
	```
	
	Con configuration definimos métodos 
	
	En la cual tenemos instancias
	
	Que Spring va a guardar. 
	
	
	@Bean le dice a Spring que el método devuelve 
	
	Una instancia que queremos que guarde en su contexto. 
	
	
	
	En el archivo UserService.java: 
	
		Queremos inyectar la clase Version
		
	```
	@Service
	public class UserService {
		
		private Version version; 
		
		public UsuarioServicio(Verion version) {
			
			this.version = version; 
		}
		
	}
	
	```
	
	
	
|| IoC

	Inversion de Control vs Inyección de Dependencias
	
	Es una pregunta tipica. 
	
	
	La inversión de control es delegar el funcionamiento 
	
	De la creación de los objetos al framework. 
	
	Crear, eliminar algún tipo de objet. 
	
	Spring tendra un contenedor para ellos 
	
	Se encargará de inyectar y administrar cualquier tipo de objeto que tenemos en nuestro contexto. 
	
	Administrará el ciclo de vida de los objetos o instancias de cada clase. 
	
	Un Bean son todos los objetos que administrador
	
	El framework Spring con la Inversion de Control.  
	
	Spring se encarga de inyectar las dependencias de nuestras clases. 

	Por el mismo, Sin tener que nosotros hacer nada
	
	
	Una clase puede tener una propiedad/atributo/var
	
	A otra clase como tipo y tambien en su constructor
	
	Le pasa el tipo (será el nombre de la otra clase)
	
	Y el parametro será la dependencia. 
	
	Spring inyectará esta parametro. 
	
	
	La otra clase está definida como dependencia en su constructor. 
	
	
	
	
	
	
|| Inyección de Dependencias

	Necesitamos que un diseño o arquitectura de sofware sea flexible. 
	
	Que un objeto o clase pueda comunicarse con otras. 
	
	Depender y usar métodos de otra clase. 
	
	Todo esto sin preocuparnos por la implementación interna de esos métodos. 
	
	Sin tener que cambiarlos o reescribir código, más de donde este. 

	
	Una clase puede tener en su constructor a otra

	Si tenemos dos clases como: 
	
		UserService
		
		UserRepository
		
	Podemos hacer que la clase UserService 
	
	Necesite algo de la clase UserRepository.

	
	Hay varias formas de inyectar dependencias. 

	La inyección de dependencia va a delegar 
	
	La creación de la clase a un factor externo. 
	
	
	Entonces en la clase que necesitemos dependencia. 
	
	Indicamos la dependencia exclusiva que usaremos. 
	
	Para tener que crear la clase. 
	
	Las dependencias deberían ser interfaces. 
	
	
	Pero si usamos un construtor de instancia 
	
	No será mantenible. 
	
	```
	public class UserService {
		
		private UserRepository userRepository = new UserRepository();
		
		
		public String gettingUser(){
			
			userRepository.getUser(); 
		}
		
	}	
	
	```
	
	Esto no es mantenible si debemos cambian las propiedades
	
	
	
	Por inyección de dependencia: 
	
	Vamos a crear una instancia de la clase
	
	UserService vamos a necesitar UserRepository
	
	Qeu implementa una interfaz, así la modificamos a nuestro gusto. 
	
	
	
	```
	public interface UserRepository {
		
		getUser(){
			
			//...
		}
		
		
	}
	
	```
	
	
	```
	public class UserService {
		
		//props
		private UserRepository userRepository;
		
		
		//construc
		public UserService(UserRepository userRepository) {
			
			this.userRepository = userRepository
			
		}
		
			
		
		public String gettingUser(){
			
			userRepository.getUser(); 
		}
		
		
	}
	
	```
	

	Clases que implementan la interfaz: 
	
	```
	
	
	```
	
	
	```
	
	
	```


	Clase Main que ejecuta las llamadas, objetos, etc. 
	
	Aquí es dónde usamos el constructor de intancia new. 
	
	
	
	```
	
	

	```

	De esta forma solo cambiamos 
	
	el valor de las propiedades en main 
	
	y no las propiedades. 
	
	Cambiamos la parte de new Tipo()
	
	
	Pero si una clase tiene muchas dependencias
	
	Debemos separar su funcionalidad en otras clases. 
	
	


|| Thymeleaf

	Con java podemos crear una web del lado del servidor. 
	
	Spring proporciona el módulo MVC (Model View Controller)
	
	Thymeleaf nos proporcionará una plantilla HTML para poder usar nuestras clases. 
	
	
	En el archivo de configuración pom.xml 
	
	En <dependency></dependency>
	
	Podemos pasar como artefacto: 
	
		spring-boot-starter-web
	
		spring-boot-starter-thymeleaf 
		
	
	Vamos a paquete resources 
	
	Contiene un directorio static
	
	En él podemos crear un index.html.
	
	Escribir un html normal 
	
	Ir a localhost:8080 y aparecerá. 
	
	
	El proposito es realizar peticiones de rutas. 
	
	Así administraremos las peticiones. 
	
	
	
	


|| Spring Security HTTPS


|| API Rest


|| GraphQL


