# Cookbook

	Tiene como objetivo reunir recetas para patrones de diseño comunes, elementos que puede necesitar implementar en sus sitios. 
	
	Estas recetas destacan las diferentes formas en que se pueden usar las especificaciones de diseño y las opciones que puede elegir como desarrollador.



# Media Objects	
	
	Se puede crear un cuadro de dos columnas con una imagen en un lado y un texto descriptivo en el otro, por ejemplo, una publicación de Facebook o un tweet.
		
	Es un patrón que vemos en toda la web.
	
	Un objeto multimedia con una imagen de perfil en el lado izquierdo y un texto  a la derecha que ocupa el 80 % del espacio.
	
	
	Requisitos: 
	
		El patrón de objeto multimedia necesita algunas o todas las siguientes características:	
		
			1. Apilado en dispositivos móviles, dos columnas en computadoras de escritorio.
		
			2. La imagen puede estar a la izquierda o a la derecha.
			
			3. La imagen puede ser pequeña o grande.
			
			4. Los objetos multimedia se pueden anidar.
			
			5. El objeto multimedia debe limpiar el contenido sin importar qué lado sea más alto.
		
		
		```css
		
		@media (min-width: 500px) {
		  .media {
			display: grid;
			grid-template-columns: fit-content(200px) 1fr;
			grid-template-rows:1fr auto;
			grid-template-areas:
			  "image content"
			  "image footer";
			grid-gap: 20px;
			margin-bottom: 4em;
		  }

		  .media-flip {
			grid-template-columns: 1fr fit-content(250px);
			grid-template-areas:
			  "content image"
			  "footer image";
		  }

		  .img {
			grid-area: image;
		  }

		  .content {
			grid-area: content;
		  }

		  .footer {
			grid-area: footer;
		  }

		}
		
		```
		
		
		```html
		
		<div class="media">

		  <div class="img">
			<img src="balloon-sq2.jpg" alt="Balloons">
		  </div>

		  <div class="content">
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac porttitor elit lobortis ac. Vivamus ultrices sodales tellus et aliquam. Pellentesque porta sit amet nulla vitae luctus. Praesent quis risus id dolor venenatis condimentum.</p>
		  </div>
		  <div class="footer">
			An optional footer goes here.
		  </div>
		</div>

		<div class="media">

		<div class="img">
		  <img src="sharp-account_box-24px.svg" width="80px" alt="Account">
		</div>
		<div class="content">
		  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac porttitor elit lobortis ac. Vivamus ultrices sodales tellus et aliquam. Pellentesque porta sit amet nulla vitae luctus. Praesent quis risus id dolor venenatis condimentum.</p>
		</div>
		<div class="footer"></div>
		</div>

		<div class="media media-flip">

		<div class="img">
			<img src="balloon-sq2.jpg" alt="Balloons">
		</div>

		<div class="content">
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac porttitor elit lobortis ac. Vivamus ultrices sodales tellus et aliquam. Pellentesque porta sit amet nulla vitae luctus. Praesent quis risus id dolor venenatis condimentum.</p>
		</div>
		<div class="footer">
			An optional footer goes here.
		</div>
		</div>

		<div class="media">

		<a class="img">
			<img src="balloon-sq2.jpg" alt="Balloons">
		</a>

		<div class="content">

			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac porttitor elit lobortis ac. Vivamus ultrices sodales tellus et aliquam. Pellentesque porta sit amet nulla vitae luctus. Praesent quis risus id dolor venenatis condimentum.</p>
		</div>

		<div class="footer"></div>

		<div class="media">

			<a class="img">
			<img src="balloon-sq2.jpg" alt="Balloons">
			</a>

			<div class="content">

				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula vitae ligula sit amet maximus.</p>
			</div>

			<div class="footer"></div>

		</div>

		</div>
		
		```
		
	
	Herramienta a usar: 
	
		Por ej, usar el diseño de cuadrícula para el objeto multimedia, ya que me permite controlar el diseño en dos dimensiones cuando lo necesito. 
		
		Esto significa que cuando tenemos un pie de página, con contenido breve arriba, el pie de página se puede empujar hacia abajo hasta la parte inferior del objeto multimedia.
		
		
		Otra razón para usar el diseño de cuadrícula es para poder usar fit-content para el tamaño de la pista de la imagen. 
		
		Al usar fit-content con un tamaño máximo de 200 píxeles, cuando tenemos una imagen pequeña como el ícono, la pista solo se vuelve tan grande como el tamaño de esa imagen (el tamaño de contenido máximo). 
		
		Si la imagen es más grande, la pista deja de crecer en 200 píxeles y, como la imagen tiene un ancho máximo del 100 %, se reduce para que siga encajando dentro de la columna.

		
		Al usar grid-template-areas para lograr el diseño, puedo ver el patrón en el CSS. 
		
		Defino mi cuadrícula una vez que tenemos un ancho máximo de 500 píxeles, por lo que en dispositivos más pequeños el objeto multimedia se apila.
		
		
		Una opción para el patrón es voltearlo para cambiar la imagen al otro lado; esto se hace agregando la clase media-flip, que define una plantilla de cuadrícula volteada que hace que el diseño se refleje.
		
		Cuando anidamos un objeto multimedia dentro de otro, debemos colocarlo en la segunda pista (grid track) en el diseño regular y la primera pista cuando se voltea.
		
		
		
# Columns

	Elegir entre Flex o Grid. 
	
	Se puede usar Diseño de varias Columnas, Flex o Grid, dependiendo de lo que se quiera lograr. 
	
	
	Patrones de diseño a lograr: 
	
		1. Un hilo continuo de contenido dividido en columnas estilo periódico (Multi column layout).
		
		2. Una sola fila de elementos dispuestos como columnas, con todas las alturas iguales (Flex).
		
		3. Varias filas de columnas alineadas por fila y columna (Grid).

	
	Multi Column: 
	
		El texto permanecerá como un hilo continuo que llenará cada columna por turno.
	
		Todas las columnas deben tener el mismo tamaño y no puede apuntar a una columna individual ni al contenido de una columna individual.

		Puede controlar los espacios entre columnas con las propiedades column-gap o gap y agregar una regla entre columnas usando column-rule.

		```
		.container {
		  column-width: 10em;
		  column-rule: 1px solid rgb(75 70 74);
		}
		
		```
		
		Usamos la propiedad column-width para establecer un ancho mínimo que deben tener las columnas antes de que el navegador agregue una columna adicional.
		
		La propiedad abreviada columns se puede usar para establecer las propiedades column-width y column-count, cualquiera de las cuales puede definir la cantidad máxima de columnas permitidas
		
		
		Usamos multi column cuando: 
			
			Desea que su texto se muestre en columnas similares a las de un periódico.

			Tiene un conjunto de elementos pequeños que desea dividir en columnas.

			No necesita apuntar a cuadros de columnas individuales para aplicarles estilo.
			

	Flexbox: 
	
		Se puede utilizar para dividir el contenido en columnas configurando display: flex.
		
		Convertir un elemento padre en un contenedor flexible
		
		Todos los elementos secundarios (elementos secundarios, pseudoelementos y nodos de texto) se convierten en elementos flexibles a lo largo de una sola línea.
		
		
		Al configurar la misma propiedad abreviada de flex con un solo valor numérico
		
		Se distribuye todo el espacio disponible de manera uniforme, lo que generalmente hace que todos los elementos flexibles tengan el mismo tamaño siempre que ninguno tenga contenido que no se ajuste y obligue al elemento a ser más grande.
		
		Se pueden usar los márgenes o la propiedad gap para crear espacios entre elementos.
		
		
		Para crear un diseño con elementos flexibles que se ajusten a nuevas filas, configure la propiedad flex-wrap en el contenedor para que se ajuste.
		
		Tenga en cuenta que cada línea flexible distribuye espacio solo para esa línea.
		
		Los elementos de una línea no necesariamente se alinearán con los elementos de otras líneas, como verá en el ejemplo siguiente.
		
		Es por eso que flexbox se describe como unidimensional. 
		
		Está diseñado para controlar el diseño como una fila o una columna, pero no ambas al mismo tiempo.
		
		```
		.container {
		  display: flex;
		  flex-wrap: wrap;
		}
		
		```
		
		
		Se usa flex: 	
				
			Para filas o columnas individuales de elementos.
			
			Cuando desee realizar la alineación en el eje transversal después de disponer los elementos.
			
			Cuando desee que los elementos envueltos compartan el espacio solo a lo largo de su línea y no se alineen con elementos de otras líneas.
			
			
	Grid: 
	
		Si desea una cuadrícula bidimensional en la que los elementos se alineen en filas y columnas
		
		Funciona en los elementos secundarios directos del contenedor de cuadrícula.
		
		```
		.container {
		  display: grid;
		  grid-template-columns: 1fr 1fr;
		  grid-gap: 20px;
		}
		
		```
		
		
		Usar grid: 
			
			Para varias filas o columnas de elementos.
			
			Cuando desea poder alinear los elementos en los ejes de bloque y en línea.
			
			Cuando desea que los elementos se alineen en filas y columnas.



# Center Element

	En horizontal y Vertical 
	
	Centrar un cuadro dentro de otro usando flexbox y grid.
	
	```
	.container {
	  height: 200px;
	  display: flex;
	  align-items: center;
	  justify-content: center;
	}

	.item {
	  width: 10em;
	}
	
	```
	
	
	Flex: 
	
		Primero convierta el cuadro que lo contiene en un contenedor flexible 
		
		Luego configure align-items en center para el centrado vertical (en el eje del bloque) y justify-content en center para el centrado horizontal (en el eje en línea). 

		```
		div {
		  border: solid 3px;
		  padding: 1em;
		  max-width: 75%;
		}
		.container {
		  display: flex;
		  align-items: center;
		  justify-content: center;
		  height: 8em;
		}
		
		
		<div class="container">
		  <div class="item">I am centered!</div>
		</div>
		
		```
		
		Establecemos una altura para el contenedor para demostrar que el elemento interior está realmente centrado verticalmente dentro del contenedor.

		En lugar de aplicar align-items: center; en el contenedor, también puedes centrar verticalmente el elemento interno configurando align-self para centrarlo en el elemento interno mismo.
		
	
	Grid: 

		Primero convertimos el contenedor en Grid. 
		
		Luego establecer su propiedad place-items en center para centrar sus elementos en los ejes de bloque y en línea

		```
		div {
		  border: solid 3px;
		  padding: 1em;
		  max-width: 75%;
		}
		
		.container {
		  display: grid;
		  place-items: center;
		  height: 8em;
		}
			
		```
		
		Puede lograr el mismo centrado configurando place-content: center; en el contenedor o aplicando place-self: center o margin: auto; en el elemento interno mismo.



# Sticky footers

	Un pie de página fijo se coloca en la parte inferior del contenedor o ventana gráfica cuando el contenido es más corto.

	se "pega" a la parte inferior de la ventana gráfica en los casos en que el contenido es más corto que la altura de la ventana gráfica. 


	El patrón debe cumplir requisitos: 
	
		El pie de página se adhiere a la parte inferior de la ventana gráfica cuando el contenido es breve.
		
		Si el contenido de la página se extiende más allá de la parte inferior de la ventana gráfica, el pie de página se ubica debajo del contenido de manera normal.
	
	
	En el ejemplo usamos un contenedor configurado con min-height: 100 %. 
	
	También puedes lograr esto para una página completa configurando un min-height de 100vh en el <body>
	
	Luego usándolo como tu contenedor de cuadrícula
	
	
	Elecciones: 
	
		Logramos el pie de página fijo utilizando el diseño de cuadrícula CSS.
		
		El .wrapper tiene una altura mínima del 100 %, lo que significa que es tan alto como el contenedor en el que se encuentra. 
		
		Luego, creamos un diseño de cuadrícula de una sola columna con tres filas, una fila para cada parte de nuestro diseño.
		
		
		La colocación automática de la cuadrícula colocará nuestros elementos en el orden de origen
		
		El encabezado va a la primera pista de tamaño automático, el contenido principal a la pista 1fr y el pie de página a la pista final de tamaño automático
		
		La pista 1fr ocupará todo el espacio disponible y, por lo tanto, crecerá para llenar el espacio vacío.
		
	
	Método Alternativo: 
		
		Usar flexbox para crear un pie de página fijo
		
		Configuramos flex-direction en column.	
		
		Luego configuramos nuestro contenido principal en flex-grow: 1 
		
		Los otros dos elementos en flex-shrink: 0. 
		
		Esto evita que se reduzcan cuando el contenido llena el área principal
		
		```
		html, body {
		  box-sizing: border-box;
		  height: 100%;
		  padding: 0;
		  margin: 0;
		}
		.wrapper {
		  box-sizing: border-box;
		  min-height: 100%;
		  display: flex;
		  flex-direction: column;
		}
		.page-header, .page-footer {
		  flex-grow: 0;
		  flex-shrink: 0;
		}
		.page-body {
		  flex-grow: 1;
		}
		
		
		<div class="wrapper">
		  <header class="page-header">This is the header</header>
		  <main class="page-body">
			<p>Main page content here, add more if you want to see the footer push down.</p>
		  </main>
		  <footer class="page-footer">Sticky footer</footer>
		</div>
				
		
		```

		
		
# Split Navigation

	Patrón de navegación en el que algunos enlaces están separados visualmente de los demás
	
	Podemos usar flexbox para lograr esto, sin necesidad de convertir los dos conjuntos de elementos en dos contenedores flexibles separados

	```
	.main-nav {
	  display: flex;
	}

	.push {
	  margin-left: auto;
	}
	
	
	<nav>
	  <ul class="main-nav">
		<li><a href="">About</a></li>
		<li><a href="">Products</a></li>
		<li><a href="">Our Team</a></li>
		<li class="push"><a href="">Contact</a></li>
	  </ul>
	</nav>
		
	```

	
	Elecciones: 
	
		Este patrón combina márgenes automáticos con flexbox para dividir los elementos.
		
		Un margen automático absorbe todo el espacio disponible en la dirección en la que se aplica
		
		Así es como funciona el centrado de un bloque con márgenes automáticos: tienes un margen a cada lado del bloque que intenta ocupar todo el espacio, empujando así el bloque hacia el medio.
		
		En este caso, el margen automático izquierdo ocupa todo el espacio disponible y empuja el elemento hacia la derecha. Puedes aplicar la clase push a cualquier elemento de la lista.



# Breadcrumb navigation 	

	Lista de enlaces que permita al visitante volver a navegar hacia arriba en la jerarquía de páginas
	
	Ayuda al usuario a comprender su ubicación en el sitio web al proporcionar una ruta de navegación que lo lleva de regreso a la página de inicio. 
	
	Los elementos generalmente se muestran en línea, con un separador entre cada elemento, lo que indica la jerarquía entre las páginas individuale
	
	
	Enlaces mostrados en línea con separadores:	
	
	```
	.breadcrumb {
	  padding: 0 .5rem;
	}

	.breadcrumb ul {
	  display: flex;
	  flex-wrap: wrap;
	  list-style: none;
	  margin: 0;
	  padding: 0;
	}

	.breadcrumb li:not(:last-child)::after {
	  display: inline-block;
	  margin: 0 .25rem;
	  content: "→";
	}
	
	```


	```
	<nav aria-label="Breadcrumb" class="breadcrumb">
	  <ul>
		<li><a href="#">Home</a></li>
		<li><a href="#">Category</a></li>
		<li><a href="#">Sub Category</a></li>
		<li><a href="#">Type</a></li>
		<li><span aria-current="page">Product</span></li>
	  </ul>
	</nav>
			
	```
	
	El ejemplo anterior utiliza un selector complejo para insertar contenido antes de cada li excepto el último.
	
	Esto también se puede lograr utilizando un selector complejo que apunte a todos los elementos li excepto el primero:
	
	```
	.breadcrumb li:not(:first-child)::before {
	content: "→";
	}
			
	```
	
	Los separadores se agregan mediante contenido generado por CSS. Puede cambiarlos por cualquier separador que desee.

	
	Accesibilidad: 
		
		Utilizamos los atributos aria-label y aria-current para ayudar a los usuarios de tecnología de asistencia a comprender qué es esta navegación y dónde se encuentra la página actual en la estructura.
		
		Tenga en cuenta que las flechas separadoras → agregadas a través de la propiedad CSS content en el ejemplo anterior están expuestas a tecnologías de asistencia (AT), incluidos lectores de pantalla y pantallas braille
		
		Para una solución más silenciosa, use un <img> decorativo en su HTML con un atributo alt vacío.
		
		Una función ARIA establecida en none o presentation también evitará que la imagen se exponga a AT.

		Alternativamente, silencie el contenido generado por CSS al incluir una cadena vacía como texto alternativo, precedida por una barra (/); por ejemplo, content: url("arrow.png") / "";.
		
		Si incluye separadores generados que se expondrán a AT, opte por crear el contenido generado utilizando el selector de pseudoelemento ::after en lugar de ::before, de modo que el contenido del separador se anuncie después del contenido HTML en lugar de antes.
		
		
		
# Count
	
	Grupo de listas con insignias.

	Una lista de elementos con una insignia para mostrar un recuento.
	
	
	Los elementos de la lista deben mostrarse con las insignias. 
	
	La insignia debe estar alineada a la derecha y centrada verticalmente.

	La insignia debe estar centrada verticalmente, independientemente de si hay una sola línea de contenido o varias líneas de texto.
	
	```
	.list-group li {
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
	}
	
	```
	
	```
	<ul class="list-group">
	  <li>Item One
		<span class="badge">2</span>
	  </li>
	  <li>Item Two
		<span class="badge">10</span>
	  </li>
	  <li>Item Three
		<span class="badge">9</span>
	  </li>
	  <li>Item Four
		<span class="badge">0</span>
	  </li>
	</ul>
	
	```
	
	
	Flexbox simplifica este patrón en particular y también facilita la realización de cambios en el diseño
	
	Para garantizar que el texto y la insignia se alineen correctamente, utilizo la propiedad justify-content con un valor de space-between.
	
	Esto coloca cualquier espacio adicional entre los elementos.
			
	Para alinear el contenido horizontalmente, utilizo la propiedad align-items para alinear el texto y la insignia en el eje transversal. 
	
	Si desea que la insignia se alinee en la parte superior del contenido, cambie esto a align-items: flex-start



# Pagination

	Enlaces a páginas de contenido (como resultados de búsqueda).

	Donde el usuario puede moverse entre páginas de contenido
	
	
	El patrón de paginación generalmente muestra los elementos en una fila.
	
	Para garantizar que la paginación sea comprensible para las personas que usan un lector de pantalla
	
	Marcamos los elementos como una lista dentro de un elemento <nav> y luego usamos CSS para mostrar el diseño visualmente como una fila.

	Por lo general, el componente de paginación se centrará horizontalmente debajo del contenido.
		
	```
	nav {
	  display: flex;
	  justify-content: center;
	}

	.pagination {
	  list-style: none;
	  margin: 0;
	  padding: 0;
	  display: flex;
	}

	.pagination li {
	  margin: 0 1px;
	}
	
	```
	
	
	```
	<nav aria-label="pagination">
	  <ul class="pagination">
		<li><a href=""><span aria-hidden="true">«</span><span class="visuallyhidden">previous set of pages</span></a></li>
		<li><a href=""><span class="visuallyhidden">page </span>1</a></li>
		<li><a href="" aria-current="page"><span class="visuallyhidden">page </span>2</a></li>
		<li><a href=""><span class="visuallyhidden">page </span>3</a></li>
		<li><a href=""><span class="visuallyhidden">page </span>4</a></li>
		<li><a href=""><span class="visuallyhidden">next set of pages</span><span aria-hidden="true">»</span></a></li>
	  </ul>
	</nav>
	
	```
	
	
	Este patrón se presenta utilizando flexbox: un contenedor flexible anidado dentro de otro.
	
	El elemento <nav> se designa como contenedor flexible para que podamos centrar la lista en su interior utilizando la propiedad justify-content
	
	La lista en sí también se convierte en un contenedor flexible para disponer los elementos en una fila.
	
	Para espaciar los elementos, podemos utilizar un margen en los elementos flexibles o agregar un espacio en el contenedor flexible
	
	```
	.pagination {
	  list-style: none;
	  margin: 0;
	  padding: 0;
	  display: flex;
	  gap: 2px;
	}

	```
	
	
	Accesibilidad: 
	
		Una persona que use un lector de pantalla comprenda qué hace esta navegación y a dónde irá cuando haga clic en un enlace.
		
		Para ayudar con esto, hemos agregado aria-label="pagination" en el elemento <nav>.
		
		También hemos agregado contenido adicional que un lector de pantalla podría leer, pero que está oculto visualmente, y hemos establecido el atributo aria-hidden en las flechas de paginación.
		
		
		
# Cards

	Un componente de tarjeta, que se muestra en una cuadrícula de tarjetas.
	
	Este patrón es una lista de componentes de "tarjeta" con pies de página opcionales.
	
	Una tarjeta contiene un título, una imagen, una descripción u otro contenido y una atribución o pie de página.
	
	Las tarjetas se muestran generalmente dentro de un grupo o una colección.
	
	
	Grupo de tarjetas, en el que cada componente de la tarjeta contenga un encabezado, una imagen, contenido y, opcionalmente, un pie de página.
	
	Todas las tarjetas del grupo deben tener la misma altura.
	
	El pie de página opcional debe adherirse a la parte inferior de la tarjeta.

	Las tarjetas del grupo deben alinearse en dos dimensiones: tanto vertical como horizontalmente
	
	
	Cada tarjeta se presenta con un diseño de cuadrícula CSS a pesar de que el diseño es unidimensional. 
	
	Esto permite el uso de un tamaño de contenido para las pistas de cuadrícula.

	Para configurar una cuadrícula de una sola columna, podemos usar lo siguiente
	
	```
	.card {
	  display: grid;
	  grid-template-rows: max-content 200px 1fr;
	
	```
	
	Cada tarjeta contiene un <header>, <img> y <div>, en ese orden, y algunas también contienen un <footer>.
	
	La fila de encabezado, o pista, se establece en max-content, lo que evita que se estire.
	
	La pista de imagen se establece en 200 píxeles de alto.
	
	La tercera pista, donde se encuentra el contenido, se establece en 1fr.
	
	Esto significa que llenará cualquier espacio adicional.
	
	
	Cualquier hijo más allá de los tres con tamaños definidos explícitamente crea filas en la cuadrícula implícita, que se ajusta al contenido agregado. 
	
	Estos tienen un tamaño automático de forma predeterminada.
	
	Si una tarjeta contiene un pie de página, este tiene un tamaño automático.
	
	El pie de página, cuando está presente, se adhiere a la parte inferior de la cuadrícula
	
	El pie de página tiene un tamaño automático para adaptarse a su contenido; el contenido <div> luego se estira para ocupar cualquier espacio adicional.
	
	```
	.cards {
	  display: grid;
	  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
	  gap: 20px;
	}
	
	```
	
	La propiedad grid-template-columns define el ancho de las columnas de la cuadrícula. 
	
	En este caso, configuramos la cuadrícula para que se rellene automáticamente, con columnas repetidas que tienen un tamaño mínimo de 230 px, pero que pueden crecer para llenar el espacio disponible.
	
	La propiedad gap establece un espacio de 20 px entre filas y columnas adyacentes.
	
	
	Los distintos elementos de las tarjetas independientes no se alinean entre sí, ya que cada tarjeta es una cuadrícula independiente.
	
	La alineación de los componentes de cada tarjeta con los mismos componentes de las tarjetas adyacentes se puede realizar con subgrid
	
	
	Alternativas: 
	
		Flexbox también se puede utilizar para diseñar cada tarjeta.
		
		Con flexbox, las dimensiones de las filas de cada tarjeta se establecen con la propiedad flex en cada fila, en lugar de en el contenedor de la tarjeta
	
		las dimensiones de los elementos flex se definen en los elementos secundarios en lugar de en el principal.
		
		Si elige utilizar grid o flexbox depende de sus preferencias, ya sea que prefiera controlar las pistas desde el contenedor o prefiera agregar reglas a los elementos.
	
		Elegimos grid para las tarjetas porque, en general, desea que las tarjetas estén alineadas tanto vertical como horizontalmente.
		
		Además, alinear los componentes dentro de cada tarjeta con los componentes de las tarjetas adyacentes se puede hacer con subgrid. 
		
		Flex no tiene un equivalente a subgrid sin problemas.
		
		
	Accesibilidad: 
		
		Dependiendo del contenido de su tarjeta, puede haber cosas que podría o debería hacer para mejorar la accesibilidad. 
		
		Consulte Componentes inclusivos: Tarjeta de Heydon Pickering para obtener una explicación muy detallada de estos problemas.
		
		
	
# Grid Wrapper

	Alinear el contenido de la cuadrícula dentro de un envoltorio central
	
	Al mismo tiempo que permite que los elementos se dividan
	
	Y se alineen con el borde del elemento o la página que los contiene.
	
	
	Los elementos colocados en la cuadrícula deben poder alinearse con un envoltorio de ancho máximo centrado horizontalmente o con los bordes externos de la cuadrícula, o con ambos
	
	
	```
	.grid {
	  display: grid;
	  grid-template-columns: minmax(20px, 1fr) repeat(6, minmax(0, 60px)) minmax(20px, 1fr);
	  grid-gap: 10px;
	}

	.full-width {
	  grid-column: 1 / -1;
	}

	.wrapper {
	  grid-column: 2 / -2;
	}

	.left-edge {
	  grid-column: 1 / -2;
	}

	.right-wrapper {
	  grid-column: 4 / -2;
	}
		
	```
	
	```
	<div class="grid">

	  <div class="wrapper">
		<p>This item aligns to a central “wrapper” – columns that have a maximum width.</p>
	  </div>

	  <div class="full-width">
		<p>This item aligns to the edge of the grid container.</p>
	  </div>
	  
	</div>
	
	```
	
	Utiliza la función CSS grid minmax() para definir los tamaños de las pistas de la cuadrícula en la propiedad grid-template-columns.
	
	Para las columnas centrales con un ancho máximo, podemos establecer un valor mínimo de 0 o mayor y un valor máximo que especifica el tamaño máximo al que crecerán las pistas de la columna.
	
	El uso de unidades <length> relativas o absolutas (píxeles, ems, rems) creará un tamaño máximo fijo para el contenedor central, mientras que el uso de valores <percentage> o unidades de ventana gráfica hará que el contenedor crezca o se encoja en respuesta a su contexto.
	
	
	Las dos columnas externas tienen un tamaño máximo de 1fr, lo que significa que cada una se expandirá para llenar el espacio restante disponible en el contenedor de la cuadrícula


	Alternativas o Fallbacks: 
	
		Para centrar la cuadrícula horizontalmente en la página, puede establecer un ancho máximo junto con márgenes automáticos izquierdo y derecho:
		
		```
		.grid {
		  max-width: 96vw; /* Limits the width to 96% of the width of the viewport */
		  margin: 0 auto; /* horizontally centers the container */
		}

		```
		
	
	Accesibilidad: 
	
		Aunque la cuadrícula CSS permite ubicar elementos en cualquier lugar (dentro de lo razonable), es importante asegurarse de que el marcado subyacente siga un orden lógico
